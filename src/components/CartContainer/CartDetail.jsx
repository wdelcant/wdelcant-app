import React, { useState, useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { getProductById, updateStock } from "../../utils/firebaseFunctions";

const CartDetail = ({ product }) => {
  const { addToCart, removeFromCart } = useCartContext();

  const [stockProduct, setStockProduct] = useState(product.stock);

  useEffect(() => {
    // Cuando el componente se monta, obtengo el producto de la base de datos (el stock) y lo guardo en el state stockProduct
    getProductById(product.id).then((product) =>
      setStockProduct(product.stock)
    );
  }, [product.id]);

  const addItem = () => {
    // Añado productos mientras haya en stock de ese producto
    if (stockProduct > 0) {
      addToCart(product, 1);
      // Actualizo el stock del producto en la base de datos
      updateStock(product.id, stockProduct - 1);
      setStockProduct(stockProduct - 1);
    }
  };

  const resItem = () => {
    if (product.quantity > 0) {
      addToCart(product, -1);

      // Actualizo el stock del producto en la base de datos
      updateStock(product.id, stockProduct + 1);
      setStockProduct(stockProduct + 1);
    }
  };

  function handlerDeleteBtn() {
    updateStock(product.id, product.quantity + stockProduct);
    removeFromCart(product.id);
  }

  return (
    <ul className="cart__item" key={product.id}>
      <li>
        <Link to={`/item/${product.id}`}>
          <img
            src={product.img}
            alt={product.title}
            className="cart__item--image"
          />
        </Link>
      </li>
      <li>
        <h3 className="cart__item--info--title">{product.title}</h3>
      </li>
      <li>
        <button
          className="cart__item--info--btn"
          onClick={resItem}
          disabled={product.quantity <= 1}
        >
          -
        </button>
        <button onClick={addItem} disabled={product.quantity >= product.stock}>
          +
        </button>
        <h3 className="cart__item--quantity">Cantidad: {product.quantity}</h3>
        En stock: {product.stock}
      </li>
      <li>
        <h3 className="cart__item--info--price">{product.price}</h3>
      </li>

      <li>
        <button className="cart__item--info--remove" onClick={handlerDeleteBtn}>
          X
        </button>
      </li>
    </ul>
  );
};

export default CartDetail;
