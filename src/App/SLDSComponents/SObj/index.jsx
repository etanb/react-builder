import React from 'react';
import Router from 'react-router';
const PureRenderMixin = React.addons.PureRenderMixin;
// import Data from 'sampleData';
import Data from '../../../../src/data/index.js';

module.exports = React.createClass({

//  mixins:[PureRenderMixin],

  getDefaultProps() {
    return {
      type:'',
      sfid:'',
      render:React.createClass({render:function(){return(<div>**</div>)}})
    }
  },

  componentWillMount() {
    // window.document.addEventListener("data:updated", this.handleUpdate);
  },

  componentWillUnmount() {
    // window.document.removeEventListener("data:updated", this.handleUpdate);
  },

  handleUpdate() {
    this.forceUpdate();
  },

  handleEdit(data){
    Data.setByTypeAndId(this.props.type,this.props.sfid,data);
    if(this.props.onUpdate){
      this.props.onUpdate();
    }
  },

  render() {
    var sobj = Data.getByTypeAndId(this.props.type,this.props.sfid);
    var Comp = this.props.render;
    return <Comp {...this.props} sobj={sobj} onEdit={this.handleEdit}/>;
  }
  
});