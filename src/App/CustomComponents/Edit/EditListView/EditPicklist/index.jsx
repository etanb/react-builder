import React from 'react';
import Picklist from '../../../../../App/SLDSComponents/Picklist';
import PicklistOptions from '../../../../../App/SLDSComponents/Picklist/PicklistOptions';

export default class EditPicklist extends React.Component {
  render() {
    setTimeout(()=> { 
      if (document.getElementById('firstfocusitem')) {
        document.getElementById('firstfocusitem').focus(); 
      }
    }, 10);
    return (
    <div className="custom-inline-edit-multi-name">
      <div className="anchor-edit-spike pa-small" style={{
        position: 'absolute',
        right: '14rem',
        zIndex: '0',
        transform: 'translateY(-12%)',
        background: '#FFF',
        borderRadius: '4px',
        border: '1px solid #eee',
        boxShadow: '0px 2px 2px 0px rgba(0,0,0,.16)',
        width: '400px'}}>
        <Picklist data={this.props.data}>
          <PicklistOptions options={['New', 'Contacted', 'Qualified', 'Unqualified', 'Other']}/>
        </Picklist>
        <Picklist label="Reason" data={this.props.data}>
          <PicklistOptions options={['New', 'Contacted', 'Qualified', 'Unqualified', 'Other']}/>
        </Picklist>
      </div>
      <svg aria-hidden="true" className="sds-icon sds-icon--large sds-icon-utility-undo ml-small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#undo"></use>'}} onClick={this.onClickToCancelInlineEdit} 
        style={{
          float: 'right', 
          position: 'absolute',
          right: '14.5rem',
          top: '-0.5rem'}}/>
    </div>
    )
  }
}