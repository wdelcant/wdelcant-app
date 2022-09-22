import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import db from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const { cart, totalFinal, clearCart } = useCartContext();
  const [orderId, setOrderId] = useState();
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
    dni: "",
    address: "",
  });
  const { name, phone, email, dni, address } = buyer;

  const generateOrder = async (data) => {
    try {
      const col = collection(db, "orders");
      const order = await addDoc(col, data);
      console.log("OrdenNro:", order);
      setOrderId(order.id);
      clearCart();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = cart.map((e) => {
      return { id: e.id, title: e.title, price: e.price, quantity: e.quantity };
    });
    const date = new Date();
    const total = totalFinal();
    const data = { buyer, items, date, total };
    console.log("data", data);
    generateOrder(data);
  };

  return (
    <div>
      <h1>Checkout</h1>
      {!orderId ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="dni">DNI</label>
            <input type="text" name="dni" value={dni} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="submit" value="Finalizar Compra" />
          </div>
        </form>
      ) : (
        <div>
          <h2>Gracias por tu compra!</h2>
          <p>Tu numero de orden es: {orderId}</p>
          <p>Te llegará un mail con los detalles de tu compra</p>
          <p>Te esperamos de vuelta!</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
