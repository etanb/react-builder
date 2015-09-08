'use strict';
import React from 'react';

import ComponentPropertyEditor from '../ComponentPropertyEditor';

export default class RichTextPropertyEditor extends ComponentPropertyEditor {
  constructor(props){
    super(props);
  };

  handleCircleColor(evt) {
    this.props.pageModel.getComponent(this.props.component.id).props.circlecolor = evt.target.value
    this.props.pageModel.updateComponent(this.props.component.id, this.props.component.props)
  };

  handleFontColor(evt) {
    this.props.pageModel.getComponent(this.props.component.id).props.fontcolor = evt.target.value
    this.props.pageModel.updateComponent(this.props.component.id, this.props.component.props)
  };

  handleFontFamily(evt) {
    this.props.pageModel.getComponent(this.props.component.id).props.fontfamily = evt.target.value
    this.props.pageModel.updateComponent(this.props.component.id, this.props.component.props)
  };

  handleQuote(evt) {
    this.props.pageModel.getComponent(this.props.component.id).props.quote = evt.target.value
    this.props.pageModel.updateComponent(this.props.component.id, this.props.component.props)
  };

  render() {
    return (
      <form>
        <label htmlFor="richText" className="asstTex">Rich Text</label>
        <h1>BRANDING PROPERTIES:</h1>
        <p>Circle Color:</p> 
        <input type="color" value="#000000" id="circlecolor" circlecolor={this.props.component.props.value}
                  className="mvm pvxs br-s w-full resize-vert"
                  onChange={this.handleCircleColor.bind(this)}></input>
        <p>Font Color:</p>
        <input type="color" value="#ead61c" id="fontcolor" fontcolor={this.props.component.props.value}
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
