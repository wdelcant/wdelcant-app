import { useState, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';
import './Login.scss';

export function Login() {
  // Se crea un estado para el email y otro para la contraseña
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  // Se crea una referencia para el captcha
  const { signIn, loginWithGoogle } = useAuth(); // Se obtiene la función de inicio de sesión de la autenticación
  const [error, setError] = useState(''); // Estado para el error
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const handleSubmit = async e => {
    // Se evita el comportamiento por defecto del formulario
    e.preventDefault();
    setError(''); // Se limpia el estado de error
    try {
      if (recaptchaRef.current.getValue()) {
        await signIn(user.email, user.password); // Se llama a la función de inicio de sesión
        navigate('/'); // Se navega a la ruta principal
      } else {
        setError('Favor aceptar el captcha');
      }
    } catch (error) {
      // verifica si el código de error. Si es así, establecerá el estado de error en el mensaje de error que se está transmitiendo.
      if (error.code === 'auth/user-not-found') {
        setError('Usuario no existe');
      }
      if (error.code === 'auth/wrong-password') {
        setError('Contraseña incorrecta');
      }
      if (error.code === 'auth/invalid-email') {
        setError('Email inválido');
      }
      if (error.code === 'auth/too-many-requests') {
        setError('Demasiados intentos, intente más tarde');
      }
    }
  };

  // La función handleChange toma un objeto de evento como argumento y luego usa el objeto de evento para actualizar el objeto de usuario.
  const handleChange = ({ target: { value, name } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Cuando el usuario haga clic en el botón, aparecerá mensaje 'Usuario ${user.email} registrado con éxito' y desaparecerá después de 3 segundos.
  const alertRegister = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener('click', () => {
          Swal.close();
        });
      },
    });
    Toast.fire({
      icon: 'success',
      title: `Usuario ${user.email} registrado con éxito`,
    });
  };

  // Cuando el usuario hace clic en el botón de Google, se redirige a la página de inicio de sesión de Google y, si el usuario cierra la ventana, se le avisa que la ventana se cerró.
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      alertRegister();
      navigate('/');
      // en mobile se cierra la ventana de google
      window.close();
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        setError('Cerraste la ventana de inicio de sesión');
      }
    }
  };

  const recaptchaRef = useRef(null); // Se crea una referencia para el captcha

  const onChange = () => {
    if (recaptchaRef.current.getValue()) {
      // Si el captcha se resuelve, se limpia el estado de error
      setError('');
    }
  };

  return (
    <div className="login__container">
      <div className="login__content">
        <h1 className="login__content--title">Iniciar sesión</h1>
        <form className="login__content--form" onSubmit={handleSubmit}>
          <label htmlFor="email">Correo</label>
          <input
            className="login__content--form--input"
            type="email"
            name="email"
            id="email"
            placeholder="correo@mail.com"
            onChange={handleChange}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            className="login__content--form--input"
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={handleChange}
          />
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LcBaTYiAAAAAOjcbXMlGQ6x-NvT9n-vTgMw2GaL"
            onChange={onChange}
          />
          <div className="login__content--error">
            {error && <small>{error}</small>}
          </div>
          <button className="login__content--form--btn" type="submit">
            Iniciar
          </button>
          <span>
            <Link to="/resetpassword" className="login__content--text--link">
              Olvidaste tu contraseña?
            </Link>
          </span>
        </form>
        <div className="login__content--btngoogle" onClick={handleGoogleLogin}>
          <div className="login__content--btngoogle--wrapper">
            <img
              alt="google"
              className="login__content--btngoogle--wrapper-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
          </div>
          <p className="login__content--btngoogle--wrapper-text">
            <b>Sign in with google</b>
          </p>
        </div>
        <p className="login__content--text">
          No tienes cuenta?
          <Link to="/register" className="login__content--text--link">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}
