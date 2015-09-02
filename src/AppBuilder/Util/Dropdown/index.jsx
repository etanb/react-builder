'use strict';
import React from 'react';

import Asset from '../Asset';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.props.selection = this.props.selection || 0;
    this.state = {
      isOpened: false
    };
  }

  toggleList() {
    if (this.state.isOpened || !this.props.disabled) {
      this.setState({
        isOpened: !this.state.isOpened
      });
    }
  }

  closeList() {
    //allow this when the dropdown is disabled
    this.setState({
      isOpened: false
    });
  }

  handleSelect(index) {
    this.props.onChanged(index);
    this.closeList();
  }

  renderAnchor() {
    var cssClasses = "input-field pvxs phs tal truncate pointer-cursor bas b-gray br-m bg-none";
    if (this.props.widthClass) {
      cssClasses += " " + this.props.widthClass;
    }
    if (this.props.disabled) {
      cssClasses += " read-only";
    }

    return (
      <button className={cssClasses} onClick={this.toggleList.bind(this)}>
        <div className="dib wt-textAndIcon truncate a-mid">
          {this.props.renderItem(this.props.selection)}
        </div>
        <div className="dib wi-textAndIcon truncate a-mid tar">
          <Asset iconKey="util.down" extraCss="icon-small"/>
        </div>
      </button>
    );
  }

  renderList() {
    var options = [];
    for (var index = 0; index < this.props.numOptions; index++) {
      var cssClasses = "pvxs phs tal truncate pointer-cursor ban tal bg-hov-lgray";
      if (this.props.widthClass) {
        cssClasses += " " + this.props.widthClass;
      }

      //gotta love closures!
      var handleItemClick = (function(i) {
        return function() {
          this.handleSelect(i);
        }
      })(index);

      options.push(
        <li className={cssClasses}
            key={index}
            onClick={handleItemClick.bind(this)}>
          {this.props.renderItem(index)}
        </li>
      );
    };

    return (
      <ul className="mts pvxs pos-abs bas b-gray br-m bg-white z-above">
        {options}
      </ul>
    );
  }

  render() {
    return (
      <div className="pos-rel">
        {this.renderAnchor()}
        {this.state.isOpened ? this.renderList() : ""}
      </div>
    );
  }
}

Dropdown.propTypes = {
  disabled: React.PropTypes.bool,
  numOptions: React.PropTypes.number.isRequired,
  selection: React.PropTypes.number.isRequired,
  onChanged: React.PropTypes.func.isRequired,
  widthClass: React.PropTypes.string
};