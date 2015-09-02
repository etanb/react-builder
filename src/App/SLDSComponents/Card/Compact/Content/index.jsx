import React from 'react';

export default class CardCompactHeader extends React.Component {
  render() {
    // TODO: Break this out and make more generic
    if (this.props.cardType === 'opportunity') {
      return (
        <section className="sds-card__body">
          <ul className="list">
            <li className="sds-list__item sds-hint-parent">
              <div className="sds-grid sds-grid--align-spread">
                <p className="sds-truncate"><a href="#">Dr. Otatade Bello</a></p>
                <button className="sds-button sds-button--icon-border-filled sds-button--icon-border-small sds-shrink-none">
                  <svg aria-hidden="true" className="sds-button__icon sds-button__icon--hint sds-button__icon--small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>'}}/>
                  <span className="sds-assistive-text">Show More</span>
                </button>
              </div>
              <dl className="dl--horizontal">
                <dt className="sds-dl--horizontal__label">Company:</dt>
                <dd className="sds-dl--horizontal__detail">Brello Labs</dd>
                <dt className="sds-dl--horizontal__label">Title:</dt>
                <dd className="sds-dl--horizontal__detail">Principal Investigators (Genetics Division)</dd>
              </dl>
            </li>
            <li className="sds-list__item sds-hint-parent">
              <div className="sds-grid sds-grid--align-spread">
                <p className="sds-truncate"><a href="#">Alison Inglis</a></p>
                <button className="sds-button sds-button--icon-border-filled sds-button--icon-border-small sds-shrink-none">
                  <svg aria-hidden="true" className="sds-button__icon sds-button__icon--hint sds-button__icon--small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>'}}/>
                  <span className="sds-assistive-text">Show More</span>
                </button>
              </div>
              <dl className="dl--horizontal">
                <dt className="sds-dl--horizontal__label">Company:</dt>
                <dd className="sds-dl--horizontal__detail">Cheesecake & Co.</dd>
                <dt className="sds-dl--horizontal__label">Title:</dt>
                <dd className="sds-dl--horizontal__detail">Founder/CEO</dd>
              </dl>
            </li>
            <li className="sds-list__item sds-hint-parent">
              <div className="sds-grid sds-grid--align-spread">
                <p className="sds-truncate"><a href="#">Avitree Tobarin</a></p>
                <button className="sds-button sds-button--icon-border-filled sds-button--icon-border-small sds-shrink-none">
                  <svg aria-hidden="true" className="sds-button__icon sds-button__icon--hint sds-button__icon--small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>'}}/>
                  <span className="sds-assistive-text">Show More</span>
                </button>
              </div>
              <dl className="dl--horizontal">
                <dt className="sds-dl--horizontal__label">Company:</dt>
                <dd className="sds-dl--horizontal__detail">Treelytics</dd>
                <dt className="sds-dl--horizontal__label">Title:</dt>
                <dd className="sds-dl--horizontal__detail">Director of Technology</dd>
              </dl>
            </li>
          </ul>
        </section>
      )
    } else if (this.props.cardType === 'product') {
      return (
        <section className="sds-card__body">
          <ul className="list">
            <li className="sds-list__item sds-hint-parent">
              <div className="sds-grid sds-grid--align-spread">
                <p className="sds-truncate">You have no products.</p>
              </div>
             </li>
           </ul>
        </section>
      )
    } else if (this.props.cardType === 'file') {
      return (
        <section className="sds-card__body">
          <ul className="list">
            <li className="sds-list__item sds-hint-parent">
              <div className="sds-grid sds-grid--align-spread">
                <p className="sds-truncate"><a href="#">2015-01-23-spreadsheet.xls</a></p>
                <button className="sds-button sds-button--icon-border-filled sds-button--icon-border-small sds-shrink-none">
                  <svg aria-hidden="true" className="sds-button__icon sds-button__icon--hint sds-button__icon--small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>'}}/>
                  <span className="sds-assistive-text">Show More</span>
                </button>
              </div>
            </li>
            <li className="sds-list__item sds-hint-parent">
              <div className="sds-grid sds-grid--align-spread">
                <p className="sds-truncate"><a href="#">2015-04-23-spreadsheet.xls</a></p>
                <button className="sds-button sds-button--icon-border-filled sds-button--icon-border-small sds-shrink-none">
                  <svg aria-hidden="true" className="sds-button__icon sds-button__icon--hint sds-button__icon--small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>'}}/>
                  <span className="sds-assistive-text">Show More</span>
                </button>
              </div>
            </li>
            <li className="sds-list__item sds-hint-parent">
              <div className="sds-grid sds-grid--align-spread">
                <p className="sds-truncate"><a href="#">2015-06-23-spreadsheet.xls</a></p>
                <button className="sds-button sds-button--icon-border-filled sds-button--icon-border-small sds-shrink-none">
                  <svg aria-hidden="true" className="sds-button__icon sds-button__icon--hint sds-button__icon--small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>'}}/>
                  <span className="sds-assistive-text">Show More</span>
                </button>
              </div>
            </li>
          </ul>
        </section>
      )
    }
  }
}