import React from 'react';

export default class TILECUSTOMGENERIC extends React.Component {
  render () {
    return (
      <div className="sds-media">
        <div className="sds-media__figure">
          <svg aria-hidden="true" className="sds-icon sds-icon-standard-contact" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#contact"></use>'}}/>
        </div>
        <div className="sds-media__body">
          <div className="tile">
            <div className="sds-grid sds-wrap">
              <div className="sds-col sds-size--1-of-1 sds-text-body--regular">
                <p className="sds-truncate"><a href="#">This is the header of the tile</a></p>
              </div>
              <div className="sds-col sds-text-body--small">
                <dl className="dl--horizontal">
                  <dt className="sds-dl--horizontal__label">
                    <p className="sds-truncate">Label that is super long will truncate at 33% of its parent.</p>
                  </dt>
                  <dd className="sds-dl--horizontal__detail">
                    <p className="sds-truncate">There are soooo many values that eventually they will be cut off, will happen around 66% of its parent.</p>
                  </dd>
                  <dt className="sds-dl--horizontal__label">
                    <p className="sds-truncate">Next Row Label</p>
                  </dt>
                  <dd className="sds-dl--horizontal__detail">
                    <p className="sds-truncate">Next Row Value</p>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

TILECUSTOMGENERIC.propTypes = {

};