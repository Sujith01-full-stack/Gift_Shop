import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";

import "./AdminDashboard.css";

import {
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaRupeeSign,
  FaPlusCircle,
  FaClipboardList,
  FaSignOutAlt,
  FaChartLine,
  FaBell,
  FaCog,
  FaStar,
  FaArrowUp,
  FaTags,
} from "react-icons/fa";

const AdminDashboard = () => {

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    setProducts(savedProducts);
  }, []);

  const handleLogout = () => {

    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("lastLogin");

    navigate("/login", { replace: true });

  };

  const recentOrders = [
    {
      id: "#1001",
      customer: "Rahul",
      product: "Photo Frame",
      status: "Delivered",
      amount: "₹699",
    },
    {
      id: "#1002",
      customer: "Priya",
      product: "Magic Mug",
      status: "Pending",
      amount: "₹399",
    },
    {
      id: "#1003",
      customer: "Arun",
      product: "Photo Keychain",
      status: "Shipped",
      amount: "₹249",
    },
    {
      id: "#1004",
      customer: "Sujith",
      product: "LED Frame",
      status: "Delivered",
      amount: "₹1499",
    },
  ];

  return (
    <div className="admin-dashboard">

      {/* Sidebar */}

      <aside className="sidebar">

        <div className="logo-box">

          <h2>🕷 Spider Admin</h2>

          <p>Gift Store Panel</p>

        </div>

        <ul className="menu">

          <li>

            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              <FaChartLine />
              <span>Dashboard</span>
            </NavLink>

          </li>

          <li>

            <Link to="/admin/add-product">
              <FaPlusCircle />
              <span>Add Product</span>
            </Link>

          </li>

          <li>

            <Link to="/admin/products">
              <FaBoxOpen />
              <span>Products</span>
            </Link>

          </li>

          <li>

            <Link to="/admin/manage-orders">
              <FaClipboardList />
              <span>Manage Orders</span>
            </Link>

          </li>

          <li>

            <Link to="/admin/customers">
              <FaUsers />
              <span>Customers</span>
            </Link>

          </li>

          <li>

            <Link to="/admin/reports">
              <FaChartLine />
              <span>Reports</span>
            </Link>

          </li>

          <li>

            <Link to="/admin/notifications">
              <FaBell />
              <span>Notifications</span>
            </Link>

          </li>

          <li>

            <Link to="/admin/settings">
              <FaCog />
              <span>Settings</span>
            </Link>

          </li>

          {/* Banner Offer */}

          <li>

            <Link to="/admin/offer">
              <FaTags />
              <span>Banner Offer</span>
            </Link>

          </li>

          <li>

            <button
              type="button"
              className="logout-btn"
              onClick={handleLogout}
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>

          </li>

        </ul>

      </aside>

      {/* Main Content */}

      <main className="dashboard-content">

                {/* ===========================
            DASHBOARD HEADER
        ============================ */}

        <div className="dashboard-header">

          <div>

            <h1>Dashboard</h1>

            <p>
              Welcome back, Administrator 👋
            </p>

          </div>

          <div className="header-actions">

            <Link
              to="/admin/add-product"
              className="add-btn"
            >
              <FaPlusCircle />
              Add Product
            </Link>

          </div>

        </div>

        {/* ===========================
            STATISTICS
        ============================ */}

        <div className="stats-grid">

          <div className="stat-card">

            <div className="stat-icon blue">
              <FaBoxOpen />
            </div>

            <div className="stat-info">

              <h3>{products.length}</h3>

              <p>Total Products</p>

            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon green">
              <FaShoppingCart />
            </div>

            <div className="stat-info">

              <h3>{recentOrders.length}</h3>

              <p>Total Orders</p>

            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon orange">
              <FaUsers />
            </div>

            <div className="stat-info">

              <h3>245</h3>

              <p>Total Customers</p>

            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon purple">
              <FaRupeeSign />
            </div>

            <div className="stat-info">

              <h3>₹1,24,500</h3>

              <p>Total Revenue</p>

            </div>

          </div>

        </div>

        {/* ===========================
            QUICK ACTIONS
        ============================ */}

        <div className="quick-actions">

          <h2>Quick Actions</h2>

          <div className="action-grid">

            <Link
              to="/admin/add-product"
              className="action-card"
            >
              <FaPlusCircle />

              <h4>Add Product</h4>

              <p>Create a new product</p>

            </Link>

            <Link
              to="/admin/products"
              className="action-card"
            >
              <FaBoxOpen />

              <h4>Manage Products</h4>

              <p>View and edit products</p>

            </Link>

            <Link
              to="/admin/manage-orders"
              className="action-card"
            >
              <FaClipboardList />

              <h4>Manage Orders</h4>

              <p>Track customer orders</p>

            </Link>

            <Link
              to="/admin/customers"
              className="action-card"
            >
              <FaUsers />

              <h4>Customers</h4>

              <p>View customer details</p>

            </Link>

            <Link
              to="/admin/reports"
              className="action-card"
            >
              <FaChartLine />

              <h4>Reports</h4>

              <p>Sales & Analytics</p>

            </Link>

            <Link
              to="/admin/settings"
              className="action-card"
            >
              <FaCog />

              <h4>Settings</h4>

              <p>Store Configuration</p>

            </Link>

            {/* Banner Offer */}

            <Link
              to="/admin/offer"
              className="action-card"
            >
              <FaTags />

              <h4>Banner Offer</h4>

              <p>Manage Homepage Banner Offer</p>

            </Link>

          </div>

        </div>

                {/* ===========================
            RECENT ORDERS
        ============================ */}

        <div className="orders-section">

          <h2>Recent Orders</h2>

          <table className="orders-table">

            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>

              {recentOrders.map((order) => (

                <tr key={order.id}>

                  <td>{order.id}</td>

                  <td>{order.customer}</td>

                  <td>{order.product}</td>

                  <td>
                    <span
                      className={`status ${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>{order.amount}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* ===========================
            RECENT PRODUCTS
        ============================ */}

        <div className="dashboard-section">

          <div className="section-header">

            <h2>Recent Products</h2>

            <Link
              to="/admin/products"
              className="view-all-btn"
            >
              View All
            </Link>

          </div>

          <div className="product-grid">

            {products.length > 0 ? (

              products.slice(0, 6).map((product) => (

                <div
                  key={product.id}
                  className="product-card"
                >

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <h4>{product.name}</h4>

                  <p>{product.category}</p>

                  <h3>₹{product.price}</h3>

                </div>

              ))

            ) : (

              <div className="empty-products">

                <FaBoxOpen size={60} />

                <h3>No Products Found</h3>

                <p>Add your first product.</p>

              </div>

            )}

          </div>

        </div>

        {/* ===========================
            SALES OVERVIEW
        ============================ */}

        <div className="dashboard-section">

          <h2>Sales Overview</h2>

          <div className="sales-cards">

            <div className="sales-card">

              <FaArrowUp className="sales-icon green" />

              <h3>Today's Sales</h3>

              <h2>₹18,250</h2>

              <span>+12%</span>

            </div>

            <div className="sales-card">

              <FaArrowUp className="sales-icon blue" />

              <h3>This Week</h3>

              <h2>₹1,24,800</h2>

              <span>+18%</span>

            </div>

            <div className="sales-card">

              <FaArrowUp className="sales-icon orange" />

              <h3>This Month</h3>

              <h2>₹4,82,600</h2>

              <span>+26%</span>

            </div>

          </div>

        </div>

        {/* ===========================
            BEST SELLING PRODUCTS
        ============================ */}

        <div className="dashboard-section">

          <h2>Best Selling Products</h2>

          <div className="top-products">

            <div className="top-product">

              <FaStar className="star" />

              <div>
                <h4>Magic Mug</h4>
                <p>245 Orders</p>
              </div>

            </div>

            <div className="top-product">

              <FaStar className="star" />

              <div>
                <h4>LED Photo Frame</h4>
                <p>198 Orders</p>
              </div>

            </div>

            <div className="top-product">

              <FaStar className="star" />

              <div>
                <h4>Photo Keychain</h4>
                <p>170 Orders</p>
              </div>

            </div>

            <div className="top-product">

              <FaStar className="star" />

              <div>
                <h4>Customized Pillow</h4>
                <p>145 Orders</p>
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>

  );

};

export default AdminDashboard;