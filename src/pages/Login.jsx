import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberEmail");

    if (savedEmail) {
      setFormData((prev) => ({
        ...prev,
        email: savedEmail,
        remember: true,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ===========================
    // ADMIN LOGIN
    // ===========================

    if (
      formData.email === "admin@gmail.com" &&
      formData.password === "SPIDER"
    ) {
      localStorage.setItem("token", "admin-token");
      localStorage.setItem("role", "admin");
      localStorage.setItem("isLoggedIn", "true");

      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          name: "Administrator",
          email: "admin@gmail.com",
        })
      );

      if (formData.remember) {
        localStorage.setItem(
          "rememberEmail",
          formData.email
        );
      } else {
        localStorage.removeItem("rememberEmail");
      }

      localStorage.setItem(
        "lastLogin",
        new Date().toLocaleString()
      );

      alert("Admin Login Successful!");

      navigate("/admin");
      return;
    }

    // ===========================
    // USER LOGIN
    // ===========================

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email === formData.email &&
        u.password === formData.password
    );

    if (user) {
      localStorage.setItem("token", "user-token");
      localStorage.setItem("role", "user");
      localStorage.setItem("isLoggedIn", "true");

      localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
      );

      if (formData.remember) {
        localStorage.setItem(
          "rememberEmail",
          formData.email
        );
      } else {
        localStorage.removeItem("rememberEmail");
      }

      localStorage.setItem(
        "lastLogin",
        new Date().toLocaleString()
      );

      alert(`Welcome ${user.name} 🎉`);

      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Left */}

        <div className="login-left">
          <h1>🕷️ Spider Gift Store</h1>

          <h2>Welcome Back!</h2>

          <p>
            Login to manage your orders, wishlist,
            and personalized gifts.
          </p>

          <img
            src="https://images.unsplash.com/photo-1512909006721-3d6018887383?w=700"
            alt="Gift"
          />
        </div>

        {/* Right */}

        <div className="login-right">

          <h2>Login</h2>

          <form onSubmit={handleSubmit}>

            <div className="input-group">

              <FaEnvelope className="input-icon" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">

              <FaLock className="input-icon" />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <span
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </span>

            </div>

            <div className="login-options">

              <label>
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />

                Remember Me
              </label>

              <Link to="/forgot-password">
                Forgot Password?
              </Link>

            </div>

            <button type="submit">
              Login
            </button>

          </form>

          <p className="register-link">
            Don't have an account?{" "}
            <Link to="/register">
              Register
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Login;