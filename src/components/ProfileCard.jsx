import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCamera,
  FaEdit,
  FaSave,
  FaTimes,
  FaCheckCircle,
  FaCrown,
  FaCalendarAlt,
} from "react-icons/fa";

import "./ProfileCard.css";
import defaultProfile from "../assets/images/Dp1.jpeg";

const ProfileCard = ({
  user,
  editing,
  onEdit,
  onSave,
  onCancel,
  onChange,
  onImageChange,
}) => {
  // Dynamic completion calculation
  const fields = [user?.name, user?.email, user?.phone, user?.address, user?.image];
  const filledFields = fields.filter((f) => f && f.toString().trim() !== "").length;
  const completionPercentage = Math.round((filledFields / fields.length) * 100);

  return (
    <div className={`profile-card ${editing ? "editing-mode" : ""}`}>
      {/* Top Header Row with Opposite Edit Button */}
      <div className="card-top-bar">
        <div className="avatar-section">
          <div className="profile-image">
            <img
              src={user?.image || defaultProfile}
              alt={user?.name || "Profile"}
              className="profile-photo"
            />
            {editing && (
              <>
                <label
                  htmlFor="profile-upload"
                  className="camera-btn"
                  title="Upload Photo"
                >
                  <FaCamera />
                </label>
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={onImageChange}
                />
              </>
            )}
          </div>

          <div className="user-title-box">
            <h2>
              {user?.name || "Spider User"}
              <FaCheckCircle className="verified-icon" />
            </h2>
            <p>Spider Gift Store Customer</p>
          </div>
        </div>

        {/* Opposite Action Buttons (Top Right) */}
        <div className="opposite-action-btns">
          {editing ? (
            <>
              <button className="save-btn-top" onClick={onSave} title="Save Profile">
                <FaSave />
                <span>Save</span>
              </button>
              <button className="cancel-btn-top" onClick={onCancel} title="Cancel">
                <FaTimes />
              </button>
            </>
          ) : (
            <button className="edit-btn-top" onClick={onEdit} title="Edit Profile">
              <FaEdit />
              <span>Edit</span>
            </button>
          )}
        </div>
      </div>

      {/* Member Badges Row */}
      <div className="member-info">
        <div className="member-card">
          <FaCrown />
          <span>Gold Member</span>
        </div>

        <div className="member-card">
          <FaCalendarAlt />
          <span>Joined 2026</span>
        </div>
      </div>

      {/* Profile Completion Bar */}
      <div className="profile-progress">
        <div className="progress-text">
          <span className="no-select">Profile Completion</span>
          <span className="no-select">{completionPercentage}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      {/* Input Fields Container */}
      <div className="profile-inputs-container">
        {/* Name */}
        <div className={`info-item ${editing ? "active-input" : ""}`}>
          <div className="field-icon-box">
            <FaUser />
          </div>
          <div className="field-input-box">
            <label className="field-label">Full Name</label>
            <input
              type="text"
              name="name"
              value={user?.name || ""}
              onChange={onChange}
              disabled={!editing}
              placeholder="Enter Full Name"
            />
          </div>
        </div>

        {/* Email */}
        <div className={`info-item ${editing ? "active-input" : ""}`}>
          <div className="field-icon-box">
            <FaEnvelope />
          </div>
          <div className="field-input-box">
            <label className="field-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={user?.email || ""}
              onChange={onChange}
              disabled={!editing}
              placeholder="Enter Email Address"
            />
          </div>
        </div>

        {/* Phone */}
        <div className={`info-item ${editing ? "active-input" : ""}`}>
          <div className="field-icon-box">
            <FaPhoneAlt />
          </div>
          <div className="field-input-box">
            <label className="field-label">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={user?.phone || ""}
              onChange={onChange}
              disabled={!editing}
              placeholder="Enter Phone Number"
            />
          </div>
        </div>

        {/* Address */}
        <div className={`info-item ${editing ? "active-input" : ""}`}>
          <div className="field-icon-box">
            <FaMapMarkerAlt />
          </div>
          <div className="field-input-box">
            <label className="field-label">Delivery Address</label>
            <textarea
              rows={2}
              name="address"
              value={user?.address || ""}
              onChange={onChange}
              disabled={!editing}
              placeholder="Enter Delivery Address"
            />
          </div>
        </div>
      </div>

      {/* Bottom Save/Cancel Action Bar (shown when editing on mobile) */}
      {editing && (
        <div className="bottom-save-bar">
          <button className="save-btn" onClick={onSave}>
            <FaSave /> Save Changes
          </button>
          <button className="cancel-btn" onClick={onCancel}>
            <FaTimes /> Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;