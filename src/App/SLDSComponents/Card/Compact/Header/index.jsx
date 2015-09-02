import React from 'react';
import DropdownActionOverflow from '../../../../SLDSComponents/Dropdowns/ActionOverflow'

export default class CardCompactHeader extends React.Component {
  render() {
    return (
      <header className="sds-card__header sds-grid">
        <div className="sds-media sds-media--center sds-has-flexi-truncate">
          <div className="sds-media__figure">
            <svg aria-hidden="true" className="sds-icon sds-icon-standard-contact sds-icon--small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#contact"></use>'}}/>
          </div>
          <div className="sds-media__body">
            <h3 className="sds-text-heading--small sds-truncate">{this.props.cardheader}</h3>
          </div>
        </div>
        <div className="sds-no-flex">
          <DropdownActionOverflow {...this.props}/>
        </div>
      </header>
    )
  }
}