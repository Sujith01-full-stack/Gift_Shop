import React, { useEffect, useState } from "react";
import {
  FaBell,
  FaEnvelope,
  FaMobileAlt,
  FaTags,
  FaSave,
} from "react-icons/fa";
import "./NotificationSettings.css";

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    email: true,
    sms: true,
    offers: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("notificationSettings");

    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSave = () => {
    localStorage.setItem(
      "notificationSettings",
      JSON.stringify(settings)
    );

    alert("Notification settings saved successfully.");
  };

  return (
    <div className="notification-settings">

      <div className="notification-header">
        <h2>
          <FaBell />
          Notification Settings
        </h2>
      </div>

      <div className="notification-item">

        <div className="notification-info">
          <FaEnvelope className="notify-icon" />
          <div>
            <h4>Email Notifications</h4>
            <p>Receive order updates via email.</p>
          </div>
        </div>

        <label className="switch">
          <input
            type="checkbox"
            name="email"
            checked={settings.email}
            onChange={handleChange}
          />
          <span className="slider"></span>
        </label>

      </div>

      <div className="notification-item">

        <div className="notification-info">
          <FaMobileAlt className="notify-icon" />
          <div>
            <h4>SMS Notifications</h4>
            <p>Receive delivery updates by SMS.</p>
          </div>
        </div>

        <label className="switch">
          <input
            type="checkbox"
            name="sms"
            checked={settings.sms}
            onChange={handleChange}
          />
          <span className="slider"></span>
        </label>

      </div>

      <div className="notification-item">

        <div className="notification-info">
          <FaTags className="notify-icon" />
          <div>
            <h4>Promotional Offers</h4>
            <p>Receive discounts and special offers.</p>
          </div>
        </div>

        <label className="switch">
          <input
            type="checkbox"
            name="offers"
            checked={settings.offers}
            onChange={handleChange}
          />
          <span className="slider"></span>
        </label>

      </div>

      <button
        className="notification-save-btn"
        onClick={handleSave}
      >
        <FaSave />
        Save Settings
      </button>

    </div>
  );
};

export default NotificationSettings;