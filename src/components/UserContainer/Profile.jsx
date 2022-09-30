import { useAuth } from '../../context/AuthContext';
import './Profile.scss';

const Profile = () => {
  const { user, logOut } = useAuth(); // Se obtiene el usuario de la autenticación

  // Cuando el usuario hace clic en el botón de cierre de sesión, se llama a la función de cierre de sesión y se muestra el modal.
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error(error.message);
    }
  };

  // Muestra el nombre del usuario en el perfil
  return (
    <div className="profile__container">
      <div className="profile__content">
        <h1 className="profile__content--title">Mi Perfil</h1>
        <figure>
          <img
            className="profile__content--img"
            src={user.photoURL || '/assets/images/profile.png'}
            alt=""
          />
        </figure>
        <h2 className="profile__content--text">
          {user.displayName || user.email}
        </h2>
        <p>{user.email} </p>
        <p>ID: {user.uid}</p>
        <div>
          <button className="profile__content--logout" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
