import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaArrowLeft,
  FaPaperPlane,
} from "react-icons/fa";

import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [identifier, setIdentifier] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!identifier.trim()) {
      alert("Please enter your Email or Phone Number.");
      return;
    }

    // Check Email or Phone
    const isEmail = identifier.includes("@");

    if (isEmail) {
      alert(`Password reset link has been sent to ${identifier}`);
    } else {
      alert(`OTP has been sent to ${identifier}`);
    }

    setIdentifier("");
  };

  return (
    <div className="forgot-page">
      <div className="forgot-card">

        <h1>Forgot Password</h1>

        <p>
          Enter your registered <b>Email</b> or <b>Phone Number</b> to reset your password.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            {identifier.includes("@") ? (
              <FaEnvelope className="icon" />
            ) : (
              <FaPhone className="icon" />
            )}

            <input
              type="text"
              placeholder="Email Address or Phone Number"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />

          </div>

          <button type="submit" className="reset-btn">
            <FaPaperPlane />
            Continue
          </button>

        </form>

        <Link to="/login" className="back-link">
          <FaArrowLeft />
          Back to Login
        </Link>

      </div>
    </div>
  );
};

export default ForgotPassword;