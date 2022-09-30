import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './ButtonsAcc.scss';

const ButtonsAcc = handleShow => {
  const { user } = useAuth();

  // Si el usuario está autenticado, se muestra el botón de cierre de sesión, de lo contrario, se muestra el botón de inicio de sesión.
  return (
    <>
      {!user && (
        <>
          <li>
            <Link to="/login" onClick={handleShow}>
              <button className="menu__users--login">Iniciar</button>
            </Link>
          </li>
          <li>
            <Link to="/register" onClick={handleShow}>
              <button className="menu__users--register">Registrar</button>
            </Link>
          </li>
        </>
      )}
      {user && (
        <>
          <li>
            <Link to="/profile">
              <img
                className="menu__users--profile"
                src={user.photoURL || '/assets/images/profile.png'}
                alt=""
              />
            </Link>
          </li>
          <span>
            <img
              src="/assets/images/arrow.svg"
              className="menu__users--arrow"
              aria-label="imagen flecha"
            />
          </span>
        </>
      )}
    </>
  );
};
export default ButtonsAcc;
