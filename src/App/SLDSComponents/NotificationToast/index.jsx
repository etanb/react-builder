import React from 'react';

export default class AnchorPopovers extends React.Component {
  render() {
    return (
      <div className="sds-notify-container">
        <div className="sds-notify sds-notify--toast sds-notify--success sds-theme--inverse-text" role="alert">
          <span className="sds-assistive-text">Info</span>
          <button className="sds-button sds-notify__close">
            <svg aria-hidden="true" className="sds-button__icon sds-button__icon--inverse" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/action-sprite/svg/symbols.svg#close"></use>'}}/>
            <span className="sds-assistive-text">Close</span>
          </button>
          <div className="sds-notify__content sds-grid">
          <svg aria-hidden="true" className="sds-icon sds-icon--small sds-m-right--small sds-col" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#notification"></use>'}}/>
            <div className="sds-col">
              <h2 className="sds-text-heading--small ">
                <span>Your changes were successfully updated.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

