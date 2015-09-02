import React from 'react';
import TileAuthor from '../../../../App/SLDSComponents/Tile/Author';
import BulkSaveAndCancel from './BulkSaveAndCancel';
let newObj = {};

export default class RecordHomeDetailsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    }
  }

  changeInput(event) { newObj = event; }

  onClickEditMode(event) { this.setState({ editMode: true }); }
  onClickCancelEditMode(event) { this.setState({ editMode: false }); }

  renderSaveAndCancel() {
    if (this.state.editMode) {
      return (
        <BulkSaveAndCancel/>
      )
    }
  }

  render() {
    return (
      <div className="p200 sds-grid sds-wrap">
        <div className="sds-col sds-size--1-of-1 sds-grid sds-grid--align-center">
          <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--6-of-12 pa-medium">
            <TileAuthor 
              inlineEditType="multi-picklist" 
              field="leadOwner" 
              content={this.props.data.leadOwner} 
              onValueChange={this.changeInput.bind(this)} 
              onClickEditMode={this.onClickEditMode.bind(this)} 
              onClickCancelEditMode={this.onClickCancelEditMode.bind(this)}/>
            <TileAuthor 
              inlineEditType="multi-name" 
              field="name" 
              content={this.props.data.name} 
              onValueChange={this.changeInput.bind(this)} 
              onClickEditMode={this.onClickEditMode.bind(this)} 
              onClickCancelEditMode={this.onClickCancelEditMode.bind(this)} />
            <TileAuthor 
              inlineEditType="single" 
              field="company" 
              content={this.props.data.info.company} 
              onValueChange={this.changeInput.bind(this)} 
              onClickEditMode={this.onClickEditMode.bind(this)} 
              onClickCancelEditMode={this.onClickCancelEditMode.bind(this)}/>
            <TileAuthor 
              inlineEditType="single" 
              field="title" 
              content={this.props.data.info.title} 
              onValueChange={this.changeInput.bind(this)} 
              onClickEditMode={this.onClickEditMode.bind(this)} 
              onClickCancelEditMode={this.onClickCancelEditMode.bind(this)}/>
            <TileAuthor 
              inlineEditType="multi-address" 
              field="address" 
              content={this.props.data.communication.address.address1} 
              onValueChange={this.changeInput.bind(this)} 
              onClickEditMode={this.onClickEditMode.bind(this)} 
              onClickCancelEditMode={this.onClickCancelEditMode.bind(this)} 
              content1={this.props.data.address1} content2={this.props.data.address2} content3={this.props.data.address3}/>
          </section>
          <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--6-of-12 pa-medium">
            <TileAuthor 
              inlineEditType="multi-picklist" 
              field="leadStatus" 
              content={this.props.data.info.leadStatus} 
              onValueChange={this.changeInput.bind(this)} 
              onClickEditMode={this.onClickEditMode.bind(this)} 
              onClickCancelEditMode={this.onClickCancelEditMode.bind(this)}/>

            <TileAuthor 
              inlineEditType="multi-picklist" 
              field="rating" 
              content={this.props.data.info.rating} 
              onValueChange={this.changeInput.bind(this)} 
              onClickEditMode={this.onClickEditMode.bind(this)} 
              onClickCancelEditMode={this.onClickCancelEditMode.bind(this)}/>

            <TileAuthor 
              inlineEditType="multi-phone" 
              field="phone1" 
              onValueChange={this.changeInput.bind(this)} 
              onClickEditMode={this.onClickEditMode.bind(this)} 
              onClickCancelEditMode={this.onClickCancelEditMode.bind(this)} 
              content={this.props.data.communication.phone.phone1} />
            <TileAuthor 
              inlineEditType="multi-phone" 
              field="phone2" 
              onValueChange={this.changeInput.bind(this)} 
              onClickEditMode={this.onClickEditMode.bind(this)} 
              onClickCancelEditMode={this.onClickCancelEditMode.bind(this)} 
              content={this.props.data.communication.phone.phone2} />

            <TileAuthor 
              inlineEditType="single" 
              field="website" 
              content={this.props.data.info.website} 
              onValueChange={this.changeInput.bind(this)} 
              onClickEditMode={this.onClickEditMode.bind(this)} 
              onClickCancelEditMode={this.onClickCancelEditMode.bind(this)}/>
          </section>
        </div>
        {this.renderSaveAndCancel()}
      </div>
    )
  }
}