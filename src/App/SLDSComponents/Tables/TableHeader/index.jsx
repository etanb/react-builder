import React from 'react';

export default class TableHeader extends React.Component {
  renderEachHeaderLabel() {
    let HeaderLabels = this.props.headers;
    let EachHeaderLabel = HeaderLabels.map((headerLabel) => {
      return (
        <th className="sds-is-interactive sds-is-selected">
          <span className="sds-truncate">
            {headerLabel}
          </span>
          <button className="sds-button sds-button--icon-bare sds-button--icon-border-small">
            <svg aria-hidden="true" className="sds-button__icon sds-button__icon--small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>'}}/>
            <span className="sds-assistive-text">Sort</span>
          </button>
        </th>
      )
    });
    return EachHeaderLabel;
  }

  render() {
    return (
      <thead>
        <tr>
          <th className="sds-row-select">
            <label className="sds-checkbox" for="select-all">
              <input type="checkbox" id="select-all" />
              <span className="sds-checkbox--faux"></span>
            </label>
          </th>
          {this.renderEachHeaderLabel()}
        </tr>
      </thead>
    )
  }
}