'use strict';
import React from 'react';

import FormFactorSwitcher from './FormFactorSwitcher';
import SrinkToView from './SrinkToView';
import Asset from '../Util/Asset';
import SDSButton from '../Util/SDSButton';

export default class Toolbar extends React.Component {
  render() {
    return (
      <div className="h-toolbar bbs b-gray flex-row flex-center">
        <div className="plm w-comp-palette flex-nogrow flex-row">
          <span className="brs b-gray prs">
            <Asset iconKey="util.undo" extraCss="icon-medium icon-gray mhs"/>
            <Asset iconKey="util.redo" extraCss="icon-medium icon-gray mhs"/>
          </span>
          <span className="pls">
            <Asset iconKey="util.cut" extraCss="icon-medium icon-gray mhs"/>
            <Asset iconKey="util.copy" extraCss="icon-medium icon-gray mhs"/>
            <Asset iconKey="util.paste" extraCss="icon-medium icon-gray mhs"/>
          </span>
        </div>

        <div className="flex-grow flex-row">
          <div className="mrm">
            <FormFactorSwitcher device={this.props.device}
                selectDevice={this.props.selectDevice} />
          </div>
          <div className="mrm">
            <SrinkToView />
          </div>
        </div>

        <div className="prm flex-nogrow flex-row">
          <SDSButton extraCss="fw-bold">Save</SDSButton>
          <SDSButton extraCss="mll fw-bold">Activation...</SDSButton>
        </div>
      </div>
    );
  }
}

Toolbar.propTypes = {
  device: React.PropTypes.object.isRequired,
  selectDevice: React.PropTypes.func
};