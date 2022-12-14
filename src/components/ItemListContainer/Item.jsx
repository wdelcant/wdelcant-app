import React from 'react';
import { Link } from 'react-router-dom';
import useCurrency from '../../hooks/useCurrency';
import { BsHeartFill } from 'react-icons/bs';

const Item = ({ product }) => {
  // Cuando el usuario haga clic en el elemento, cambie la clase 'activa' en el elemento.
  const handleClick = event => {
    event.currentTarget.classList.toggle('active');
  };

  const { formatter } = useCurrency();

  // Devuelve un elemento de lista con un producto.
  return (
    <div className="item-list-container__item" id="item">
      <div className="item-list-container__item__image">
        <img src={product.img} alt={product.title} />
      </div>
      <h2 className="item-list-container__item__title">{product.title}</h2>
      <p className="item-list-container__item__price">
        {formatter.format(product.price)}
      </p>
      <p className="item-list-container__item__priceDiscount">
        {formatter.format(product.priceDiscount)}
      </p>
      <p className="item-list-container__item__description">
        {product.description}
      </p>
      <span className=" item-list-container__item__icon" onClick={handleClick}>
        <BsHeartFill />
      </span>
      <Link to={`/item/${product.id}`}>
        <button className="item-list-container__item__button">
          Ver mas detalles
        </button>
      </Link>
    </div>
  );
};
export default Item;
