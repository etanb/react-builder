'use strict';
import React from 'react';

export default class Droppable extends React.Component {
  /*
    This method is a workaround for a stupid Chrome bug
    See: http://enome.github.io/javascript/2014/03/24/drag-and-drop-with-react-js.html
   */
  preventDefault(evt) {
    evt.preventDefault();
  }

  drop(evt) {
    var onDrop = this.props.onDrop;
    if (onDrop) {
      var dropData = JSON.parse(evt.dataTransfer.getData('data'));
      onDrop(evt, dropData);
    }
  }

  render() {
    return (
      <div onDragOver={this.preventDefault.bind(this)} onDrop={this.drop.bind(this)}>
        {this.props.children}
      </div>
    );
  }
}

Droppable.propTypes = {
  onDrop: React.PropTypes.func
};
