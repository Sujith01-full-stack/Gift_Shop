import React, { useState, useEffect } from "react";
import "./ProfileDashboard.css";

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

const ProfileDashboard = () => {
  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Spider User",
    email: "spider@gmail.com",
    phone: "+91 8300589035",
    address: "Veeyanoor, Tamil Nadu, India",
    image: defaultProfile,
  });

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
      setUser(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
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
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem(
      "profile",
      JSON.stringify(user)
    );

    setEditing(false);

    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-dashboard">

      <div className="dashboard-container">

        {/* Left Side */}

        <div className="dashboard-left">

          <ProfileCard
            user={user}
            editing={editing}
            onEdit={() => setEditing(true)}
            onSave={handleSave}
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