'use strict';
import React from 'react';

import Region from '../Components/Region';

export default class Canvas extends React.Component {
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
    let outerClasses = "pos-abs abs-full mtm";
    let innerClasses = "center bg-preview hmin-full " + this.props.deviceCssClass;
    if (this.props.livePreview) {
      return (
        <iframe src="/frameContent" className="flex-grow"></iframe>
      );
    } else {
      return (<section onClick={this.click.bind(this)} className="flex-grow pos-rel osy bg-canvas">
        <div className={outerClasses}>
          <div className={innerClasses}>
            <Region regionId="regionA"
                    pageModel={this.props.pageModel}
                    selectComponent={this.props.selectComponent}
                    selectedComponent={this.props.selectedComponent} />
          </div>
        </div>
      </section>);
    }
  }
}

Canvas.propTypes = {
  deviceCssClass: React.PropTypes.string.isRequired,
  pageModel: React.PropTypes.object.isRequired, //TODO check that it's actually instaceof AppBuilderModel
  selectComponent: React.PropTypes.func.isRequired,
  selectedComponent: React.PropTypes.string.isRequired,
  livePreview: React.PropTypes.bool
}