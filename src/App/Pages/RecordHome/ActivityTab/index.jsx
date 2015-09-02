import React from 'react';
import TabTask from '../../../../App/SLDSComponents/Tab/Scoped';

export default class RecordHomeActivityTab extends React.Component {
  render() {
    return (
      <div>
        <section className="mb-medium">
          <TabTask title1="Task" title2="Call Log" title3="Event" title4="Email"/>
        </section>
        <section>
          <ActivityTimelineBase/>
          <ActivityTimelineBase/>
        </section>
      </div>
    )
  }
}