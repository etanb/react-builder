import React from 'react';
import EditCompoundFieldName from './EditCompoundFieldName'
import EditSingleFieldCompany from './EditSingleFieldCompany'
import EditCompoundFieldAddress from './EditCompoundFieldAddress'
import EditSingleFieldEmail from './EditSingleFieldEmail'
import EditCompoundFieldPhone from './EditCompoundFieldPhone'
import EditPicklist from './EditPicklist'

module.exports = React.createClass ({
  getInitialState() {
    return { 
      showInlineEdit: false, 
      editMode: false
    }
  },

  onClickToInlineEdit () {
    this.props.onClickEditMode();
    this.setState({ 
      showInlineEdit: !this.state.showInlineEdit,
    });
  },

  renderContent() {
    if (this.state.showInlineEdit && this.props.inlineEditType === 'multi-name') {
      return (
        <div>
          <div className="custom-inline-edit-cancel-layer" onClick={this.onClickToInlineEdit} />
          <EditCompoundFieldName 
            {...this.props} 
            onClickToInlineEdit={this.onClickToInlineEdit}/>
        </div>
      )
    } else if (this.state.showInlineEdit && this.props.inlineEditType === 'single-company') {
      return (
        <div>
          <div className="custom-inline-edit-cancel-layer" onClick={this.onClickToInlineEdit} />
          <EditSingleFieldCompany 
            {...this.props} 
            onClickToInlineEdit={this.onClickToInlineEdit}/>
        </div>
      )
    }  else if (this.state.showInlineEdit && this.props.inlineEditType === 'multi-address') {
      return (
        <div>
          <div className="custom-inline-edit-cancel-layer" onClick={this.onClickToInlineEdit} />
          <EditCompoundFieldAddress 
            {...this.props} 
            onClickToInlineEdit={this.onClickToInlineEdit}/>
        </div>
      )
    } else if (this.state.showInlineEdit && this.props.inlineEditType === 'single-email') {
      return (
        <div>
          <div className="custom-inline-edit-cancel-layer" onClick={this.onClickToInlineEdit} />
          <EditSingleFieldEmail 
            {...this.props} 
            onClickToInlineEdit={this.onClickToInlineEdit}/>
        </div>
      )
    } else if (this.state.showInlineEdit && this.props.inlineEditType === 'multi-phone') {
      return (
        <div>
          <div className="custom-inline-edit-cancel-layer" onClick={this.onClickToInlineEdit} />
          <EditCompoundFieldPhone 
            {...this.props} 
            onClickToInlineEdit={this.onClickToInlineEdit}/>
        </div>
      )
    } else if (this.state.showInlineEdit && this.props.inlineEditType === 'multi-picklist') {
      return (
        <div>
          <div className="custom-inline-edit-cancel-layer" onClick={this.onClickToInlineEdit} />
          <EditPicklist 
            {...this.props} 
            onClickToInlineEdit={this.onClickToInlineEdit}/>
        </div>
      )
    } else { return <span>{this.props.children}</span> }
  },

  render () {
    return (
      <span className="anchor-edit-spike" onDoubleClick={this.onClickToInlineEdit}>
        {this.renderContent()}
        <svg aria-hidden="true" className="sds-icon sds-icon--large sds-icon-utility-edit ml-small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>'}} 
            onClick={this.onClickToInlineEdit}/>
      </span>
    )
  }
});