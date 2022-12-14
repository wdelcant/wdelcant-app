import React from 'react';
import './Contact.scss';

// Importamos el contexto de autenticación
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact__form">
          <form action="#">
            <h1>Contacto</h1>
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Correo" />
            <input type="text" placeholder="Asunto" />
            <textarea placeholder="Mensaje" defaultValue={''} />
            <button type="submit" className="btn">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
