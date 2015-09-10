'use strict';
import React from 'react';

import ComponentPropertyEditor from '../ComponentPropertyEditor';

export default class EmbeddedChatButtonEditor extends ComponentPropertyEditor {
  constructor(props){
    super(props);
  };

  handleButtonColor(evt) {
    this.props.pageModel.getComponent(this.props.component.id).props.buttonbackground = evt.target.value
    this.props.pageModel.updateComponent(this.props.component.id, this.props.component.props)
  };

  handleFontColor(evt) {
    this.props.pageModel.getComponent(this.props.component.id).props.buttontext = evt.target.value
    this.props.pageModel.updateComponent(this.props.component.id, this.props.component.props)
  };

  handleFontFamily(evt) {
    this.props.pageModel.getComponent(this.props.component.id).props.buttonfont = evt.target.value
    this.props.pageModel.updateComponent(this.props.component.id, this.props.component.props)
  };

  handleQuote(evt) {
    this.props.pageModel.getComponent(this.props.component.id).props.buttonquote = evt.target.value
    this.props.pageModel.updateComponent(this.props.component.id, this.props.component.props)
  };

  render() {
    return (
      <form>
        <label htmlFor="richText" className="asstTex">Rich Text</label>
        <h1>BRANDING PROPERTIES:</h1>
        <p>Button Color:</p> 
        <input type="color" id="buttoncolor" buttoncolor={this.props.component.props.value}
                  className="mvm pvxs br-s w-full resize-vert"
                  onChange={this.handleButtonColor.bind(this)}></input>
        <p>Font Color:</p>
        <input type="color" id="fontcolor" fontcolor={this.props.component.props.value}
                  className="mvm pvxs br-s w-full resize-vert"
                  onChange={this.handleFontColor.bind(this)}></input>
        <p>Font Family:</p>
        <select type="text" id="fontfamily" fontfamily={this.props.component.props.value} onChange={this.handleFontFamily.bind(this)}>
          <option>Comic Sans MS</option>
          <option>Arial</option>
          <option>Times New Roman</option>
        </select>
        <p>Quote:</p>
        <textarea type="text" id="quote" quote={this.props.component.props.value}
                  className="mvm pvxs br-s w-full resize-vert"
                  onChange={this.handleQuote.bind(this)}></textarea>
      </form>
    );
  }
}
