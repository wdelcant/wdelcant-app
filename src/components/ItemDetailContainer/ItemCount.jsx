import "./ItemCount.scss";
import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {

  const [count, setCount] = useState(initial);

  const Add = () => {
    setCount(count + 1);
  };
  
  const Sub = () => {
    setCount(count - 1);
  };

  return (
    <div className="item__count">
      <div className="item__product">
        <p className="item__stock">Stock disponible: {stock}</p>

        <div>
          <button
            className="item__button no-active"
            onClick={Sub}
            disabled={count <= initial}
          >
            -
          </button>
          <span className="item__total">{count}</span>
          <button
            className="item__button"
            onClick={Add}
            disabled={count >= stock}
          >
            +
          </button>
        </div>
        <button className="item__button--add" onClick={() => onAdd(count)}>
          Añadir al carro
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
