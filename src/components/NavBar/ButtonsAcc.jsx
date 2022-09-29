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
              <img className="menu__users--profile" src={user.photoURL || "/assets/images/profile.png"} alt="" />
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
