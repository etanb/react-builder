import React from 'react';

export default class TILELIST extends React.Component {
  render () {
    return (
      <ul className="sds-list--vertical">
        <li className="sds-list__item--separator">
          <div className="sds-media sds-media--center">
            <div className="sds-media__figure">
              <svg aria-hidden="true" className="sds-icon sds-icon-standard-contact" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#contact"></use>'}}/>
            </div>
            <div className="sds-media__body">
              <div className="tile">
                <div className="sds-grid sds-wrap">
                  <div className="sds-col sds-size--1-of-1 sds-text-body--regular">
                    <p className="sds-truncate"><a href="#">This is the header of the tile</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    )
  }
};

TILELIST.propTypes = {

};