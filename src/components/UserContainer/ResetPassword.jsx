import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


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
      await signIn(user.email, user.password);
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

  const handleResetPassword = async () => {
    if (!user.email) return setError("Please enter your email");
    try {
      await resetPassword(user.email);
      setError("Password reset link sent to your email");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setError(error.code);
    }
  };

  return (
    <div>
      <h1>ResetPassword</h1>
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

        <button className="btn" onClick={handleResetPassword}>
          Reset Password
        </button>
      </form>
    </div>
  );
}
