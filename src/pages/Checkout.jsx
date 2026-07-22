import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();

  const { cart, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "Cash on Delivery",

    upiId: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
    bank: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryCharge = 100;

  const totalAmount = subtotal + deliveryCharge;

  const handleSubmit = (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Your Cart is Empty");
    return;
  }

  const existingOrders =
    JSON.parse(localStorage.getItem("orders")) || [];

  const newOrders = cart.map((item) => ({
    id: "#ORD-" + Math.floor(100000 + Math.random() * 900000),
    product: item.name,
    image: item.image,
    quantity: item.quantity,
    price: item.price,
    subtotal: item.price * item.quantity,
    delivery: deliveryCharge,
    total: item.price * item.quantity + deliveryCharge,
    payment: formData.payment,
    customer: formData,
    status: "Processing",
    date: new Date().toLocaleDateString("en-IN"),
  }));

  localStorage.setItem(
    "orders",
    JSON.stringify([...existingOrders, ...newOrders])
  );

  alert("🎉 Order Placed Successfully!");

  clearCart();

  navigate("/orders");
};

  return (
    <div className="checkout-page">

      <div className="checkout-container">

        {/* FORM */}

        <div className="checkout-form">

          <h1>Checkout</h1>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              rows="4"
              name="address"
              placeholder="Delivery Address"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <div className="row">

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
              />

            </div>

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />

            {/* Payment */}

            <label className="payment-title">
              Payment Method
            </label>

            <select
              className="payment-select"
              name="payment"
              value={formData.payment}
              onChange={handleChange}
            >
              <option>Cash on Delivery</option>
              <option>UPI</option>
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>Net Banking</option>
            </select>

            {/* UPI */}

            {formData.payment === "UPI" && (

              <div className="payment-box">

                <input
                  type="text"
                  name="upiId"
                  placeholder="Enter UPI ID"
                  value={formData.upiId}
                  onChange={handleChange}
                />

                <p className="payment-note">
                  Google Pay • PhonePe • Paytm • BHIM
                </p>

              </div>

            )}

            {/* CARD */}

            {(formData.payment === "Credit Card" ||
              formData.payment === "Debit Card") && (

              <div className="payment-box">

                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="cardName"
                  placeholder="Card Holder Name"
                  value={formData.cardName}
                  onChange={handleChange}
                />

                <div className="row">

                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={handleChange}
                  />

                  <input
                    type="password"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleChange}
                  />

                </div>

              </div>

            )}

            {/* NET BANKING */}

            {formData.payment === "Net Banking" && (

              <div className="payment-box">

                <select
                  name="bank"
                  value={formData.bank}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Bank
                  </option>

                  <option>SBI</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                  <option>Indian Bank</option>
                  <option>Canara Bank</option>

                </select>

              </div>

            )}

            <button type="submit">
              Place Order
            </button>

          </form>

        </div>

        {/* SUMMARY */}

        <div className="order-summary">

          <h2>Order Summary</h2>

          {cart.length === 0 ? (

            <p>Your Cart is Empty</p>

          ) : (

            <>

              {cart.map((item) => (

                <div
                  className="summary-item"
                  key={item.id}
                >

                  <span>
                    {item.name} × {item.quantity}
                  </span>

                  <span>
                    ₹{item.price * item.quantity}
                  </span>

                </div>

              ))}

              <hr />

              <div className="summary-item">

                <span>Subtotal</span>

                <span>
                  ₹{subtotal}
                </span>

              </div>

              <div className="summary-item">

                <span>Delivery Charge</span>

                <span>₹{deliveryCharge}</span>

              </div>

              <div className="summary-item">

                <span>Payment</span>

                <span>{formData.payment}</span>

              </div>

              <hr />

              <div className="summary-total">

                <span>Total</span>

                <span>
                  ₹{totalAmount}
                </span>

              </div>

            </>

          )}

        </div>

      </div>

    </div>
  );
};

export default Checkout;