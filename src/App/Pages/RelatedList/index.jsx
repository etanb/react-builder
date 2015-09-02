import React from 'react';
import AnchorRelatedList from '../../SLDSComponents/Anchor/RelatedList';
import ButtonGroup from '../../SLDSComponents/Button/ButtonGroup';
import Button from '../../SLDSComponents/Button/Button';
import TablesBase from '../../SLDSComponents/Tables/Base';

export default class RelatedList extends React.Component {
  // TODO: Use [Router.State] mixin later to use this.getParams() and not this.props.params.type
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AnchorRelatedList type={this.props.params.type}>
          <ButtonGroup>
            <Button size="small" category="utility" dropdown={true} icon="table" more={true} sds-assistive-text="Table"/>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="small" category="utility" dropdown={false} icon="chart" sds-assistive-text="Chart"/>
            <Button size="small" category="utility" dropdown={false} icon="filterList" sds-assistive-text="Filter List"/>
            <Button size="small" category="utility" dropdown={true} icon="sort" more={true} sds-assistive-text="Sort"/>
          </ButtonGroup>
          <ButtonGroup>
            <Button text={"Add " + this.props.params.type} sds-assistive-text="Chart"/>
            <Button size="small" category="utility" dropdown={false} icon="down" sds-assistive-text="More Actions"/>
          </ButtonGroup>
        </AnchorRelatedList>
        <TablesBase 
          type={this.props.params.type} 
          headers={[
            'Lead Name', 'Company', 
            'Address', 'Email', 'Phone', 'Lead Status']}/>
      </div>
    )
  }
};