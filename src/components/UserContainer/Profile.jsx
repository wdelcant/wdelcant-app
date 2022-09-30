import { useAuth } from '../../context/AuthContext';
import './Profile.scss';

const Profile = () => {
  const { user } = useAuth();

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
      </div>
    </div>
  );
};

export default Profile;
