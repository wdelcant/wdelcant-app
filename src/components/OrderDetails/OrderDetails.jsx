import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { searchOrder } from "../../utils/firebaseFunctions";
import useCurrency from "../../hooks/useCurrency";
import Loader from "../../hooks/useLoader";
import "./OrderDetails.scss";

const OrderDetails = () => {
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

  const getPurchaseHistory = async () => {
    const purchaseInfo = await searchOrder(routing.orderId);
    if (purchaseInfo !== "No order found") {
      setOrderFound(true);
      setCartHistory(purchaseInfo.items);
      let counter = 0;
      purchaseInfo.items.forEach(
        (product) => (counter += product.price * product.quantity)
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
      {" "}
      {isLoading ? (
        <Loader />
      ) : orderFound ? (
        <>
          <div className="">
            {cartHistory.map((product) => (
              <div className="orderDetails__container">
                <div className="orderDetails__container__item" key={product.id}>
                  <div className="orderDetails__container__item__info">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>
                      Cantidad: {product.quantity} - Precio:{" "}
                      {formatter.format(product.price)} - SubTotal:{" "}
                      {formatter.format(product.price * product.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="totalPricing purchaseInformation">
              <p>Nombre:</p>
              <p className="finalPrice">{name}</p>
              <p>Teléfono:</p>
              <p className="finalPrice">{phone}</p>
              <p>Email:</p>
              <p className="finalPrice">{email}</p>
              <p>Dirección:</p>
              <p className="finalPrice">{address}</p>
              <p>Total:</p>
              <p className="finalPrice">{priceTotal}</p>
              <div className="smallGoldButtonContainer">
                <Link className="smallGoldButton" to="/">
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p>No se encontró el pedido {routing.orderId}</p>
        </>
      )}
    </>
  );
};

export default OrderDetails;
