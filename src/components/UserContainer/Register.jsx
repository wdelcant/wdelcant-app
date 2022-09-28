import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import "./Register.scss";

export function Register() {
  const { signUp } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState();
  const navigate = useNavigate();

  const alertRegister = () => {
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
      title: `Usuario ${user.email} registrado con éxito`,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (user.password !== user.password2) {
      setError("Passwords do not match");
    } else {
      try {
        if (recaptchaRef.current.getValue()) {
          await signUp(user.email, user.password);
          alertRegister();
          navigate("/");
        } else {
          setError("Favor aceptar el captcha");
        }
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setError("Email already in use");
        }
        if (error.code === "auth/weak-password") {
          setError("Password should be at least 6 characters");
        }
        if (error.code === "auth/invalid-email") {
          setError("Invalid email");
        }
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
    <div className="register__container">
      <div className="register__content">
        <h1 className="register__content--title">Registro</h1>
        {error && <small>{error}</small>}
        <form className="register__content--form" onSubmit={handleSubmit}>
          <label htmlFor="email">Correo</label>
          <input
            className="register__content--form--input"
            type="email"
            name="email"
            id="email"
            placeholder="correo@mail.com"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            className="register__content--form--input"
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <label htmlFor="password2">Confirmar Contraseña</label>
          <input
            className="register__content--form--input"
            type="password"
            name="password2"
            id="password2"
            placeholder="********"
            onChange={(e) => setUser({ ...user, password2: e.target.value })}
          />

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LcBaTYiAAAAAOjcbXMlGQ6x-NvT9n-vTgMw2GaL"
            onChange={onChange}
          />

          <button className="register__content--form--btn" type="submit">
            Registrar
          </button>
        </form>
        <p className="register__content--text">
          Ya tienes cuenta?
          <Link to="/login" className="register__content--text--link">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
