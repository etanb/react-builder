'use strict';
import React from 'react';

import ComponentPropertyEditor from '../ComponentPropertyEditor';

export default class RichTextPropertyEditor extends ComponentPropertyEditor {
  constructor(props){
    super(props);
  };

  handleObjChange(evt) {
    this.props.pageModel.updateComponent(this.props.component.id, {
      value: evt.target.value
    });
  };

  render() {
    return (
      <form>
        <img src={"assets/images/richTextOptions.png"} alt="Rich Text formatting options" />
        <label htmlFor="richText" className="asstText">Rich Text</label>
        <p>Please write your text below:</p>
        <textarea type="text" id="richText" name="Rich Text" value={this.props.component.props.value}
                  className="mvm pvxs br-s w-full resize-vert"
                  onChange={this.handleObjChange.bind(this)}></textarea>
      </form>
    );
  }
}
