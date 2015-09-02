'use strict';

import React from 'react';
import Router from 'react-router';
var RouteHandler = Router.RouteHandler;
const componentUtil = require('../helpers/index.js');
const {createChainedFunction} = componentUtil;
import classNames from 'classnames';

// NAVIGATION
import NavLeft from './CustomComponents/Navigation/Left';
import NavTop from './CustomComponents/Navigation/Top';

if (__CLIENT__) {
  // console.log('Client', __CLIENT__, 'Server', __SERVER__)
  require('sds-scss');
  require('slds-css/salesforce-lightning-design-system.css');
  require('./custom.scss');
  // require('./motion/_and_animation.scss');
}

export default class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        {/* Components placed here will show up on to all pages */}
        <NavTop/>
        <NavLeft/>
        <RouteHandler {...this.props}/>
      </div>
    )
  }
};
