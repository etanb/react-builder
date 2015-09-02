import React from 'react';

export default class AnchorTitle extends React.Component {
  render() {
    return (
      <nav className="sds-m-bottom--xx-small" role="navigation">
        <p id="bread-crumb-label" className="sds-assistive-text">
          You are here:
        </p>
        <ol className="sds-breadcrumb sds-list--horizontal" aria-labelledby="bread-crumb-label">
          <li className="sds-list__item sds-text-heading--label">
            <a href="#" title={this.props.type}>{this.props.type}</a>
          </li>
        </ol>
      </nav>
    )
  }
}