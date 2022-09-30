import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { BiUser } from 'react-icons/bi';
import './ButtonsAcc.scss';

const ButtonsAcc = handleShow => {
  const { user } = useAuth();

  // Si el usuario está autenticado, se muestra el botón de cierre de sesión, de lo contrario, se muestra el botón de inicio de sesión.
  return (
    <>
      {!user && (
        <>
          <Link to="/login" onClick={handleShow}>
            <button className="menu__users">
              <div className="menu__users--desktop">
                <BiUser className="menu__users--desktop--icon" />
                <div>
                  <p className="menu__users--desktop--text">Iniciar Sesión</p>
                </div>
              </div>
              <div className="menu__users--mobile">
                <BiUser className="menu__users--mobile--icon" />
              </div>
            </button>
          </Link>
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
