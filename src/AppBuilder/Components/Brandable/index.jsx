'use strict';
import React from 'react';

import Component from '../Component';



export default class Brandable extends Component {
	
  render() {

  	var styles = {
		brandCircle: {
			margin: '0 auto',
		    backgroundColor: 'black',
		    height: 450,
		    width: 450,
		    borderRadius: 500
		},

		brandFont: {
			color: 'yellow',
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
