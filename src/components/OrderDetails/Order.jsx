import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  let inputRef = useRef();
  const navigate = useNavigate();
  const [searchString, setSearchString] = useState();

  const updateOrderSearch = e => {
    setSearchString(e.target.value);
  };
  const attemptSearch = e => {
    if (typeof searchString === 'undefined' || searchString === '') {
      e.preventDefault();
      inputRef.current.focus();
    } else {
      navigate(`/searchorder/${searchString}`);
    }
  };
  return (
    <div className="orderID__Container">
      <h2 className="orderID__Container--title">Encuentra tu pedido</h2>
      <p>Ingrese su ID de pedido para buscar su historial de compras</p>
      <form onSubmit={attemptSearch}>
        <input
          type="searchOrder"
          name="searchOrder"
          placeholder="Ingrese su ID de pedido"
          ref={inputRef}
          onChange={updateOrderSearch}
        />
        <input className="btn" type="submit" name="submit" value="Buscar" />
      </form>
    </div>
  );
};

export default Order;
