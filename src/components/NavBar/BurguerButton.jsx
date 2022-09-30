import React from 'react';
import './BurguerButton.scss';

// Devuelve un div con un className que es una cadena de menu__hamburguer y el valor de la propiedad props.show, que es un booleano, y el controlador de eventos onClick es la función
const BurguerButton = props => {
  return (
    <div
      className={`menu__hamburguer ${props.show && 'open'}`}
      show={props.show.toString()}
      onClick={props.handleShow}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurguerButton;
