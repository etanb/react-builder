import React from 'react';

export default class TILETASK extends React.Component {
  render () {
    return (
      <div className="demo-only demo-only--compact">
        <div className="sds-media">
          <div className="sds-media__figure">
            <label className="sds-checkbox" for="mark-complete">
              <input type="checkbox" id="mark-complete" />
              <span className="sds-checkbox--faux"></span>
              <span className="sds-form-element__label sds-assistive-text">mark-complete</span>
            </label>
          </div>
          <div className="sds-media__body">
            <div className="tile" label="[object Object]">
              <div className="sds-grid sds-wrap">
                <div className="sds-col sds-size--1-of-1 sds-text-body--regular">
                  <span className="sds-m-left--x-small sds-float-right">
                    <span className="sds-label">Today</span>
                  </span>
                  <p className="sds-truncate"><a href="#">The Trammel Crow Company</a></p>
                </div>
                <div className="sds-col sds-text-body--small">
                  <ul className="sds-list--horizontal">
                    <li className="sds-list__item sds-list__item--separator">Assignee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}