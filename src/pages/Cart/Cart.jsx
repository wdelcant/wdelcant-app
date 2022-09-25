import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import useCurrency from "../../hooks/useCurrency";
import { updateStock } from "../../utils/firebaseFunctions";
import "./Cart.scss";

const Cart = () => {
  const {
    cart,
    totalPrice,
    totalQuantity,
    removeFromCart,
    clearCart,
    totalFinal,
    totalDiscount,
  } = useCartContext();

  const { formatter } = useCurrency();

  const handleClearCart = () => {
    cart.forEach((product) => {
      updateStock(product.id, product.stock);
    });
    clearCart();
  };

  return cart.length <= 0 ? (
    <div className="cart-container">
      <img src="/assets/images/alert-circle.svg" alt="cart" />
      <h3 className="cart__title">No hay productos agregados al carro :( </h3>
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
              <ul className="cart__item" key={product.id}>
                <li>
                  <Link to={`/item/${product.id}`}>
                    <img
                      src={product.img}
                      alt={product.title}
                      className="cart__item--image"
                    />
                  </Link>
                </li>
                <li>
                  <h3 className="cart__item--info--title">{product.title}</h3>
                </li>
                <li>
                  <h3 className="cart__item--quantity">
                    Cantidad: {product.quantity}
                  </h3>
                  En stock: {product.stock}
                </li>
                <li>
                  <h3 className="cart__item--info--price">
                    {formatter.format(product.price)}
                  </h3>
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
              to={""}
              className="cart-btn"
              onClick={() => handleClearCart()}
            >
              VACIAR
            </Link>
          </li>
          <li className="cart__resume--total">
            <Link to="/checkout" className="cart-btn">
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
