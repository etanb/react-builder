'use strict';
import React from 'react';

const AppBuilderData = require('../../data/AppBuilderData.js');
import EmptyPropertyEditorBody from './EmptyPropertyEditorBody';

export default class PropertyEditor extends React.Component {
  render() {
    var component = this.props.pageModel.getComponent(
      this.props.selectedComponent
    );
    var cmpType = component.cmpType;
    var propEditorType = AppBuilderData.getComponentDef(cmpType).propEditor;
    var cmpLabel = AppBuilderData.getComponentDef(cmpType).label;

    var propEditor = null;
    if (propEditorType) {
      propEditor = React.createElement(propEditorType, {
        component: component,
        pageModel: this.props.pageModel
      });
    } else {
      propEditor = <EmptyPropertyEditorBody />
      console.warn('No property editor defined for component type: ' + cmpType);
    }

    var headerContent;
    if (cmpType === AppBuilderData.CMP_TYPE.FLEXIPAGE) {
      headerContent = 'Page';
    } else {
      headerContent = (
        <span>
          <a href="#" className="no-under" onClick={this.props.selectPage}>Page</a>
          {" > " + cmpLabel}
        </span>
      );
    }

    return (
      <aside className="w-prop-editor flex-nogrow pos-rel osy">
        <div className="phm pvs pos-abs abs-full">
          <h2 className="pts pbm mbm fw-norm bbs b-gray">
            {headerContent}
          </h2>
          {propEditor}
        </div>
      </aside>
    );
  }
}

PropertyEditor.propTypes = {
  pageModel: React.PropTypes.object.isRequired, //TODO check that it's actually instaceof AppBuilderModel
  selectedComponent: React.PropTypes.string,
  selectPage: React.PropTypes.func.isRequired
}
