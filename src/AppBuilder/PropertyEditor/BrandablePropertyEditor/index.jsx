'use strict';
import React from 'react';

import ComponentPropertyEditor from '../ComponentPropertyEditor';

export default class RichTextPropertyEditor extends ComponentPropertyEditor {
  constructor(props){
    super(props);
  };

  handleCircleColor(evt) {
    this.props.pageModel.updateComponent(this.props.component.id, {
      circlecolor: evt.target.value
    });
  };

  handleFontColor(evt) {
    this.props.pageModel.updateComponent(this.props.component.id, {
      fontcolor: evt.target.value
    });
  };

  handleFontFamily(evt) {
    this.props.pageModel.updateComponent(this.props.component.id, {
      fontfamily: evt.target.value
    });
  };

  handleQuote(evt) {
    this.props.pageModel.updateComponent(this.props.component.id, {
      quote: evt.target.quote
    });
  };

  render() {
    return (
      <form>
        <label htmlFor="richText" className="asstTex">Rich Text</label>
        <h1>BRANDING PROPERTIES:</h1>
        <p>Circle Color:</p>
        <input type="text" id="circlecolor" circlecolor={this.props.component.props.value}
                  className="mvm pvxs br-s w-full resize-vert"
                  onChange={this.handleCircleColor.bind(this)}></input>
        <p>Font Color:</p>
        <input type="text" id="fontcolor" fontcolor={this.props.component.props.value}
                  className="mvm pvxs br-s w-full resize-vert"
                  onChange={this.handleFontColor.bind(this)}></input>
        <p>Font Family:</p>
        <input type="text" id="fontfamily" fontfamily={this.props.component.props.value}
                  className="mvm pvxs br-s w-full resize-vert"
                  onChange={this.handleFontFamily.bind(this)}></input>
        <p>Quote:</p>
        <textarea type="text" id="quote" quote={this.props.component.props.value}
                  className="mvm pvxs br-s w-full resize-vert"
                  onChange={this.handleQuote.bind(this)}></textarea>
      </form>
    );
  }
}
