'use strict';
import React from 'react';

import Header from './Header';
import Toolbar from './Toolbar';
import Palette from './ComponentPalette';
import Canvas from './Canvas';
import PropertyEditor from './PropertyEditor';

if (__CLIENT__) {
  require('sds-scss');
  require('./index.scss');
}

require('jquery');

const AppBuilderModel = require('../data/AppBuilderModel.js');
const AppBuilderData = require('../data/AppBuilderData.js');

export default class AppBuilder extends React.Component {
  constructor(props) {
    super(props);

    var pageId = 'page1'; //we can define the page's ID here
    //define the region ID's. They should match up with the regions
    //hardcoded in the Canvas
    var regionIds = ['regionA', 'regionB', 'regionC'];

    this.state = {
      device: AppBuilderData.DEVICES[0],
      selectedComponent: pageId,
      pageModel: new AppBuilderModel(pageId, regionIds), 
      livePreview: false
    };

    this.state.pageModel.onModelChange(function() {
      this.setState({
        pageModel: this.state.pageModel
      });
    }.bind(this));

    this.selectDevice = this.selectDevice.bind(this);
  }

  selectComponent(id) {
    this.setState({
      selectedComponent: id
    });
  }

  selectPage() {
    this.selectComponent(
      this.state.pageModel.getPage().id
    );
  }

  selectDevice(selection) {
    this.setState({ device:selection });
  }

  setLivePreview(onOrOff) {
    this.setState({livePreview: onOrOff});
  }

  /**
   * This function disables the gross rubber band scrolling on Mac
   * without affecting the other pages in the prototype
   *
   * (A global CSS rule would break other parts of the proto, so
   * instead we do it in JS)
   */
  adjustStyling() {
    if (__CLIENT__) {
      var html = document.getElementsByTagName('html')[0];
      var doc = document.getElementsByTagName('body')[0];

      //disable rubber band scrolling on mac
      html.style.overflow = 'hidden';
      doc.style.overflow = 'hidden';

      //fixup font sizes
      html.style.fontSize = '100%';
    }
  }

  render(){
    this.adjustStyling();

    return (
      <section className="app-builder-container">
        <section className="h-full flex-col">
          <Header pageModel={this.state.pageModel}/>
          <Toolbar device={this.state.device} selectDevice={this.selectDevice} 
            setLivePreview={this.setLivePreview.bind(this)}/>
          <main className="flex-row flex-grow">
            <Palette />
            <Canvas deviceCssClass={this.state.device.cssClass}
                    selectComponent={this.selectComponent.bind(this)}
                    selectedComponent={this.state.selectedComponent}
                    pageModel={this.state.pageModel} 
                    livePreview={this.state.livePreview}/>
            <PropertyEditor selectedComponent={this.state.selectedComponent}
                            pageModel={this.state.pageModel}
                            selectPage={this.selectPage.bind(this)} />
          </main>
        </section>
      </section>
    );
  }
}
