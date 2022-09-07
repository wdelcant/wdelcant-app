import "./CartWidget.scss";
import { BiCart } from "react-icons/bi";

const CartWidget = () => {
  return (
    <div className="cartwidget">
      <BiCart className="cartwidget__icon" />
      <span className="cartwidget__count">0</span>
    </div>
  );
};

export default CartWidget;
