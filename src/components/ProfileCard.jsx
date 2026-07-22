import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCamera,
  FaEdit,
  FaSave,
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
  onChange,
  onImageChange,
}) => {
  return (
    <div className="profile-card">

      {/* Profile Image */}
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

      {/* Header */}
      <div className="profile-header">

        <h2>
          {user?.name || "Spider User"}
          <FaCheckCircle className="verified-icon" />
        </h2>

        <p>Spider Gift Store Customer</p>

      </div>

      {/* Membership */}
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

      {/* Profile Completion */}
      <div className="profile-progress">

        <div className="progress-text">
          <span>Profile Completion</span>
          <span>85%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: "85%" }}
          />
        </div>

      </div>

      {/* Name */}
      <div className="info-item">
        <FaUser className="icon" />

        <input
          type="text"
          name="name"
          value={user?.name || ""}
          onChange={onChange}
          disabled={!editing}
          placeholder="Full Name"
        />
      </div>

      {/* Email */}
      <div className="info-item">
        <FaEnvelope className="icon" />

        <input
          type="email"
          name="email"
          value={user?.email || ""}
          onChange={onChange}
          disabled={!editing}
          placeholder="Email Address"
        />
      </div>

      {/* Phone */}
      <div className="info-item">
        <FaPhoneAlt className="icon" />

        <input
          type="text"
          name="phone"
          value={user?.phone || ""}
          onChange={onChange}
          disabled={!editing}
          placeholder="Phone Number"
        />
      </div>

      {/* Address */}
      <div className="info-item">
        <FaMapMarkerAlt className="icon" />

        <textarea
          rows={3}
          name="address"
          value={user?.address || ""}
          onChange={onChange}
          disabled={!editing}
          placeholder="Address"
        />
      </div>

      {/* Buttons */}
<div className="profile-btns">
  {editing ? (
    <button
      className="save-btn"
      onClick={onSave}
    >
      <FaSave />
      <span>Save Changes</span>
    </button>
  ) : (
    <button
      className="edit-btn"
      onClick={onEdit}
    >
      <FaEdit />
      <span>Edit Profile</span>
    </button>
  )}
</div>

    </div>
  );
};

export default ProfileCard;