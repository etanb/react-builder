const SampleData = require('./SampleData');
const merge = require('lodash/object/merge');
const lodash = require('lodash');
const cloneDeep = require('lodash/lang/cloneDeep');
const remove = require('lodash/array/remove');

var getOpptiesByStageName = function(stageName){
  if (!stageName || !stageName.length) return [];

  let lcName = stageName.toLowerCase();
  return SampleData.data.filter((item) => item.type === SampleData.TYPE.O && item.stage === lcName);
};

var getTotalByStageName = function(stageName){
  var total = 0;
  var items = [];
  if(stageName && stageName.length){
    items = getOpptiesByStageName(stageName);
    items = items && items.length?items:[];
  }
  items.filter((item) => item && item.amount).
      forEach((item) => total += parseInt(item.amount));

  return total;
};

var getByType = function(type) {
  return SampleData.data.filter((item) => item.type === type);
};

var removeItemByType = function(type, itemToRemove) {
  let index = SampleData.data.indexOf(itemToRemove);
  SampleData.data.splice(index, 1);
};

var getByTypeAndId = function(type, sfid){
  return lodash.find(SampleData.data, (item) => item.id === sfid && item.type === type)
  // return SampleData.data.find((item) => item.id === sfid && item.type === type);
};

var handleDataChange = function() {
  var moveEvent = new CustomEvent('data:updated', {
    detail: {},
    bubbles: true
  });
  window.document.dispatchEvent(moveEvent);
};


var setByTypeAndId = function(type, sfid, sobj){
  var found = SampleData.data.some((item, index) => {
    if(item.id === sfid && item.type === type){
      SampleData.data[index] = merge(item, sobj);
      handleDataChange();
      return true;
    }
  });
  // debugger 
  // I dont think this get's pushed properly
  if (!found) {
    let clonedSobj = cloneDeep(sobj);
    clonedSobj.type = type;
    clonedSobj.id = sfid;
    SampleData.data.push(clonedSobj);
  }
};

var getActiveApp = function(){
  return SampleData.data.find((item, index) => {
    return item.type === 'appLauncherItem' && item.active === true;
  });
};

var setActiveApp = function(appId){
  var currentActive = getActiveApp();
  if(currentActive === undefined){
    setByTypeAndId('appLauncherItem',appId,{active:false})
  }

  return setByTypeAndId('appLauncherItem', appId, {active:true})
};


var resetActiveApp = function(){
  return SampleData.data.find((item, index) => {
    if (item.type === 'appLauncherItem') {
      item.active = false;
    }
  });
};

module.exports = {
  getOpptiesByStageName:getOpptiesByStageName,
  getTotalByStageName:getTotalByStageName,
  getByType:getByType,
  removeItemByType: removeItemByType,
  getByTypeAndId:getByTypeAndId,
  setByTypeAndId:setByTypeAndId,
  getActiveApp:getActiveApp,
  setActiveApp:setActiveApp,
  resetActiveApp:resetActiveApp
}
