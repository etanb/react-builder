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

const TIMING_MAP_SECS = {
  'instantly': 0,
  'quickly': 0.1,
  'promptly': 0.2,
  'slowly': 0.4,
  'paused': 3.2
};
const TIMING_MAP_FRAMES = {
  'instantly': 0,
  'quickly': 6,
  'promptly': 12,
  'slowly': 24,
  'paused': 192
};

class ToggleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOn: false};
  }

  onClick(e) {
    e.stopPropagation();

    const {toggle, title} = this.props;

    if (this._isAnimating) return;

    if (toggle) {
      this._isAnimating = true;
      this.setState({ isOn: !this.state.isOn });
      setTimeout(() => {
        this._isAnimating = null;
      }, TIMING_MAP_SECS.promptly * 1000);
    } else {
      this._isAnimating = true;
      this.setState({ isOn: true });
      setTimeout(() => {
        this.setState({ isOn: false });
      }, TIMING_MAP_SECS.promptly * 1000);
      setTimeout(() => {
        this._isAnimating = null;
      }, TIMING_MAP_SECS.promptly * 1000 * 2);
    }
  }

  render() {
    const {which, title, description} = this.props;
    const className = classNames('site-mass__example-tile', {
      [`site-mass__${which}-example`]: which,
      [`site-mass__${which}-example--on`]: this.state.isOn === true
    });

    return <dd className="col--padded size--1-of-1 medium-size--1-of-2 large-size--1-of-3">
      <div className="site-mass__example-frame" onClick={this.onClick.bind(this)}>
        <div className={className}>
          <span>Abc</span>
        </div>
        <div className="site-mass__example-title">
          <button onClick={this.onClick.bind(this)}>
            {title}
          </button>
        </div>
        <div className="site-mass__example-description">
          {description}
        </div>
      </div>
    </dd>;
  }
}
ToggleExample.displayName = 'ToggleExample';
ToggleExample.propTypes = {
  which: React.PropTypes.string,
  title: React.PropTypes.string,
  description: React.PropTypes.string
};

module.exports = ToggleExample;
