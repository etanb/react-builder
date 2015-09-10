'use strict';
import React from 'react';

import Brandable from '../../Components/Brandable'
import Region from '../../Components/Region'

var $ = require('jquery');

export default class IFrame extends React.Component {
  // getInitialState() {
  //   return {
  //     livePreview: false
  //   }
  // }

  click() {
    this.props.selectComponent(
      this.props.pageModel.getPage().id
    );
  }

  

  render() {
    return (
      <iframe id="iFrame" 
              src={'frameContent?frameUrl=' + this.props.livePreview} 
              className="flex-grow"
              onLoad={this.props.onLoad.bind(this)}
      ></iframe>
      );
  }
}

IFrame.propTypes = {
  onLoad: React.PropTypes.func,
  livePreview: React.PropTypes.string
};