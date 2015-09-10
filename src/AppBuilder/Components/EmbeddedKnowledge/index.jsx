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
    	<div className="embeddedHelpMainContainer">
    		<div className="singleTrendingArticle">
    			<img src="http://localhost:3020/images/trains-to-uk-us-main2.jpg" />
    			<div className="articleData">
    				<div className="articleTitle">
    				</div>
    				<div className="articleSummary">
    				</div>
    				<div className="votingDetail">
    					<i className="fa fa-thumbs-up"></i>
    					<i className="fa fa-thumbs-down"></i>
    				</div>
    			</div>
    		</div>
            <div className="singleTrendingArticle">
                <img src="http://localhost:3020/images/trains-to-uk-us-main2.jpg" />
                <div className="articleData">
                    <div className="articleTitle">
                    </div>
                    <div className="articleSummary">
                    </div>
                    <div className="votingDetail">
                        <i className="fa fa-thumbs-up"></i>
                        <i className="fa fa-thumbs-down"></i>
                    </div>
                </div>
            </div>
            <div className="singleTrendingArticle">
                <img src="http://localhost:3020/images/trains-to-uk-us-main2.jpg" />
                <div className="articleData">
                    <div className="articleTitle">
                    </div>
                    <div className="articleSummary">
                    </div>
                    <div className="votingDetail">
                        <i className="fa fa-thumbs-up"></i>
                        <i className="fa fa-thumbs-down"></i>
                    </div>
                </div>
            </div>
            <div className="singleTrendingArticle">
                <img src="http://localhost:3020/images/trains-to-uk-us-main2.jpg" />
                <div className="articleData">
                    <div className="articleTitle">
                    </div>
                    <div className="articleSummary">
                    </div>
                    <div className="votingDetail">
                        <i className="fa fa-thumbs-up"></i>
                        <i className="fa fa-thumbs-down"></i>
                    </div>
                </div>
            </div>
            <div className="singleTrendingArticle">
                <img src="http://localhost:3020/images/trains-to-uk-us-main2.jpg" />
                <div className="articleData">
                    <div className="articleTitle">
                    </div>
                    <div className="articleSummary">
                    </div>
                    <div className="votingDetail">
                        <i className="fa fa-thumbs-up"></i>
                        <i className="fa fa-thumbs-down"></i>
                    </div>
                </div>
            </div>
    	</div>
	      
    );
  }
}

