import React from 'react';
import Router from 'react-router';
const Link = Router.Link;

export default class CardCompactFooter extends React.Component {
  render () {
    return (
      <footer className="sds-card__footer">
        <Link to={this.props.linkto} params={{'type': 'Lead'}}>View All</Link>
      </footer>
    )
  }
}