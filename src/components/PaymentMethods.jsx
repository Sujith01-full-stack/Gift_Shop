import React, { useState } from "react";
import {
  FaCreditCard,
  FaUniversity,
  FaWallet,
  FaPlus,
  FaTrash,
} from "react-icons/fa";

import "./PaymentMethods.css";

const PaymentMethods = () => {
  const [methods, setMethods] = useState([
    {
      id: 1,
      type: "Visa Card",
      number: "**** **** **** 1234",
      icon: <FaCreditCard />,
    },
    {
      id: 2,
      type: "UPI",
      number: "spider@upi",
      icon: <FaWallet />,
    },
    {
      id: 3,
      type: "Bank Account",
      number: "XXXXXX4567",
      icon: <FaUniversity />,
    },
  ]);

  const removeMethod = (id) => {
    if (window.confirm("Remove this payment method?")) {
      setMethods(methods.filter((item) => item.id !== id));
    }
  };

  const addMethod = () => {
    alert("Add Payment Method feature coming soon!");
  };

  return (
    <div className="payment-card">
      <div className="payment-header">
        <h2>💳 Payment Methods</h2>

        <button
          className="add-payment-btn"
          onClick={addMethod}
        >
          <FaPlus />
          Add
        </button>
      </div>

      <div className="payment-list">
        {methods.map((item) => (
          <div
            className="payment-item"
            key={item.id}
          >
            <div className="payment-info">
              <div className="payment-icon">
                {item.icon}
              </div>

              <div>
                <h4>{item.type}</h4>
                <p>{item.number}</p>
              </div>
            </div>

            <button
              className="delete-payment"
              onClick={() =>
                removeMethod(item.id)
              }
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;