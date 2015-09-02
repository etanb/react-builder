const React = require("react/addons");

const FilterList = require("../pages/AppBuilder/CanvasComponents/FilterList");
const FilterListEditor = require("../pages/AppBuilder/ComponentPropsPanel/FilterListEditor");

const CanvasButton = require("../pages/AppBuilder/CanvasComponents/Button");
const ButtonEditor = require("../pages/AppBuilder/ComponentPropsPanel/ButtonEditor");

const RecentItems = require("../pages/AppBuilder/CanvasComponents/RecentItems");
const RecentItemsEditor = require("../pages/AppBuilder/ComponentPropsPanel/RecentItemsEditor");

const Report = require("../pages/AppBuilder/CanvasComponents/Report");
const ReportEditor = require("../pages/AppBuilder/ComponentPropsPanel/ReportEditor");

const RichText = require("../pages/AppBuilder/CanvasComponents/RichText");
const RichTextEditor = require("../pages/AppBuilder/ComponentPropsPanel/RichTextEditor");

const Visualforce = require("../pages/AppBuilder/CanvasComponents/Visualforce");
const VisualforceEditor = require("../pages/AppBuilder/ComponentPropsPanel/VisualforceEditor");

let pages = [
  {
    label: "Order Details",
    type: "page",
    properties: {
      lastModifiedDate: "Tue March 31 2015 16:51:17 GMT-0700 (PDT)",
      lastModifiedBy: "Amanda Smith",
      apiName: "Order_Details",
      type: "Record Home",
      object: {name: "Order__c", label: "Order", pluralLabel: "Orders", autonumber: true, article: "an", iconClass: "icon--custom-63"},
      description: "",
      actions: [],
      id: "page0"
    },
    regions: [
      {
        name: "threeTop",
        label: "Region A",
        components: []
      },
      {
        name: "threeLeft",
        label: "Region B",
        components: []
      },
      {
        name: "threeRight",
        label: "Region C",
        components: []
      }
    ]
  }
];

let futureComponents = [
      {groupIndex: 0, id: "calendar", label: "Calendar", pageTypes: [], icon: "icon--event", properties: {}},
      {groupIndex: 0, id: "chatterFeed", label: "Chatter Feed", pageTypes: [], icon: "icon--post", isValid: false},
      {groupIndex: 0, id: "dataGrid", label: "Data Grid", pageTypes: [], icon: "icon--custom-63", isValid: false},
      {groupIndex: 0, id: "listView", label: "Filter List", pageTypes: [], icon: "icon--related-list", isValid: true },
      {groupIndex: 0, id: "notes", label: "Notes", pageTypes: [], icon: "icon--note", isValid: false, properties: {}},
      {groupIndex: 0, id: "relatedList", label: "Related List", pageTypes: ["Record Home"], icon: "icon--related-list", isValid: false, properties: {}},
      {groupIndex: 0, id: "today", label: "Today", pageTypes: [], icon: "icon--today", isValid: false, properties: {}},
      {groupIndex: 0, id: "tabset", label: "Tabset", pageTypes: [], icon: "icon--custom-7", inDev: true, isValid: true, tabs: [
        {heading: "New Tab", properties: {}, components: []}
       ], properties: {isContainer: true}},
      {groupIndex: 0, id: "tabsetPop", label: "Tabset (Prepopulated)", pageTypes: ["Record Home"], icon: "icon--custom-7", inDev: true, isValid: true, tabs: [
        {heading: "Details", properties: {accept: ["field"], reject: ["tabset"]}, components: []},
        {heading: "Feed", properties: {accept: [], reject: ["field", "tabset"]}, components: []},
        {heading: "Related", properties: {accept: [], reject: ["tabset"]}, components: []}
       ], properties: {isContainer: true}},
];

let components = [
  { label: "Standard Components",
    id: "componentGroup-standard",
    expanded: true,
    components: [
      {groupIndex: 0, id: "button", label: "Button", pageTypes: [], icon: "icon--button", isValid: false, canvasComponent: CanvasButton, componentEditor: ButtonEditor, properties: { label: "Button Label"}},
      {groupIndex: 0, id: "filterList", label: "Filter List", pageTypes: [], icon: "icon--related-list", isValid: true, canvasComponent: FilterList, componentEditor: FilterListEditor,
        properties: { object: "Account", filter: "All Accounts", numberDisplayed: 3 }
      },
      {groupIndex: 0, id: "recentItems", label: "Recent Items", pageTypes: [], icon: "icon--recent", isValid: true, canvasComponent: RecentItems, componentEditor: RecentItemsEditor,
        properties: { name: "Recent Items"}
      },
      {groupIndex: 0, id: "analytics", label: "Report Chart", pageTypes: [], icon: "icon--report", isValid: true, canvasComponent: Report, componentEditor: ReportEditor,
        properties: {
          report: {id: "report07", label: "Batches by Stage", screenshot: "img/analytics/batchesByStage.png"}
        }
      },
      {groupIndex: 0, id: "richText", label: "Rich Text", pageTypes: [], icon: "icon--richText", isValid: true, canvasComponent: RichText, componentEditor: RichTextEditor,
        properties: {}
      },
      {groupIndex: 0, id: "visualforce", label: "Visualforce", pageTypes: [], icon: "icon--visualforce", isValid: true, inDev: false, canvasComponent: Visualforce, componentEditor: VisualforceEditor,
        properties: {"page": {label: "Saasy", id: "visualforce00", screenshot: "img/visualforce/saasy.png"}}
      }
    ]
  },
  { label: "Custom Components",
    id: "componentGroup-custom",
    expanded: true,
    components: [
      {groupIndex: 1, id: "cust1", label: "Custom 1", pageTypes: [], icon: "icon--custom", isValid: false},
      {groupIndex: 1, id: "cust2", label: "Custom 2", pageTypes: [], icon: "icon--custom", isValid: false},
    ]
  },
  { label: "AppExchange",
    id: "componentGroup-appExchange",
    expanded: true,
    components: [
      {groupIndex: 2, id: "appEx1", label: "AppEx 1", pageTypes: [], icon: "icon--custom", isValid: false},
      {groupIndex: 2, id: "appEx2", label: "AppEx 2", pageTypes: [], icon: "icon--custom", isValid: false},
    ]
  }
];

