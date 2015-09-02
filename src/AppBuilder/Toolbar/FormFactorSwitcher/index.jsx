'use strict';
import React from 'react';

const AppBuilderData = require('../../../data/AppBuilderData.js');

import Dropdown from '../../Util/Dropdown';
import Asset from '../../Util/Asset';

export default class FormFactorSwitcher extends React.Component {
  constructor(props){
    super(props);
  }

  onChanged(index) {
    this.props.selectDevice(
      AppBuilderData.DEVICES[index]
    );
  }

  renderOption(index) {
    var device = AppBuilderData.DEVICES[index];
    return (<span>
      <Asset iconKey={"formFactor." + device.cssClass} extraCss="icon-medium mrs"/>
      <span className="a-mid">{device.label}</span>
    </span>);
  }

  render() {
    var devices = AppBuilderData.DEVICES;
    var selectedIndex = devices.indexOf(this.props.device.cssClass);

    return (
      <Dropdown selection={selectedIndex} numOptions={devices.length}
            renderItem={this.renderOption.bind(this)}
            onChanged={this.onChanged.bind(this)}
            widthClass="w-formFactorSwitcher"/>
    );
  }
}

FormFactorSwitcher.propTypes = {
  device: React.PropTypes.object.isRequired,
  selectDevice: React.PropTypes.func
};