import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSignOutAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

import "./LogoutButton.css";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    // Remove login data
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    sessionStorage.clear();

    alert("Logged out successfully!");

    navigate("/login");
  };

  return (
    <div className="logout-card">

      <div className="logout-header">
        <h2>
          <FaSignOutAlt />
          Logout
        </h2>
      </div>

      <div className="logout-content">

        <FaExclamationTriangle className="warning-icon" />

        <p>
          You will be signed out from your account.
        </p>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
};

export default LogoutButton;