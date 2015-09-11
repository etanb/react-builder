'use strict';
import React from 'react';

import Component from '../Component';



export default class EmbeddedKnowledge extends Component {
	
  render() {

  	var styles = {
		brandForm: {
		    backgroundColor: this.props.component.props.backgroundcolor,
		    color: this.props.component.props.fontcolor,
		    fontFamily: this.props.component.props.fontfamily
		}
	}

    return (
    	<div className="embeddedHelpMainContainer" style={styles.brandForm}>
    		<div className="chatImage">
    			<img src={this.props.component.props.imagelocation} />
    		</div>
    		<div className="chatMessage">
    			{this.props.component.props.quote}
    		</div>
    		<div className="prechatForm">
    			<form method="post" id="prechatForm" action="https://43.la.gus.salesforce.com/content/s/chat?language=en_US#deployment_id=572B000000000JE&amp;org_id=00DB00000000Rr8&amp;button_id=573B000000007Wn&amp;session_id=cf2586f8-5da3-41e6-82cc-2686879a7367">
    			<div className="form-group">

    			<span>First Name</span><br /> <input className="firstname input form-control" type="text" name="liveagent.prechat:contactFirstName" _vkenabled="true"/><br />
    			<span>Last Name</span><br /> <input className="lastname input form-control" type="text" name="liveagent.prechat:contactLastName" _vkenabled="true"/><br />
    			<span>Email</span><br /> <input className="email input form-control" type="text" name="liveagent.prechat:contactEmail" _vkenabled="true"/><br />

    			</div>
    			</form>
    		</div>
    	</div>
	      
    );
  }
}

