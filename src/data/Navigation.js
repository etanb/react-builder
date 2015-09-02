const Reflux = require('reflux');
const Data = require('app/data');

var actions = {

  /**
   * Set new tabs for the navigation
   *
   * @param {object} state - ReactRouter navigation state
   */
  changeRoute: Reflux.createAction({ sync: true })

};

var store = Reflux.createStore({

  listenables: actions,

  init() {
   
  },
  
  onChangeRoute(state) {
    this.state = state;
    this.trigger();
    Data.resetActiveApp(state.params.appid);
    if(state.params && state.params.appid){
      Data.setActiveApp(state.params.appid);
    }
  }

});

module.exports = {
  actions: actions,
  store: store
};