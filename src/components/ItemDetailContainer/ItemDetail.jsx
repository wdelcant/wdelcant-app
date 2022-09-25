import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import useCurrency from "../../hooks/useCurrency";
import ItemCount from "./ItemCount";
import Swal from "sweetalert2";
import { updateStock } from "../../utils/firebaseFunctions";
import "./ItemDetailContainer.scss";

const ItemDetail = ({ product }) => {
  const [goToCard, setGoToCard] = useState(false);

  const { addToCart } = useCartContext();
  const { formatter } = useCurrency();

  const onAdd = (quantity) => {
    addToCart(product, quantity);
    updateStock(product.id, product.stock - quantity);

    let stock = product.stock - quantity;
    product.stock = stock;
    if (stock === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No hay stock suficiente",
      });
    }
    setGoToCard(true);

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("click", () => {
          Swal.close();
        });
      },
    });
    Toast.fire({
      icon: "success",
      title: `Has agregado un total de ${quantity} ${product.title} productos correctamente`,
    });
  };

  return (
    <div id="item-detail" className="item-detail">
      <div className="item-detail__image">
        <img
          className="item-detail__image"
          src={product.img}
          alt={product.title}
        />
      </div>
      <div className="item-detail__info">
        <h1 className="item-detail__title">{product.title}</h1>
        <p className="item-detail__description">{product.resumen}</p>
        <p className="item-detail__price">{formatter.format(product.price)}</p>
        <p className="item-detail__priceDiscount">
          {formatter.format(product.priceDiscount)}
        </p>

        {goToCard ? (
          <Link to="/cart">
            <button className="item__button--add">Ir al Carrito</button>
          </Link>
        ) : (
          <ItemCount
            className="item-detail__button"
            stock={product.stock}
            initial={1}
            onAdd={onAdd}
          />
        )}

        <Link to={"/"}>
          <button className="item-detail__button">Seguir comprando</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
