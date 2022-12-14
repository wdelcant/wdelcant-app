import { useCounter } from '../../hooks/useCounter';

const ItemCount = ({ initial, stock, onAdd }) => {
  // Destrucción del objeto devuelto por el gancho useCounter.
  const { counter, Add, Sub } = useCounter({ initialValue: initial });

  // Función que se ejecuta cuando se hace clic en el botón de agregar.
  return (
    <div className="item__count">
      <div className="item__product">
        <p className="item__stock">Stock disponible: {stock}</p>

        <div>
          <button
            className="item__button no-active"
            onClick={Sub}
            disabled={counter <= initial}
          >
            -
          </button>
          <span className="item__total">{counter}</span>
          <button
            className="item__button"
            onClick={Add}
            disabled={counter >= stock}
          >
            +
          </button>
        </div>
        {stock >= 1 ? (
          <button className="item__button--add" onClick={() => onAdd(counter)}>
            Añadir al carro
          </button>
        ) : (
          <p>Producto sin Stock</p>
        )}
      </div>
    </div>
  );
};
export default ItemCount;
