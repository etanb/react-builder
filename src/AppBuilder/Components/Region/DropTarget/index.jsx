'use strict';
import React from 'react';

export default class DropTarget extends React.Component {
  renderTextTarget() {
    return (
      <div>
        <span className="dropTargetText">Add Component(s) Here</span>
        {this.renderLineTarget()}
      </div>
    );
  }

  renderLineTarget() {
    return (
      <div className="pos-abs top-50per w-full dropTargetLine b-green"/>
    );
  }

  render() {
    var isOnlyTarget = this.props.isOnlyTarget;

    var classes = "pos-rel tac truncate dropTarget";
    if (isOnlyTarget) {
      classes += " h-onlyDropTarget";
    } else {
      classes += " h-dropTarget";
    }

    var targetInner = null;
    if (isOnlyTarget) {
      targetInner = this.renderTextTarget();
    } else {
      targetInner = this.renderLineTarget();
    }

    /*
      HACK ALERT!
        Drop targets have special data-* attributes that make it easy
        for the region to find them
     */
    return (
      <div data-droptarget-hidden="true"
          data-droptarget-beforecomponent-id={this.props.beforeComponentId}
          className={classes}>
        {targetInner}
      </div>
    );
  }
}

DropTarget.propTypes = {
  isOnlyTarget: React.PropTypes.bool,
  /** This is the ID of the component this drop target precedes.
   *  It will be used only by the Region component, not within this
   *  component itself **/
  beforeComponentId: React.PropTypes.string
};