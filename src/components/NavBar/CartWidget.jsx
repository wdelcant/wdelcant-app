import "./CartWidget.scss";
import { BiCart } from "react-icons/bi";

const CartWidget = () => {
  return (
    <div className="cart">
      <BiCart className="cart__icon" />
      <span className="cart__count">0</span>
    </div>
  );
};

export default CartWidget;
