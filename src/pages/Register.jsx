import "./Auth.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    // Check empty fields
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill all fields.");
      return;
    }

    // Check password
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Save user
    const user = {
      name: name,
      email: email,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    // Registration successful
    alert("Registration successful! Please login.");

    // Go to login page
    navigate("/login");
  };

  return (
    <div
  className="auth-page"
  style={{
    minHeight: "100vh",
    background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
      <div className="auth-card">

        {/* Logo */}
        <div className="auth-logo">
          🩺
        </div>

        {/* Heading */}
        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Start using Medical AI Analysis
        </p>

        {/* Register Form */}
        <form onSubmit={handleRegister}>

          {/* Name */}
          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Email */}
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <label>Password</label>

          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Confirm Password */}
          <label>Confirm Password</label>

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* Error */}
          {error && (
            <p className="auth-error">
              {error}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="auth-button"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}
