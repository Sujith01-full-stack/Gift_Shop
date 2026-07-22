import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
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
} from "react-icons/fa";

const AdminDashboard = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    setProducts(savedProducts);
  }, []);

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

      {/* ================= Sidebar ================= */}

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

          <li>

            <Link to="/">

              <FaSignOutAlt />

              <span>Logout</span>

            </Link>

          </li>

        </ul>

      </aside>

      {/* ================= Main Content ================= */}

      <main className="dashboard-content">

        <div className="dashboard-header">

          <div>

            <h1>Admin Dashboard</h1>

            <p>Welcome Back, Admin 👋</p>

          </div>

          <div className="growth-card">

            <FaArrowUp />

            <span>+24%</span>

            <small>This Month</small>

          </div>

        </div> 

                {/* ================= Statistics ================= */}

        <div className="stats-grid">

          <div className="stat-card">

            <FaBoxOpen className="stat-icon" />

            <div>

              <h4>Total Products</h4>

<h2>{products.length}</h2>

            </div>

          </div>

          <div className="stat-card">

            <FaShoppingCart className="stat-icon" />

            <div>

              <h4>Total Orders</h4>

              <h2>10000+</h2>

            </div>

          </div>

          <div className="stat-card">

            <FaUsers className="stat-icon" />

            <div>

              <h4>Customers</h4>

              <h2>5000+</h2>

            </div>

          </div>

          <div className="stat-card">

            <FaRupeeSign className="stat-icon" />

            <div>

              <h4>Revenue</h4>

              <h2>₹25000</h2>

            </div>

          </div>

        </div>

        {/* ================= Quick Actions ================= */}

        <div className="quick-actions">

  <Link
    to="/admin/add-product"
    className="action-btn"
  >
    <FaPlusCircle />
    Add Product
  </Link>

  <Link
    to="/admin/products"
    className="action-btn"
  >
    <FaBoxOpen />
    Products
  </Link>

  <Link
    to="/admin/manage-orders"
    className="action-btn"
  >
    <FaClipboardList />
    Orders
  </Link>

  <Link
    to="/admin/customers"
    className="action-btn"
  >
    <FaUsers />
    Customers
  </Link>

  <Link
    to="/admin/reports"
    className="action-btn"
  >
    <FaChartLine />
    Reports
  </Link>

</div>

{/* 👇 இந்த இடத்தில் Paste செய்யுங்கள் */}

<div className="recent-products">

  <h2>Recently Added Products</h2>

  {products.length > 0 ? (

    <div className="recent-product-grid">

      {products.map((product) => (

        <div
          className="recent-product-card"
          key={product.id}
        >

          <img
            src={product.image}
            alt={product.name}
          />

          <h4>{product.name}</h4>

          <p>{product.category}</p>

          <span>₹{product.price}</span>

        </div>

      ))}

    </div>

  ) : (

    <p>No Products Added</p>

  )}

</div>

{/* Sales Grid */}

<div className="sales-grid">

  ...
</div>

        {/* ================= Sales Cards ================= */}

        <div className="sales-grid">

          <div className="sales-card">

            <h3>Today's Sales</h3>

            <h1>₹8,450</h1>

            <span>+15% Today</span>

          </div>

          <div className="sales-card">

            <h3>This Month</h3>

            <h1>₹25000</h1>

            <span>+24% Growth</span>

          </div>

          <div className="sales-card">

            <h3>Best Customers</h3>

            <h1>48</h1>

            <span>Premium Members</span>

          </div>

        </div>

        {/* ================= Recent Orders ================= */}

        <div className="recent-orders">

          <div className="section-header">

            <h2>Recent Orders</h2>

            <Link
              to="/admin/manage-orders"
              className="view-all-btn"
            >
              View All
            </Link>

          </div>

          <table>

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

        {/* ================= Bottom Section ================= */}

        <div className="bottom-grid">

          {/* ================= Best Selling Products ================= */}

          <div className="best-products">

            <h2>

              <FaStar />

              Best Selling Products

            </h2>

            <ul>

              <li>

                <span>LED Photo Frame</span>

                <strong>145 Orders</strong>

              </li>

              <li>

                <span>Magic Mug</span>

                <strong>118 Orders</strong>

              </li>

              <li>

                <span>Wedding Frame</span>

                <strong>96 Orders</strong>

              </li>

              <li>

                <span>Photo Keychain</span>

                <strong>84 Orders</strong>

              </li>

            </ul>

          </div>

          {/* ================= Latest Customers ================= */}

          <div className="customer-list">

            <h2>Latest Customers</h2>

            <div className="customer-card">

              <div className="avatar">R</div>

              <div>

                <h4>Rahul Kumar</h4>

                <small>rahul@gmail.com</small>

              </div>

            </div>

            <div className="customer-card">

              <div className="avatar">P</div>

              <div>

                <h4>Priya</h4>

                <small>priya@gmail.com</small>

              </div>

            </div>

            <div className="customer-card">

              <div className="avatar">A</div>

              <div>

                <h4>Arun</h4>

                <small>arun@gmail.com</small>

              </div>

            </div>

            <div className="customer-card">

              <div className="avatar">S</div>

              <div>

                <h4>Sujith S</h4>

                <small>spidergiftstore@gmail.com</small>

              </div>

            </div>

          </div>

        </div>   

              </main>

    </div>

  );

};

export default AdminDashboard;