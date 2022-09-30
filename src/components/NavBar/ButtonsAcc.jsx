import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './ButtonsAcc.scss';

const ButtonsAcc = handleShow => {
  const { logOut, user } = useAuth();

// Cuando el usuario hace clic en el botón de cierre de sesión, se llama a la función de cierre de sesión y se muestra el modal.
  const handleLogout = async () => {
    try {
      await logOut();
      handleShow();
    } catch (error) {
      console.error(error.message);
    }
  };

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
          <li>
            <span>
              <button className="menu__users--logout" onClick={handleLogout}>
                Cerrar
              </button>
            </span>
          </li>
        </>
      )}
    </>
  );
};
export default ButtonsAcc;
