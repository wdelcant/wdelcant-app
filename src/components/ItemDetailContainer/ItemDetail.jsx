import ItemCount from "./ItemCount";
import react, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./ItemDetailContainer.scss";

const ItemDetail = ({ title, resumen, img, price, stock, priceDiscount }) => {
  const onAdd = (count) => {
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
      title: `Has agregado un total de ${count} productos correctamente`,
    });
  };

  return (
    <div id="item-detail" className="item-detail">
      <div></div>
      <div className="item-detail__image">
        <img className="item-detail__image" src={img} alt={title} />
      </div>
      <div className="item-detail__info">
        <h1 className="item-detail__title">{title}</h1>
        <p className="item-detail__description">{resumen}</p>
        <p className="item-detail__price">${price}</p>
        <p className="item-detail__priceDiscount">${priceDiscount}</p>

        <ItemCount
          className="item-detail__button"
          stock={stock}
          initial={1}
          onAdd={onAdd}
        />
        <Link to={"/"}>
          {" "}
          <button className="item-detail__button">Seguir comprando</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
