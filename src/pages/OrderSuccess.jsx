import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaShoppingBag,
  FaHome,
  FaClipboardList,
} from "react-icons/fa";

import "./OrderSuccess.css";

const OrderSuccess = () => {
  const orderId =
    "SGS" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="success-page">
      <div className="success-card">

        <FaCheckCircle className="success-icon" />

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with
          <strong> Spider Gift Store.</strong>
        </p>

        <div className="order-info">
          <h3>Order ID</h3>
          <span>{orderId}</span>
        </div>

        <div className="delivery-box">
          <h4>Estimated Delivery</h4>
          <p>3 - 5 Business Days</p>
        </div>

        <div className="success-buttons">

          <Link
            to="/orders"
            className="orders-btn"
          >
            <FaClipboardList />
            My Orders
          </Link>

          <Link
            to="/products"
            className="shop-btn"
          >
            <FaShoppingBag />
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="home-btn"
          >
            <FaHome />
            Home
          </Link>

        </div>

      </div>
    </div>
  );
};

export default OrderSuccess;