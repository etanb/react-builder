/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import classNames from 'classnames';

import extend from 'react/lib/Object.assign';
import shallowEqual from 'react/lib/shallowEqual';

/**
 * Traverse all children
 */
function flatMapChildren(children, f) {
  function go(acc, xs, f) {
    return React.Children.map(xs, function(c) {
      return c.type ? go(acc.concat(f(c)), c.props.children, f) : acc;
    });
  }
  return go([], children, f);
}

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} one
 * @param {function} two
 * @returns {function|null}
 */
function createChainedFunction(one, two) {
  let hasOne = typeof one === 'function';
  let hasTwo = typeof two === 'function';

  if (!hasOne && !hasTwo) { return null; }
  if (!hasOne) { return two; }
  if (!hasTwo) { return one; }

  return function chainedFunction() {
    one.apply(this, arguments);
    two.apply(this, arguments);
  };
}

export default createChainedFunction;


/**
 * Perhaps there's a more pragmatic way to do this. Eventually, I suspect we'll have some utils to help find children.
 */
function hasChild(children, name) {
  var flag = false;
  flatMapChildren(children, function(c) {
    flag = flag || c.type.name === name;
  });
  return flag;
}

/**
 * Currently there are issues with context regarding parent/owner: https://github.com/facebook/react/issues/3392
 * I'm using this while I search for a better solution because I've spent way too much time on this already.
 * Router uses a wrapper, but I haven't gotten it to work here. https://github.com/rackt/react-router/blob/master/modules/components/ContextWrapper.js
 */
function renderChildrenWithFakeContext(children, opts={}) {
  return React.Children.map(children, function(c) {
    return React.addons.cloneWithProps(c, opts);
  });
}

const installMethods = {
  /**
   * Return a string with the provided className string
   * combined with this.props.className
   *
   * @return {string}
   */
  getClassName() {
    let args = Array.prototype.slice.call(arguments);
    args = args.concat(this.props.className);
    return classNames.apply(null, args);
  },

  /**
   * Return a string with the provided classNameBase with a flavor modifier
   * combined with this.props.className
   *
   * @param {string} classNameBase
   * @return {string}
   */
  getClassNameWithFlavor(classNameBase, options={}) {
    if (typeof classNameBase !== 'string') {
      throw new Error('"classNameBase" must be a string');
    }
    options = extend({}, {
      // The key from this.props to extract the flavors
      prop: 'flavor',
      // Include this.props.className in the returned value
      includeClassName: true,
      // Any additional classes to be addeed in the returned value
      additionalClassName: false
    }, options);
    const flavor = this.props[options.prop];
    const className = options.includeClassName
      ? this.props.className
      : '';
    const flavors = flavor ? flavor.split(',').map(f => {
      return `${classNameBase}--${f}`;
    }) : '';
    return classNames(
      classNameBase, flavors, className, options.additionalClassName
    );
  },

  getClassNameWithVisiblity(ns) {
    let vis = this.props.visible || true;
    return this.$getClassName(ns, vis ? 'is-visible' : 'is-hidden');
  },

  /**
   * Return a copy of this.props without the specified keys
   *
   * @prop {...String} keys
   * @returns {Object}
   */
  propsWithoutKeys(...keys) {
    let target = {};
    for (let i in this.props) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(this.props, i)) continue;
      target[i] = this.props[i];
    }
    return target;
  }
};

/**
 * Install helper methods on the provided context
 *
 * @param {object} context - The object to install the methods
 * @param {array} [methods] - By default, all methods will be installed,
 *  unless an array of methods is provided
 *
 * class Component extends React.Component {
 *   constructor(props) {
 *     super(props);
 *     // Install all methods
 *     componentUtil.install(this);
 *     // Or only install select methods
 *     //componentUtil.install(this, ['getClassName']);
 *   }
 * }
 *
 */
function install(context, methods) {
  if (typeof context !== 'object') {
    throw new Error('"context" must be an object');
  }
  if (typeof methods === 'undefined') {
    methods = Object.keys(installMethods);
  }
  if (!Array.isArray(methods)) {
    throw new Error('"methods" must be an array');
  }
  methods.forEach(method => {
    const hastMethod = installMethods.hasOwnProperty(method);
    const isFunction = typeof installMethods[method] === 'function';
    if (!hastMethod || !isFunction) {
      throw new Error(`"${method}" is not a valid util method`);
    }
    // Add the method prefixed with a "$" and bind it to the context
    context[`$${method}`] = installMethods[method].bind(context);
  });
}

const PropTypes = {

  /**
   * Verify that a component has valid flavors
   *
   * @param {...string} flavor
   * @returns {function}
   *
   * @example
   * Component.propTypes = {
   *   flavor: componentUtil.PropTypes.flavor(
   *      'brand', 'inverse', 'stateful', 'hint', 'small'
   *   )
   * };
   *
   * <Button flavor="brand" />
   * <Button flavor="brand,small" />
   */
  flavor() {
    const validFlavors = Array.prototype.slice.call(arguments);
    return function(props, propName, componentName) {
      const flavor = props[propName];
      if (typeof flavor !== 'undefined' && typeof flavor !== 'string') {
        return new Error(`"${propName}" must be a string"`);
      }
      if (typeof flavor === 'string') {
        const flavors = flavor.split(',');
        const invalidFlavors = flavors.filter(f => {
          return validFlavors.indexOf(f) === -1;
        });
        if (invalidFlavors.length > 0) {
          return new Error(`
            "${invalidFlavors[0]}" is not a valid ${componentName} flavor.
          `);
        }
      }
    };
  }

};

export default {
  install,
  PropTypes,
  createChainedFunction,
  flatMapChildren,
  hasChild,
  renderChildrenWithFakeContext
};

