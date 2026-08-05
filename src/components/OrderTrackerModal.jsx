import React from "react";
import {
  FaTimes,
  FaCheckCircle,
  FaBoxOpen,
  FaPaintBrush,
  FaBox,
  FaTruck,
  FaSmile,
  FaWhatsapp,
  FaCopy,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import "./OrderTrackerModal.css";
import { toast } from "react-toastify";

const OrderTrackerModal = ({ order, onClose }) => {
  if (!order) return null;

  const trackingSteps = [
    {
      id: 1,
      title: "Order Placed",
      desc: "Order received & verified",
      icon: <FaBoxOpen />,
      status: "completed",
      date: order.date || "Today",
    },
    {
      id: 2,
      title: "Customizing & Printing",
      desc: "Crafting your personalized gift",
      icon: <FaPaintBrush />,
      status:
        order.status === "Cancelled"
          ? "cancelled"
          : ["Shipped", "Delivered", "Pending"].includes(order.status)
          ? "completed"
          : "current",
      date: "In Progress",
    },
    {
      id: 3,
      title: "Packed & Quality Checked",
      desc: "Safe bubble wrap & gift packaging",
      icon: <FaBox />,
      status:
        order.status === "Cancelled"
          ? "cancelled"
          : ["Shipped", "Delivered"].includes(order.status)
          ? "completed"
          : order.status === "Pending"
          ? "current"
          : "pending",
      date: "Est. Tomorrow",
    },
    {
      id: 4,
      title: "In Transit / Dispatched",
      desc: "Handed over to courier partner",
      icon: <FaTruck />,
      status:
        order.status === "Cancelled"
          ? "cancelled"
          : order.status === "Delivered"
          ? "completed"
          : order.status === "Shipped"
          ? "current"
          : "pending",
      date: "Est. 2-3 Days",
    },
    {
      id: 5,
      title: "Delivered",
      desc: "Delivered to your doorstep",
      icon: <FaSmile />,
      status:
        order.status === "Cancelled"
          ? "cancelled"
          : order.status === "Delivered"
          ? "completed"
          : "pending",
      date: "Est. 3-5 Days",
    },
  ];

  const courierName = order.courierName || "Spider Express Logistics";
  const trackingNumber =
    order.trackingId || `SPD-TRK-${order.id?.toString().replace("#", "") || "89201"}`;

  const copyTrackingId = () => {
    navigator.clipboard.writeText(trackingNumber);
    toast.success("📋 Tracking ID Copied to Clipboard!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const whatsappQuery = encodeURIComponent(
    `Hello Spider Gift Store Support,\n\nI want a live status update for my order:\n\n*Order ID:* ${order.id}\n*Product:* ${order.product}\n*Current Status:* ${order.status}\n*Tracking ID:* ${trackingNumber}\n\nPlease update me on the exact delivery schedule. Thank you!`
  );

  return (
    <div className="tracker-overlay" onClick={onClose}>
      <div className="tracker-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="tracker-close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        {/* Modal Header */}
        <div className="tracker-header">
          <div className="tracker-header-info">
            <span className="order-id-badge">Order ID: {order.id}</span>
            <h2>Live Order Tracker</h2>
            <p>Track your personalized gift status in real time</p>
          </div>
          <span className={`status-tag ${order.status?.toLowerCase()}`}>
            {order.status}
          </span>
        </div>

        {/* Product Summary Row */}
        <div className="tracker-product-summary">
          <img src={order.image} alt={order.product} />
          <div className="summary-details">
            <h3>{order.product}</h3>
            <p>
              Quantity: <strong>{order.quantity || 1}</strong> | Total:{" "}
              <strong>₹{(order.price || 0) * (order.quantity || 1) + 100}</strong>
            </p>
            <p className="address-text">
              <FaMapMarkerAlt /> Delivery to:{" "}
              {order.customer?.address || "Registered Address, Tamil Nadu"}
            </p>
          </div>
        </div>

        {/* Courier & Tracking Details Card */}
        <div className="courier-card">
          <div className="courier-info">
            <span className="courier-label">Courier Partner:</span>
            <strong>{courierName}</strong>
          </div>
          <div className="tracking-id-box">
            <span className="courier-label">Tracking ID:</span>
            <code onClick={copyTrackingId}>{trackingNumber}</code>
            <button className="copy-btn" onClick={copyTrackingId} title="Copy ID">
              <FaCopy />
            </button>
          </div>
        </div>

        {/* Live Step Progress Timeline */}
        <div className="timeline-container">
          <h4 className="timeline-heading">
            <FaCalendarAlt /> Progress Timeline
          </h4>

          <div className="timeline">
            {trackingSteps.map((step, idx) => (
              <div
                key={step.id}
                className={`timeline-step ${step.status}`}
              >
                <div className="step-icon-wrapper">
                  <div className="step-icon">{step.icon}</div>
                  {idx < trackingSteps.length - 1 && (
                    <div className="step-line" />
                  )}
                </div>

                <div className="step-content">
                  <div className="step-header">
                    <h5>{step.title}</h5>
                    <span className="step-date">{step.date}</span>
                  </div>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live WhatsApp Status Updater Action */}
        <div className="tracker-actions">
          <a
            href={`https://wa.me/918300589035?text=${whatsappQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-status-btn"
          >
            <FaWhatsapp /> Get Live Updates on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderTrackerModal;
