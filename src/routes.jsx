'use strict';

import React from 'react';
import {Route, DefaultRoute} from 'react-router';

// Site
import App from './App/App.jsx';

// Pages
import Home from './App/Pages/Home';
import RecordHome from './App/Pages/RecordHome';
import RelatedList from './App/Pages/RelatedList';
// import MotionAndAnimation from './App/Pages/MotionAndAnimation';

//App Builder
import AppBuilder from './AppBuilder';

export default (
  [
  <Route name="AppBuilder" path="/AppBuilder" handler={AppBuilder}/>,
  <Route name="app" path="/" handler={App}>
    // SPIKES
    <Route name="RecordHome" path="/RecordHome/:type/:sfid" handler={RecordHome}/>
    <Route name="RelatedList" path="/RelatedList/:type" handler={RelatedList}/>


    // HOME
    <Route name="home" path="/" handler={Home}/>
    <DefaultRoute handler={Home}/>
  </Route>
  ]
);
