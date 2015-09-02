import React from 'react';
import Router from 'react-router';
import ModalBase from '../../../App/SLDSComponents/Modal/Base';
import TablesBase from '../../../App/SLDSComponents/Tables/Base';
import TableForMassAdd from '../../Pages/TableForMassAdd';
import SampleData from '../../../../src/data/index.js';
let TeslaMockData = SampleData.getByType('lead');
let ContactList = SampleData.getByType('contact')

let FilterGroups = React.createClass({

    getInitialState(){
      return { searchString: '' };
    },

    handleChange(e){
      this.setState({searchString:e.target.value});
    },

    render() {
      let ContactList = this.props.items;
      let searchString = this.state.searchString.trim().toLowerCase();

      if(searchString.length > 0){
        ContactList = ContactList.filter(function(l){
          return l.company.toLowerCase().match( searchString );
        });
      }

      let renderEachRow = function() {
        let EachRow = ContactList.map(function(l){
          return <li>{l.company}</li>
        });
        return EachRow
      }

      return (
        <div>
          <input id="text-input" className="sds-input" type="text" aria-label="text-input" placeholder="Search Salesforce" label="Text Input" value={this.state.searchString} onChange={this.handleChange} />
          <ul>
            {renderEachRow()}
          </ul>
        </div>
      )
    }
});

