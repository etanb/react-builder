import React from 'react';

export default class SVGIcon extends React.Component {
  renderDropdown() {
    if(this.props.dropdown) {
      return(
        <svg aria-hidden="true" className={"sds-button__icon sds-button__icon--x-small"} dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>'}}/>
      )
    }
  }
  render() {
    return(
      <div>
        <svg aria-hidden="true" className={"sds-button__icon sds-button__icon--" + this.props.size} dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/'+ this.props.category +'-sprite/svg/symbols.svg#'+ this.props.icon +'"></use>'}}/>
        {this.renderDropdown()}
      </div>
      )
  }
}
