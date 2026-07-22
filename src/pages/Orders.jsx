import React, { useEffect, useState } from "react";
import "./Orders.css";
import {
  FaBoxOpen,
  FaTruck,
  FaCheckCircle,
  FaTimesCircle,
  FaShoppingBag,
} from "react-icons/fa";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // Load Orders from localStorage
  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  // Status Icon
  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return <FaCheckCircle />;
      case "Shipped":
        return <FaTruck />;
      case "Pending":
        return <FaBoxOpen />;
      case "Cancelled":
        return <FaTimesCircle />;
      default:
        return <FaBoxOpen />;
    }
  };

  // Remove Order
  const removeOrder = (id) => {
    const updatedOrders = orders.filter(
      (order) => order.id !== id
    );

    setOrders(updatedOrders);

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );
  };

  // Track Order
  const trackOrder = (order) => {
    alert(
      `Order ID: ${order.id}
Product: ${order.product}
Status: ${order.status}
Date: ${order.date}`
    );
  };

  return (
    <div className="orders-page">
      <div className="orders-container">

        <h1>
          <FaShoppingBag /> My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="empty-orders">
            <h2>No Orders Found 📦</h2>
            <p>You haven't placed any orders yet.</p>
          </div>
        ) : (
          orders.map((order) => (
            <div
              className="order-card"
              key={order.id}
            >

              <img
                src={order.image}
                alt={order.product}
              />

              <div className="order-details">

                <h2>{order.product}</h2>

                <p>
                  <strong>Order ID:</strong>{" "}
                  {order.id}
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {order.date}
                </p>

                <p>
                  <strong>Quantity:</strong>{" "}
                  {order.quantity}
                </p>

                <h3>₹{order.price}</h3>

              </div>

             <div className="order-status">

  <span className={`status ${order.status.toLowerCase()}`}>
    {getStatusIcon(order.status)}
    &nbsp;{order.status}
  </span>

  <div className="order-info">

    <p>
      <strong>💳 Payment:</strong>{" "}
      {order.customer?.payment || "Cash on Delivery"}
    </p>

    <p>
      <strong>🚚 Delivery:</strong> ₹100
    </p>

    <p>
      <strong>📦 Estimated:</strong> 3 - 5 Days
    </p>

    <p>
      <strong>Total:</strong>{" "}
      ₹{order.price * order.quantity + 100}
    </p>

  </div>

  <button
    className="track-btn"
    onClick={() => trackOrder(order)}
  >
    Track Order
  </button>

  <button
    className="reorder-btn"
    onClick={() => alert("Product added to cart")}
  >
    Reorder
  </button>

  <button
    className="cancel-btn"
    onClick={() => removeOrder(order.id)}
  >
    Cancel Order
  </button>

</div>

            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default Orders;