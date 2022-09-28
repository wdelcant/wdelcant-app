import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";

const ButtonsAcc = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      alertLogOut();
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const alertLogOut = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("click", () => {
          Swal.close();
        });
      },
    });
    Toast.fire({
      icon: "success",
      title: `Vuelve pronto ${user.email}`,
    });
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
            <button className="menu__users--logout" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </li>
        </>
      )}
    </div>
  );
};
export default ButtonsAcc;
