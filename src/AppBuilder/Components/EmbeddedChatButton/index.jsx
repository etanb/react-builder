'use strict';
import React from 'react';

import Component from '../Component';



export default class EmbeddedChatButton extends Component {
	
  render() {

  	var styles = {
		brandButton: {
		    backgroundColor: this.props.component.props.buttonbackground
		},

		brandButtonText: {
			color: this.props.component.props.buttontext,
			fontFamily: this.props.component.props.buttonfont,
			width: 80,
			overflow: 'hidden'
		}
	}

    return (
    	<button style={styles.brandButton} className="embeddedHelpBtn">
    		<p style={styles.brandButtonText}>{this.props.component.props.buttonquote}<i className="fa fa-question-circle"></i></p>
    	</button>
    );
  }
}

