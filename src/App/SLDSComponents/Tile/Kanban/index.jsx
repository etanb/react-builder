import React from 'react';

export default class TILEKANBAN extends React.Component {
  render () {
    return <div>
      <div className="tile tile--kanban">
        <h3 className="text-body--small">
          <a href="#">Tesla CloudHub + AnyPoint</a>
        </h3>
        <p className="text-heading--small tile--kanban__amount">$100,000</p>
        <p className="tile--kanban__closing">closing 2/28/2015</p>
      </div>
    </div>
  }
};

TILEKANBAN.propTypes = {

};