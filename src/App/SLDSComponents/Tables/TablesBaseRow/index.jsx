import React from 'react';
import Router from 'react-router';
const Link = Router.Link;
// const SampleData= require("../../../../../src/data/index.js");
const InlineTableEditingListView = require('../../../../App/CustomComponents/Edit/EditListView');

export default class TablesBaseRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false }
  }

  onClickEditMode(event) { this.setState({ editMode: true }); }
  onClickCancelEditMode(event) { this.setState({ editMode: false }); }

  changeInput(event) {
    // SampleData.setByTypeAndId('lead', 'l01', event);
    // this.forceUpdate();
  }

  render() {
    return (
      <tbody>
        <tr className="sds-hint-parent">
          <td className="sds-row-select">
            <label className="sds-checkbox" for="select-row">
              <input type="checkbox" id="select-row" />
              <span className="sds-checkbox--faux"></span>
            </label>
          </td>
          <td data-label="confidence">
            <InlineTableEditingListView 
              inlineEditType="multi-name" 
              field="name" 
              onValueChange={this.changeInput.bind(this)} 
              onClickCancelEditMode={this.onClickCancelEditMode.bind(this)} 
              onClickEditMode={this.onClickEditMode.bind(this)} {...this.props}>
              <span className="sds-truncate">
                <Link to="RecordHome" params={{'type': this.props.data.type, 'sfid': this.props.data.id}}>
                  {this.props.data.name.titleName.content} {this.props.data.name.firstName.content} {this.props.data.name.lastName.content}
                </Link>
              </span>
            </InlineTableEditingListView>
          </td>
          <td data-label="confidence">
            <InlineTableEditingListView 
              inlineEditType="single-company" 
              field="company" 
              onValueChange={this.changeInput.bind(this)} 
              onClickCancelEditMode={this.onClickCancelEditMode.bind(this)} 
              onClickEditMode={this.onClickEditMode.bind(this)} {...this.props}>
              <span className="sds-truncate">
                {this.props.data.info.company.content}
              </span>
            </InlineTableEditingListView>
          </td>
          <td data-label="confidence">
            <InlineTableEditingListView 
              inlineEditType="multi-address" 
              field="address" 
              onValueChange={this.changeInput.bind(this)} 
              onClickCancelEditMode={this.onClickCancelEditMode.bind(this)} 
              onClickEditMode={this.onClickEditMode.bind(this)} {...this.props}>
              <span className="sds-truncate">
                {this.props.data.communication.address.address1.street_address} {this.props.data.communication.address.address1.city}, {this.props.data.communication.address.address1.state} {this.props.data.communication.address.address1.zip}
              </span>
            </InlineTableEditingListView>
          </td>
          <td data-label="confidence">
            <InlineTableEditingListView 
              inlineEditType="single-email" 
              field="email" 
              onValueChange={this.changeInput.bind(this)} 
              onClickCancelEditMode={this.onClickCancelEditMode.bind(this)} 
              onClickEditMode={this.onClickEditMode.bind(this)} {...this.props}>
              <span className="sds-truncate">
                {this.props.data.communication.email.content}
              </span>
            </InlineTableEditingListView>
          </td>
          <td data-label="confidence">
            <InlineTableEditingListView 
              inlineEditType="multi-phone" 
              field="phone" 
              onValueChange={this.changeInput.bind(this)} 
              onClickCancelEditMode={this.onClickCancelEditMode.bind(this)} 
              onClickEditMode={this.onClickEditMode.bind(this)} {...this.props}>
              <span className="sds-truncate">
                ({this.props.data.communication.phone.phone1.content1}) {this.props.data.communication.phone.phone1.content2} - {this.props.data.communication.phone.phone1.content3}
              </span>
            </InlineTableEditingListView>
          </td>
          <td data-label="confidence">
            <InlineTableEditingListView 
              inlineEditType="multi-picklist" 
              field="leadStatus" 
              onValueChange={this.changeInput.bind(this)} 
              onClickCancelEditMode={this.onClickCancelEditMode.bind(this)} 
              onClickEditMode={this.onClickEditMode.bind(this)} {...this.props}>
              <span className="sds-truncate">
                {this.props.data.info.leadStatus.content}
              </span>
            </InlineTableEditingListView>
          </td>
          <td className="sds-row-action">
            <button className="sds-button sds-button--icon-border-filled sds-button--icon-border-small">
              <svg aria-hidden="true" className="sds-button__icon sds-button__icon--hint sds-button__icon--small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>'}}/>
              <span className="sds-assistive-text">Show More</span>
            </button>
          </td>
        </tr>
      </tbody>
    )
  }
}