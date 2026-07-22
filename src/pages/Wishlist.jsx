import React from "react";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css";

import {
  FaHeart,
  FaShoppingCart,
  FaTrash,
  FaStar,
  FaArrowLeft,
  FaTrashAlt,
} from "react-icons/fa";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const Wishlist = () => {

  const navigate = useNavigate();

  const {
    wishlist,
    removeFromWishlist,
    clearWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  const handleMoveToCart = (item) => {

    addToCart({
      ...item,
      quantity:1,
    });

    removeFromWishlist(item.id);

    alert(`${item.name} moved to cart`);

  };

  const handleClearWishlist = () => {

    if(window.confirm("Clear Wishlist?")){
      clearWishlist();
    }

  };

  return (

    <section className="wishlist-page">

      <div className="wishlist-container">

        <div className="wishlist-header">

          <div>

            <h1>

              <FaHeart />

              My Wishlist

            </h1>

            <p>
              Your favourite Spider Gift Store products
            </p>

          </div>

          <div className="wishlist-actions">

            <div className="wishlist-count">

              <span>{wishlist.length}</span>

              Items

            </div>

            {wishlist.length>0 && (

              <button
                className="clear-btn"
                onClick={handleClearWishlist}
              >

                <FaTrashAlt />

                Clear Wishlist

              </button>

            )}

          </div>

        </div>

        {wishlist.length===0 ? (

          <div className="empty-wishlist">

            <FaHeart className="empty-icon"/>

            <h2>Your Wishlist is Empty</h2>

            <p>
              Save your favourite gifts to buy later.
            </p>

            <button
              className="continue-btn"
              onClick={()=>navigate("/products")}
            >

              <FaArrowLeft />

              Continue Shopping

            </button>

          </div>

        ) : (

          <div className="wishlist-grid">

                       {wishlist.map((item) => (

              <div
                className="wishlist-card"
                key={item.id}
              >

                {/* Discount Badge */}

                <span className="discount-badge">
                  {item.discount || 15}% OFF
                </span>

                {/* Favourite */}

                <button
                  className="fav-btn"
                  onClick={() =>
                    removeFromWishlist(item.id)
                  }
                >
                  <FaHeart />
                </button>

                {/* Product Image */}

                <div className="wishlist-image-box">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="wishlist-image"
                  />

                </div>

                {/* Content */}

                <div className="wishlist-content">

                  <span className="category">
                    {item.category}
                  </span>

                  <h3>{item.name}</h3>

                  <p className="description">
                    {item.description ||
                      "Premium Customized Gift"}
                  </p>

                  {/* Rating */}

                  <div className="rating">

                    <FaStar />

                    <span>
                      {item.rating || 4.8}
                    </span>

                    <small>(250 Reviews)</small>

                  </div>

                  {/* Price */}

                  <div className="price-box">

                    <h2>
                      ₹
                      {Number(item.price).toLocaleString(
                        "en-IN"
                      )}
                    </h2>

                    <del>
                      ₹
                      {Number(
                        item.oldPrice ||
                        item.price + 300
                      ).toLocaleString("en-IN")}
                    </del>

                  </div>

                  <p className="stock">
                    ✅ In Stock
                  </p>

                  <div className="wishlist-buttons">

                    <button
                      className="cart-btn"
                      onClick={() =>
                        handleMoveToCart(item)
                      }
                    >
                      <FaShoppingCart />

                      Move To Cart

                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        removeFromWishlist(item.id)
                      }
                    >
                      <FaTrash />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div> 

      </section>

  );

};

export default Wishlist;    