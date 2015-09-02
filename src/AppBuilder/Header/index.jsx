'use strict';
import React from 'react';

import Asset from '../Util/Asset';

export default class Header extends React.Component {
  render() {
    return (
      <header className="phm h-header bg-navy text-white flex-row flex-center">
        <div className="tal flex-grow plm">
          {/* TODO use the right icon here */}
          <Asset iconKey="appBuilderIcon" extraCss="icon-xlarge icon-white mrs"/>
          <span>Lightning App Builder - </span>
          <span>{this.props.pageModel.getPage().props.label}</span>
        </div>

        <div className="tar flex-grow prm">
          <span>
            <a href="#" className="text-white no-under">
              <Asset iconKey="util.back" extraCss="icon-small icon-white mrs"/>
              Back
            </a>
          </span>
          <span className="mll">
            <a href="#" className="text-white no-under">
              <Asset iconKey="util.help" extraCss="icon-small icon-white mrs"/>
              Help
            </a>
          </span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  pageModel: React.PropTypes.object.isRequired //TODO check that it's actually instaceof AppBuilderModel
}
