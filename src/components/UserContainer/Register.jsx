import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import "./Register.scss";
import db from "../../utils/firebaseConfig";
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";

export function Register() {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const { signUp } = useAuth();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    repeatEmail: "",
    phone: "",
    password: "",
    password2: "",
  });
  const { fullName, email, repeatEmail, phone, password, password2 } = user;

  const addUserDb = async (data) => {
    try {
      const col = collection(db, "users");
      const users = await addDoc(col, data);
      setUser(users.uid);
    } catch (error) {
      console.log(error);
    }
  };

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
      setError("Las contraseñas no coinciden");
    }
    if (user.email !== user.repeatEmail) {
      setError("Los emails no coinciden");
    } else {
      try {
        if (recaptchaRef.current.getValue()) {
          await signUp(user.email, user.password);
          addUserDb(user);
          alertRegister();
          navigate("/");
        } else {
          setError("Favor aceptar el captcha");
        }
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setError("El email ya está registrado");
        }
        if (error.code === "auth/weak-password") {
          setError("La contraseña debe tener al menos 6 caracteres");
        }
        if (error.code === "auth/invalid-email") {
          setError("El email no es válido");
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
          <label htmlFor="fullName">Nombre</label>
          <input
            className="register__content--form--input"
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            placeholder="Nombre Apellido"
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
          />

          <label htmlFor="email">Correo</label>
          <input
            className="register__content--form--input"
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="correo@mail.com"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <label htmlFor="repeatEmail">Confirmar Correo</label>
          <input
            className="register__content--form--input"
            type="email"
            name="repeatEmail"
            id="repeatEmail"
            value={repeatEmail}
            placeholder="correo@mail.com"
            onChange={(e) => setUser({ ...user, repeatEmail: e.target.value })}
          />

          <label htmlFor="phone">Teléfono</label>
          <input
            className="register__content--form--input"
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            placeholder="56912345678"
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            className="register__content--form--input"
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="********"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <label htmlFor="password2">Confirmar Contraseña</label>
          <input
            className="register__content--form--input"
            type="password"
            name="password2"
            id="password2"
            value={password2}
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
