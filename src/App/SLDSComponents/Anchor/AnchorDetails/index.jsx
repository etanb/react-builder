import React from 'react';

export default class AnchorDetails extends React.Component {
  render() {
    let {labels, data} = this.props;
    return (
      <p className="sds-text-body--small sds-anchor__detail">
        10 items, sorted by name
      </p>
    )
  }
}