import React from "react";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Item = ({ id, img, title, price, description }) => {
  const handleClick = (event) => {
    event.currentTarget.classList.toggle("active");
  };

  return (
    <div className="item-list-container__item" id="item">
      <div className="item-list-container__item__image">
        <img src={img} alt={title} />
      </div>
      <h2 className="item-list-container__item__title">{title}</h2>
      <p className="item-list-container__item__price">${price}</p>
      <p className="item-list-container__item__description">{description}</p>
      <span className=" item-list-container__item__icon" onClick={handleClick}>
        <BsHeartFill />
      </span>
      <Link to={`/item/${id}`}>
      <button className="item-list-container__item__button">
        Ver mas detalles
      </button>
        </Link>
    </div>
  );
};
export default Item;
