'use strict';
import React from 'react';

export default class Draggable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isDragging: false
    };
  }

  dragStart(evt) {
    this.setState({
      isDragging: true
    });

    evt.dataTransfer.setData('data', JSON.stringify(this.props.data));

    //VERY IMPORTANT: don't let containing draggables add their own info
    //Without this, then nested regions don't work because the data we
    //add to the draggable will be overwritte
    evt.stopPropagation();

    if (this.props.onDragStart) {
      this.props.onDragStart();
    }
  }

  dragEnd() {
    if (this.props.onDragEnd) {
      this.props.onDragEnd();
    }
  }

  render() {
    return (
      <div className="pointer-cursor" draggable="true"
          onDragStart={this.dragStart.bind(this)}
          onDragEnd={this.dragEnd.bind(this)}>
        {this.props.children}
      </div>
    );
  }
}

Draggable.propTypes = {
  data: React.PropTypes.any,
  onDragStart: React.PropTypes.func,
  onDragEnd: React.PropTypes.func
};