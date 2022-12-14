import { Link } from 'react-router-dom';
import Logo from './Logo';
import CartWidget from './CartWidget';
import Form from './Form';
import './NavBar.scss';
import ButtonsAcc from './ButtonsAcc';
import { useState } from 'react';
import BurguerButton from './BurguerButton';

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    /* Cuando el usuario hace clic en el botón, el estado de presentación se establece en el opuesto de lo que es actualmente. */
    setShow(!show);
  };

  const listElements = document.querySelectorAll('.menu__item--show');

  const handleClick = () => {
    listElements.forEach(e => {
      let subMenu = e.children[1];
      let height = 0;
      e.classList.toggle('menu__item--active');

      if (subMenu.clientHeight === 0) {
        height = subMenu.scrollHeight;
      }

      subMenu.style.height = `${height}px`;

      /* Si el elemento tiene una altura, se establece en cero. */
    });
  };

  return (
    <nav className="menu">
      <section className="menu__container">
        <Logo />
        <ul className={`menu__links ${show && 'menu__links--show'}`}>
          <div className="menu__item--logo" onClick={handleShow}>
            <Logo />
            <p className="menu__item--text">Store</p>
          </div>
          <li className="menu__item menu__item--show">
            <Link to="" className="menu__link" onClick={handleClick}>
              Categorías{' '}
              <img
                src="/assets/images/arrow.svg"
                className="menu__arrow"
                aria-label="imagen flecha"
              />
            </Link>

            <ul className="menu__nesting">
              <li className="menu__inside">
                <Link
                  to={'/category/procesadores'}
                  className="menu__link menu__link--inside"
                  onClick={handleShow}
                >
                  Procesadores
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to={'/category/placasmadres'}
                  className="menu__link menu__link--inside"
                  onClick={handleShow}
                >
                  Placas Madres
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to={'/category/memorias'}
                  className="menu__link menu__link--inside"
                  onClick={handleShow}
                >
                  Memorias
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to={'/category/graficas'}
                  className="menu__link menu__link--inside"
                  onClick={handleShow}
                >
                  Tarjetas Gráficas
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to={'/category/almacenamiento'}
                  className="menu__link menu__link--inside"
                  onClick={handleShow}
                >
                  Almacenamiento
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to={'/category/gabinetes'}
                  className="menu__link menu__link--inside"
                  onClick={handleShow}
                >
                  Gabinetes
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to={'/category/energia'}
                  className="menu__link menu__link--inside"
                  onClick={handleShow}
                >
                  Fuentes de poder
                </Link>
              </li>
            </ul>
          </li>

          <li className="menu__item">
            <Link to={'/services'} className="menu__link" onClick={handleShow}>
              Servicios
            </Link>
          </li>

          <li className="menu__item">
            <Link to={'/aboutus'} className="menu__link" onClick={handleShow}>
              Nosotros
            </Link>
          </li>

          <li className="menu__item">
            <Link to={'/contact'} className="menu__link" onClick={handleShow}>
              Contacto
            </Link>
          </li>
        </ul>

        <Form />
        <div className="menu__users menu__users--mobile">
          <ButtonsAcc />
        </div>
        <div className="menu__users menu__users--desktop  ">
          <ButtonsAcc handleShow={handleShow} />
        </div>
        <div>
          <BurguerButton handleShow={handleShow} show={show} />
        </div>

        <div className="">
          <Link to="/cart">
            {' '}
            <CartWidget />
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
