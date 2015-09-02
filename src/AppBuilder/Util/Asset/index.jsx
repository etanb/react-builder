'use strict';
import React from 'react';

export default class Svg extends React.Component {
  getIconSet() {
    var renderImg = this.renderImg.bind(this);
    var renderIcon = this.renderIcon.bind(this);

    return {
      "appBuilderIcon" : renderImg("assets/icons/app-builder/builder.svg"),
      "cmpIcon" : function(cmpIconKey) {
        if (!cmpIconKey) {
          cmpIconKey = 'default';
        }
        return renderImg("assets/icons/app-builder/componentIcons/" + cmpIconKey + ".svg");
      },
      "cmpBody" : function(arg1, arg2) {
        var transparent;
        var cmpIconKey;
        if (arg1 === 'transparent') {
          transparent = true;
          cmpIconKey = arg2;
        } else {
          transparent = false;
          cmpIconKey = arg1;
        }

        var folder = "assets/icons/app-builder/componentBodies/";
        if (transparent) {
          folder += "transparent/";
        }

        return renderImg(folder + cmpIconKey + ".png");
      },
      "formFactor" : {
        "phone": renderIcon('utility', 'phone_portrait'),
        "tablet": renderIcon('utility', 'tablet_portrait'),
        "tablet-land": renderIcon('utility', 'tablet_landscape'),
        "desktop": renderIcon('utility', 'desktop')
      },
      "util" : function(symbol) {
        return renderIcon('utility', symbol);
      }
    };
  };

  renderIcon(sprite, symbol) {
    var href = `/assets/icons/${sprite}-sprite/svg/symbols.svg#${symbol}`;
    var use = `<use xlink:href="${href}"></use>`;

    //TODO this should really use the SVGIcon component, but that's
    // not adding the CSS that it should
    return (
      <svg aria-hidden={true}
          className={this.props.extraCss}
          dangerouslySetInnerHTML={{__html: use}} />
    );
  };

  renderImg(url) {
    return <img src={url}
              draggable="false"
              className={this.props.extraCss}
              alt={this.props.iconKey}/>;
  }

  lookup() {
    var key = this.props.iconKey;
    key = key.split(".");

    var lookup = this.getIconSet();
    for (var i = 0; i < key.length; i++) {
      //look up the url in our static map
      lookup = lookup[key[i]];

      //check if we got to a function instead of more maps
      if (typeof lookup === 'function') {
        //return the result of the function when calling it on the
        //rest of the input key
        var restOfKey = key.slice(i + 1);
        return lookup.apply(this, restOfKey);
      }
    }

    return lookup;
  }

  render() {
    return this.lookup();
  }
}

Svg.propTypes = {
  iconKey: React.PropTypes.string.isRequired,
  extraCss: React.PropTypes.string
};
