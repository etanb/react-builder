'use strict';
import React from 'react';

//const AppBuilderModel = require('../../../data/AppBuilderModel.js');
//const AppBuilderData = require('../../../data/AppBuilderData.js');

export default class ComponentPropertyEditor extends React.Component {
  //empty... components can extend this
}

ComponentPropertyEditor.propTypes = {
  component: React.PropTypes.object.isRequired,
  pageModel: React.PropTypes.object.isRequired, //TODO check that it's actually instaceof AppBuilderModel
}
