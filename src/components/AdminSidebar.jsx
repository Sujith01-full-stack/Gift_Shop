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
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    // Clear Login Data
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("lastLogin");

    // Redirect Login
    navigate("/login", { replace: true });
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
        <NavLink
          to="/admin"
          end
          className="sidebar-link"
        >
          <FaChartLine />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/add-product"
          className="sidebar-link"
        >
          <FaPlusCircle />
          <span>Add Product</span>
        </NavLink>

        <NavLink
          to="/admin/products"
          className="sidebar-link"
        >
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>

        <NavLink
          to="/admin/manage-orders"
          className="sidebar-link"
        >
          <FaClipboardList />
          <span>Manage Orders</span>
        </NavLink>

        <NavLink
          to="/admin/customers"
          className="sidebar-link"
        >
          <FaUsers />
          <span>Customers</span>
        </NavLink>

        <NavLink
          to="/admin/reports"
          className="sidebar-link"
        >
          <FaChartBar />
          <span>Reports</span>
        </NavLink>

        <NavLink
          to="/admin/notifications"
          className="sidebar-link"
        >
          <FaBell />
          <span>Notifications</span>
        </NavLink>

        <NavLink
          to="/admin/settings"
          className="sidebar-link"
        >
          <FaCog />
          <span>Settings</span>
        </NavLink>

        <button
          type="button"
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