import { useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import "./Login.scss";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signIn, loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (recaptchaRef.current.getValue()) {
        await signIn(user.email, user.password);
        navigate("/");
      } else {
        setError("Favor aceptar el captcha");
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("Usuario no existe");
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      }
      if (error.code === "auth/invalid-email") {
        setError("Email inválido");
      }
      if (error.code === "auth/too-many-requests") {
        setError("Demasiados intentos, intente más tarde");
      }
    }
  };

  const handleChange = ({ target: { value, name } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        setError("Cerraste la ventana de inicio de sesión");
      }
    }
  };

  const recaptchaRef = useRef(null);

  const onChange = () => {
    if (recaptchaRef.current.getValue()) {
      setError("");
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
