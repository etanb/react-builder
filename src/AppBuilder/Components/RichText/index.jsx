'use strict';
import React from 'react';

import Component from '../Component';

export default class RichText extends Component {
  render() {
    return (
      <Component {...this.props}>
        <div className="hmin-small">{this.props.component.props.value}</div>
      </Component>
    );
  }
}