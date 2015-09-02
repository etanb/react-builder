import React from 'react';
import Anchor from '../../SLDSComponents/Anchor';
import RecordHomeDetailsTab from './DetailsTab'

import TabDefault from '../../SLDSComponents/Tab/Default';
import TabButton from '../../SLDSComponents/Tab/Default/TabButton';
import CardCompact from '../../SLDSComponents/Card/Compact';
// import Tabs from 'slds-sample-react/src/components/tabs/index.react';

// TODO: These looks like TOP LEVEL type things
import NotificationToast from '../../SLDSComponents/NotificationToast';
import DialogsBase from '../../SLDSComponents/Dialogs';
import Calendar from '../../SLDSComponents/Calendar';
import ModalForMassAdd from '../../Pages/ModalForMassAdd';
import SampleData from '../../../../src/data/index.js';
let newObj = {};

export default class RecordHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalsvisable: false,
      displayPopover: false,
      popoverPosTop: null,
      popoverPosLeft: null,
      currenttab: 'details',
      showToast: false
    }
  }

  onclickdisplaymodal() {
    this.setState({ modalsvisable: !this.state.modalsvisable });
  }
  
  onclickpopover(event) {
    this.setState({ 
      displayPopover: !this.state.displayPopover,
      popoverPosTop: event.target.getClientRects()[0].top,
      popoverPosLeft: event.target.getClientRects()[0].left - (event.target.getClientRects()[0].width),
      whatAmIEditing: event.target.id
    });
  }

  onclicktab(event) {
    this.setState({ currenttab: event.target.id.toLowerCase() });
  }

  saveNewDate() {
    this.setState({ displayPopover: !this.state.displayPopover })
    if (this.state.whatAmIEditing === 'closedData') {
      SampleData.setByTypeAndId('lead', 'l01', {
        info: {
          closingDate: {
            content: 'Closing 08/18/2015'
          }
        }
      })
    } else {
      SampleData.setByTypeAndId('lead', 'l01', {
        info: {
          amount: {
            content: React.findDOMNode(this.refs.amount).value || '0'
          }
        }
      })
    }
    this.forceUpdate();
  }

  saveBulk() {
    if (document.getElementById('leadstatus')) {
      newObj['info'] = {
        'leadStatus': {
          'content': document.getElementById('leadstatus').innerHTML,
          'leadStatusReason': {
            'content': document.getElementById('leadstatusreason').innerHTML
          }
        }
      }
      SampleData.setByTypeAndId('lead', 'l01', newObj);
      this.forceUpdate();
      this.cancelBulk();
    } else  {
      SampleData.setByTypeAndId('lead', 'l01', newObj);
      this.forceUpdate();
      this.cancelBulk();
    }
    this.setState({ showToast: !this.state.showToast });
    setTimeout(()=>{
      this.setState({ showToast: !this.state.showToast });
    }, 3000)
  }

  cancelBulk(){
    this.setState({ editMode: false }); 
    this.setState({ currenttab: 'collaborate' })
    setTimeout(()=>{ this.setState({ currenttab: 'details' }) }, 10) 
  }

  renderpopover(event) {
    let dialogheading = this.state.whatAmIEditing === 'closedData' ? 'Closing Data' : 'Amount';
    let dialogbody = this.state.whatAmIEditing === 'closedData' ? 
      <Calendar 
        saveNewDate={this.saveNewDate.bind(this)}
        onclickpopover={this.onclickpopover.bind(this)}/> : <div>
        <form className="sds-form--inline">
          <div className="sds-form-element">
            <label className="sds-form-element__label" for="amount"/>
            <div className="sds-form-element__control">
              <input id="amount" className="sds-input" type="text" defaultValue="1,000,000" ref="amount"/>
            </div>
          </div>
        </form>
        <div className="mt-small">
          <button className="sds-button sds-button--neutral" onClick={this.onclickpopover.bind(this)}>Cancel</button>
          <button className="sds-button sds-button--brand" onClick={this.saveNewDate.bind(this)} style={{float: 'right'}}>Save</button>
        </div>
      </div>;
    let height = this.state.whatAmIEditing === 'closedData' ? '25rem':'';
    return this.state.displayPopover ? <DialogsBase 
      popoverPosTop={this.state.popoverPosTop} 
      popoverPosLeft={this.state.popoverPosLeft} 
      dialogheading={dialogheading} 
      height= {height}
      dialogbody={dialogbody}/> : null
  }

  render() {
    let Data = SampleData.getByTypeAndId(this.props.params.type, this.props.params.sfid);
    return (
      <div className="sds-grid sds-wrap">
        
        {/* Render Popovers from Anchor*/}
        {this.renderpopover()}
        
        {/* Render Modal from Anchor*/}
        {this.state.modalsvisable ? <ModalForMassAdd 
          onclickdisplaymodal={this.onclickdisplaymodal.bind(this)} 
          modalheader="Edit Lead Member" 
          subheader=""/> : null}

        {/* Render Toast*/}
        {/*{this.state.showToast ? <NotificationToast/> : null }*/}

        <nav className="sds-col sds-size--1-of-1">
          <Anchor 
            type={this.props.params.type} 
            data={Data} 
            label1={Data.info.title.label} 
            label2={Data.info.closingDate.label} 
            label3={Data.info.amount.label} 
            label4={Data.communication.email.label} 
            onclickpopover={this.onclickpopover.bind(this)}
            onclickdisplaymodal={this.onclickdisplaymodal.bind(this)}/>
        </nav>
        <section className="sds-col sds-size--1-of-1 sds-grid sds-grid--align-center">
          <main className="sds-col sds-size--1-of-2 sds-medium-size--1-of-6 sds-large-size--8-of-12 pa-small">

            {/*<TabDefault 
              content={<RecordHomeDetailsTab data={Data}/>} 
              currenttab={this.state.currenttab}
              onclicktab={this.onclicktab.bind(this)}>
  
                <TabButton label="Activity" active={false}/>
                <TabButton label="Collaboration" active={false}/>
                <TabButton label="Details" active={true}/>
                
              </TabDefault>*/}

        // <Tabs flavor="default" selectedIndex={2}>
        //   <Tabs.Item title="Activity">
        //     <h2>Item One Content</h2>
        //   </Tabs.Item>
        //   <Tabs.Item title="Collaboration">
        //     <h2>Item Two Content</h2>
        //   </Tabs.Item>
        //   <Tabs.Item title="Details">
        //     <RecordHomeDetailsTab data={Data}/> 
        //   </Tabs.Item>
        // </Tabs>

          </main>
          <aside className="sds-col sds-size--1-of-2 sds-medium-size--5-of-6 sds-large-size--4-of-12 pa-small">
            <CardCompact 
              type={this.props.params.type} 
              cardheader="Opportunity Members" 
              linkto="RelatedList" 
              cardType="opportunity" 
              action="Add Team Members" />
            <CardCompact 
              type={this.props.params.type} 
              cardheader="Products" 
              linkto="/" 
              cardType="product" 
              action="Add New Product"/>
            <CardCompact 
              type={this.props.params.type} 
              cardheader="Files" 
              linkto="/" 
              cardType="file" 
              action="Tile Custom Generic"/>
          </aside>
        </section>
      </div>
    )
  }
};