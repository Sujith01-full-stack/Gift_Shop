import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaCreditCard,
  FaMobileAlt,
} from "react-icons/fa";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const subtotal = 1299;
  const shipping = 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    // Cash on Delivery
    if (paymentMethod === "cod") {
      alert("Order Placed Successfully!");
      navigate("/order-success");
      return;
    }

    // Razorpay
    const options = {
      key: "rzp_test_TGRq79KyX8caWv", // Example: rzp_test_xxxxxxxxx
      amount: total * 100,
      currency: "INR",
      name: "Spider Gift Store",
      description: "Order Payment",

      handler: function (response) {
        alert("Payment Successful!");

        console.log("Payment ID:", response.razorpay_payment_id);
        console.log("Order ID:", response.razorpay_order_id);
        console.log("Signature:", response.razorpay_signature);

        navigate("/order-success");
      },

      prefill: {
        name: "Spider",
        email: "spider@gmail.com",
        contact: "9876543210",
      },

      theme: {
        color: "#7c3aed",
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.on("payment.failed", function (response) {
      alert("Payment Failed");
      console.log(response.error);
    });

    razorpay.open();
  };

  return (
    <div className="payment-page">
      <div className="payment-container">

        <div className="payment-left">

          <h2>Select Payment Method</h2>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <FaMoneyBillWave />
            Cash on Delivery
          </label>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <FaMobileAlt />
            UPI Payment
          </label>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <FaCreditCard />
            Debit / Credit Card
          </label>

          {paymentMethod === "upi" && (
            <div className="payment-box">
              <p>Click "Place Order" to pay using Razorpay UPI.</p>
            </div>
          )}

          {paymentMethod === "card" && (
            <div className="payment-box">
              <p>Click "Place Order" to pay using Razorpay Card Payment.</p>
            </div>
          )}

        </div>

        <div className="payment-right">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            className="place-order-btn"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>

        </div>

      </div>
    </div>
  );
};

export default Payment;