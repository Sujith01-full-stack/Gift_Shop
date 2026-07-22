import React, { useEffect, useState } from "react";
import {
  FaBoxOpen,
  FaCheckCircle,
  FaTruck,
  FaClock,
  FaEye,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./RecentOrders.css";

const RecentOrders = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = () => {
      const savedOrders =
        JSON.parse(localStorage.getItem("orders")) || [];

      setOrders(savedOrders);
    };

    loadOrders();

    window.addEventListener("focus", loadOrders);

    return () => {
      window.removeEventListener("focus", loadOrders);
    };
  }, []);

  const getStatus = (status) => {
    switch (status) {
      case "Delivered":
        return (
          <span className="status delivered">
            <FaCheckCircle />
            {status}
          </span>
        );

      case "Shipped":
        return (
          <span className="status shipped">
            <FaTruck />
            {status}
          </span>
        );

      default:
        return (
          <span className="status processing">
            <FaClock />
            {status}
          </span>
        );
    }
  };

  return (
    <div className="recent-orders">

      <div className="orders-header">

        <h2>
          <FaBoxOpen />
          Recent Orders
        </h2>

        <button
          className="view-all"
          onClick={() => navigate("/orders")}
        >
          View All
        </button>

      </div>

      {orders.length === 0 ? (

        <div className="empty-orders">

          <FaBoxOpen className="empty-icon" />

          <h3>No Orders Yet</h3>

          <p>Your recent orders will appear here.</p>

        </div>

      ) : (

        <div className="orders-list">

          {orders
            .slice()
            .reverse()
            .slice(0, 5)
            .map((order) => (

              <div
                className="order-card"
                key={order.id}
              >

                <img
                  src={
                    order.image ||
                    "https://via.placeholder.com/90"
                  }
                  alt={order.product}
                />

                <div className="order-info">

                  <h3>{order.product}</h3>

                  <p>
                    <strong>Order ID :</strong> {order.id}
                  </p>

                  <p>
                    <strong>Date :</strong> {order.date}
                  </p>

                  <p>
                    <strong>Qty :</strong> {order.quantity}
                  </p>

                  <p>
                    <strong>Payment :</strong> {order.payment}
                  </p>

                </div>

                <div className="order-price">

                  <h3>
                    ₹{Number(order.price).toLocaleString()}
                  </h3>

                  {getStatus(order.status)}

                </div>

                <button
                  className="details-btn"
                  onClick={() => navigate("/orders")}
                >
                  <FaEye />
                  Details
                </button>

              </div>

            ))}

        </div>

      )}

    </div>
  );
};

export default RecentOrders;