import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { updateStock } from '../../utils/firebaseFunctions';
import CartDetail from './CartDetail';

const CartContainer = () => {
  const {
    cart,
    totalPrice,
    totalQuantity,
    clearCart,
    totalFinal,
    totalDiscount,
  } = useCartContext();

  const handleClearCart = () => {
    cart.forEach(product => {
      updateStock(product.id, product.stock);
    });
    clearCart();
  };

  return (
    <>
      <div className="cart-container">
        <div className="cart">
          <div className="cart__header">
            <h1 className="cart__header--title">Carrito de compras</h1>

            <Link to="/" className="cart__header--continue-shopping">
              Seguir Comprando
            </Link>
          </div>
          <div className="cart__items">
            {cart.map(product => (
              <CartDetail key={product.id} product={product} />
            ))}
          </div>
          <div className="cart__resume">
            <li className="cart__resume--total">
              <span>Total productos: </span>
              <span>{totalQuantity()}</span>
            </li>
            <li className="cart__resume--total">
              <span>
                Total: <span>{totalPrice()}</span>
              </span>
            </li>
            <li className="cart__resume--total">
              <span>Descuentos:</span>
              <span>{totalDiscount()}</span>
            </li>
            <li className="cart__resume--total final">
              <span className="label">Total a Pagar: </span>
              <span className="value">{totalFinal()}</span>
            </li>
            <li className="cart__resume--total">
              <Link
                to={''}
                className="cart-btn"
                onClick={() => handleClearCart()}
              >
                VACIAR
              </Link>
            </li>
            <li className="cart__resume--total">
              <Link to="/checkout" className="cart-btn">
                {' '}
                FINALIZAR
              </Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
