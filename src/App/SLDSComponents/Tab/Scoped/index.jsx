import React from "react";

export default class TabTask extends React.Component {
  render() {
    return (
      <div className="sds-tabs--scoped" role="tablist">
        <ul className="sds-tabs--scoped__nav" role="presentation" title={this.props.title1}>
          <li className="sds-tabs__item sds-text-heading--label sds-active" title={this.props.title1} role="presentation"><a href="#" role="tab" tabindex="0" aria-selected="true">{this.props.title1}</a></li>
          <li className="sds-tabs__item sds-text-heading--label" title={this.props.title2}><a href="#" role="tab" tabindex="-1" aria-selected="false">{this.props.title2}</a></li>
          <li className="sds-tabs__item sds-text-heading--label" title={this.props.title3}><a href="#" role="tab" tabindex="-1" aria-selected="false">{this.props.title3}</a></li>
        </ul>
        <div className="sds-tabs__content sds-show" role="tabpanel">

          {/*BRING THIS TO ANOTHER COMP AND TAKE IN PROPS*/}
          <form className="sds-form--inline">
            <div className="sds-form-element">
              <label className="sds-form-element__label" for="subject">
                Subject
              </label>
              <div className="sds-form-element__control">
                <input id="subject" className="sds-input" type="text" aria-label="subject" placeholder="Click here to create a task" label="Subject" />
              </div>
            </div>
            <button className="sds-button sds-button--brand">Add Task</button>
          </form>

        </div>
        <div className="sds-tabs__content sds-hide" role="tabpanel">
          <h2>Item Two Content</h2>
        </div>
        <div className="sds-tabs__content sds-hide" role="tabpanel">
          <h2>Item Three Content</h2>
        </div>
      </div>
    )
  }
};