'use strict';

//Components
import RichText from '../AppBuilder/Components/RichText';
import TabSet from '../AppBuilder/Components/TabSet';
import FilterList from '../AppBuilder/Components/FilterList';
import Section from '../AppBuilder/Components/Section';
import MockedComponent from '../AppBuilder/Components/MockedComponent';
import Brandable from '../AppBuilder/Components/Brandable';

//Property Editors
import FlexipagePropertyEditor from '../AppBuilder/PropertyEditor/FlexipagePropertyEditor';
import RichTextPropertyEditor from '../AppBuilder/PropertyEditor/RichTextPropertyEditor';
import TabSetPropertyEditor from '../AppBuilder/PropertyEditor/TabSetPropertyEditor';
import FilterListPropertyEditor from '../AppBuilder/PropertyEditor/FilterListPropertyEditor';
import SectionPropertyEditor from '../AppBuilder/PropertyEditor/SectionPropertyEditor';
import ActivitiesPropertyEditor from '../AppBuilder/PropertyEditor/ActivitiesPropertyEditor';
import FeedPropertyEditor from '../AppBuilder/PropertyEditor/FeedPropertyEditor';
import RecentItemsPropertyEditor from '../AppBuilder/PropertyEditor/RecentItemsPropertyEditor';
import RecordDetailPropertyEditor from '../AppBuilder/PropertyEditor/RecordDetailPropertyEditor';
import RelatedListsPropertyEditor from '../AppBuilder/PropertyEditor/RelatedListsPropertyEditor';
import ReportChartPropertyEditor from '../AppBuilder/PropertyEditor/ReportChartPropertyEditor';
import VisualforcePropertyEditor from '../AppBuilder/PropertyEditor/VisualforcePropertyEditor';
import HighlightsPropertyEditor from '../AppBuilder/PropertyEditor/HighlightsPropertyEditor';
import BrandablePropertyEditor from '../AppBuilder/PropertyEditor/BrandablePropertyEditor';

/********* BEGIN STATIC ENUMS ********************************/
/**
 * Defines the type of components we support
 *
 * This is not printed anywhere, so just make the attribute name match
 * its value
 */
var CMP_TYPE = {
  FLEXIPAGE: 'FLEXIPAGE', //this is a little bit of a special case
  RICH_TEXT: 'RICH_TEXT',
  TAB_SET: 'TAB_SET',
  FILTER_LIST: 'FILTER_LIST',
  SECTION: 'SECTION',
  ACTIVITIES: 'ACTIVITIES',
  FEED: 'FEED',
  RECENT_ITEMS: 'RECENT_ITEMS',
  RECORD_DETAIL: 'RECORD_DETAIL',
  RELATED_LISTS: 'RELATED_LISTS',
  REPORT_CHART: 'REPORT_CHART',
  VISUALFORCE: 'VISUALFORCE',
  HIGHLIGHTS: 'HIGHLIGHTS',
  BRANDABLE: 'BRANDABLE'
};

var DEVICES = [
  { label: "Phone", cssClass: "phone" },
  { label: "Tablet", cssClass: "tablet" },
  { label: "Tablet (Landscape)", cssClass: "tablet-land" },
  { label: "Desktop", cssClass: "desktop" }
];

DEVICES.indexOf = function(cssClass) {
  for (var i = 0; i < DEVICES.length; i++) {
    var device = DEVICES[i];
    if (device.cssClass === cssClass) {
      return i;
    }
  }
  throw 'No device found with CSS class ' + cssClass;
};

/******************* BEGIN COMPONENT DEFINITIONS ******************************/
var flexipageDef = {
  initProps: {
    label: 'My Custom Page',
    devName: 'myCustomPage01',
    pageType: 'Record Page',
    objectType: 'Account',
    template: 'Standard Template',
    description: ''
  },
  propEditor: FlexipagePropertyEditor
};

var richTextDef = {
  icon: 'richText',
  label: 'Rich Text',
  reactCmp: RichText,
  initProps: {
    value: ''
  },
  propEditor: RichTextPropertyEditor,
  description: 'Displays HTML-formatted rich text'
};

var brandableDef = {
  icon: 'highlights',
  label: 'Brandable Properties',
  reactCmp: Brandable,
  initProps: {
    value: ''
  },
  propEditor: BrandablePropertyEditor,
  description: 'Brandable editor'
};

var tabSetDef = {
  icon: 'tabset',
  label: 'Tab Set',
  reactCmp: TabSet,
  initProps: {
    tabs: ['Details', 'Collaborate', 'Activity']
  },
  isNested: true,
  getInitNumRegions: function(props) {
    return props.tabs.length;
  },
  propEditor: TabSetPropertyEditor,
  //TODO this description isn't doc-approved
  description: 'Creates a set of tabs which can each hold components'
};

var filterListDef = {
  icon: 'filterListCard',
  label: 'Filter List',
  reactCmp: FilterList,
  initProps: {
    objId: "obj1",
    ftrId: "ftr1",
    displayCount: 3
  },
  propEditor: FilterListPropertyEditor,
  description: 'Displays a Salesforce filter list'
};

var sectionCmpDef = {
  icon: null,
  label: 'Section',
  reactCmp: Section,
  initProps: {
    isColumns: true,
    numSections: 3
  },
  isNested: true,
  getInitNumRegions: function(props) {
    return props.numSections;
  },
  propEditor: SectionPropertyEditor,
  //TODO this description is not doc-approved
  description: 'Creates a set of columns or rows that can hold components'
};

var activitiesDef = {
  icon: 'activities',
  mockBody: 'transparent.activities',
  label: 'Actitivies',
  reactCmp: MockedComponent,
  initProps: {
    //no props - this component is completely mocked
  },
  propEditor: ActivitiesPropertyEditor,
  description: '' //TODO
};

