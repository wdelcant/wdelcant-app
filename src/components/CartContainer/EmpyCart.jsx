import React from 'react';
import { Link } from 'react-router-dom';
import './EmpyCart.scss';

// Devuelve un div con una imagen, un título y un enlace a la página de inicio.
const EmpyCart = () => {
  return (
    <div className="cart-container">
      <h3 className="cart__container--empy--title">Su cesta está vacía. :( </h3>
      <img src="/assets/images/alert-circle.svg" alt="cart" />
      <p className="cart__container--empy--text">
        ¡Llénalo con nuestros mejores productos!
      </p>
      <Link to="/" className="cart__container--empy--button">
        Comprar productos
      </Link>
    </div>
  );
};

export default EmpyCart;
