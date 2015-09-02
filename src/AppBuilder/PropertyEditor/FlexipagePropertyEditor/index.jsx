'use strict';
import React from 'react';

import ComponentPropertyEditor from '../ComponentPropertyEditor';

export default class FlexipagePropertyEditor extends ComponentPropertyEditor {
  handleChange(evt) {
    this.props.pageModel.updateComponent(this.props.component.id, {
      label: evt.target.value
    });
  };

  render() {
    let props = this.props.component.props;
    return (
      <form>
        <label htmlFor="label" className="input-label db required">Label</label>
        <input type="text" id="label" name="page label"
              value={props.label} placeholder=""
              className="input-field w-full mbm"
              onChange={this.handleChange.bind(this)} />

        <label htmlFor="devName" className="input-label db required">Developer Name</label>
        <input type="text" id="devName" name="Developer Name"
                defaultValue={props.devName} placeholder=""
                className="input-field w-full mbm"/>

        <label htmlFor="pageType" className="input-label db">Page Type</label>
        <input type="text" id="pageType" name="Page Type"
                value="" placeholder=""
                disabled="true"
                className="input-field w-full mbm read-only" />

        <label htmlFor="obj" className="input-label db">Object</label>
        <input type="text" id="obj" name="Object"
                value="" placeholder=""
                disabled="true"
                className="input-field w-full mbm read-only" />
        <label htmlFor="template" className="input-label db">Template</label>
        <input type="text" id="template" name="Template"
                value="" placeholder=""
                disabled="true"
                className="input-field w-full mbm read-only" />

        <label htmlFor="desc" className="input-label db">Description</label>
        <textarea type="text" id="desc" name="Description" value={props.description} className="mbm pvxs br-s w-full resize-vert"></textarea>
      </form>
    );
  }
}
