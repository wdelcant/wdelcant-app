import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function Register() {
  const { signUp } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (user.password !== user.password2) {
      setError("Passwords do not match");
    } else {
      try {
        await signUp(user.email, user.password);
        navigate("/");
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

  return (
    <div>
      <h1>Register</h1>
      {error && <small>{error}</small>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <label htmlFor="password2">Confirm Password</label>
        <input
          type="password"
          name="password2"
          id="password2"
          placeholder="********"
          onChange={(e) => setUser({ ...user, password2: e.target.value })}
        />

        <button type="submit">Register</button>
      </form>
      <p className="">
        Already have an Account?
        <Link to="/login" className="">
          Login
        </Link>
      </p>
    </div>
  );
}
