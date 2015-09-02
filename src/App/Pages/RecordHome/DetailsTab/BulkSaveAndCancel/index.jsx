import React from 'react';
import ButtonGroup from '../../../../../App/SLDSComponents/Button/ButtonGroup';
import Button from '../../../../../App/SLDSComponents/Button/Button';

export default class BulkSaveAndCancel extends React.Component {
  render() {
    return (
      <div className="sds-col sds-size--1-of-1 sds-grid sds-grid--align-center" style={{
          position: 'fixed',
          width: '62%',
          bottom: '0',
          left: '5rem',
          backgroundColor: 'rgba(248,248,248,0.8)',
          zIndex: '1000',
          padding: '16px'
        }}>

        <ButtonGroup>
          <Button text="Save" sds-assistive-text="Chart"/>
        </ButtonGroup>
        <ButtonGroup>
          <Button text="Cancel" sds-assistive-text="Chart"/>
        </ButtonGroup>
      </div>
    )
  }
}