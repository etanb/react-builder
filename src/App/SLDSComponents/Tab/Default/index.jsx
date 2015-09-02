import React from "react";

export default class DefaultTabs extends React.Component {
  render() {
    // var { aaa, bbb, ccc } = this.props;
    return (
      <div className="sds-tabs--default" role="tablist">
        <ul className="sds-tabs--default__nav" role="presentation">
          {this.props.children}
        </ul>
        <div className="sds-tabs__content sds-show" role="tabpanel">
          {this.props.content}
        </div>
      </div>
    )
  }
}
// Page1.propTypes = {
//   aaa: React.PropTypes.object.isRequired,
//   bbb: React.PropTypes.string.isRequired,
//   ccc: React.PropTypes.bool
// };
