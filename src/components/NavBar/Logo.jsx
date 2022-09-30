import { Link } from 'react-router-dom';
import './Logo.scss';

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
