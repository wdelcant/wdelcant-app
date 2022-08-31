import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header className="hero">
        <section className="hero__container">
            <div className="hero__text">
                <h1 className="hero__title">
                    <span>W</span>Store
                </h1>
                <p className="hero__subtitle">
                  Tu tienda de compras online
                </p>
            </div>
        </section>
    </header>
  )
}
export default Header
