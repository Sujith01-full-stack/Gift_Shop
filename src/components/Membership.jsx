import React from "react";
import {
  FaCrown,
  FaStar,
  FaGift,
  FaTruck,
  FaCoins,
} from "react-icons/fa";

import "./Membership.css";

const Membership = () => {
  const currentPoints = 700;
  const targetPoints = 1000;

  const progress = (currentPoints / targetPoints) * 100;

  return (
    <div className="membership-card">

      <div className="membership-header">
        <h2>
          <FaCrown />
          Membership
        </h2>
      </div>

      <div className="membership-info">

        <div className="membership-icon">
          <FaCrown />
        </div>

        <div>
          <h3>Gold Member</h3>
          <p>Valid until December 2026</p>
        </div>

      </div>

      <div className="reward-points">

        <div className="points-row">
          <FaCoins />
          <span>{currentPoints} Reward Points</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p>
          {currentPoints} / {targetPoints} points to reach
          Platinum Membership
        </p>

      </div>

      <div className="membership-benefits">

        <h3>
          <FaStar />
          Benefits
        </h3>

        <ul>
          <li>
            <FaGift />
            Exclusive Gift Discounts
          </li>

          <li>
            <FaTruck />
            Free Shipping on Eligible Orders
          </li>

          <li>
            <FaCoins />
            Earn Reward Points on Every Purchase
          </li>

          <li>
            ⭐ Priority Customer Support
          </li>

          <li>
            🎉 Birthday & Festival Offers
          </li>
        </ul>

      </div>

    </div>
  );
};

export default Membership;