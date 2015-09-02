'use strict';
import React from 'react';

import Component from '../Component';
import Asset from '../../Util/Asset';
import SDSCard from '../../Util/SDSCard';

export default class MockedComponent extends Component {
  render() {
    //TODO THIS SHOULD BE A TOP-LEVEL IMPORT
    var AppBuilderData = require('../../../data/AppBuilderData.js');

    var cmpDef = AppBuilderData.getComponentDef(
      this.props.component.cmpType
    );

    var body = 'I am a ' + cmpDef.label + ' component';
    if (!cmpDef.mockBody) {
      console.warn('Developer error: you need to specify an image for this mocked component');
    } else {
      body = <Asset iconKey={"cmpBody." + cmpDef.mockBody} />;

      //determine if we should use a SDSCard or not
      if (cmpDef.mockWithCard) {
        //wrap the image in a card
        body = <SDSCard header={cmpDef.label} extraCss="bg-white">
          {body}
        </SDSCard>;
      }
    }

    return (
      <Component {...this.props}>
        {body}
      </Component>
    );
  }
}