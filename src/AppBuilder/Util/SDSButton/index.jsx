'use strict';
import React from 'react';

export default class SDSButton extends React.Component {
  render() {
    //TODO allow configuring of the color and size
    var classes = 'sds-button sds-button--brand sds-button--small';
    if (this.props.extraCss) {
      classes += ' ' + this.props.extraCss;
    }

    return (
      <button className={classes}>
        {this.props.children}
      </button>
    );
  }
}

SDSButton.propTypes = {
  extraCss: React.PropTypes.string
};