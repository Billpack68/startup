import React from 'react';
import './messageDialog.css'; 

export function MessageDialog(props) {
  return (
    <div className={`modal ${props.message ? 'show' : ''}`} style={{ display: props.message ? 'block' : 'none' }}>
      <div className="modal-content">
        <div className="modal-body">{props.message}</div>
        <div className="modal-footer">
          <button onClick={props.onHide}>Close</button>
        </div>
      </div>
    </div>
  );
}