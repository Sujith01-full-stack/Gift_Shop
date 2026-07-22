import React, { useState, useEffect } from "react";
import "./Profile.css";


import defaultProfile from "../assets/images/Dp1.jpeg";
import RecentOrders from "../components/RecentOrders";
import ProfileCard from "../components/ProfileCard";
import ProfileStats from "../components/ProfileStats";
import AddressBook from "../components/AddressBook";
import NotificationSettings from "../components/NotificationSettings";
import ChangePassword from "../components/ChangePassword";
import Membership from "../components/Membership";
import OrderChart from "../components/OrderChart";
import RecentlyViewed from "../components/RecentlyViewed";
import LogoutButton from "../components/LogoutButton";
import PaymentMethods from "../components/PaymentMethods";


import {
  FaShoppingBag,
  FaHeart,
  FaRupeeSign,
  FaCrown,
} from "react-icons/fa";

const Profile = () => {
  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Spider User",
    email: "spider@gmail.com",
    phone: "+91 8300589035",
    address: "Veeyanoor, Tamil Nadu, India",
    image: defaultProfile,
  });

  const [stats] = useState([
    {
      id: 1,
      icon: <FaShoppingBag />,
      value: "25",
      label: "Total Orders",
      color: "#0eefff",
    },
    {
      id: 2,
      icon: <FaHeart />,
      value: "8",
      label: "Wishlist",
      color: "#ff0256",
    },
    {
      id: 3,
      icon: <FaRupeeSign />,
      value: "18,500",
      label: "Total Spending",
      color: "#ff9d0b",
    },
    {
      id: 4,
      icon: <FaCrown />,
      value: "Gold",
      label: "Membership",
      color: "#FFC107",
    },
  ]);

  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");

    if (savedProfile) {
      setUser(JSON.parse(savedProfile));
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
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(user));
    setEditing(false);
    alert("Profile Updated Successfully!");
  };

  const handleEdit = () => {
    setEditing(true);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Left Side */}
        <ProfileCard
          user={user}
          editing={editing}
          onEdit={handleEdit}
          onSave={handleSave}
          onChange={handleChange}
          onImageChange={handleImageChange}
        />

        <div className="profile-right">

  <ProfileStats stats={stats} />

  <OrderChart />

  <RecentlyViewed />

  <RecentOrders />

  <Wishlist />

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

export default Profile;