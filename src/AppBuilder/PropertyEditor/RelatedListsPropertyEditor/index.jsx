'use strict';
import React from 'react';

import ComponentPropertyEditor from '../ComponentPropertyEditor';
import EmptyPropertyEditorBody from '../EmptyPropertyEditorBody';

export default class RelatedListsPropertyEditor extends ComponentPropertyEditor {
  render() {
    return (
      <form>
        <EmptyPropertyEditorBody />
      </form>
    );
  }
}