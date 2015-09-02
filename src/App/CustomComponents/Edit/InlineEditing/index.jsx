import React from 'react';
const SampleData= require("../../../../../src/data/index.js");
let TeslaMockData = SampleData.getByTypeAndId('lead', 'l01');
let newObj = {};

module.exports = React.createClass ({
  getInitialState() {
    return { 
      showInlineEdit: false, 
      editMode: false,
      togglePicklist: false,
      togglePicklistReason: false
    }
  },

  onClickToInlineEdit () {
    this.props.onClickEditMode(); //props from parent
    this.setState({ 
      showInlineEdit: !this.state.showInlineEdit,
    });
  },

  togglePicklist() {
    this.setState({
      togglePicklist: !this.state.togglePicklist
    })
  },
  
  togglePicklistReason(event) {
    if (this.state.togglePicklist || this.state.togglePicklistReason) {
      this.setState({
        togglePicklist: false,
        togglePicklistReason: false
      })
    }
    if (!this.state.togglePicklistReason) {
      this.setState({
        togglePicklistReason: !this.state.togglePicklistReason
      })
    }
  },

  testthisshit(event) {
    newObj['info'] = {
      'leadStatusReason': {
        'content': event.target.innerHTML
      },
      
      'leadStatus': {
        'leadStatusReason': {
          content: event.target.innerHTML
        },
      }
    }
    SampleData.setByTypeAndId('lead', 'l01', newObj);
    this.forceUpdate();
  },

  fakeupdate(event) {
    if (document.getElementById('leadstatus')) {
      document.getElementById('leadstatus').innerHTML = event.target.innerHTML;
    }
    this.togglePicklist();
  },

  handleChange(event) {
    if (this.props.inlineEditType === 'multi-name' ) {
      newObj[this.props.field] = {
        'titleName': {
          'content': React.findDOMNode(this.refs.titleName).value
        },
        'firstName': {
          'content': React.findDOMNode(this.refs.firstName).value
        },
        'lastName': {
          'content': React.findDOMNode(this.refs.lastName).value
        }
      }
    }
    if (this.props.inlineEditType === 'single') {
      newObj['info'] = {
        [this.props.field]: {
          'content': event.target.innerHTML || event.target.value
        }
      }
      this.togglePicklist();
    }
    if (this.props.inlineEditType === 'multi-picklist') {
      newObj['info'] = {
        [this.props.field]: {
          'content': event.target.innerHTML || event.target.value
        }
      }
      SampleData.setByTypeAndId('lead', 'l01', newObj);
      this.forceUpdate();
      this.togglePicklist();
    }
    if (this.props.inlineEditType === 'multi-address') {
      newObj['communication'] = {
        [this.props.field]: {
          'address1': {
            'street_address': React.findDOMNode(this.refs.street_address).value,
            'city': React.findDOMNode(this.refs.city).value,
            'state': React.findDOMNode(this.refs.state).value,
            'zip': React.findDOMNode(this.refs.zip).value,
            'country': React.findDOMNode(this.refs.country).value
          }
        }
      }
    }
    if (this.props.inlineEditType === 'multi-phone') {
      newObj['communication'] = {
        'phone': {
          [this.props.field]: {
            'content1': React.findDOMNode(this.refs.content1).value,
            'content2': React.findDOMNode(this.refs.content1).value,
            'content3': React.findDOMNode(this.refs.content1).value
          }
        }
      }
    }
    this.props.onValueChange(newObj);
  },

  render () {
    // debugger
    if (this.state.showInlineEdit && this.props.inlineEditType === 'multi-name') {
      return (
        <div>
          <div className="p200 sds-grid sds-wrap">
            <div className="sds-col sds-size--1-of-1 sds-grid sds-grid--align-center">
              <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--6-of-12">
                <label className="sds-form-element__label sds-form-element__label--small" for="titleName">Salutation</label>
                <div className="sds-form-element__control pr-small">
                  <input id="titleName" className="sds-input" type="text" 
                    defaultValue={this.props.content.titleName.content} 
                    onBlur={this.handleChange} 
                    ref="titleName"/>
                </div>
              </section>
              <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--6-of-12">
                <label className="sds-form-element__label sds-form-element__label--small" for="firstName">First Name</label>
                <div className="sds-form-element__control">
                  <input id="firstName" className="sds-input" type="text" 
                    defaultValue={this.props.content.firstName.content} 
                    onBlur={this.handleChange} 
                    ref="firstName"/>
                </div>
              </section>
            </div>
            <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--6-of-12 mt-small">
              <label className="sds-form-element__label sds-form-element__label--small" for="lastName">Last Name</label>
              <div className="sds-form-element__control pr-small">
                <input id="lastName" className="sds-input" type="text" 
                  defaultValue={this.props.content.lastName.content} 
                  onBlur={this.handleChange} 
                  ref="lastName"/>
              </div>
            </section>
          </div>
          <svg aria-hidden="true" className="sds-icon sds-icon--large sds-icon-utility-undo ml-small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#undo"></use>'}} 
              onClick={this.onClickToInlineEdit} 
              style={{
                float: 'right', 
                position: 'absolute',
                right: '5px',
                top: '1rem'}}/>
        </div>
      )
    } else if (this.state.showInlineEdit && this.props.inlineEditType === 'multi-phone') {
      return (
        <span>
          <input type="text" 
            className="sds-input mr-small" 
            style={{width: '28%'}} 
            defaultValue={this.props.children.content1} 
            onBlur={this.handleChange} 
            ref="content1"/>
          <input type="text" 
            className="sds-input mr-small" 
            style={{width: '30%'}} 
            defaultValue={this.props.children.content2} 
            onBlur={this.handleChange} 
            ref="content2"/>
          <input type="text" 
            className="sds-input" 
            style={{width:'30%'}} 
            defaultValue={this.props.children.content3} 
            onBlur={this.handleChange} 
            ref="content3"/>
          <svg aria-hidden="true" className="sds-icon sds-icon--large sds-icon-utility-undo ml-small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#undo"></use>'}} 
              onClick={this.onClickToInlineEdit} 
              style={{
                float: 'right', 
                position: 'absolute',
                right: '5px',
                top: '0rem'}}/>
        </span>
      )
    } else if (this.state.showInlineEdit && this.props.inlineEditType === 'multi-address') {
      return (
        <span>

          <div className="p200 sds-grid sds-wrap">
            <section className="sds-col sds-size--2-of-2 sds-medium-size--6-of-6 sds-large-size--12-of-12">
              <label className="sds-form-element__label sds-form-element__label--small" for="titleName">Street</label>
              <div className="sds-form-element__control pr-small">
                <input id="titleName" className="sds-input" type="text" 
                  defaultValue={this.props.content.street_address} 
                  onBlur={this.handleChange} 
                  ref="street_address"/>
              </div>
            </section>
            <div className="sds-col sds-size--1-of-1 sds-grid sds-grid--align-center mt-small">
              <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--7-of-12">
                <label className="sds-form-element__label sds-form-element__label--small" for="firstName">City</label>
                <div className="sds-form-element__control mr-small">
                  <input id="firstName" className="sds-input" type="text" 
                    defaultValue={this.props.content.city} 
                    onBlur={this.handleChange} 
                    ref="city"/>
                </div>
              </section>
              <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--6-of-12">
                <label className="sds-form-element__label sds-form-element__label--small" for="lastName">State</label>
                <div className="sds-form-element__control pr-small">
                  <input id="lastName" className="sds-input" type="text" 
                    defaultValue={this.props.content.state} 
                    onBlur={this.handleChange} 
                    ref="state"/>
                </div>
              </section>
            </div>
            <div className="sds-col sds-size--1-of-1 sds-grid sds-grid--align-center mt-small">
              <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--7-of-12">
                <label className="sds-form-element__label sds-form-element__label--small" for="firstName">Zip Code</label>
                <div className="sds-form-element__control mr-small">
                  <input id="firstName" className="sds-input" type="text" 
                    defaultValue={this.props.content.zip} 
                    onBlur={this.handleChange} 
                    ref="zip"/>
                </div>
              </section>
              <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--6-of-12">
                <label className="sds-form-element__label sds-form-element__label--small" for="lastName">Country</label>
                <div className="sds-form-element__control pr-small">
                  <input id="lastName" className="sds-input" type="text" 
                    defaultValue={this.props.content.country} 
                    onBlur={this.handleChange} 
                    ref="country"/>
                </div>
              </section>
            </div>
          </div>

          <svg aria-hidden="true" className="sds-icon sds-icon--large sds-icon-utility-undo ml-small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#undo"></use>'}} 
              onClick={this.onClickToInlineEdit} 
              style={{
                float: 'right', 
                position: 'absolute',
                right: '5px',
                top: '0rem'}}/>
        </span>
      )
    } else if (this.state.showInlineEdit && this.props.inlineEditType === 'single') {
      return (
        <span>
          <input type="text" 
            className="sds-input" 
            defaultValue={this.props.children.content} 
            onBlur={this.handleChange} 
            ref="content"/>
          <svg aria-hidden="true" className="sds-icon sds-icon--large sds-icon-utility-undo ml-small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#undo"></use>'}} 
              onClick={this.onClickToInlineEdit} 
              style={{
                float: 'right', 
                position: 'absolute',
                right: '5px',
                top: '0rem'}}/>
        </span>
      )
    } else if (this.state.showInlineEdit && this.props.inlineEditType === 'multi-picklist') {
      let showorhide = this.state.togglePicklist ? 'sds-shown' : 'sds-hidden';
      let showorhideReason = this.state.togglePicklistReason ? 'sds-shown' : 'sds-hidden';
      let erroronleadstatus = this.props.field === 'leadStatus' ? "leadstatus" : '';
      let displayReasonPicklist = this.props.field === 'leadOwner' || this.props.field === 'rating' ? null : <div className="sds-form-element mt-small">
              <div className="sds-form-element">
                <div aria-expanded="true" className="sds-picklist">
                  <label className="sds-form-element__label sds-form-element__label--small" for="">Reason</label>
                  <div className="sds-form-element__control pr-small" onClick={this.togglePicklistReason}>
                    <span tabindex="0" className="sds-picklist__label" aria-haspopup="true" style={{width: '350px'}}>
                        <span ref="reason" id="leadstatusreason">
                          {this.props.content.leadStatusReason.content}
                        </span>
                      <svg aria-hidden="true" className="sds-icon" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>'}}/>
                    </span>
                    <ul className={`sds-picklist__options ${showorhideReason}`} style={{
                      position: 'absolute', 
                      zIndex: '1'}}>
                      <li id="po-0-0" className="sds-picklist__options-item" aria-selected="false" tabindex="0" role="option">
                        <span onClick={this.testthisshit}>None</span>
                      </li>
                      <li id="po-0-0" className="sds-picklist__options-item" aria-selected="false" tabindex="0" role="option">
                        <span onClick={this.testthisshit}>Not Interested</span>
                      </li>
                      <li id="po-1-1" className="sds-picklist__options-item" aria-selected="false" tabindex="-1" role="option">
                        <span onClick={this.testthisshit}>Other</span>
                      </li>
                    </ul>
                    <div id="leadstatusreasonerror" className="mt-small"/>
                  </div>
                </div>
              </div>
            </div>;
      return (
        <div className="anchor-edit-spike pa-small">
          <div className="sds-form-element">
            <div className="sds-form-element">
              <div aria-expanded="true" className="sds-picklist">
                <span tabindex="0" className="sds-picklist__label" aria-haspopup="true" style={{
                    width: '350px'
                  }} onClick={this.togglePicklist}>
                    <span id="leadstatus">{this.props.content.content || 'Jason Dewar'}</span>
                  <svg aria-hidden="true" className="sds-icon" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>'}}/>
                </span>
                <ul className={`sds-picklist__options ${showorhide}`} style={{
                    position: 'absolute', 
                    zIndex: '1'}}>
                  <li id="po-0-0" className="sds-picklist__options-item" aria-selected="false" tabindex="0" role="option">
                    <span onClick={this.fakeupdate}>New</span>
                  </li>
                  <li id="po-1-1" className="sds-picklist__options-item" aria-selected="false" tabindex="-1" role="option">
                    <span onClick={this.fakeupdate}>Contacted</span>
                  </li>
                  <li id="po-1-1" className="sds-picklist__options-item" aria-selected="false" tabindex="-1" role="option">
                    <span onClick={this.fakeupdate}>Qualified</span>
                  </li>
                  <li id="po-2-2" className="sds-picklist__options-item" aria-selected="false" tabindex="-1" role="option">
                    <span onClick={this.fakeupdate}>Unqualified</span>
                  </li>
                  <li id="po-3-3" className="sds-picklist__options-item" aria-selected="false" tabindex="-1" role="option">
                    <span onClick={this.fakeupdate}>Other</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            {displayReasonPicklist}
          <svg aria-hidden="true" className="sds-icon sds-icon--large sds-icon-utility-undo ml-small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#undo"></use>'}} 
              onClick={this.onClickToInlineEdit} 
              style={{
                float: 'right', 
                position: 'absolute',
                right: '5px',
                top: '0.5rem'}}/>
        </div>
      )
    } else {
      let content;
      if (this.props.inlineEditType === 'multi-name') {
        content = <span>
          {this.props.content.titleName.content} {this.props.content.firstName.content} {this.props.content.lastName.content}
        </span>
      } else if (this.props.inlineEditType === 'multi-address') {
        content = <span>
          {this.props.content.street_address}<br/>
          {this.props.content.city}, {this.props.content.state} {this.props.content.zip}<br/>
          {this.props.content.country}
        </span>
      } else if (this.props.inlineEditType === 'multi-phone') {
        content = <span>({this.props.children.content1}) {this.props.children.content2} - {this.props.children.content3}</span>
      } else if (this.props.inlineEditType === 'multi-picklist' && this.props.field === "leadOwner") {
        content = <span>Jason Dewar</span>
      } else {
        content = <span>{this.props.children.content}</span>
      }
      return (
        <div onDoubleClick={this.onClickToInlineEdit}>
          {content}
          <svg aria-hidden="true" className="sds-icon sds-icon--large sds-icon-utility-edit ml-small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>'}} 
              onClick={this.onClickToInlineEdit} style={{float: 'right'}} />
        </div>
      )
    }
  }
});