import React from 'react';

export default class EditSingleFieldEmail extends React.Component {
  render() {
    setTimeout(()=> { 
      if (document.getElementById('firstfocusitem')) {
        document.getElementById('firstfocusitem').focus(); 
      }
    }, 10);
    return (
      <div className="custom-inline-edit-multi-name">
        <div className="anchor-edit-spike pa-small">
          <div className="p200 sds-grid sds-wrap">
            <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--6-of-12 mt-small">
              <div className="sds-form-element__control pr-small">
                <input type="text" 
                  id="firstfocusitem" 
                  className="sds-input" 
                  defaultValue={this.props.data.communication.email.content} 
                  onKeyUp={this.handleChange} 
                  ref="content"/>
              </div>
            </section>
          </div>
          <svg aria-hidden="true" className="sds-icon sds-icon--large sds-icon-utility-undo ml-small" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#undo"></use>'}} 
              onClick={this.props.onClickToInlineEdit} 
              style={{
                float: 'right', 
                position: 'absolute',
                right: '5px',
                top: '0.5rem'}}/>
        </div>
      </div>
    )
  }
}