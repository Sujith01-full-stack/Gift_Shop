import React, { useState } from "react";
import "./Settings.css";

import {
  FaUserCircle,
  FaLock,
  FaPalette,
  FaSave,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";

const Settings = () => {

  const [settings, setSettings] = useState({

    adminName: "Spider Admin",

    email: "spidergiftstore@gmail.com",

    password: "",

    darkMode: true,

    notifications: true,

    autoBackup: false,

  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setSettings({

      ...settings,

      [name]:
        type === "checkbox"
          ? checked
          : value,

    });

  };

  const handleSave = () => {

    alert("Settings Saved Successfully!");

  };

  return (

    <div className="settings-page">

      <div className="settings-container">

        {/* Header */}

        <div className="settings-header">

          <div className="settings-icon">

            <FaCog />

          </div>

          <h1>Admin Settings</h1>

          <p>

            Manage your Spider Gift Store profile,
            security and application preferences.

          </p>

        </div>

        {/* Profile */}

        <div className="setting-card">

          <h2>

            <FaUserCircle />

            Profile Settings

          </h2>

          <input
            type="text"
            name="adminName"
            value={settings.adminName}
            onChange={handleChange}
            placeholder="Enter Admin Name"
          />

          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
          />

        </div>
                {/* Security */}

        <div className="setting-card">

          <h2>

            <FaLock />

            Security

          </h2>

          <input
            type="password"
            name="password"
            value={settings.password}
            onChange={handleChange}
            placeholder="Enter New Password"
          />

        </div>

        {/* Preferences */}

        <div className="setting-card">

          <h2>

            <FaPalette />

            Preferences

          </h2>

          <label className="switch-row">

            <span>Dark Mode</span>

            <input
              type="checkbox"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleChange}
            />

          </label>

          <label className="switch-row">

            <span>Email Notifications</span>

            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
            />

          </label>

          <label className="switch-row">

            <span>Auto Backup</span>

            <input
              type="checkbox"
              name="autoBackup"
              checked={settings.autoBackup}
              onChange={handleChange}
            />

          </label>

        </div>

                {/* Buttons */}

        <div className="button-group">

          <button
            className="save-btn"
            onClick={handleSave}
          >
            <FaSave />
            Save Settings
          </button>

          <button
            className="logout-btn"
            onClick={() => {

              if (
                window.confirm(
                  "Are you sure you want to logout?"
                )
              ) {

                alert("Logged Out Successfully!");

                // Example:
                // localStorage.removeItem("token");
                // navigate("/login");

              }

            }}
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </div>

    </div>

  );

};

export default Settings;