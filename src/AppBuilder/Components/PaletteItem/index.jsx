'use strict';
import React from 'react';

import Draggable from '../../Util/Draggable';
import Asset from '../../Util/Asset';

const AppBuilderData = require('../../../data/AppBuilderData.js');

export default class PaletteItem extends React.Component {
  renderIcon() {
    var cmpDef = AppBuilderData.getComponentDef(this.props.cmpType);
    var iconKey = "cmpIcon." + (cmpDef.icon || "");
    return <Asset iconKey={iconKey} extraCss="icon-large icon-default mrs"/>
  }

  render() {
    var cmpDef = AppBuilderData.getComponentDef(this.props.cmpType);

    return (
      <Draggable data={{cmpType: this.props.cmpType}}>
        {/* ^^^ Giving data to the draggable will indicate to the region that it should add a new component */}
        <div className="paxs bg-white br-m text-body-alt text-link-hov" title={cmpDef.label + '\n' + cmpDef.description}>
          {this.renderIcon()}
          <span className="a-mid">{cmpDef.label}</span>
        </div>
      </Draggable>
    );
  }
}

PaletteItem.propTypes = {
  cmpType: function (props, propName) {
    var value = props[propName];
    if (!AppBuilderData.CMP_TYPE[value]) {
      return new Error('Attribute value ' + value + ' is not a valid component type.');
    }
  }
};
