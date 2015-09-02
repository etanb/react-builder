import React from 'react';

export default class ModalBase extends React.Component {
  render() {
    return (
      <div>
        <div aria-hidden="false" role="dialog" className="sds-modal sds-modal--large sds-fade-in-open">
          <div className="sds-modal__container">
            <div className="sds-modal__header">
              <h2 className="sds-text-heading--medium">{this.props.modalheader}</h2>
              <p>{this.props.subheader}</p>
              <button className="sds-button sds-modal__close" onClick={this.props.onclickdisplaymodal}>
                <svg aria-hidden="true" className="sds-button__icon sds-button__icon--inverse sds-button__icon--large" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/action-sprite/svg/symbols.svg#close"></use>'}}/>
                <span className="sds-assistive-text">Close</span>
              </button>
            </div>
            <div className="sds-modal__content">
              <div>
                {this.props.children}
              </div>
            </div>
            <div className="sds-modal__footer">
              <button className="sds-button sds-button--neutral" onClick={this.props.onclickdisplaymodal}>Cancel</button>
              <button className="sds-button sds-button--neutral sds-button--brand" onClick={this.props.onclickdisplaymodal}>Save</button>
            </div>
          </div>
        </div>
        <div className="sds-modal-backdrop sds-modal-backdrop--open"></div>
      </div>
    )
  }
}