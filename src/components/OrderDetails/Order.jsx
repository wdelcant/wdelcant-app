import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  let inputRef = useRef();
  const navigate = useNavigate();
  const [searchString, setSearchString] = useState();

  // Cuando el usuario escriba en el cuadro de búsqueda, actualice la variable de estado searchString con el valor del cuadro de búsqueda.
  const updateOrderSearch = e => {
    setSearchString(e.target.value);
  };

  // Si la búsqueda no está definida o está vacía no realiza acciones ; de lo contrario, te redirige página de orden de búsqueda con la cadena de búsqueda como parámetro.
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
