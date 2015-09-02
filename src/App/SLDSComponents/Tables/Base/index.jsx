import React from 'react';
import TablesBaseRow from '../TablesBaseRow'
import TableHeader from '../TableHeader'
import SampleData from '../../../../../src/data/index.js';

export default class TablesBase extends React.Component {
  renderEachRow() {
    let AllEntries = SampleData.getByType(this.props.type);
    let EachRow = AllEntries.map((item) => {
      return <TablesBaseRow data={item}/>
    });
    return EachRow
  }

  render() {
    return (
      <div>
        <table className="sds-table sds-table--bordered">
          <TableHeader headers={this.props.headers}/>
          {this.renderEachRow()}
        </table>
      </div>
    )
  }
}