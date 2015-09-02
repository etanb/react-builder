'use strict';
import React from 'react';

import Component from '../Component';

export default class TabSet extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0,
      hoveredTab: null,
      timeouts: {}
    };
  }

  selectTab(idx) {
    this.setState({
      activeTab: idx
    });
  }

  /**
   * Set a small timeout and select the tab after that
   *
   * This method returns the ID of the setTimeout. Callers
   * can save it and cancel it if they wish
   */
  hoverTab(idx) {
    if (this.state.activeTab === idx) {
      return; //don't do anything for the active tab
    }

    var self = this;

    //clear any existing timeouts for this tab
    this.cancelHoverTab(idx);

    var timeoutId = setTimeout(function() {
      //TODO end the flashing animation
      self.setState({
        hoveredTab: null
      });
      self.selectTab(idx);
    }, 500); //select the tab after .5 seconds

    //save the id of the timeout
    this.state.timeouts[idx] = timeoutId;

    //TODO also start a flashing animation
    this.setState({
      hoveredTab: idx
    });
  }
  cancelHoverTab(idx) {
    var timeoutId = this.state.timeouts[idx];
    clearTimeout(timeoutId);

    //clear the hovered tab so that we rerender without a border
    this.setState({
      hoveredTab: null
    });
  }

  render() {
    //TODO THIS SHOULD BE A TOP-LEVEL IMPORT
    var Region = require('../Region');

    var component = this.props.component;

    var self = this;
    var tabs = component.props.tabs.map(function(title, index) {
      var clickThisTab = function() {
        self.selectTab(index);
      };

      var hoverThisTab = function() {
        self.hoverTab(index);
      };

      var cancelHover = function() {
        self.cancelHoverTab(index);
      };

      var classes = "upper ptm pbxs pls prs mrs";
      if (self.state.activeTab === index) {
        classes += " b-tabHeader bbm";
      } else {
        classes += " b-tabHeader-hov bbm-hov";

        if (self.state.hoveredTab === index) {
          //this tab is being hovered while dragging. Show a green border
          classes += " oam o-green";
        }
      }

      return (
        <li className={classes} key={'tab-' + index}>
          <a className="text-body no-under" href="#"
              onClick={clickThisTab.bind(this)}
              onDragEnter={hoverThisTab.bind(this)}
              onDragLeave={cancelHover.bind(this)}>
            {title}
          </a>
        </li>
      );
    });

    var activeTabContents
    if (component.children.length > 0) {
      var activeRegion = component.children[this.state.activeTab];
      activeTabContents = (
          <Region key={'region-' + activeRegion.id}
              regionId={activeRegion.id}
              pageModel={this.props.pageModel}
              selectedComponent={this.props.selectedComponent}
              selectComponent={this.props.selectComponent} />
      );
    } else {
      //TODO should there be a placeholder for when there are no tabs?
      activeTabContents = '';
    }

    return (
      <Component {...this.props} stopDragBubbling={true}>
        <ol className="list-plain list-horz">
          {tabs}
        </ol>
        <section>
          {activeTabContents}
        </section>
      </Component>
    );
  }
}
