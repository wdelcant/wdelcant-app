import React from 'react';
import { Link } from 'react-router-dom';

// Devuelve un div con una imagen, un título y un enlace a la página de inicio.
const EmpyCart = () => {
  return (
    <div className="cart-container">
      <img src="/assets/images/alert-circle.svg" alt="cart" />
      <h3 className="cart__title">No hay productos agregados al carro :( </h3>
      <Link to="/" className="">
        Comprar productos
      </Link>
    </div>
  );
};

export default EmpyCart;
