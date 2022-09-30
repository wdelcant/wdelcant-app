import React from 'react';
import './Form.scss';
import { FaSearch } from 'react-icons/fa';

// Devuelve un formulario con un input y un botón de búsqueda, el controlador de eventos onSubmit es la función
const Form = () => {
  return (
    <div className="form__control">
      <input
        className="form__control--input"
        type="text"
        placeholder="Buscar producto"
      />
      <FaSearch className="form__control--icon" />
    </div>
  );
};

export default Form;
