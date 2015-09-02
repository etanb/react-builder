import React from 'react';

export default class TILECONTACT extends React.Component {
  render () {
    return (
      <div className="sds-media">
        <div className="sds-media__figure">
          <span className="sds-avatar sds-avatar--circle sds-avatar--small">
            <img src="/assets/images/chexee.jpg" alt="portrait" />
          </span>
        </div>
        <div className="sds-media__body">
          <div className="tile">
            <div className="sds-grid sds-wrap">
              <div className="sds-col sds-size--1-of-1 sds-text-body--regular">
                <p className="sds-truncate"><a href="#">Lexee L. Jackson</a></p>
              </div>
              <div className="sds-col sds-text-body--small">
                <ul className="sds-list--horizontal">
                  <li className="sds-list__item sds-list__item--separator">VP, Marketing</li>
                  <li className="sds-list__item sds-list__item--separator">Decision Maker</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

TILECONTACT.propTypes = {

};