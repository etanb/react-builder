import React from 'react';

export default class TabDefaultButton extends React.Component {
  render() {
    let active = this.props.active ? 'sds-active' : ''
    return (
      <li className={"sds-tabs__item sds-text-heading--label " + active} title={this.props.contentTitle1} role="presentation">
        <a href="#" role="tab" tabindex="0" aria-selected="true" id="Details">
          {this.props.label}
        </a>
      </li>
    )
  }
}