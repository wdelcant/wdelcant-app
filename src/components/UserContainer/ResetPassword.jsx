import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import "./ResetPassword.scss";

export function ResetPassword() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signIn, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (recaptchaRef.current.getValue()) {
        await signIn(user.email, user.password);
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

  const handleResetPassword = async () => {
    if (!user.email) return setError("Favor ingrese un correo");
    try {
      await resetPassword(user.email);
      setError("Se enviado a su correo electrónico");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setError(error.code);
    }
  };

  const recaptchaRef = useRef(null);

  const onChange = () => {
    if (recaptchaRef.current.getValue()) {
      setError("");
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
      </div>
    </div>
  );
}
