import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { BsHeadset, BsTruck, BsPatchCheck } from 'react-icons/bs';

// Devuelve un footer con enlaces seguimiento, soporte y política de privacidad.
const FooterSecondary = () => {
  return (
    <section className="section-footer">
      <div className="footer__secondary">
        <div className="footer__secondary--contact">
          <Link to="/order">
            <BsHeadset className="footer__secondary--icon" />
          </Link>
          <p>Seguimiento de compra</p>
        </div>

        <div className="footer__secondary--warranty">
          <BsPatchCheck className="footer__secondary--icon" />
          <p>Garantía</p>
        </div>

        <div className="footer__secondary--shipments">
          <BsTruck className="footer__secondary--icon" />
          <img
            className="footer__secondary--img"
            src="/assets/images/logo.svg"
            alt=""
          />
          <p>Envíos a todo Chile</p>
        </div>
      </div>
    </section>
  );
};

export default FooterSecondary;