let appNavItems = [
  { id: "components", title: "Components", ariaControls: "componentPalette", isActive: true, icon: "canvas" },
  { id: "tableOfContents", title: "Table of Contents", ariaControls: "tableOfContents", isActive: false, icon: "related_list" },
];

let salesforceObjects = [
  { id: "account", label: "Account" },
  { id: "campaign", label: "Campaign" },
  { id: "case", label: "Case" },
  { id: "contact", label: "Contact" },
  { id: "contract", label: "Contract" },
  { id: "foodDonation", label: "Food Donation" },
  { id: "group", label: "Group" },
  { id: "lead", label: "Lead" },
  { id: "oppty", label: "Opportunity" },
  { id: "order", label: "Order" },
];

let listViews =  [
  {id: "lv01", object: "account", label: "Recently Viewed Accounts", visibility: "All Users"},
  {id: "lv02", object: "account", label: "New Last Week", visibility: "Managers"},
  {id: "lv03", object: "account", label: "Accounts Up For Renewal", visibility: "All Users"},
  {id: "lv14", object: "Barrel", label: "Distillation", visibility: "All Users"},
  {id: "lv13", object: "Barrel", label: "Fermentation", visibility: "All Users"},
  {id: "lv27", object: "Barrel", label: "Recent Barrels", visibility: "All Users"},
  {id: "lv15", object: "Asset", label: "Recent Assets", visibility: "All Users"},
  {id: "lv16", object: "Batch", label: "Recent Batches", visibility: "All Users"},
  {id: "lv17", object: "campaign", label: "Recent Campaigns", visibility: "All Users"},
  {id: "lv18", object: "Campaign Member", label: "Recent Campaign Members", visibility: "All Users"},
  {id: "lv19", object: "case", label: "Recent Cases", visibility: "All Users"},
  {id: "lv20", object: "contact", label: "Recent Contacts", visibility: "All Users"},
  {id: "lv21", object: "contract", label: "Recent Contracts", visibility: "All Users"},
  {id: "lv22", object: "Delivery", label: "Recent Delivery", visibility: "All Users"},
  {id: "lv23", object: "Delivery Item", label: "Recent Delivery Items", visibility: "All Users"},
  {id: "lv24", object: "Event", label: "Recent Events", visibility: "All Users"},
  {id: "lv25", object: "Idea", label: "Recent Ideas", visibility: "All Users"},
  {id: "lv26", object: "Inspection", label: "Recent Inspections", visibility: "All Users"},
  {id: "lv29", object: "lead", label: "Recent Leads", visibility: "All Users"},
  {id: "lv04", object: "oppty", label: "Top 50 Opportunities", visibility: "All Users"},
  {id: "lv05", object: "oppty", label: "Team Opportunities", visibility: "All Users"},
  {id: "lv06", object: "oppty", label: "Opportunities Closing This Month", visibility: "Sales, Marketing Team"},
  {id: "lv07", object: "oppty", label: "Opportunities Closing This Week", visibility: "Sales, Managers"},
  {id: "lv08", object: "oppty", label: "P0 Opportunities for Team A", visibility: "Sales Team A, Managers"},
  {id: "lv09", object: "oppty", label: "P0 Opportunities for Team B", visibility: "Sales Team B, Managers"},
  {id: "lv10", object: "oppty", label: "P0 Opportunities for Team C", visibility: "Sales Team C, Managers"},
  {id: "lv11", object: "oppty", label: "Recently Viewed Opportunities", visibility: "All Users"},
  {id: "lv12", object: "oppty", label: "Opportunities Created Today", visibility: "All Users"},
  {id: "lv28", object: "Opportunity Product", label: "Recent Opportunity Products", visibility: "All Users"},
  {id: "lv35", object: "order", label: "Recent Orders", visibility: "All Users"},
  {id: "lv30", object: "Product", label: "Recent Products", visibility: "All Users"},
  {id: "lv31", object: "Return Item", label: "Recent Return Items", visibility: "All Users"},
  {id: "lv32", object: "Solution", label: "Recent Solutions", visibility: "All Users"},
  {id: "lv33", object: "Task", label: "Recent Tasks", visibility: "All Users"},
  {id: "lv34", object: "User", label: "Recent Users", visibility: "All Users"},
  {id: "lv36", object: "foodDonation", label: "All", visibility: "All Users"},
  {id: "lv37", object: "group", label: "My Groups", visibility: "All Users"},
  {id: "lv38", object: "group", label: "My Archieved Groups", visibility: "All Users"},
  {id: "lv39", object: "group", label: "Recently Viewed Groups", visibility: "All Users"},
];

module.exports = {
  pages:pages,
  components:components,
  appNavItems:appNavItems,
  objects:salesforceObjects,
  listViews:listViews,
};
