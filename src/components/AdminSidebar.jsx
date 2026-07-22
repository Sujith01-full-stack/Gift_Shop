import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaChartLine,
  FaPlusCircle,
  FaBoxOpen,
  FaClipboardList,
  FaUsers,
  FaChartBar,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaSpider,
} from "react-icons/fa";

import "./AdminSidebar.css";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      // localStorage.removeItem("token");
      navigate("/login");
    }
  };

  return (
    <aside className="admin-sidebar">

      <div className="sidebar-logo">
        <h2>
          <FaSpider /> Spider Admin
        </h2>
        <p>Gift Store Panel</p>
      </div>

      <nav className="sidebar-menu">

        <NavLink to="/admin" className="sidebar-link">
          <FaChartLine />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/add-product" className="sidebar-link">
          <FaPlusCircle />
          <span>Add Product</span>
        </NavLink>

        <NavLink to="/product-management" className="sidebar-link">
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>

        <NavLink to="/manage-orders" className="sidebar-link">
          <FaClipboardList />
          <span>Manage Orders</span>
        </NavLink>

        <NavLink to="/customers" className="sidebar-link">
          <FaUsers />
          <span>Customers</span>
        </NavLink>

        <NavLink to="/reports" className="sidebar-link">
          <FaChartBar />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/notifications" className="sidebar-link">
          <FaBell />
          <span>Notifications</span>
        </NavLink>

        <NavLink to="/settings" className="sidebar-link">
          <FaCog />
          <span>Settings</span>
        </NavLink>

        <button
          className="sidebar-link logout-btn"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>

      </nav>

    </aside>
  );
};

export default AdminSidebar;