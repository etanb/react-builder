import React from 'react';

export default class DialogsBase extends React.Component {
  render() {
    return (
      <div className="sds-show sds-nubbin--top" 
        style={{
          position: 'absolute', 
          top: this.props.popoverPosTop, 
          left: this.props.popoverPosLeft,
          width: '20rem',
          boxShadow: '0px 2px 2px 0px rgba(0,0,0,.16)'
        }}>
        <div className="sds-dialog" role="dialog">
          <div className="sds-dialog__content" role="document">
            <div className="sds-dialog__head">
              <p className="sds-text-heading--small">{this.props.dialogheading}</p>
            </div>
            <div className="sds-dialog__body" style={{height: this.props.height}}>
              <p>{this.props.dialogbody}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}