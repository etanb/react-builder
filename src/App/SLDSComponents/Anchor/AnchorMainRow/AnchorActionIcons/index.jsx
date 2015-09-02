import React from 'react';

export default class AnchorActionIcons extends React.Component {
  render() {
    let {labels, data} = this.props;
    return (
      <div className="sds-col sds-no-flex sds-align-bottom">
        <div className="sds-grid">
          {this.props.children}
        </div>
      </div>
    )
  }
}