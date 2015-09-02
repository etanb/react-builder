'use strict';
import React from 'react';

import Component from '../Component';
import SDSCard from '../../Util/SDSCard';

export default class FilterList extends Component {
  parseDisplayCount(input) {
    //TODO THIS SHOULD BE A TOP-LEVEL IMPORT
    var AppBuilderData = require('../../../data/AppBuilderData.js');

    var asInteger = parseInt(input);
    if (isNaN(asInteger)) {
      var cmpDef = AppBuilderData.getComponentDef(
          AppBuilderData.CMP_TYPE.FILTER_LIST);
      return cmpDef.initProps.displayCount;
    } else {
      return asInteger;
    }
  }

  render() {
    //TODO THIS SHOULD BE A TOP-LEVEL IMPORT
    let AppBuilderData = require('../../../data/AppBuilderData.js');

    let objOptions = AppBuilderData.objOptions;
    let cmpProps = this.props.component.props;
    var parsedDisplayCount = this.parseDisplayCount(cmpProps.displayCount);
    var objIndex = parseInt(cmpProps.objId.slice(-1)) - 1;
    var ftrIndex = parseInt(cmpProps.ftrId.slice(-1)) - 1;

    var header = (
      <div>I am a FilterList component</div>
    );

    return (
      <Component {...this.props}>
        <SDSCard extraCss="bg-white" header={header}>
          <div className="">Object: {objOptions[objIndex].label}</div>
          <div className="">Filter List: {objOptions[objIndex].filters[ftrIndex].label}</div>
          <div className=""># to Display: {parsedDisplayCount}</div>
        </SDSCard>
      </Component>
    );
  }
}
