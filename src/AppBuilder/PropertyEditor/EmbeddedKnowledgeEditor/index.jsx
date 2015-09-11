'use strict';
import React from 'react';

import ComponentPropertyEditor from '../ComponentPropertyEditor';

export default class EmbeddedKnowledgeEditor extends ComponentPropertyEditor {
  constructor(props){
    super(props);
  };

  handleBackgroundColor(evt) {
    this.props.pageModel.getComponent(this.props.component.id).props.backgroundcolor = evt.target.value
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

  render() {
    return (
      <form>
        <label htmlFor="richText" className="asstTex">Rich Text</label>
        <h1>ARTICLES BRANDING PROPERTIES:</h1>
        <p>Background Color:</p> 
        <input type="color" id="circlecolor" backgroundcolor={this.props.component.props.value}
                  className="mvm pvxs br-s w-full resize-vert"
                  onChange={this.handleBackgroundColor.bind(this)}></input>
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
      </form>
    );
  }
}
