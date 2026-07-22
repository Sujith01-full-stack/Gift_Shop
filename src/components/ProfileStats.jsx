import React from "react";
import {
  FaShoppingBag,
  FaHeart,
  FaRupeeSign,
  FaCrown,
  FaBoxOpen,
  FaGift,
} from "react-icons/fa";
import "./ProfileStats.css";

const ProfileStats = () => {
  const stats = [
  {
    id: 1,
    title: "Total Orders",
    value: 25,
    icon: <FaShoppingBag />,
    color: "linear-gradient(135deg,#00E5FF,#0072FF)",
  },
  {
    id: 2,
    title: "Wishlist",
    value: 8,
    icon: <FaHeart />,
    color: "linear-gradient(135deg,#FF0080,#FF4D4D)",
  },
  {
    id: 3,
    title: "Total Spending",
    value: "₹18,500",
    icon: <FaRupeeSign />,
    color: "linear-gradient(135deg,#FFD600,#FF9800)",
  },
  {
    id: 4,
    title: "Membership",
    value: "Gold",
    icon: <FaCrown />,
    color: "linear-gradient(135deg,#B026FF,#7B2CFF)",
  },
  {
    id: 5,
    title: "Pending Orders",
    value: 3,
    icon: <FaBoxOpen />,
    color: "linear-gradient(135deg,#00FF88,#00C853)",
  },
  {
    id: 6,
    title: "Reward Points",
    value: 750,
    icon: <FaGift />,
    color: "linear-gradient(135deg,#FF00FF,#8A2BE2)",
  },
];

  return (
    <div className="profile-stats">

      <div className="stats-header">
        <h2>My Statistics</h2>
        <p>Your shopping summary</p>
      </div>

      <div className="stats-grid">
        {stats.map((item) => (
          <div className="stat-card" key={item.id}>

            <div
              className="stat-icon"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>

            <div className="stat-content">
              <h3>{item.value}</h3>
              <p>{item.title}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default ProfileStats;