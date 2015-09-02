'use strict';
import React from 'react';

import DropTarget from './DropTarget';
import Droppable from '../../Util/Droppable';

const AppBuilderData = require('../../../data/AppBuilderData.js');

export default class Region extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDraggedOver: false,
      /*
        IMPORTANT: use undefined when there IS no visible drop target,
                  and null when the visible drop target is the last one
       */
      beforeComponentId: undefined
    };
  }

  distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }

  hideAllDropTargets() {
    var domNode = React.findDOMNode(this);
    var dropTargets = [].slice.call(
        domNode.querySelectorAll('.dropTarget')
    );
    for (var i=0; i < dropTargets.length; i++) {
      dropTargets[i].dataset['droptargetHidden'] = true;
    }
  }

  calculateBeforeComponentId(mouseX, mouseY) {
    var domNode = React.findDOMNode(this);
    var dropTargets = [].slice.call(
      domNode.querySelectorAll('.dropTarget')
    );

    //calculate the distances to all drop targets, and also hide them
    var self = this;
    var distances = dropTargets.map(function(target) {
      target.dataset['droptargetHidden'] = true;
      var bounds = target.getBoundingClientRect();
      var midX = (bounds.left + bounds.right) / 2;
      var midY = (bounds.top + bounds.bottom) / 2;
      return self.distance(mouseX, mouseY, midX, midY);
    });

    var indexOfMin = -1;
    var min;
    for (var i=0; i < distances.length; i++) {
      if (indexOfMin < 0 || (distances[i] < min)) {
        indexOfMin = i;
        min = distances[i];
      }
    }

    if (indexOfMin < 0) {
      return null;
    } else {
      //show the nearest drop target, and also return the component id
      var nearestTarget = dropTargets[indexOfMin];
      nearestTarget.dataset['droptargetHidden'] = false;
      console.log('nearest beforeComponentId: ' + nearestTarget.dataset['droptargetBeforecomponentId']);
      return nearestTarget.dataset['droptargetBeforecomponentId'];
    }
  }

  dragOver(evt) {
    this.setState({
      isDraggedOver: true,
      beforeComponentId: this.calculateBeforeComponentId(
        evt.pageX, evt.pageY
      )
    });
    evt.stopPropagation();
  }

  dragLeave(evt) {
    this.setState({
      isDraggedOver: false,
      beforeComponentId: undefined
    });

    this.hideAllDropTargets();

    if (evt) {
      evt.stopPropagation();
    }
  }

  drop(evt, data) {
    var beforeComponentId = this.state.beforeComponentId;

    var cmpId = data.id;
    if (cmpId) {
      //this is an existing component being moved
      this.props.pageModel.moveComponent(
        data.id, this.props.regionId, beforeComponentId
      );
    } else {
      //we need to create a new component here
      //convert to the actual CMP_TYPE instead of string
      var cmpType = AppBuilderData.CMP_TYPE[data.cmpType];
      if (!cmpType) {
        throw 'Unexpected error: cmpType is undefined';
      }

      //it is a new component from the palette
      cmpId = this.props.pageModel.addNewComponent(
        cmpType, this.props.regionId, beforeComponentId
      );
    }

    //simulate that the drag ended
    this.dragLeave();

    //select the newly dropped component
    this.props.selectComponent(cmpId);

    //don't let parent regions also add this component
    evt.stopPropagation();
  }

  renderComponent(component) {
    var cmpType = component.cmpType;
    var cmpDef = AppBuilderData.getComponentDef(cmpType);

    return React.createElement(cmpDef.reactCmp, {
      key: 'component-' + component.id,
      component: component,
      selectComponent: this.props.selectComponent,
      selectedComponent: this.props.selectedComponent,
      pageModel: this.props.pageModel
    });
  }

  renderDropTarget(beforeComponentId, isOnlyTarget) {
    return (
      <DropTarget key={'dropTarget-' + beforeComponentId}
                  beforeComponentId={beforeComponentId}
                  isOnlyTarget={isOnlyTarget}/>
    );
  }

  render() {
    var isDraggedOver = this.state.isDraggedOver;

    var regionNode = this.props.pageModel.getComponent(
      this.props.regionId
    );

    var componentAndDropTargets = [];
    var isRegionEmpty = (regionNode.children.length === 0);
    for (var i in regionNode.children) {
      var child = regionNode.children[i];

      //each component has a drop target before it
      componentAndDropTargets.push(this.renderDropTarget(child.id));
      componentAndDropTargets.push(this.renderComponent(child));
    }
    //at the end of the region, there is a drop target
    componentAndDropTargets.push(this.renderDropTarget(null, isRegionEmpty));

    //The region's CSS classes
    var outerClasses = 'hmin-medium bad';
    if (isDraggedOver) {
      outerClasses += ' bg-region-dragged';
    }
    if (this.props.extraCss) {
      outerClasses += ' ' + this.props.extraCss;
    }

    //TODO the padding around the inner div doesn't count as a droppable
    //area. Make it so that things can be droppd there
    return (
      <div id={this.props.regionId} className={outerClasses}
          onDragOver={this.dragOver.bind(this)}
          onDragLeave={this.dragLeave.bind(this)}>
        <Droppable onDrop={this.drop.bind(this)}>
          <div className="pts pbs">
            {componentAndDropTargets}
          </div>
        </Droppable>
      </div>
    );
  }
}

Region.propTypes = {
  regionId: React.PropTypes.string.isRequired,
  pageModel: React.PropTypes.object.isRequired, //TODO check that it's actually instaceof AppBuilderModel
  selectComponent: React.PropTypes.func.isRequired,
  selectedComponent: React.PropTypes.string.isRequired,
  extraCss: React.PropTypes.string
};