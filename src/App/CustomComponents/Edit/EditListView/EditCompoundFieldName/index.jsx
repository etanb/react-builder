import React from 'react';

export default class EditCompoundFieldName extends React.Component {
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
            <div className="sds-col sds-size--1-of-1 sds-grid sds-grid--align-center">
              <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--6-of-12">
                <label className="sds-form-element__label sds-form-element__label--small" for="titleName">Salutation</label>
                <div className="sds-form-element__control pr-small">
                  <input id="firstfocusitem" className="sds-input" type="text" 
                    defaultValue={this.props.data.name.titleName.content} 
                    ref="titleName" tabindex="1"/>
                </div>
              </section>
              <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--6-of-12">
                <label className="sds-form-element__label sds-form-element__label--small" for="firstName">First Name</label>
                <div className="sds-form-element__control">
                  <input id="firstName" className="sds-input" type="text" 
                    defaultValue={this.props.data.name.firstName.content} 
                    ref="firstName" tabindex="2"/>
                </div>
              </section>
            </div>
            <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--6-of-12 mt-small">
              <label className="sds-form-element__label sds-form-element__label--small" for="lastName">Last Name</label>
              <div className="sds-form-element__control pr-small">
                <input id="lastName" className="sds-input" type="text" 
                  defaultValue={this.props.data.name.lastName.content} 
                  ref="lastName"/>
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