var feedDef = {
  icon: 'feed',
  mockBody: 'transparent.feed',
  label: 'Feed',
  reactCmp: MockedComponent,
  initProps: {
    //no props - this component is completely mocked
  },
  propEditor: FeedPropertyEditor,
  description: '' //TODO
};

var recentItemsDef = {
  icon: 'recentItems',
  mockBody: 'transparent.recentItems',
  mockWithCard: true,
  label: 'Recent Items',
  reactCmp: MockedComponent,
  initProps: {
    //no props - this component is completely mocked
  },
  propEditor: RecentItemsPropertyEditor,
  description: '' //TODO
};

var recordDetailDef = {
  icon: 'recordDetail',
  mockBody: 'transparent.recordDetail',
  label: 'Record Detail',
  reactCmp: MockedComponent,
  initProps: {
    //no props - this component is completely mocked
  },
  propEditor: RecordDetailPropertyEditor,
  description: '' //TODO
};

var relatedListsDef = {
  icon: 'relatedLists',
  mockBody: 'transparent.relatedLists',
  label: 'Related Lists',
  reactCmp: MockedComponent,
  initProps: {
    //no props - this component is completely mocked
  },
  propEditor: RelatedListsPropertyEditor,
  description: '' //TODO
};

var reportChartDef = {
  icon: 'reportChart',
  mockBody: 'transparent.reportChart',
  mockWithCard: true,
  label: 'Report Chart',
  reactCmp: MockedComponent,
  initProps: {
    //no props - this component is completely mocked
  },
  propEditor: ReportChartPropertyEditor,
  description: '' //TODO
};

var visualforceDef = {
  icon: 'visualforcePage',
  //TODO need a mockBody attribute when adding a screenshot for Visualforce
  label: 'Visualforce',
  reactCmp: MockedComponent,
  initProps: {
    //no props - this component is completely mocked
  },
  propEditor: VisualforcePropertyEditor,
  description: '' //TODO
};

var highlightsDef = {
  icon: 'highlights',
  mockBody: 'highlights',
  label: 'Highlights Panel',
  reactCmp: MockedComponent,
  initProps: {
    //no props - this component is completely mocked
  },
  propEditor: HighlightsPropertyEditor,
  description: '' //TODO
};

/**
 * Gets the component definition for the given component type
 */
function getComponentDef(type) {
  switch (type) {
    case CMP_TYPE.FLEXIPAGE:
      return flexipageDef;
    case CMP_TYPE.RICH_TEXT:
      return richTextDef;
    case CMP_TYPE.TAB_SET:
      return tabSetDef;
    case CMP_TYPE.FILTER_LIST:
      return filterListDef;
    case CMP_TYPE.SECTION:
      return sectionCmpDef;
    case CMP_TYPE.ACTIVITIES:
      return activitiesDef;
    case CMP_TYPE.FEED:
      return feedDef;
    case CMP_TYPE.RECENT_ITEMS:
      return recentItemsDef;
    case CMP_TYPE.RECORD_DETAIL:
      return recordDetailDef;
    case CMP_TYPE.RELATED_LISTS:
      return relatedListsDef;
    case CMP_TYPE.REPORT_CHART:
      return reportChartDef;
    case CMP_TYPE.VISUALFORCE:
      return visualforceDef;
    case CMP_TYPE.HIGHLIGHTS:
      return highlightsDef;
    case CMP_TYPE.BRANDABLE:
      return brandableDef;
    default:
      throw 'Unsupported component type: ' + type;
  };
}

/******************* BEGIN COMPONENT FIELD DATA ******************************/
var objOptions = [
  { id: "obj1", label: "Account", filters: [
    { id: "ftr1", label: "All Accounts" },
    { id: "ftr2", label: "My Accounts" },
    { id: "ftr3", label: "New This Week" },
    { id: "ftr4", label: "Recently Viewed Accounts" },
  ] },
  { id: "obj2", label: "Case", filters: [
    { id: "ftr1", label: "All Open Cases" },
    { id: "ftr2", label: "My Cases" },
    { id: "ftr3", label: "Open Cases" },
    { id: "ftr4", label: "Recently Viewed Cases" },
  ] },
  { id: "obj3", label: "Contact", filters: [
    { id: "ftr1", label: "All Contacts" },
    { id: "ftr2", label: "Birthdays This Month" },
    { id: "ftr3", label: "New This Week" },
    { id: "ftr4", label: "Recently Viewed Contacts" },
  ]},
  { id: "obj4", label: "Group", filters: [
    { id: "ftr1", label: "Active Groups" },
    { id: "ftr2", label: "My Archived Groups" },
    { id: "ftr3", label: "My Groups" },
    { id: "ftr4", label: "Recently Viewed Groups" },
  ] },
  { id: "obj5", label: "Lead", filters: [
    { id: "ftr1", label: "All Leads" },
    { id: "ftr2", label: "My Leads" },
    { id: "ftr3", label: "New This Week" },
    { id: "ftr4", label: "Recently Viewed Leads" },
  ] },
  { id: "obj6", label: "Opportunity", filters: [
    { id: "ftr1", label: "All Opportunities" },
    { id: "ftr2", label: "Open Opportunities" },
    { id: "ftr3", label: "Closed/Won" },
    { id: "ftr4", label: "Closed/Lost" },
  ] },
];


/**
 * The public API for this module
 * We only expose the methods that are really needed by the rest of the
 * components
 */
module.exports = {
  CMP_TYPE: CMP_TYPE,
  DEVICES: DEVICES,
  getComponentDef: getComponentDef,
  objOptions: objOptions
};

