import React from 'react'
import './Footer.scss'
import { BsHeadset, BsTruck, BsPatchCheck } from 'react-icons/bs';

const FooterSecunday = () => {
  return (
  <section className="section-footer">
    <div className="footer__secondary">
        <div className="footer__secondary--contact">
          <BsHeadset className="footer__secondary--icon"/>
          <p>Soporte Técnico</p>
        </div>

        <div className="footer__secondary--warranty">
          <BsPatchCheck className="footer__secondary--icon"/>
          <p>Garantía</p>
        </div>
        
        <div className="footer__secondary--shipments">
          <BsTruck className="footer__secondary--icon"/>
          <img className="footer__secondary--img" src="assets/images/logo.svg" alt="" />
          <p>Envíos a todo Chile</p>
        </div>
    </div>
  </section>
  )
}

export default FooterSecunday
