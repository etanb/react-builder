import React from 'react';
import Router from 'react-router';
const Link = Router.Link;
const SampleData= require("../../../../../src/data/index.js");

export default class NavLeft extends React.Component {
  renderEachTableRow() {
    let NavItems = SampleData.getByType('navItem');
    let EachDeal = NavItems.map( 
      function (item) {
        if (item.icon === 'lead') {
          return (
            <div className="sds-grid sds-grid--align-center ma-small">
              
                <svg aria-hidden="true" className={"sds-icon sds-icon--medium sds-icon-"+item.iconGroup+"-"+item.icon} dangerouslySetInnerHTML={{__html: '<use xlink:href="assets/icons/'+item.iconGroup+'-sprite/svg/symbols.svg#'+item.icon+'"></use>'}}/>
              
            </div>
          )
        } else {
          return (
            <div className="sds-grid sds-grid--align-center ma-small">
              
                <svg aria-hidden="true" className={"sds-icon sds-icon--medium sds-icon-"+item.iconGroup+"-"+item.icon} dangerouslySetInnerHTML={{__html: '<use xlink:href="assets/icons/'+item.iconGroup+'-sprite/svg/symbols.svg#'+item.icon+'"></use>'}}/>
              
            </div>
          )
        }
      }
    );
    return (
      <tr>{EachDeal}</tr>
    )
  }

  render() {
    return(
      <main className="p200-nav-left sds-theme--inverse ">
        <div className="sds-grid sds-grid--align-center">
          <Link to="/">
            <svg aria-hidden="true" className="sds-icon sds-icon--medium sds-icon-utility-salesforce1 ma-small" dangerouslySetInnerHTML={{__html: '<use xlink:href="assets/icons/utility-sprite/svg/symbols.svg#salesforce1"></use>'}}/>
          </Link>
        </div>
        {this.renderEachTableRow()}
      </main>
    )
  }
};