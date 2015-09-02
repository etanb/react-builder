'use strict';
import React from "react";

export default class Anchor extends React.Component {
  render() {
    let {data, type, label1, label2, label3, label4, onclickpopover, onclickdisplaymodal} = this.props;
    return (
      <div className="sds-anchor">
        <div className="sds-grid">
          <div className="sds-col sds-has-flexi-truncate">
            <div className="sds-media media--rec-home">
              <div className="sds-media__figure">
                <svg aria-hidden="true" className="sds-icon sds-icon--large sds-icon-standard-user" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#user"></use>'}}/>
              </div>
              <div className="sds-media__body">
                <p className="sds-text-heading--label">{data.type}</p>
                <div className="sds-grid">
                  <h1 className="sds-text-heading--medium sds-media--rec-home__title sds-truncate">
                    {`${data.name.titleName.content} ${data.name.firstName.content} ${data.name.lastName.content}`}
                  </h1>
                  <div className="sds-col sds-shrink-none sds-align-bottom">
                    <button className="sds-button sds-button--neutral sds-not-selected" aria-live="assertive">
                      <span className="sds-text-not-selected">
                        <svg aria-hidden="true" className="sds-button__icon--stateful sds-button__icon--left" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>'}}/>Follow</span>
                      <span className="sds-text-selected">
                        <svg aria-hidden="true" className="sds-button__icon--stateful sds-button__icon--left" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>'}}/>Following</span>
                      <span className="sds-text-selected-focus">
                        <svg aria-hidden="true" className="sds-button__icon--stateful sds-button__icon--left" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>'}}/>Unfollow</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sds-col sds-no-flex sds-align-bottom">
            <div className="sds-button-group" role="group">
              <button className="sds-button sds-button--neutral" onClick={this.props.onclickdisplaymodal}>Edit</button>
              <button className="sds-button sds-button--neutral">Delete</button>
              <button className="sds-button sds-button--neutral">Clone</button>
              <div className="sds-button--last">
                <button className="sds-button sds-button--icon-border-filled">
                  <svg aria-hidden="true" className="sds-button__icon" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>'}}/>
                  <span className="sds-assistive-text">More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sds-grid sds-anchor--rec-home__detail-row">
          <div className="sds-col--padded sds-size--1-of-4">
            <dl className="anchor--rec-home__detail-item">
              <dt>
                <p className="sds-text-heading--label sds-truncate">
                  {label1}
                </p>
              </dt>
              <dd>
                <p className="sds-text-body--regular sds-truncate">
                  {data.info.title.content}
                </p>
              </dd>
            </dl>
          </div>
          <div className="sds-col--padded sds-size--1-of-4">
            <dl className="anchor--rec-home__detail-item">
              <dt>
                <p className="sds-text-heading--label sds-truncate">
                  {label2}
                </p>
              </dt>
              <dd>
                <div className="anchor-edit-spike">
                  <div style={{
                    background: 'none', 
                    cursor: 'pointer', 
                    width: '10rem', height: '1.5rem',
                    position: 'absolute'}} 
                    id="closedData" 
                    onClick={onclickpopover.bind(this)}/>
                  <span className="sds-text-body--regular sds-truncate">
                    {data.info.closingDate.content}
                  </span>
                  <svg aria-hidden="true" className="sds-icon sds-icon--large sds-icon-utility-edit ml-small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>'}} refs="test"/>
                </div>
              </dd>
            </dl>
          </div>
          <div className="sds-col--padded sds-size--1-of-4">
            <dl className="anchor--rec-home__detail-item">
              <dt>
                <p className="sds-text-heading--label sds-truncate">
                  {label3}
                </p>
              </dt>
              <dd>
                <div className="anchor-edit-spike">
                  <div style={{
                    background: 'none', 
                    cursor: 'pointer', 
                    width: '10rem', height: '1.5rem',
                    position: 'absolute'}} 
                    id="amount" 
                    onClick={onclickpopover.bind(this)}/>
                  <span className="sds-text-body--regular sds-truncate">
                    ${data.info.amount.content}
                    <svg aria-hidden="true" className="sds-icon sds-icon--large sds-icon-utility-edit ml-small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>'}}/>
                  </span>
                </div>
              </dd>
            </dl>
          </div>
          <div className="sds-col--padded sds-size--1-of-4">
            <dl className="anchor--rec-home__detail-item">
              <dt>
                <p className="sds-text-heading--label sds-truncate">
                  {label4}
                </p>
              </dt>
              <dd>
                <p className="sds-text-body--regular sds-truncate">
                  {data.communication.email.content}
                </p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    )
  }
}