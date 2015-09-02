'use strict';
import React from 'react';

import ComponentPropertyEditor from '../ComponentPropertyEditor';
import EmptyPropertyEditorBody from '../EmptyPropertyEditorBody';

export default class TabSetPropertyEditor extends ComponentPropertyEditor {
  render() {
    var tabs = this.props.component.props.tabs;
    var children = this.props.component;

    //TODO make this property editor actually work
    return (
      <form>
        <EmptyPropertyEditorBody />
      </form>
    );
  }
}