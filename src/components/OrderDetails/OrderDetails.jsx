import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { searchOrder } from '../../utils/firebaseFunctions';
import useCurrency from '../../hooks/useCurrency';
import Loader from '../../hooks/useLoader';
import './OrderDetails.scss';

const OrderDetails = () => {
  // permite usar el estado en componentes funcionales.
  const [orderFound, setOrderFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // loading
  const [cartHistory, setCartHistory] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const routing = useParams();
  const [priceTotal, setPriceTotal] = useState(0);

  const { formatter } = useCurrency();

// Es una función que obtiene el historial de compras de un usuario.
  const getPurchaseHistory = async () => {
    const purchaseInfo = await searchOrder(routing.orderId);
    if (purchaseInfo !== 'No order found') {
      setOrderFound(true);
      setCartHistory(purchaseInfo.items);
      let counter = 0;
      purchaseInfo.items.forEach(
        product => (counter += product.price * product.quantity)
      );
      setName(purchaseInfo.buyer.name);
      setAddress(purchaseInfo.buyer.address);
      setEmail(purchaseInfo.buyer.email);
      setPhone(purchaseInfo.buyer.phone);
      setPriceTotal(purchaseInfo.total);
    }
    setIsLoading(false);
  };

  useState(() => {
    getPurchaseHistory();
  }, []);

  return (
    <>
      {' '}
      {isLoading ? (
        <Loader />
      ) : orderFound ? (
        <div className="order__container">
          <ul>
            <li>
              <h2>Detalle de la orden</h2>
            </li>
            <li>
              <h3>ID: {routing.orderId}</h3>
            </li>
          </ul>
          {cartHistory.map(product => (
            <div className="orderDetails__container">
              <ul className="orderDetails__container__item" key={product.id}>
                <li>
                  <h3>{product.title}</h3>
                </li>
                <li>
                  <p>{product.description}</p>
                </li>
                <li>
                  <p>Cantidad: {product.quantity}</p>
                </li>
                <li>
                  <p>Precio: {formatter.format(product.price)}</p>
                </li>
                <li>
                  <p>
                    Subtotal:{' '}
                    {formatter.format(product.price * product.quantity)}
                  </p>
                </li>
              </ul>
            </div>
          ))}
          <div className="order__container--purchase">
            <p className="order__container--purchase--text">
              Total a Pagar:{' '}
              <span className="order__container--purchase--total">
                {priceTotal}
              </span>
            </p>
            <div className="order__container--purchase--user">
              <p>Nombre:</p>
              <p className="finalPrice">{name}</p>
              <p>Teléfono:</p>
              <p className="finalPrice">{phone}</p>
              <p>Email:</p>
              <p className="finalPrice">{email}</p>
              <p>Dirección:</p>
              <p className="finalPrice">{address}</p>
            </div>
            <div className="smallGoldButtonContainer">
              <Link className="smallGoldButton" to="/">
                <input
                  className="btn"
                  type="submit"
                  name="submit"
                  value="Volver al inicio"
                />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <p>No se encontró el pedido {routing.orderId}</p>
        </>
      )}
    </>
  );
};

export default OrderDetails;
