import React from "react";
import './Contact.scss';

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact__form">
          <form action="#">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Correo" />
            <input type="text" placeholder="Asunto" />
            <textarea placeholder="Mensaje" defaultValue={""} />
            <button type="submit" className="site-btn">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
