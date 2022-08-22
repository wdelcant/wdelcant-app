
import Logo from './Logo';
import CartWidget from './CartWidget'
import './NavBar.scss'
import { IoIosArrowDown } from 'react-icons/io';

const NavBar = () => {
    return (
        <nav>
                <Logo/>
                <div className="hamburger">
                    <div className="line1" />
                    <div className="line2" />
                    <div className="line3" />
                </div>
                <ul className="nav-links">
                    <li><a href="#categories">Categorías</a>
                        <IoIosArrowDown className="arrow-down" />
                    
                        <ul>
                            <li><a href="#web">Diseño Web</a></li>
                            <li><a href="#design">Logotipos</a></li>
                            <li><a href="#design">Logotipos</a></li>
                            <li><a href="#design">Logotipos</a></li>
                            <li><a href="#design">Logotipos</a></li>
                        </ul>
                    </li>
                    <li><a href="#offers">Ofertas</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#contactus">Contacto</a></li>
                    <li><button className="login-button" href="#">Ingresa</button></li>
                    <li><button className="join-button" href="#">Regístrate</button></li>
                </ul>
                <CartWidget />
        </nav>
    )
}





export default NavBar

