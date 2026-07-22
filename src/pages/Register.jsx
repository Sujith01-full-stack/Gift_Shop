import React, { useState } from "react";
import "./Register.css";
import registerImage from "../assets/images/sp 1.jpg";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Existing users
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check duplicate email
  const emailExists = users.some(
    (user) => user.email === formData.email
  );

  if (emailExists) {
    alert("Email already registered!");
    return;
  }

  // Save new user
  users.push({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    password: formData.password,
  });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration Successful!");

  // Optional: clear form
  setFormData({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Go to Login page
  navigate("/login");
};

  return (
    <div className="register-page">
      <div className="register-container">

        {/* Left Section */}

        <div className="register-left">
          <h1>🕷️ Spider Gift Store</h1>

          <h2>Create Your Account</h2>

          <p>
            Join Spider Gift Store and discover amazing personalized gifts for
            every occasion.
          </p>

          <img
  src={registerImage}
  alt="Spider Gift Store"
  className="register-image"
/>
        </div>

        {/* Right Section */}

        <div className="register-right">

          <h2>Register</h2>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <FaUser className="input-icon" />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

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
              <FaPhone className="input-icon" />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <FaLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="input-group">
              <FaLock className="input-icon" />

              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <span
                className="password-toggle"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit">
              Create Account
            </button>

          </form>

          <p className="login-link">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Register;