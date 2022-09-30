import { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import './ResetPassword.scss';

export function ResetPassword() {
  const [user, setUser] = useState({
    // Se crea un estado para el email y otro para la contraseña
    email: '',
    password: '',
  });

  const { signIn, resetPassword } = useAuth(); // Se obtiene la función de inicio de sesión de la autenticación
  const [error, setError] = useState(''); // Estado para el error
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const handleSubmit = async e => {
    // Función para manejar el submit del formulario
    e.preventDefault();
    setError('');
    try {
      if (recaptchaRef.current.getValue()) {
        await signIn(user.email, user.password);
      } else {
        setError('Favor aceptar el captcha');
      }
    } catch (error) {
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

  const handleChange = ({ target: { value, name } }) => {
    // La función handleChange toma un objeto de evento como argumento y luego usa el objeto de evento para actualizar el objeto de usuario.
    setUser({
      // Se actualiza el estado de usuario
      ...user,
      [name]: value,
    });
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError('Favor ingrese un correo'); // Si no hay email, se muestra un error
    try {
      await resetPassword(user.email); // Se llama a la función de reseteo de contraseña
      setError('Se enviado a su correo electrónico'); // Se muestra un mensaje de éxito
      setTimeout(() => {
        // Se redirige al usuario a la página de login
        navigate('/login');
      }, 3000);
    } catch (error) {
      setError(error.code);
    }
  };

  const recaptchaRef = useRef(null); // Se crea una referencia para el captcha

  const onChange = () => {
    if (recaptchaRef.current.getValue()) {
      // Si el captcha se resuelve, se muestra el botón de submit
      setError('');
    }
  };

  return (
    <div className="reset__container">
      <div className="reset__content">
        <h1 className="reset__content--title">Restablecer Contraseña</h1>
        <div className="reset__content--error">
          {error && <small>{error}</small>}
        </div>
        <form className="reset__content--form" onSubmit={handleSubmit}>
          <label htmlFor="email">Correo</label>
          <input
            className="reset__content--form--input"
            type="email"
            name="email"
            id="email"
            placeholder="correo@mail.com"
            onChange={handleChange}
          />
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LcBaTYiAAAAAOjcbXMlGQ6x-NvT9n-vTgMw2GaL"
            onChange={onChange}
          />
          <button
            className="reset__content--form--btn"
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
        </form>
        <p className="reset__content--text">
          Ya la recuperaste?
          <Link to="/login" className="reset__content--text--link">
            Regresar
          </Link>
        </p>
      </div>
    </div>
  );
}
