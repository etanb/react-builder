import React from 'react';

export default class PicklistOptions extends React.Component {
  renderEachPicklistOption() {
    let EachOption = this.props.options.map((option) => {
      return (
        <li id="po-0-0" className="sds-picklist__options-item" aria-selected="false" tabindex="0" role="option">
          <span onClick={this.handleChange}>{option}</span>
        </li>
      )
    });
    return EachOption
  }

  render() {
    let showorhide = 'sds-hide';
    return (
      <ul className={`sds-picklist__options ${showorhide}`} style={{
        position: 'absolute', 
        zIndex: '1'}}>
        {this.renderEachPicklistOption()}
      </ul>
    )
  }
}