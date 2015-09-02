'use strict';
import React from 'react';

export default class SDSCard extends React.Component {
  render() {
    var classes = 'sds-card card--compact mas';
    if (this.props.extraCss) {
      classes += ' ' + this.props.extraCss;
    }

    return (
      <div className={classes}>
        <header className="sds-card__header sds-grid">
          {this.props.header}
        </header>

        <section className="sds-card__body pls prs">
          {this.props.children}
        </section>

        <footer className="sds-card__footer">
          {this.props.footer}
        </footer>
      </div>
    );
  }
}

SDSCard.propTypes = {
  extraCss: React.PropTypes.string,
  header: React.PropTypes.element,
  footer: React.PropTypes.element
};
