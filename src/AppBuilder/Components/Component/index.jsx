'use strict';
import React from 'react';

import Draggable from '../../Util/Draggable';
import Asset from '../../Util/Asset';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      isDragging: false
    };
  }

  mouseOver(evt) {
    this.setState({
      isHovered: true
    });
    evt.stopPropagation();
  }

  mouseOut(evt) {
    this.setState({
      isHovered: false
    });
    evt.stopPropagation();
  }

  dragStart() {
    this.setState({
      isDragging: true
    });
  }

  dragEnd() {
    this.setState({
      isDragging: false
    });
  }

  click(evt) {
    // this.props.selectComponent(this.props.component.id);
    // evt.stopPropagation();
    alert('hi!');
  }

  stopDragBubbling(evt) {
    //check whether this component should stop parent regions
    //from getting the dragOver and dragEnter events
    if (this.props.stopDragBubbling) {
      evt.stopPropagation();
    }
  }

  delete(evt) {
    //select the page and THEN delete the component
    //we do this so that the property editor can display something
    this.props.selectComponent(this.props.pageModel.getPage().id);
    this.props.pageModel.deleteComponent(
      this.props.component.id
    );
    evt.stopPropagation();
  }

  render() {
    var isSelected = (this.props.selectedComponent === this.props.component.id);
    var isHovered = this.state.isHovered;
    var isDragging = this.state.isDragging;

    var className = "pos-rel h-min-component";
    if (isSelected) {
      className += " oas o-blue";
    } else if (isHovered) {
      className += " oas o-lblue";
    }

    var actionContainerClassName = "pos-abs top-0 right-0 z-above list-plain list-horz";
    if (isDragging) {
      //hide the actions while dragging a component
      actionContainerClassName += " dn";
    } else if (isSelected) {
      actionContainerClassName += " bg-navy";
    } else if (isHovered) {
      actionContainerClassName += " bg-lblue";
    } else {
      //hide the actions unless the component is selected or hovered
      actionContainerClassName += " dn";
    }

    var actionClassName = "phxs text-white a-mid";
    if (isSelected) {
      actionClassName += " bg-lblue-hov";
    } else if (isHovered) {
      actionClassName += " bg-llblue-hov";
    }

    return (
      <Draggable data={{id: this.props.component.id}}
                onDragStart={this.dragStart.bind(this)}
                onDragEnd={this.dragEnd.bind(this)}>
        <div className={className} onClick={this.click.bind(this)}
            onMouseOver={this.mouseOver.bind(this)}
            onMouseOut={this.mouseOut.bind(this)}
            onDragOver={this.stopDragBubbling.bind(this)}
            onDragEnter={this.stopDragBubbling.bind(this)}>
          <ul className={actionContainerClassName}>
            <li className={actionClassName}>
              <Asset iconKey="util.move" extraCss="icon-small icon-white"/>
            </li>

            <li className={actionClassName} onClick={this.delete.bind(this)}>
              <Asset iconKey="util.close" extraCss="icon-small icon-white"/>
            </li>
          </ul>

          {this.props.children}
        </div>
      </Draggable>
    );
  }
}

Component.propTypes = {
  stopDragBubbling: React.PropTypes.bool,
  component: React.PropTypes.object,
  selectComponent: React.PropTypes.func,
  selectedComponent: React.PropTypes.string,
  //Nested components need the page model to pass to their inner regions
  pageModel: React.PropTypes.object //TODO check that it's actually instaceof AppBuilderModel
};

