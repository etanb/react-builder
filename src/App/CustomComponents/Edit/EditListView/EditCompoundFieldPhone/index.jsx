import React from 'react';

export default class EditCompoundFieldPhone extends React.Component {
  render() {
    setTimeout(()=> { 
      if (document.getElementById('firstfocusitem')) {
        document.getElementById('firstfocusitem').focus(); 
      }
    }, 10);
    return (
      <div className="custom-inline-edit-multi-name">
        <div className="anchor-edit-spike pa-small mt-small">
          <input type="text" 
            id="firstfocusitem" 
            className="sds-input mr-small" 
            style={{width: '30%'}} 
            defaultValue={this.props.data.communication.phone.phone1.content1} 
            onKeyUp={this.handleChange} 
            ref="content1"/>
          <input type="text" 
            className="sds-input mr-small" 
            style={{width: '32%'}} 
            defaultValue={this.props.data.communication.phone.phone1.content2} 
            onKeyUp={this.handleChange} 
            ref="content2"/>
          <input type="text" 
            className="sds-input" 
            style={{width:'32%'}} 
            defaultValue={this.props.data.communication.phone.phone1.content3} 
            onKeyUp={this.handleChange} 
            ref="content3"/>
          <svg aria-hidden="true" className="sds-icon sds-icon--large sds-icon-utility-undo ml-small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#undo"></use>'}} 
              onClick={this.onClickToCancelInlineEdit} 
              style={{
                float: 'right', 
                position: 'absolute',
                right: '5px',
                top: '0.25rem'}}/>
        </div>
      </div>
    )
  }
}