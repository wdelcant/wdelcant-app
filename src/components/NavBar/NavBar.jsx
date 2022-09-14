import { Link } from "react-router-dom";
import Logo from "./Logo";
import CartWidget from "./CartWidget";
import Form from "./Form";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="menu">
      <section className="menu__container">
        <Logo />
        <ul className="menu__links">
          <li className="menu__item menu__item--show">
            <Link to="" className="menu__link">
              Categorías{" "}
              <img
                src="/assets/images/arrow.svg"
                className="menu__arrow"
                aria-label="imagen flecha"
              />
            </Link>

            <ul className="menu__nesting">
              <li className="menu__inside">
                <Link
                  to={"/category/procesadores"}
                  className="menu__link menu__link--inside"
                >
                  Procesadores
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to={"/category/placasmadres"}
                  className="menu__link menu__link--inside"
                >
                  Placas Madres
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to={"/category/memorias"}
                  className="menu__link menu__link--inside"
                >
                  Memorias
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to={"/category/graficas"}
                  className="menu__link menu__link--inside"
                >
                  Tarjetas Gráficas
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to={"/category/almacenamiento"}
                  className="menu__link menu__link--inside"
                >
                  Almacenamiento
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to={"/category/gabinetes"}
                  className="menu__link menu__link--inside"
                >
                  Gabinetes
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to={"/category/energia"}
                  className="menu__link menu__link--inside"
                >
                  Fuentes de poder
                </Link>
              </li>
            </ul>
          </li>

          <li className="menu__item">
            <Link to="" className="menu__link">
              Ofertas
            </Link>
          </li>

          <li className="menu__item">
            <Link to="" className="menu__link">
              Servicios
            </Link>
          </li>

          <li className="menu__item">
            <Link to={"/contact"} className="menu__link">
              Contacto
            </Link>
          </li>
        </ul>

        <Form />

        <div className="menu__users menu__links">
          <li>
            <button className="menu__users--login" href="#">
              Iniciar
            </button>
          </li>
          <li>
            <button className="menu__users--register" href="#">
              Registrar
            </button>
          </li>
        </div>
        <div className="menu__hamburguer">
          <img
            src="/assets/images/menu.svg"
            className="menu__img"
            aria-label="imagen de menu"
          />
        </div>
        <div>
          <Link to="/cart">
            {" "}
            <CartWidget />
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
