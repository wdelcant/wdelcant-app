import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./CartWidget.scss";
import { BiCart } from "react-icons/bi";

const CartWidget = () => {
  const { totalQuantity } = useCartContext();

  return (
    <div className="cartwidget">
      <BiCart className="cartwidget__icon" />
      <span className="cartwidget__count">{totalQuantity() || 0}</span>
    </div>
  );
};

export default CartWidget;
