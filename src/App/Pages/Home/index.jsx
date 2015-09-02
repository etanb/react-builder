'use strict';

import React from 'react';
import Router from 'react-router';
var Link = Router.Link;
// import Button from 'slds-sample-react/src/components/buttons/index.react.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <div style={{'padding': '50px'}}>
        {/*<h1 className="text-heading--large truncate">
          Motion and Animation
        </h1>
        <ul>
          <li><Link to="MotionAndAnimation">Examples, code</Link></li>
        </ul>
        <hr/>*/}

        // <Button flavor="neutral" className="button">
        //   One time
        // </Button>
        // <Button flavor="brand" className="button">
        //   Two times
        // </Button>

        <h1 className="text-heading--large truncate">
          Spikes
        </h1>
        <ul>
          <li><Link to="RelatedList" params={{'type': 'Lead'}}>Inline Editing in Anchor, Details tab, & List View (Leads object)</Link></li>
        </ul>
        <hr/>
        
       {/*<h1 className="text-heading--large truncate">
                 List of Components
               </h1>
               <ul>
                 <li><Link to="Anchor">Anchor</Link></li>
                 <li><Link to="TileBase">Tile Base</Link></li>
                 <li><Link to="TileCard">TileCard</Link></li>
                 <li><Link to="TileKanban">TileKanban</Link></li>
                 <li><Link to="TileCustomGeneric">TileCustomGeneric</Link></li>
                 <li><Link to="TileContact">TileContact</Link></li>
                 <li><Link to="TileList">TileList</Link></li>
                 <li><Link to="TileTask">TileTask</Link></li>
                 <li><Link to="TileProduct">TileProduct</Link></li>
                 <li><Link to="TooltipBase">TooltipBase</Link></li>
                 <li><Link to="ActivityTimelineBase">ActivityTimelineBase</Link></li>
               </ul>
               <hr/>*/}
        
        <strong>Check out our previous prototype @ <a href="http://desktop-prototype-198.herokuapp.com" target="_blank">desktop-prototype-198.herokuapp.com</a>. (Username: uxe | Password: highwest)</strong>
      </div>
    );
  }
};