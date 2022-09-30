import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './ButtonsAcc.scss';

const ButtonsAcc = handleShow => {
  const { logOut, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      handleShow();
    } catch (error) {
      console.error(error.message);
    }
  };

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
