import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ButtonsAcc = () => {
  const { logout } = useAuth();
  const [captcha, setCaptcha] = useState(null);
  const [validatorUser, setValidatorUser] = useState(false);
  

  const handleLogout = async () => {
  
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="menu__users menu__links">
      
      {!validatorUser && (
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
      {validatorUser && (
        <>
          <li>
            <Link to="/profile">
              <button className="menu__users--profile">Perfil</button>
            </Link>
          </li>
          <li>
            <button className="menu__users--logout" onClick={handleLogout}>
              Cerrar
            </button>
          </li>
        </>
      )}
    </div>
  );
};
export default ButtonsAcc;
