import React from 'react';

export default class EditCompoundFieldAddress extends React.Component {
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
            <section className="sds-col sds-size--2-of-2 sds-medium-size--6-of-6 sds-large-size--12-of-12">
              <label className="sds-form-element__label sds-form-element__label--small" for="">Street</label>
              <div className="sds-form-element__control pr-small">
                <input id="firstfocusitem" className="sds-input" 
                  type="text" 
                  defaultValue={this.props.data.communication.address.address1.street_address} 
                  onKeyUp={this.handleChange} 
                  ref="street_address"/>
              </div>
            </section>
            <div className="sds-col sds-size--1-of-1 sds-grid sds-grid--align-center mt-small">
              <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--7-of-12">
                <label className="sds-form-element__label sds-form-element__label--small" for="city">City</label>
                <div className="sds-form-element__control mr-small">
                  <input id="city" className="sds-input" type="text" 
                    defaultValue={this.props.data.communication.address.address1.city} 
                    onKeyUp={this.handleChange} 
                    ref="city"/>
                </div>
              </section>
              <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--6-of-12">
                <label className="sds-form-element__label sds-form-element__label--small" for="state">State</label>
                <div className="sds-form-element__control pr-small">
                  <input id="state" className="sds-input" type="text" 
                    defaultValue={this.props.data.communication.address.address1.state} 
                    onKeyUp={this.handleChange} 
                    ref="state"/>
                </div>
              </section>
            </div>
            <div className="sds-col sds-size--1-of-1 sds-grid sds-grid--align-center mt-small">
              <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--7-of-12">
                <label className="sds-form-element__label sds-form-element__label--small" for="firstName">Zip Code</label>
                <div className="sds-form-element__control mr-small">
                  <input id="firstName" className="sds-input" type="text" 
                    defaultValue={this.props.data.communication.address.address1.zip} 
                    onKeyUp={this.handleChange} 
                    ref="zip"/>
                </div>
              </section>
              <section className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--6-of-12">
                <label className="sds-form-element__label sds-form-element__label--small" for="country">Country</label>
                <div className="sds-form-element__control pr-small">
                  <input id="country" className="sds-input" type="text" 
                    defaultValue={this.props.data.communication.address.address1.country} 
                    onKeyUp={this.handleChange} 
                    ref="country"/>
                </div>
              </section>
            </div>
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