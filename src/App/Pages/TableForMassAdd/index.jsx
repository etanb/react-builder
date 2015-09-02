import React from 'react';
import Router from 'react-router';
const Link = Router.Link;
import TablesBaseRow from '../../../App/SLDSComponents/Tables/TablesBaseRow'
import SampleData from '../../../../src/data/index.js';

export default class TableForMassAdd extends React.Component {
  renderEachRow() {
    let AllContacts = SampleData.getByType('contact');
    let EachRow = AllContacts.map((contact) => {
      return (
        <TablesBaseRow data={contact}/>
      )
    });
    return EachRow
  }

  addSomething() {
    var test = {
      type: 'contact',
      id: 'c14',
      index:14,
      firstName: 'Blah',
      lastName: 'Blah',
      company: 'Blah',
      title: 'Manager',
      role: 'Key Executive',
      email: 'Blah@Blah.com',
      phone: '415-417-4477',
    };
    SampleData.setByTypeAndId(test.type, test.id, test);
    this.forceUpdate();
  }

  replaceSomething() {
    var test = {
      type: 'contact',
      id: 'c1',
      index:1,
      firstName: 'Blah',
      lastName: 'Blah',
      company: 'Blah',
      title: 'Manager',
      role: 'Key Executive',
      email: 'Blah@Blah.com',
      phone: '415-417-4477',
    };
    SampleData.setByTypeAndId(test.type, test.id, test);
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <table className="sds-table sds-table--bordered">
          <thead>
            <tr>
              <th className="sds-row-select">
                <label className="sds-checkbox" for="select-all">
                  <input type="checkbox" id="select-all" />
                  <span className="sds-checkbox--faux"></span>
                </label>
              </th>
              <th className="sds-is-interactive sds-is-selected">
                <span className="sds-truncate">Opportunity Name</span>
                <button className="sds-button sds-button--icon-bare sds-button--icon-border-small">
                  <svg aria-hidden="true" className="sds-button__icon sds-button__icon--small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>'}}/>
                  <span className="sds-assistive-text">Sort</span>
                </button>
              </th>
              <th className="sds-is-interactive">
                <span className="sds-truncate">Account Name</span>
                <button className="sds-button sds-button--icon-bare sds-button--icon-border-small">
                  <svg aria-hidden="true" className="sds-button__icon sds-button__icon--small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>'}}/>
                  <span className="sds-assistive-text">Sort</span>
                </button>
              </th>
              <th className="sds-is-interactive">
                <span className="sds-truncate">Close Date</span>
                <button className="sds-button sds-button--icon-bare sds-button--icon-border-small">
                  <svg aria-hidden="true" className="sds-button__icon sds-button__icon--small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>'}}/>
                  <span className="sds-assistive-text">Sort</span>
                </button>
              </th>
              <th className="sds-is-interactive">
                <span className="sds-truncate">Stage</span>
                <button className="sds-button sds-button--icon-bare sds-button--icon-border-small">
                  <svg aria-hidden="true" className="sds-button__icon sds-button__icon--small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>'}}/>
                  <span className="sds-assistive-text">Sort</span>
                </button>
              </th>
              <th className="sds-is-interactive">
                <span className="sds-truncate">Confidence</span>
                <button className="sds-button sds-button--icon-bare sds-button--icon-border-small">
                  <svg aria-hidden="true" className="sds-button__icon sds-button__icon--small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>'}}/>
                  <span className="sds-assistive-text">Sort</span>
                </button>
              </th>
              <th className="sds-is-interactive">
                <span className="sds-truncate">Amount</span>
                <button className="sds-button sds-button--icon-bare sds-button--icon-border-small">
                  <svg aria-hidden="true" className="sds-button__icon sds-button__icon--small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>'}}/>
                  <span className="sds-assistive-text">Sort</span>
                </button>
              </th>
              <th className="sds-is-interactive">
                <span className="sds-truncate">Contact</span>
                <button className="sds-button sds-button--icon-bare sds-button--icon-border-small">
                  <svg aria-hidden="true" className="sds-button__icon sds-button__icon--small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>'}}/>
                  <span className="sds-assistive-text">Sort</span>
                </button>
              </th>
              <th className="sds-row-action">
                <button className="sds-button sds-button--icon-border-filled sds-button--icon-border-small">
                  <svg aria-hidden="true" className="sds-button__icon sds-button__icon--hint sds-button__icon--small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>'}}/>
                  <span className="sds-assistive-text">Show More</span>
                </button>
              </th>
            </tr>
          </thead>

          <center>
            <button className="sds-button sds-button--brand sds-button--small"  onClick={this.addSomething.bind(this)}>
              Add/Push Fake Hard-Coded Entry to Bottom of List
            </button>
            <button className="sds-button sds-button--brand sds-button--small"  onClick={this.replaceSomething.bind(this)}>
              Replace 1st Item on List w/ Fake Hard-Coded Entry
            </button>
          </center>

          {this.renderEachRow()}
        </table>
      </div>
    )
  }
}