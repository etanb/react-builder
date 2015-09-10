'use strict';
import React from 'react';

import Component from '../Component';



export default class EmbeddedKnowledge extends Component {
	
  render() {

  	var styles = {
		brandCircle: {
			margin: '0 auto',
		    backgroundColor: this.props.component.props.circlecolor,
		    height: 450,
		    width: 450,
		    borderRadius: 500
		},

		brandFont: {
			fontFamily: this.props.component.props.fontfamily,
			color: this.props.component.props.fontcolor,
		    paddingTop: 200,
		    paddingLeft: 50,
		    paddingRight: 50
		}
	}

    return (
    	<div style={styles.brandCircle}>
    		<div style={styles.brandFont}>
    			<Component {...this.props}>
    			  <div className="hmin-small">{this.props.component.props.quote}</div>
    			</Component>
    		</div>
    	</div>
	      
    );
  }
}

