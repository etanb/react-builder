'use strict';
import React from 'react';

import PaletteItem from '../Components/PaletteItem';
import Asset from '../Util/Asset';

const AppBuilderData = require('../../data/AppBuilderData.js');

export default class ComponentPalette extends React.Component {
  renderStandardItems() {
    /*
     * Add your standard items here
     */
    var itemTypes = [
      AppBuilderData.CMP_TYPE.TAB_SET,
      //TODO AppBuilderData.CMP_TYPE.SECTION, is still in progress
      AppBuilderData.CMP_TYPE.ACTIVITIES,
      AppBuilderData.CMP_TYPE.FEED,
      AppBuilderData.CMP_TYPE.FILTER_LIST,
      AppBuilderData.CMP_TYPE.HIGHLIGHTS,
      AppBuilderData.CMP_TYPE.RECENT_ITEMS,
      AppBuilderData.CMP_TYPE.RECORD_DETAIL,
      AppBuilderData.CMP_TYPE.RELATED_LISTS,
      AppBuilderData.CMP_TYPE.REPORT_CHART,
      AppBuilderData.CMP_TYPE.RICH_TEXT,
      AppBuilderData.CMP_TYPE.VISUALFORCE,
    ];

    return itemTypes.map(function(itemType) {
      return <PaletteItem key={itemType} cmpType={itemType} />
    });
  }

  render() {
    var standardItems = this.renderStandardItems();

    return (
      <aside className="w-comp-palette flex-nogrow pos-rel osy">
        <div className="phm pvs pos-abs abs-full">
          <h2 className="pts pbm mbm fw-norm bbs b-gray">
            Lightning Components
          </h2>

          <section>
            <form>
              <input type="search"
                      placeholder="Search components..."
                      className="input-field w-full mbm" />
            </form>
          </section>

          <section className="phxs mbm">
            <h2 className="pvs mbs fw-bold">
              <Asset iconKey="util.down" extraCss="icon-small icon-default mrs"/>
              Standard ({standardItems.length})
            </h2>

            <div className="phxs">
              {standardItems}
            </div>
          </section>

          <section className="phxs">
            <h2 className="pvs mbs fw-bold">
              <Asset iconKey="util.down" extraCss="icon-small icon-default mrs"/>
              Custom (0)
            </h2>

            <div className="">
              Custom components aren't enabled.
            </div>
          </section>
        </div>
      </aside>
    );
  }
}

