import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './CartWidget.scss';
import { BiCart } from 'react-icons/bi';

const CartWidget = () => {
  const { totalQuantity } = useCartContext();

  // Devuelve un div con icono de carrito y el total de productos en el carrito
  return (
    <div className="cartwidget">
      <BiCart className="cartwidget__icon" />
      <span className="cartwidget__count">{totalQuantity() || 0}</span>
    </div>
  );
};

export default CartWidget;
