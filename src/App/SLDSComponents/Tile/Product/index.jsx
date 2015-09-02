import React from 'react';

export default class TILEPRODUCT extends React.Component {
  render () {
    return (
      <div>
        <div className="tile" label="[object Object]">
          <div className="sds-grid sds-wrap">
            <div className="sds-col sds-size--1-of-1 sds-text-body--regular">
              <span className="sds-m-left--x-small sds-float-right">
                <span>$200,000</span>
              </span>
              <p className="sds-truncate"><a href="#">Platinum Package</a></p>
            </div>
            <div className="sds-col sds-text-body--small">
              <ul className="sds-list--horizontal">
                <li className="sds-list__item sds-list__item--separator">25 Units</li>
                <li className="sds-list__item sds-list__item--separator">$8,000 p/m</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}