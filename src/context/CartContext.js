import React, { useContext, createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useCurrency from '../hooks/useCurrency';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('cart', []);

  const { formatter } = useCurrency();
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

  const removeFromCart = id => {
    const newCart = cart.filter(product => product.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = id => {
    return cart.some(product => product.id === id);
  };

  const totalQuantity = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  };

  const totalPrice = () => {
    return formatter.format(
      cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
    );
  };

  const totalFinal = () => {
    return formatter.format(
      cart.reduce(
        (acc, product) => acc + product.priceDiscount * product.quantity,
        0
      )
    );
  };

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
