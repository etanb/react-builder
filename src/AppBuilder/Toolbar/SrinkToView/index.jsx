'use strict';
import React from 'react';

import Dropdown from '../../Util/Dropdown';

export default class ShrinkToView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Srink To View', '100%'],
      selection: 1
    }
  }

  onChanged(index) {
    this.setState({
      selection: index
    });
  }

  renderOption(index) {
    return this.state.options[index];
  }

  render() {
    return (
        <Dropdown selection={this.state.selection}
            disabled={true}
            numOptions={this.state.options.length}
            renderItem={this.renderOption.bind(this)}
            onChanged={this.onChanged.bind(this)}
            widthClass="w-shrinkToView"/>
    );
  }
}