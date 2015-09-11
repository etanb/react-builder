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
    		<div className="singleTrendingArticle">
    			<img src="/assets/icons/app-builder/places/london.jpg" />
    			<div className="articleData">
    				<div className="articleTitle">
                        Travel to London
    				</div>
    				<div className="articleSummary">
                        London is an <i>it</i> girl, a fashionista, who has got it, and who certainly knows how to flaunt it.
    				</div>
    				<div className="votingDetail">
    					<i className="fa fa-thumbs-up"></i>8
    					<i className="fa fa-thumbs-down"></i>1
    				</div>
    			</div>
    		</div>
            <div className="singleTrendingArticle">
                <img src="/assets/icons/app-builder/places/paris.jpg" />
                <div className="articleData">
                    <div className="articleTitle">
                        Travel to Paris
                    </div>
                    <div className="articleSummary">
                        Captivating Paris awaits. Uncover the allure of this spectacular capital for yourself.
                    </div>
                    <div className="votingDetail">
                        <i className="fa fa-thumbs-up"></i>3
                        <i className="fa fa-thumbs-down"></i>0
                    </div>
                </div>
            </div>
            <div className="singleTrendingArticle">
                <img src="/assets/icons/app-builder/places/lille.jpg" />
                <div className="articleData">
                    <div className="articleTitle">
                        Travel to Lille
                    </div>
                    <div className="articleSummary">
                        Charming and quaint Lille abounds with cultural attractions. Journey to Lille effortlessly with Eurostar.
                    </div>
                    <div className="votingDetail">
                        <i className="fa fa-thumbs-up"></i>7
                        <i className="fa fa-thumbs-down"></i>3
                    </div>
                </div>
            </div>
            <div className="singleTrendingArticle">
                <img src="./assets/icons/app-builder/places/brussels.png" />
                <div className="articleData">
                    <div className="articleTitle">
                        Travel to Brussels
                    </div>
                    <div className="articleSummary">
                        With the help of Eurostar, you can travel swiftly to Brussels, arriving in just over 2 hours.
                    </div>
                    <div className="votingDetail">
                        <i className="fa fa-thumbs-up"></i>5
                        <i className="fa fa-thumbs-down"></i>0
                    </div>
                </div>
            </div>
    	</div>
	      
    );
  }
}

