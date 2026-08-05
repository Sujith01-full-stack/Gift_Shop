import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaEye,
  FaSearchPlus,
} from "react-icons/fa";

import "./ProductCard.css";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import QuickViewModal from "./QuickViewModal";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const [showQuickView, setShowQuickView] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({});
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(
        2
      )}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s ease",
    });
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.info("💔 Removed from Wishlist", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      addToWishlist(product);
      toast.success("❤️ Added to Wishlist", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const rating = product.rating || 4.8;
  const ratingCount = product.ratingCount || 125;
  const oldPrice = product.oldPrice || Math.round(product.price * 1.25);
  const discount =
    product.discount ||
    Math.round(((oldPrice - product.price) / oldPrice) * 100);

  return (
    <>
      <div
        ref={cardRef}
        className="product-card tilt-card"
        style={tiltStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <span className="discount-badge">{discount}% OFF</span>

        <div className="product-image">
          <img src={product.image} alt={product.name} />

          {/* Quick View Floating Button */}
          <button
            className="quick-view-icon-btn"
            onClick={(e) => {
              e.stopPropagation();
              setShowQuickView(true);
            }}
            title="Quick View"
          >
            <FaSearchPlus />
            <span>Quick View</span>
          </button>

          <button
            className="wishlist-btn"
            onClick={handleWishlist}
            title="Wishlist"
          >
            <FaHeart
              color={isInWishlist(product.id) ? "#ff3b6b" : "#fff"}
            />
          </button>

          <span className="product-category">{product.category}</span>
        </div>

        <div className="product-details">
          <h3>{product.name}</h3>

          <p className="description">
            {product.description ||
              "Premium quality personalized gift for every special occasion."}
          </p>

          <div className="rating">
            <FaStar />
            <span>{rating}</span>
            <small>({ratingCount})</small>
          </div>

          <div className="price-row">
            <div>
              <span className="price">₹{product.price}</span>
              <span className="old-price">₹{oldPrice}</span>
            </div>
            <span className="discount">{discount}% OFF</span>
          </div>

          <div className="product-divider" />

          <div className="product-actions">
            <button
              className="cart-btn"
              onClick={() => {
                addToCart({ ...product, quantity: 1 });
                toast.success("🛒 Added to Cart", {
                  position: "top-right",
                  autoClose: 2000,
                });
              }}
            >
              <FaShoppingCart />
              Add to Cart
            </button>

            <button
              className="buy-btn"
              onClick={() => setShowQuickView(true)}
            >
              <FaEye />
              Quick Preview
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Quick View Modal */}
      {showQuickView && (
        <QuickViewModal
          product={product}
          onClose={() => setShowQuickView(false)}
        />
      )}
    </>
  );
};

export default ProductCard;