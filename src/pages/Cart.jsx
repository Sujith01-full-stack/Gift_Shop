import React from "react";
import "./Cart.css";
import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaShoppingCart,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  return (
    <div className="cart-page">
      <div className="cart-container">

        <h1>
          <FaShoppingCart /> Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Your Cart is Empty 🛒</h2>
            <p>Add some amazing gifts to your cart.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-card" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-details">
                    <h3>{item.name}</h3>

                    <h4>₹{item.price}</h4>

                    <div className="quantity-box">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        <FaMinus />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>

                  <div className="cart-actions">
                    <h3>
                      ₹
                      {item.price * item.quantity}
                    </h3>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}

            <div className="cart-summary">

              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Total Items</span>

                <span>
                  {cart.reduce(
                    (sum, item) =>
                      sum + item.quantity,
                    0
                  )}
                </span>
              </div>

              <div className="summary-row">
                <span>Total Amount</span>

                <span>₹{cartTotal}</span>
              </div>

              <button
                className="checkout-btn"
                onClick={() =>
                  navigate("/checkout")
                }
              >
                Proceed to Checkout
              </button>

            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;