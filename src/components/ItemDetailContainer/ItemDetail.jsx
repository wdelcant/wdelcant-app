import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";
import Swal from "sweetalert2";
import "./ItemDetailContainer.scss";

const ItemDetail = ({ product }) => {
  const [goToCard, setGoToCard] = useState(false);

  const { addToCart } = useCartContext();

  const onAdd = (quantity) => {
    addToCart(product, quantity);
    let stock = product.stock - quantity;
    product.stock = stock;
    setGoToCard(true);
    console.log(product);

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
      title: `Has agregado un total de ${quantity} productos correctamente`,
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
        <p className="item-detail__price">${product.price}</p>
        <p className="item-detail__priceDiscount">${product.priceDiscount}</p>

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