export default class ModalForMassAdd extends React.Component {
  render() {
    let showorhideReason = 'sds-hidden';
    return (
      <div className="modalBaseOne">
        <ModalBase {...this.props}>
          <form role="form" className="sds-form--stacked sds-grid sds-wrap sds-m-top--large">
            <div style={{width: '100%'}}>
              <div className="sds-col sds-size--1-of-1 sds-grid sds-grid--align-center">
                <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--6-of-12 pa-medium">
                  <div className="sds-form-element">
                    <div aria-expanded="true" className="sds-picklist">
                      <label className="sds-form-element__label sds-form-element__label--small" for="">Lead Owner</label>
                      <div className="sds-form-element__control" onClick={this.togglePicklistReason}>
                        <span tabindex="0" className="sds-picklist__label" aria-haspopup="true" style={{width: '100%'}}>
                            <span ref="reason" id="leadstatusreason">
                              Unqualified
                            </span>
                          <svg aria-hidden="true" className="sds-icon" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>'}}/>
                        </span>
                        <ul className={`sds-picklist__options ${showorhideReason}`} style={{
                          position: 'absolute', 
                          zIndex: '1'}}>
                          <li id="po-0-0" className="sds-picklist__options-item" aria-selected="false" tabindex="0" role="option">
                            <span>None</span>
                          </li>
                          <li id="po-0-0" className="sds-picklist__options-item" aria-selected="false" tabindex="0" role="option">
                            <span>Not Interested</span>
                          </li>
                          <li id="po-1-1" className="sds-picklist__options-item" aria-selected="false" tabindex="-1" role="option">
                            <span>Other</span>
                          </li>
                        </ul>
                        <div id="leadstatusreasonerror" className="mt-small"/>
                      </div>
                    </div>
                  </div>
                  <hr/>
                  <label className="sds-form-element__label" for="Opportunity-Name">
                    Name
                  </label>
                  <div className="sds-form-element">
                    <div className="sds-form-element__control">
                      <label className="sds-form-element__label sds-form-element__label--small" for="titleName">Salutation</label>
                      <div className="sds-form-element__control">
                        <input id="titleName" className="sds-input" type="text"/>
                      </div>
                      <label className="sds-form-element__label sds-form-element__label--small" for="lastName">First Name</label>
                      <div className="sds-form-element__control">
                        <input id="firstName" className="sds-input" type="text"/>
                      </div>
                      <label className="sds-form-element__label sds-form-element__label--small" for="lastName">Last Name</label>
                      <div className="sds-form-element__control">
                        <input id="lastName" className="sds-input" type="text"/>
                      </div>
                    </div>
                  </div>
                  <hr/>
                  <div className="sds-form-element">
                    <label className="sds-form-element__label" for="Opportunity-Name">
                      Company
                    </label>
                    <div className="sds-form-element__control">
                      <input id="Opportunity-Name" className="sds-input" type="text" placeholder="Bob's Burgers"/>
                    </div>
                  </div>
                  <div className="sds-form-element">
                    <label className="sds-form-element__label" for="Opportunity-Name">
                      Title
                    </label>
                    <div className="sds-form-element__control">
                      <input id="Opportunity-Name" className="sds-input" type="text" placeholder="Owner"/>
                    </div>
                  </div>
                </section>
                <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--6-of-12 pa-medium">
                  <div className="sds-form-element">
                    <label className="sds-form-element__label" for="Opportunity-Name">
                      Business Address
                    </label>
                    <div className="sds-form-element__control">
                      <div className="p200 sds-grid sds-wrap">
                        <section className="sds-col sds-size--2-of-2 sds-medium-size--6-of-6 sds-large-size--12-of-12">
                          <label className="sds-form-element__label sds-form-element__label--small" for="titleName">Street</label>
                          <div className="sds-form-element__control pr-small">
                            <input id="titleName" className="sds-input" type="text"/>
                          </div>
                        </section>
                        <div className="sds-col sds-size--1-of-1 sds-grid sds-grid--align-center mt-small">
                          <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--7-of-12">
                            <label className="sds-form-element__label sds-form-element__label--small" for="firstName">City</label>
                            <div className="sds-form-element__control mr-small">
                              <input id="firstName" className="sds-input" type="text"/>
                            </div>
                          </section>
                          <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--6-of-12">
                            <label className="sds-form-element__label sds-form-element__label--small" for="lastName">State</label>
                            <div className="sds-form-element__control pr-small">
                              <input id="lastName" className="sds-input" type="text"/>
                            </div>
                          </section>
                        </div>
                        <div className="sds-col sds-size--1-of-1 sds-grid sds-grid--align-center mt-small">
                          <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--7-of-12">
                            <label className="sds-form-element__label sds-form-element__label--small" for="firstName">Zip Code</label>
                            <div className="sds-form-element__control mr-small">
                              <input id="firstName" className="sds-input" type="text" 
                                defaultValue="" 
                                onBlur={this.handleChange} 
                                ref="zip"/>
                            </div>
                          </section>
                          <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--6-of-12">
                            <label className="sds-form-element__label sds-form-element__label--small" for="lastName">Country</label>
                            <div className="sds-form-element__control pr-small">
                              <input id="lastName" className="sds-input" type="text" 
                                defaultValue="" 
                                onBlur={this.handleChange} 
                                ref="country"/>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr/>
                  <div className="sds-form-element">
                    <label className="sds-form-element__label" for="Account-Name">
                      Lead Status
                    </label>
                    <div className="sds-form-element__control">
                      <input id="Account-Name" className="sds-input" type="text" placeholder=""/>
                    </div>
                  </div>
                  <div className="sds-form-element">
                    <label className="sds-form-element__label" for="Account-Name">
                      Rating
                    </label>
                    <div className="sds-form-element__control">
                      <input id="Account-Name" className="sds-input" type="text" placeholder="Junk Yield"/>
                    </div>
                  </div>
                  <div className="sds-form-element">
                    <label className="sds-form-element__label" for="Account-Name">
                      Business
                    </label>
                    <div className="sds-form-element__control">
                      <input id="Account-Name" className="sds-input" type="text" placeholder="(800) 981 - 0125"/>
                    </div>
                  </div>
                  <div className="sds-form-element">
                    <label className="sds-form-element__label" for="Account-Name">
                      Mobile
                    </label>
                    <div className="sds-form-element__control">
                      <input id="Account-Name" className="sds-input" type="text" placeholder="(415) 312 - 0979"/>
                    </div>
                  </div>
                  <div className="sds-form-element">
                    <label className="sds-form-element__label" for="Account-Name">
                      Website
                    </label>
                    <div className="sds-form-element__control">
                      <input id="Account-Name" className="sds-input" type="text" placeholder="http://www.bobsburgersonthewarf.com"/>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </form>
          {/*<div className="searchBar sds-grid sds-grid--align-center"> 
            <div className="sds-form--inline">
              <div className="sds-form-element">
                <label className="form-element__label mr-small" for="text-input">
                  Find Users:
                </label>
                <div className="sds-form-element__control">
                  <input id="text-input" className="sds-input" type="text" aria-label="text-input" placeholder="Search Salesforce" label="Text Input" />

                </div>
                <button className="sds-button sds-button--neutral sds-button--small ml-small mr-small">
                  Search
                </button>
                <button className="sds-button sds-button--neutral sds-button--small">
                  Select Present Team
                </button>
              </div>
            </div>
          </div>
          <FilterGroups items={ ContactList } />*/}
          {/*<TablesBase type="lead" data={TeslaMockData}/>*/}
        </ModalBase>
      </div>
    )
  }
}