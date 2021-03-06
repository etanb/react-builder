'use strict';
import React from 'react';

import Region from '../Components/Region';
import IFrame from '../Canvas/IFrame';
import Brandable from '../Components/Brandable';

var $ = require('jquery');


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

  onLoad() {
    let outerClasses = "pos-abs abs-full mtm";
    let innerClasses = "center bg-preview hmin-full " + this.props.deviceCssClass;

    $('<div id="widgetContainer" style="width: 100%; height: 100%; position: fixed;"></div>').appendTo($('#iFrame').contents().find('body'));

    var $head = $("#iframe").contents().find("head");
    $head.append($("<link/>", { rel: "stylesheet", href: "../styles.css", type: "text/css" }));

    React.render(
    <section onClick={this.click.bind(this)} className="flex-grow pos-rel osy bg-canvas">
        <div className={outerClasses}>
          <div className={innerClasses}>
            <Region regionId="regionA"
                    pageModel={this.props.pageModel}
                    selectComponent={this.props.selectComponent}
                    selectedComponent={this.props.selectedComponent} />
          </div>
        </div>
      </section>
      , $('#iFrame').contents().find('#widgetContainer')[0]);
    // React.render(<Brandable />, $('#iFrame').contents().find('body')[0]);
  }

  render() {
    let outerClasses = "pos-abs abs-full mtm";
    let innerClasses = "center bg-preview hmin-full " + this.props.deviceCssClass;
    if (this.props.livePreview) {
      return (
        <IFrame livePreview={this.props.livePreview} onLoad={this.onLoad.bind(this)} />
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
  selectedComponent: React.PropTypes.string.isRequired
}