'use strict';
import React from 'react';

import Component from '../Component';

export default class Section extends Component {
  render() {
    var self = this;
    var component = this.props.component;

    var Region = require('../Region');
    var sections = component.children.map(function(region) {
      return (
        <Region
            regionId={region.id}
            pageModel={self.props.pageModel}
            selectedComponent={self.props.selectedComponent}
            selectComponent={self.props.selectComponent}
            extraCss="flex-grow" />
      );
    });

    var classes = component.props.isColumns
                    ? "flex-row"
                    : "flex-col";

    return (
        <Component {...this.props}>
          <div className={classes}>
            {sections}
          </div>
        </Component>
    );
  }
}