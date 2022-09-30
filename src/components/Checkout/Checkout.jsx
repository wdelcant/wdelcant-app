import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import db from '../../utils/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import './Checkout.scss';
import { Swal } from 'sweetalert2';

const Checkout = () => {
  const { cart, totalFinal, clearCart } = useCartContext();
  const [orderId, setOrderId] = useState();
  // Fija el estado del comprador.
  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: '',
    dni: '',
    address: '',
  });
  const { name, phone, email, dni, address } = buyer;

  const generateOrder = async data => {
    //La función generateOrder es una función asíncrona que toma datos como parámetro y luego intenta crear un nuevo pedido en la base de datos, y si tiene éxito, establece el estado orderId en el del pedido recién creado, y luego limpia el carrito.
    try {
      const col = collection(db, 'orders');
      const order = await addDoc(col, data);
      setOrderId(order.id);
      clearCart();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error} Algo salió mal!`,
      });
    }
  };

  const handleChange = e => {
    // Cuando el usuario escribe en el campo de entrada, el valor del campo de entrada se establece en el objeto del comprador.
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    // Cuando se envía el formulario, evita que se actualice la pagina, asigna la matriz del carrito a una nueva matriz de objetos, cree una nueva fecha, calcule el total y luego genere el pedido.
    e.preventDefault();
    const items = cart.map(e => {
      return {
        id: e.id,
        title: e.title,
        price: e.priceDiscount,
        quantity: e.quantity,
      };
    });
    const date = new Date();
    const total = totalFinal();
    const data = { buyer, items, date, total };
    generateOrder(data);
  };

  return (
    <div className="checkout">
      {!orderId ? (
        <form onSubmit={handleSubmit}>
          <h1>Tus datos</h1>
          <p>Datos para envío de notificaciones de la compra</p>
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
            <input className="btn" type="submit" value="Finalizar Compra" />
          </div>
        </form>
      ) : (
        <div className="end">
          <p>Gracias por tu compra!{name}</p>
          <p>
            Tu numero de orden es: <strong> {orderId}</strong>
          </p>
          <p>Te llegará un mail con los detalles de tu compra</p>
          <p>Te esperamos de vuelta!</p>
          <Link to="/">
            <div>
              <input className="btn" type="submit" value="Finalizar" />
            </div>
          </Link>
          <Link to="/order">
            <div>
              <input className="btn" type="submit" value="Ver Detalle" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
