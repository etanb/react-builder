import React from 'react';

export default class TILEBASE extends React.Component {
  render() {
    return <div>
      <div className="media media--center">
        <div className="media__figure">
          <svg aria-hidden="true" className="icon icon-standard-contact" dangerouslySetInnerHTML={{__html: '<use xlink:href="assets/icons/standard-sprite/svg/symbols.svg#contact"></use>'}}/>
        </div>
        <div className="media__body">
          <div className="grid wrap">
            <h3 className="col size--1-of-1 text-body--regular">
              <p className="truncate">
                <a href="#">This is the header of the tile</a>
              </p>
            </h3>
          </div>
        </div>
      </div>
    </div>
  }
};

TILEBASE.propTypes = {

};