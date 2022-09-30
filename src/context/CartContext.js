import React, { useContext, createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useCurrency from '../hooks/useCurrency';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('cart', []);

  const { formatter } = useCurrency();

  // Si el artículo ya está en el carrito, aumente la cantidad de ese artículo por la cantidad pasada. Si el artículo no está en el carrito, agréguelo al carrito con la cantidad pasada.
  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map(product => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Toma una identificación como argumento y devuelve una nueva matriz de productos que no tienen la misma identificación que el argumento.
  const removeFromCart = id => {
    const newCart = cart.filter(product => product.id !== id);
    setCart(newCart);
  };

  // Toma el estado actual del carrito y lo establece en una matriz vacía.
  const clearCart = () => {
    setCart([]);
  };

  // Si la identificación del producto en el carrito es la misma que la identificación del producto que estamos verificando, devuelva verdadero.
  const isInCart = id => {
    return cart.some(product => product.id === id);
  };

  // Toma una matriz de objetos y devuelve la suma de la propiedad de cantidad de cada objeto.
  const totalQuantity = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  };

  // Toma la matriz del carrito y la reduce a un solo número, que es el precio total de todos los artículos en el carrito.
  const totalPrice = () => {
    return formatter.format(
      cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
    );
  };

  // Toma la matriz del carrito, la reduce a un solo número y luego la formatea.
  const totalFinal = () => {
    return formatter.format(
      cart.reduce(
        (acc, product) => acc + product.priceDiscount * product.quantity,
        0
      )
    );
  };

  // Toma el precio de cada producto, resta el descuento, lo multiplica por la cantidad y lo suma al acumulador.
  const totalDiscount = () => {
    return formatter.format(
      cart.reduce(
        (acc, product) =>
          acc + (product.price - product.priceDiscount) * product.quantity,
        0
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        isInCart,
        clearCart,
        totalQuantity,
        totalPrice,
        totalFinal,
        totalDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// export default CartProvider;
