import React from "react";

export default class DefaultTabs extends React.Component {
  render() {
    // var { aaa, bbb, ccc } = this.props;
    // console.log(this.props)
    return <div>
      <div className="tabs tabs--default" role="tablist">
        <ul className="tabs__nav" role="presentation">
          <li className="tabs__item active">
            <a href="#" id="one" role="tab" aria-controls="one-content" aria-selected="true" tabindex="0">Item One</a>
          </li>
          <li className="tabs__item" role="presentation">
            <a href="#" id="two" role="tab" aria-controls="two-content" aria-selected="false" tabindex="-1">Item Two</a>
          </li>
          <li className="tabs__item" role="presentation">
            <a href="#" id="three" role="tab" aria-controls="three-content" aria-selected="false" tabindex="-1">Item Three</a>
          </li>
        </ul>
        <div id="one-content" className="tabs__content show" role="tabpanel" aria-labelledby="one">Item One Content</div>
        <div id="two-content" className="tabs__content hide" role="tabpanel" aria-labelledby="two">Item Two Content</div>
        <div id="three-content" className="tabs__content hide" role="tabpanel" aria-labelledby="three">Item Three Content</div>
      </div>
    </div>;
  }
}
// Page1.propTypes = {
//   aaa: React.PropTypes.object.isRequired,
//   bbb: React.PropTypes.string.isRequired,
//   ccc: React.PropTypes.bool
// };
