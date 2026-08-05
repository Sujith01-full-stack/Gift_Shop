import React, { useEffect, useState } from "react";
import "./Orders.css";
import {
  FaBoxOpen,
  FaTruck,
  FaCheckCircle,
  FaTimesCircle,
  FaShoppingBag,
} from "react-icons/fa";
import OrderTrackerModal from "../components/OrderTrackerModal";
import { toast } from "react-toastify";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

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
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this order?"
    );
    if (!confirmCancel) return;

    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: "Cancelled" } : order
    );

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    toast.warn("Order status updated to Cancelled", {
      position: "top-right",
      autoClose: 2000,
    });
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
                  {order.quantity || 1}
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
      ₹{(order.price || 0) * (order.quantity || 1) + 100}
    </p>

  </div>

  <button
    className="track-btn"
    onClick={() => setSelectedOrder(order)}
  >
    Track Order Live
  </button>

  <button
    className="reorder-btn"
    onClick={() =>
      toast.success(`🛒 Product added to cart`, {
        position: "top-right",
        autoClose: 2000,
      })
    }
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

      {/* Live Order Tracker Modal */}
      {selectedOrder && (
        <OrderTrackerModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
};

export default Orders;