import React from 'react';
import SVGIcon from '../../../../App/CustomComponents/SVGIcon';

export default class Button extends React.Component {
  renderMoreDropdown1() {
    if (this.props.more) {
      return (
        <span>
         
          <span className="sds-assistive-text">More</span>
          <div id="menu1" className="popover sds-hide">
            <div className="sds-dropdown sds-dropdown--small sds-dropdown--menu">
              <div className="sds-dropdown__header">
                <span className="sds-text-heading--label">Display As</span>
              </div>
              <ul className="sds-dropdown__list" role="menu">
                <li id="menu-0-0" className="sds-dropdown__item sds-has-icon--left sds-is-selected" href="#rename" role="menuitem option" tabindex="0">
                  <a href="#rename" tabindex="-1">
                    <svg aria-hidden="true" className="sds-icon sds-icon--small sds-icon--left" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#task2"></use>'}}/>Table
                    <svg aria-hidden="true" className="sds-icon sds-icon--small sds-icon--right" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#table"></use>'}}/>
                  </a>
                </li>
                <li id="menu-1-1" href="#share" className="sds-dropdown__item sds-has-icon--left" role="menuitem option" tabindex="-1"><a href="#share" tabindex="-1">Cards <svg aria-hidden="true" className="sds-icon sds-icon--small sds-icon--right" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#kanban"></use>'}}/></a></li>
                <li id="menu-2-2" href="#delete" className="sds-dropdown__item sds-has-icon--left"
                role="menuitem option" tabindex="-1"><a href="#delete" tabindex="-1">Compact List <svg aria-hidden="true" className="sds-icon sds-icon--small sds-icon--right" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#side_list"></use>'}}/></a></li>
              </ul>
            </div>
          </div>
        </span>
      )
    }
  }

  renderMoreDropdown2() {
    return(
      <div id="menu2" className="popover sds-hide">
        <div className="sds-dropdown sds-dropdown--right dropdown--medium sds-dropdown--menu">
          <ul className="sds-dropdown__list" role="menu">
            <li id="menu-3-0" href="#rename" className="sds-dropdown__item sds-has-icon--left" role="menuitem option" tabindex="0"><a href="#rename" tabindex="-1">Action Item One</a></li>
            <li id="menu-4-1" href="#share" className="sds-dropdown__item sds-has-icon--left" role="menuitem option" tabindex="-1"><a href="#share" tabindex="-1">Action Item One</a></li>
          </ul>
        </div>
      </div>
    )
  }

  render() {
    let content  = this.props.icon ? 
      <SVGIcon size={this.props.size} 
                category={this.props.category} 
                icon={this.props.icon} 
                dropdown={this.props.dropdown}/> : this.props.text;
    let className = this.props.icon ? 'sds-button sds-button--icon-border sds-not-selected sds-button--icon-border-filled' : 'sds-button sds-button--neutral sds-button--small ';
    return (
      <button className={className}>
        {content}
        <span className="sds-assistive-text">{this.props.icon}</span>
      </button>
    )
  }
}