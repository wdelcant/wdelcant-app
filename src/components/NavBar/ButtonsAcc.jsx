import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ButtonsAcc = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="menu__users menu__links">
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
    </div>
  );
};
export default ButtonsAcc;
