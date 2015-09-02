import React from 'react';

export default class ButtonGroup extends React.Component {
  render() {
    return (
      <div className="sds-button-group sds-button-space-left">
        {this.props.children}
      </div>
    )
  }
}