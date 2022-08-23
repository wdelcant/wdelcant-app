
import Logo from './Logo';
import CartWidget from './CartWidget'
import './NavBar.scss'
import { IoIosArrowDown } from 'react-icons/io';

const NavBar = () => {



    function hamburgerMenu() {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        //Animate Links
            navLinks.classList.toggle("open");
            links.forEach(link => {
                link.classList.toggle("fade");
            });
            //Hamburger Animation
            hamburger.classList.toggle("toggle");
    }


    return (
        <nav>
                <Logo/>
                <div className="hamburger" onClick={hamburgerMenu}>
                    <div className="line1" />
                    <div className="line2" />
                    <div className="line3" />
                </div>
                <ul className="nav-links">
                    <li><a href="#categories">Categorías</a>
                        <IoIosArrowDown className="arrow-down" />
                    
                        <ul className="menu-desplegable">
                            <li><a href="#web">Procesadores</a></li>
                            <li><a href="#motherboard">Placas Madres</a></li>
                            <li><a href="#memory">Memorias</a></li>
                            <li><a href="graphics">Tarjetas Gráficas</a></li>
                            <li><a href="#storage">Almacenamiento</a></li>
                            <li><a href="#case">Gabinetes</a></li>
                            <li><a href="#powersupply">Fuentes de poder</a></li>
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

