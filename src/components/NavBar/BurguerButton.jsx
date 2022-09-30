import React from 'react';
import './BurguerButton.scss';

const BurguerButton = props => {
  return (
    <div
      className={`menu__hamburguer ${props.show && 'open'}`}
      show={props.show}
      onClick={props.handleShow}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurguerButton;
