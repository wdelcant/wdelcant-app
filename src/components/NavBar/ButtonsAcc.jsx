import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./ButtonsAcc.scss";

const ButtonsAcc = () => {
  const { logOut, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="menu__users menu__links">
      {!user && (
        <>
          <li>
            <Link to="/login">
              <button className="menu__users--login">Iniciar</button>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <button className="menu__users--register">Registrar</button>
            </Link>
          </li>
        </>
      )}
      {user && (
        <>
          <li>
            <Link to="/profile">
              <button className="menu__users--profile">Perfil</button>
            </Link>
          </li>
          <li>
            <span>
              <button className="menu__users--logout" onClick={handleLogout}>
                Cerrar
              </button>
            </span>
          </li>
        </>
      )}
    </div>
  );
};
export default ButtonsAcc;
