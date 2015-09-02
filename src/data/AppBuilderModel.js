const AppBuilderData = require('./AppBuilderData.js');

module.exports = function(pageId, regionIds) {

  /**
   * Max depth of nesting that we support
   *
   * This allows at most two components with nested regions,
   * and then only non-nested components can go inside that
   */
  var MAX_DEPTH = 6;

  /**
   * This JSON will represent the components on the page
   *
   * The structure of each node will be as follows:
   * {
   *  id: 'some-unique-id',
   *  props: {
   *    //map of the property values..
   *  },
   *  children: [
   *    //ordered array of the components inside this one
   *  ]
   * }
   */
  //initialize the model with a unique id and the given props
  var _model = _createNode(
    pageId,
    AppBuilderData.getComponentDef(AppBuilderData.CMP_TYPE.FLEXIPAGE).initProps,
    AppBuilderData.CMP_TYPE.FLEXIPAGE
  );
  //initialize empty regions on the page
  //with the given IDs
  for (var i in regionIds) {
    var regionId = regionIds[i];
    var regionNode = _createRegionNode(regionId);

    //add the region node to the page
    _addNode(regionNode, _getPageId());
  }

  var changeHandlers = [];
  function onModelChange(callback) {
    changeHandlers.push(callback);
  }

  function _triggerModelChange() {
    for (var i in changeHandlers) {
      changeHandlers[i]();
    }
  }

  function _getPageId() {
    return _model.id;
  }

  /**
   * Finds the component with the given id, starting
   * at the given node
   *
   * @param id the id of the node to find
   * @param node the node to start the search
   *
   * @return
   * {
   *  node: the node itself
   *  parent: the node containing the one requested
   *  depth: the number of levels deep the node is from the given root node
   *          the root node itself is depth 0, a node iside it is depth 1, etc.
   * }
   * or an empty object if nothing was found
   */
  function _find(id, node) {
    node = node || _model;

    if (node.id === id) {
      return {
        node : node,
        parent: null,
        depth: 0
      };
    }

    for (var i = 0; i < node.children.length; i++) {
      if (node.children[i].id === id) {
        return {
          node : node.children[i],
          parent : node,
          depth: 1
        };
      }

      var findResult = _find(id, node.children[i]);

      if (findResult.node) {
        findResult.depth += 1;
        return findResult;
      }
    }

    return {};
  };

  /**
   * Calculates the depth of the given node
   */
  function _getDepth(node) {
    if (!node) {
      return 0; //a non-node is depth 0
    }

    var maxDepth = 0;
    for (var i = 0; i < node.children.length; i++) {
      var childDepth = _getDepth(node.children[i]);
      if (childDepth > maxDepth) {
        maxDepth = childDepth;
      }
    }
    //this will return 1 for a node with no children, which is good
    return maxDepth + 1;
  }

  /** Generates a unique ID that's not already in use */
  var idsGenerated = 0;
  function _generateUniqueId(postFix) {
    idsGenerated++;

    var newId = 'id' + idsGenerated + (postFix && '-' + postFix);
    if (!_find(newId).node) {
      // No id conflict - unique
      return newId;
    }

    // The random id generated wasn't unique - regenerate!
    return _generateUniqueId(postFix);
  };

  /** Create a new node object with the given ID and properties */
  function _createNode(id, props, cmpType) {
    return {
      id: id,
      props: props || {},
      cmpType: cmpType,
      children: []
    }
  }

  function _createRegionNode(id) {
    return _createNode(id || _generateUniqueId('region'));
  }

  /**
   * Create a new node for the given component type.
   * This will initialize the properties
   */
  function _createComponentNode(cmpType) {
    var cmpDef = AppBuilderData.getComponentDef(cmpType);

    var id = _generateUniqueId('component-' + cmpType);
    var initProps = AppBuilderData.getComponentDef(cmpType).initProps;

    var node = _createNode(id, initProps, cmpType);
    if (cmpDef.isNested) {
      var numRegions = cmpDef.getInitNumRegions(initProps);
      for (var i = 0; i < numRegions; i++) {
        var regionNode = _createRegionNode();
        node.children.push(regionNode);
      }
    }
    return node;
  }

  /**
   * Given a pre-constructed node object, add it
   * under the given parent, and optionally before a
   * particular component
   *
   * @param node the node object to insert
   * @param parentId the parent under which to add
   * @param beforeId the ID of a component before which
   *        we will add the new component (optional)
   */
  function _addNode(node, parentId, beforeId) {
    //check if the ID collides. This may happen for nodes that
    //we hardcode the ID's
    if (node.id && _find(node.id).node) {
      throw 'Duplicate ID found (' + node.id + ')!. ' +
            'If this is a hardcoded ID, use another one';
    }

    //find the parent
    var parentFindResult = _find(parentId);
    var parent = parentFindResult.node;
    if (!parent) {
      throw 'No parent found with ID: ' + parentId
    }

    //This is where we check the amount of nesting
    var newNodeDepth = _getDepth(node);
    if (parentFindResult.depth + newNodeDepth > MAX_DEPTH) {
      /*
        TODO comment this back in when needed.

        TODO but first, fix this bug:
        When moving a component, we do a delete and add. If the
        add fails because of this, then we've deleted the component!
        And that is no good
       */
      //alert('This operation will exceed the maximum nesting allowed on a page.');
      ////don't continue adding the element
      //throw 'Maximum depth exceeded';
    }

    //find the component before which we insert the new one
    var before = _find(beforeId, parent).node;
    var beforeIndex = parent.children.indexOf(before);
    if (beforeIndex < 0) {
      //default to the end of the region
      beforeIndex = parent.children.length;
    }

    parent.children.splice(beforeIndex, 0, node);
  }

  function getComponent(id) {
    return _find(id).node;
  }

  function getPage() {
    return getComponent(_getPageId());
  }

  /**
   * Adds a new component of the given type.
   * This method handles setting the initial values
   *
   * @param cmpType the type of component to add
   * @param parentId the parent under which to add
   * @param beforeId the ID of a component before which
   *        we will add the new component (optional)
   */
  function addNewComponent(cmpType, parentId, beforeId) {
    var newCmp = _createComponentNode(cmpType);
    _addNode(newCmp, parentId, beforeId);
    _triggerModelChange();
    return newCmp.id;
  }

  function _deleteComponent(id) {
    var findResult = _find(id);
    var component = findResult.node;
    var parent = findResult.parent;
    if (!parent) {
      throw 'Could not find parent for component: ' + id;
    }

    var index = parent.children.indexOf(component);
    if (index < 0) {
      throw 'Could not locate component ' + id + ' inside its parent';
    }

    //remove the component and return it
    return parent.children.splice(index, 1)[0];
  }

  function deleteComponent(id) {
    //don't return any value
    _deleteComponent(id);
    _triggerModelChange();
  }

  function moveComponent(id, parentId, beforeId) {
    //moving is a delete+add
    var deletedNode = _deleteComponent(id);
    _addNode(deletedNode, parentId, beforeId);
    _triggerModelChange();
  }

  function updateComponent(id, props) {
    _find(id).node.props = props;
    _triggerModelChange();
  }

  /*
    The public API of this object
   */
  this.getPage = getPage;
  this.getComponent = getComponent;
  this.addNewComponent = addNewComponent;
  this.deleteComponent = deleteComponent;
  this.moveComponent = moveComponent;
  this.updateComponent = updateComponent;
  this.onModelChange = onModelChange;

};
