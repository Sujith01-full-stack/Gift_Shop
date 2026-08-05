import React, { useState, useEffect } from "react";
import "./ProfileDashboard.css";
import { toast } from "react-toastify";

import defaultProfile from "../assets/images/Dp1.jpeg";

import ProfileCard from "../components/ProfileCard";
import ProfileStats from "../components/ProfileStats";
import OrderChart from "../components/OrderChart";
import RecentlyViewed from "../components/RecentlyViewed";
import RecentOrders from "../components/RecentOrders";
import Membership from "../components/Membership";
import AddressBook from "../components/AddressBook";
import PaymentMethods from "../components/PaymentMethods";
import NotificationSettings from "../components/NotificationSettings";
import ChangePassword from "../components/ChangePassword";
import LogoutButton from "../components/LogoutButton";

import {
  FaShoppingBag,
  FaHeart,
  FaRupeeSign,
  FaCrown,
} from "react-icons/fa";

const defaultUserData = {
  name: "Spider User",
  email: "spider@gmail.com",
  phone: "+91 8300589035",
  address: "Veeyanoor, Tamil Nadu, India",
  image: defaultProfile,
};

const ProfileDashboard = () => {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState(defaultUserData);
  const [tempUser, setTempUser] = useState(defaultUserData);

  const stats = [
    {
      id: 1,
      icon: <FaShoppingBag />,
      value: "25",
      label: "Total Orders",
      color: "#4CAF50",
    },
    {
      id: 2,
      icon: <FaHeart />,
      value: "8",
      label: "Wishlist",
      color: "#E91E63",
    },
    {
      id: 3,
      icon: <FaRupeeSign />,
      value: "18,500",
      label: "Total Spending",
      color: "#FF9800",
    },
    {
      id: 4,
      icon: <FaCrown />,
      value: "Gold",
      label: "Membership",
      color: "#FFC107",
    },
  ];

  useEffect(() => {
    const saved = localStorage.getItem("profile");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUser(parsed);
        setTempUser(parsed);
      } catch (err) {
        console.error("Error loading profile:", err);
      }
    }
  }, []);

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setUser((prev) => ({
        ...prev,
        image: reader.result,
      }));
      toast.info("📷 Profile picture preview updated!");
    };
    reader.readAsDataURL(file);
  };

  const handleEdit = () => {
    setTempUser(user);
    setEditing(true);
    toast.info("✏️ Edit mode enabled. Modify fields and click Save!");
  };

  const handleCancel = () => {
    setUser(tempUser);
    setEditing(false);
    toast.info("↩️ Profile edit cancelled");
  };

  const handleSave = () => {
    if (!user.name || !user.email) {
      toast.error("⚠️ Name and Email are required!");
      return;
    }

    localStorage.setItem("profile", JSON.stringify(user));
    setTempUser(user);
    setEditing(false);
    toast.success("✅ Profile Updated Successfully!", {
      position: "top-right",
      autoClose: 2500,
    });
  };

  return (
    <div className="profile-dashboard">
      <div className="dashboard-container">
        {/* Left Side */}
        <div className="dashboard-left">
          <ProfileCard
            user={user}
            editing={editing}
            onEdit={handleEdit}
            onSave={handleSave}
            onCancel={handleCancel}
            onChange={handleChange}
            onImageChange={handleImageChange}
          />
        </div>

        {/* Right Side */}
        <div className="dashboard-right">
          <ProfileStats stats={stats} />
          <OrderChart />
          <RecentlyViewed />
          <RecentOrders />
          <Membership />
          <AddressBook />
          <PaymentMethods />
          <NotificationSettings />
          <ChangePassword />
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;