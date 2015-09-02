import React from 'react';
const InlineTableEditing = require('../../../../App/CustomComponents/Edit/InlineEditing');

export default class TileAuthor extends React.Component {
  render () {
    return (
      <div className="tile">
        <div className="sds-grid sds-wrap">
          <div className="sds-col sds-size--1-of-1 sds-text-body--regular">
            <p className="sds-truncate">
              <strong>{this.props.content.label}</strong>
            </p>
          </div>
          <div className="sds-col sds-text-body--medium" style={{width: '100%'}}>
            <div className="anchor-edit-spike" style={{width: '100%'}}>
              <InlineTableEditing {...this.props}>
                {this.props.content}
              </InlineTableEditing>
            </div>
          </div>
        </div>
      </div>
    )
  }
}