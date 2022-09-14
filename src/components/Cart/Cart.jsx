import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./Cart.scss";

const Cart = () => {
  const {
    cart,
    totalPrice,
    totalQuantity,
    removeFromCart,
    clearCart,
    totalFinal,
  } = useCartContext();

  return cart.length <= 0 ? (
    <div className="cart-container">
      <h3 className="cart__title">Carrito vació :( </h3>
      <Link to="/" className="">
        Comprar productos
      </Link>
    </div>
  ) : (
    <div className="cart-container">
      <div className="cart">
        <div className="cart__header">
          <h1 className="cart__header--title">Carrito de compras</h1>

          <Link to="/" className="cart__header--continue-shopping">
            Seguir Comprando
          </Link>
        </div>
        <div className="cart__items">
          {cart.map((product) => {
            return (
              <ul className="cart__item">
                <li>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="cart__item--image"
                  />
                </li>
                <li>
                  <h3 className="cart__item--info--title">{product.title}</h3>
                </li>
                <li>
                  <h3 className="cart__item--quantity">
                    Cantidad: {product.quantity}
                  </h3>
                  Stock: {product.stock}
                </li>
                <li>
                  <h3 className="cart__item--info--price">${product.price}</h3>
                </li>

                <li>
                  <button
                    className="cart__item--info--remove"
                    onClick={() =>
                      // remueve solo 1 de cada producto

                      removeFromCart(product.id)
                    }
                  >
                    X
                  </button>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="cart__resume">
          <li className="cart__resume--total">
            <span>Total productos: </span>
            <span>{totalQuantity()}</span>
          </li>
          <li className="cart__resume--total">
            <span>
              Total: <span>${totalPrice()}</span>
            </span>
          </li>
          <li className="cart__resume--total">
            <span>Descuentos:{}</span>
          </li>
          <li className="cart__resume--total final">
            <span className="label">Total a Pagar: </span>
            <span className="value">${totalFinal()}</span>
          </li>
          <li className="cart__resume--total">
            <Link to={""} className="cart-btn" onClick={() => clearCart()}>
              VACIAR
            </Link>
          </li>
          <li className="cart__resume--total">
            <Link to="/Checkout" className="cart-btn">
              {" "}
              FINALIZAR
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};
export default Cart;
