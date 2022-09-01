
import Logo from './Logo';
import CartWidget from './CartWidget'
import Form from './Form';
import './NavBar.scss'


const NavBar = () => {




    return (
        <nav className="menu">
        <section className="menu__container">
        <Logo />
        <ul className="menu__links">

            <li className="menu__item menu__item--show">
                <a href="#category" className="menu__link">Categorías <img src="assets/images/arrow.svg" className="menu__arrow" aria-label="imagen flecha" /></a>
            
                <ul className="menu__nesting">
                    <li className="menu__inside">
                        <a href="#processor" className="menu__link menu__link--inside">Procesadores</a>
                    </li>
                    <li className="menu__inside">
                        <a href="#motherboard" className="menu__link menu__link--inside">Placas Madres</a>
                    </li>
                    <li className="menu__inside">
                        <a href="#memory" className="menu__link menu__link--inside">Memorias</a>
                    </li>
                    <li className="menu__inside">
                        <a href="#graphics" className="menu__link menu__link--inside">Tarjetas Gráficas</a>
                    </li>
                    <li className="menu__inside">
                        <a href="#storage" className="menu__link menu__link--inside">Almacenamiento</a>
                    </li>
                    <li className="menu__inside">
                        <a href="#cases" className="menu__link menu__link--inside">Gabinetes</a>
                    </li>
                    <li className="menu__inside">
                        <a href="#powersupply" className="menu__link menu__link--inside">Fuentes de poder</a>
                    </li>
                </ul>
            </li>

            <li className="menu__item">
                <a href="#offers" className="menu__link">Ofertas</a>
            </li>

            <li className="menu__item">
                <a href="#services" className="menu__link">Servicios</a>
            </li>

            <li className="menu__item">
                <a href="#contact" className="menu__link">Contacto</a>
            </li>

        </ul>

        <Form />

        <div className="menu__users menu__links">
            <li><button className="menu__users--login" href="#">Iniciar</button></li>
            <li><button className="menu__users--register" href="#">Registrar</button></li>
        </div>
        <div className="menu__hamburguer">
            <img src="assets/images/menu.svg" className="menu__img" aria-label='imagen de menu'/>
        </div>
        <div>
        
        <CartWidget />
        </div>
</section>
</nav>

    )
}





export default NavBar

