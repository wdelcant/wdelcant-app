import React from 'react';
import CartContainer from '../../components/CartContainer/CartContainer';
import EmpyCart from '../../components/CartContainer/EmpyCart';
import { useCartContext } from '../../context/CartContext';
import './Cart.scss';

const Cart = () => {
  const { cart } = useCartContext();
  return (
    <div className="cart-container">
      {cart.length <= 0 ? <EmpyCart /> : <CartContainer />}
    </div>
  );
};

export default Cart;
