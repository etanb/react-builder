import React from 'react';
import AnchorActionIcons from './AnchorActionIcons';

export default class AnchorMainRow extends React.Component {
  render() {
    return (
      <div className="sds-grid">
        <div className="sds-col sds-has-flexi-truncate">
          <h1 className="sds-text-heading--medium sds-truncate">
            My {this.props.type}s
          </h1>
        </div>

        <AnchorActionIcons>{ this.props.children }</AnchorActionIcons>
      </div>
    )
  }
}