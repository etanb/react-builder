import React from 'react';
import Router from 'react-router';
const Link = Router.Link;
import DropdownActionOverflow from '../../Dropdowns/ActionOverflow'
import CardCompactHeader from './Header'
import CardCompactContent from './Content'
import CardCompactFooter from './Footer'

export default class CardCompact extends React.Component {
  render() {
    
    return (
      <div className="sds-card card--compact">
        <CardCompactHeader {...this.props}/>
        <CardCompactContent {...this.props}/>
        <CardCompactFooter {...this.props}/>
      </div>
    )
  }
}