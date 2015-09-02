'use strict';
import React from 'react';

import ComponentPropertyEditor from '../ComponentPropertyEditor';

export default class SectionPropertyEditor extends ComponentPropertyEditor {
  handleColumnsChange(evt) {
    var newProps = this.props.component.props;
    newProps.isColumns = evt.target.checked;

    this.props.pageModel.updateComponent(this.props.component.id, newProps);
  };

  handleNumSectionsChange(evt) {
    //TODO update the number of sections
  }

  render() {
    return (
      <form>
        <label htmlFor="isColumns" className="input-label db">
          Use columns
        </label>
        <input type="checkbox"
            id="isColumns"
            name="isColumns"
            checked={this.props.component.props.isColumns}
            placeholder=""
            className="input-field w-full mbm"
            onChange={this.handleColumnsChange.bind(this)} />

        <label htmlFor="numSections" className="input-label db">
          Number of Sections
        </label>
        <input type="text"
                id="numSections"
                name="numSections"
                value={this.props.component.props.numSections}
                placeholder=""
                className="input-field w-full mbm"
                onChange={this.handleNumSectionsChange.bind(this)} />
      </form>
    );
  }
}
