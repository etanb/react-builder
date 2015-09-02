import React from 'react';
import Router from 'react-router';
const Link = Router.Link;

export default class DropdownActionOverflow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sds-grid sds-grid--align-space demo-only demo-only--dropdown">
        <div className="sds-dropdown-trigger" aria-haspopup="true">
          <button className="sds-button sds-button--icon-border-filled">
            <svg aria-hidden="true" className="sds-button__icon sds-button__icon--hint" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>'}}/>
            <span className="sds-assistive-text">Show More</span>
          </button>
          <div className="sds-dropdown sds-dropdown--right sds-dropdown--menu">
            <ul className="sds-dropdown__list" role="menu">
              <li id="menu-49-0" href="#" className="sds-dropdown__item sds-has-icon--left" role="menuitem option" tabindex="0"><a href="#" tabindex="-1" onClick={this.props.onclickdisplaymodal}>{this.props.action1}</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}