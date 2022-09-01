import React from 'react'
import FooterSecondary from './FooterSecondary'
import './Footer.scss'


const Footer = () => {
  return (
    <footer className="section">
      <FooterSecondary />
        <div className="footer">
          <h4>Síguenos en:</h4>
              <div className="footer__social">
              <span><a className="footer__social--fb" href="https://facebook.com/" aria-label="Facebook oficial de la tienda" target="_blank" rel="noreferrer"><img src="assets/images/facebook.svg" alt="imagen representativa de facebook"></img> </a></span>
              <span><a href="https://chat.whatsapp.com/" aria-label="whatsapp oficial" target="_blank" rel="noreferrer"><img src="assets/images/whatsapp.svg" alt="Logotipo de whatsapp"></img></a></span>
              <span><a href="https://t.me/" aria-label="Telegram oficial de la tienda" target="_blank" rel="noreferrer"><img src="assets/images/telegram.svg" alt="Icono de telegram"></img></a></span>
              <span><a href="mailto:wilsondelcanto.redes@gmail.com?Subject=Contacto%20web%20WStore" aria-label="Contacto con area de soporte" target="_blank" rel="noreferrer"><img src="assets/images/email.svg" alt="Imagen de correo electrónico"></img></a></span>
          </div>
          <p className="footer__copy">© 2022 Copyright. <a href="index.html"> wStore.cl</a> v.1.0 |<a href="https://wilsondelcanto.dev"> wilsondelcanto.dev</a></p>
        </div>
  </footer>
  )
}
export default Footer
