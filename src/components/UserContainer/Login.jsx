import { useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

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
        setError("User not found");
      }
      if (error.code === "auth/wrong-password") {
        setError("Wrong password");
      }
      if (error.code === "auth/invalid-email") {
        setError("Invalid email");
      }
      if (error.code === "auth/too-many-requests") {
        setError("Too many requests");
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
    <div>
      <h1>Login</h1>
      {error && <small>{error}</small>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
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
        ,<button type="submit">Login</button>
        <Link to="/resetpassword" className="btn">
          Forgot Password?
        </Link>
      </form>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <p className="">
        Don't have an account?
        <Link to="/register" className="">
          Register
        </Link>
      </p>
    </div>
  );
}
