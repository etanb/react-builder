'use strict';
import React from 'react';

import ComponentPropertyEditor from '../ComponentPropertyEditor';

export default class FilterListPropertyEditor extends ComponentPropertyEditor {
  handleObjChange(evt){
    let type = evt.target.id;
    let props = this.props.component.props;

    this.props.pageModel.updateComponent(this.props.component.id, {
      objId: (type === "object" ? evt.target.value : props.objId),
      ftrId: (type === "filter" ? evt.target.value : props.ftrId),
      displayCount: (type === "displayCount" ? evt.target.value : props.displayCount)
    });
  };

  renderObjOptions() {
    let AppBuilderData = require('../../../data/AppBuilderData.js');
    return AppBuilderData.objOptions.map(x => {
      return <option key={x.id} value={x.id}>{x.label}</option>;
    });
  };

  renderFilterOptions(){
    var objIndex = parseInt(this.props.component.props.objId.slice(-1)) - 1;
    let AppBuilderData = require('../../../data/AppBuilderData.js');
    return AppBuilderData.objOptions[objIndex].filters.map(x => {
      return <option key={x.id} value={x.id}>{x.label}</option>;
    });
  };

  render() {
    return (
      <form>
        <label htmlFor="object" className="input-label db required">Object</label>
        <select id="object" name="object" className="mbm pvxs br-s w-full"
                onChange={this.handleObjChange.bind(this)}>
          {this.renderObjOptions()}
        </select>

        <label htmlFor="filter" className="input-label db required">Filter</label>
        <select id="filter" name="filter" className="mbm pvxs br-s w-full"
                onChange={this.handleObjChange.bind(this)}>
          {this.renderFilterOptions()}
        </select>

        <label htmlFor="displayCount" className="input-label db">Number of Records to Display</label>
        <input type="text" id="displayCount" name="Number of Records to Display"
              value={this.props.component.props.displayCount} placeholder=""
              className="input-field w-full mbm" onChange={this.handleObjChange.bind(this)} />
      </form>
    );
  }
}

