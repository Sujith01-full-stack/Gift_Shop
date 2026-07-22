import React, { useState } from "react";
import "./Notifications.css";
import {
  FaBell,
  FaEnvelope,
  FaMobileAlt,
  FaTags,
  FaSave,
} from "react-icons/fa";

const Notifications = () => {
  const [settings, setSettings] = useState({
    email: true,
    sms: true,
    offers: false,
    orders: true,
    whatsapp: false,
  });

  const toggleSetting = (key) => {
    setSettings({
      ...settings,
      [key]: !settings[key],
    });
  };

  const handleSave = () => {
    alert("Notification Settings Saved!");
  };

  return (
    <div className="notifications-page">

      <div className="notifications-container">

        <h1>
          <FaBell />
          Notification Settings
        </h1>

        {/* Email */}

        <div className="notification-card">

          <div className="notification-left">

            <div className="icon-circle">
              <FaEnvelope />
            </div>

            <div>

              <h3>Email Notifications</h3>

              <p>Receive order updates via email.</p>

            </div>

          </div>

          <label className="switch">

            <input
              type="checkbox"
              checked={settings.email}
              onChange={() => toggleSetting("email")}
            />

            <span className="slider"></span>

          </label>

        </div>

        {/* SMS */}

        <div className="notification-card">

          <div className="notification-left">

            <div className="icon-circle">
              <FaMobileAlt />
            </div>

            <div>

              <h3>SMS Notifications</h3>

              <p>Receive delivery updates by SMS.</p>

            </div>

          </div>

          <label className="switch">

            <input
              type="checkbox"
              checked={settings.sms}
              onChange={() => toggleSetting("sms")}
            />

            <span className="slider"></span>

          </label>

        </div>

        {/* Offers */}

        <div className="notification-card">

          <div className="notification-left">

            <div className="icon-circle">
              <FaTags />
            </div>

            <div>

              <h3>Promotional Offers</h3>

              <p>Receive discounts and special offers.</p>

            </div>

          </div>

          <label className="switch">

            <input
              type="checkbox"
              checked={settings.offers}
              onChange={() => toggleSetting("offers")}
            />

            <span className="slider"></span>

          </label>

        </div>

        {/* Order Updates */}

        <div className="notification-card">

          <div className="notification-left">

            <div className="icon-circle">
              <FaBell />
            </div>

            <div>

              <h3>Order Updates</h3>

              <p>Notify whenever order status changes.</p>

            </div>

          </div>

          <label className="switch">

            <input
              type="checkbox"
              checked={settings.orders}
              onChange={() => toggleSetting("orders")}
            />

            <span className="slider"></span>

          </label>

        </div>

        {/* WhatsApp */}

        <div className="notification-card">

          <div className="notification-left">

            <div className="icon-circle">
              <FaMobileAlt />
            </div>

            <div>

              <h3>WhatsApp Alerts</h3>

              <p>Receive order updates on WhatsApp.</p>

            </div>

          </div>

          <label className="switch">

            <input
              type="checkbox"
              checked={settings.whatsapp}
              onChange={() => toggleSetting("whatsapp")}
            />

            <span className="slider"></span>

          </label>

        </div>

        <button
          className="save-btn"
          onClick={handleSave}
        >
          <FaSave />
          Save Settings
        </button>

      </div>

    </div>
  );
};

export default Notifications;