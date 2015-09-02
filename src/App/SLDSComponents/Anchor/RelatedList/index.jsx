import React from 'react';
import AnchorTitle from '../../Anchor/AnchorTitle';
import AnchorMainRow from '../../Anchor/AnchorMainRow';
import AnchorDetails from '../../Anchor/AnchorDetails';

export default class AnchorRelatedList extends React.Component {

  render() {
    return (
      <div className="sds-anchor">
        <AnchorTitle type={this.props.type} />
        
        <AnchorMainRow type={this.props.type}>
          {this.props.children}
        </AnchorMainRow>

        <AnchorDetails type={this.props.type} />
      </div>
    )
  }
}