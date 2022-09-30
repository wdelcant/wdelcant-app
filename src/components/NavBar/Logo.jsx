import { Link } from 'react-router-dom';
import './Logo.scss';

// Devuelve el logo de la página
const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src="/assets/images/logo.svg" alt="Logotipo" />
      </Link>
    </div>
  );
};

export default Logo;
