import React from 'react';

export default class Picklist extends React.Component {
  togglePicklist() {
    //
  }
  
  testthisshitTog() {
    //
  }

  render() {
    return (
      <div className="anchor-edit-spike pa-small">
        <div className="sds-form-element">
          <div className="sds-form-element">
            <div aria-expanded="true" className="sds-picklist">
              <label className="sds-form-element__label sds-form-element__label--small" for="lastName">
                {this.props.label}
              </label>
              <div className="sds-form-element__control pr-small">
                <span tabindex="0" className="sds-picklist__label" aria-haspopup="true" style={{
                  width: '350px'}} 
                  onClick={this.togglePicklist.bind(this)}>
                  {this.props.data.info.leadStatus.content}
                  <svg aria-hidden="true" className="sds-icon" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>'}}/>
                </span>
              </div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}