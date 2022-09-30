import React from 'react';
import FooterSecondary from './FooterSecondary';
import { BsFacebook, BsWhatsapp, BsTelegram, BsEnvelope } from 'react-icons/bs';
import './Footer.scss';
import { Link } from 'react-router-dom';

// Devuelve un footer con enlaces de contacto y redes sociales.
const Footer = () => {
  return (
    <footer className="section">
      <FooterSecondary />
      <div className="footer">
        <h4>Síguenos en:</h4>
        <div className="footer__social">
          <span>
            <a
              className="footer__social--fb"
              href="https://facebook.com/"
              aria-label="Facebook oficial de la tienda"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook className="footer__social--fb" />
            </a>
          </span>
          <span>
            <a
              href="https://chat.whatsapp.com/"
              aria-label="WhatsApp oficial"
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp className="footer__social--wsp" />
            </a>
          </span>
          <span>
            <a
              href="https://t.me/"
              aria-label="Telegram oficial de la tienda"
              target="_blank"
              rel="noreferrer"
            >
              <BsTelegram className="footer__social--tg" />
            </a>
          </span>
          <span>
            <a
              href="mailto:wilsondelcanto.redes@gmail.com?Subject=Contacto%20web%20WStore"
              aria-label="Contacto con area de soporte"
              target="_blank"
              rel="noreferrer"
            >
              <BsEnvelope className="footer__social--mail" />
            </a>
          </span>
        </div>
        <p className="footer__copy">
          © 2022 Copyright. <Link to="/"> wStore.cl</Link> v.2.0 |
          <a
            href="https://wilsondelcanto.dev"
            aria-label="Pagina web del creador"
            target="_blank"
            rel="noreferrer"
          >
            wilsondelcanto.dev
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
