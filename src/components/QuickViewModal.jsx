import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaTimes,
  FaShoppingCart,
  FaHeart,
  FaStar,
  FaWhatsapp,
  FaGift,
  FaCheckCircle,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import "./QuickViewModal.css";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { toast } from "react-toastify";

const QuickViewModal = ({ product, onClose }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const [quantity, setQuantity] = useState(1);
  const [customText, setCustomText] = useState("");
  const [giftWrap, setGiftWrap] = useState(false);

  if (!product) return null;

  const rating = product.rating || 4.8;
  const ratingCount = product.ratingCount || 125;
  const oldPrice = product.oldPrice || Math.round(product.price * 1.25);
  const discount =
    product.discount ||
    Math.round(((oldPrice - product.price) / oldPrice) * 100);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      customText,
      giftWrap,
    });

    toast.success(`🛒 Added ${quantity} × ${product.name} to Cart`, {
      position: "top-right",
      autoClose: 2000,
    });
    onClose();
  };

  const handleBuyNow = () => {
    addToCart({
      ...product,
      quantity,
      customText,
      giftWrap,
    });
    onClose();
    navigate("/checkout");
  };

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.info("💔 Removed from Wishlist");
    } else {
      addToWishlist(product);
      toast.success("❤️ Added to Wishlist");
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Spider Gift Store, I want to order:\n\n*${product.name}*\nPrice: ₹${product.price}\nQuantity: ${quantity}\n${
      customText ? `Customization: ${customText}\n` : ""
    }${giftWrap ? `Gift Wrapping: Yes\n` : ""}\nPlease confirm my order!`
  );

  return (
    <div className="quickview-overlay" onClick={onClose}>
      <div
        className="quickview-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button className="modal-close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="quickview-grid">
          {/* Image Showcase with Glassmorphism */}
          <div className="quickview-image-container">
            <span className="quickview-badge">{discount}% OFF</span>
            <img
              src={product.image}
              alt={product.name}
              className="quickview-image"
            />
            <div className="quickview-glow" />
          </div>

          {/* Details Section */}
          <div className="quickview-details">
            <div className="category-tag-row">
              <span className="category-pill">{product.category}</span>
              <span className="stock-badge">
                <FaCheckCircle /> In Stock
              </span>
            </div>

            <h2 className="quickview-title">{product.name}</h2>

            <div className="quickview-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="rating-num">{rating}</span>
              <span className="rating-count">({ratingCount} reviews)</span>
            </div>

            <div className="quickview-price-box">
              <span className="current-price">₹{product.price}</span>
              <span className="original-price">₹{oldPrice}</span>
              <span className="savings-tag">
                Save ₹{oldPrice - product.price}
              </span>
            </div>

            <p className="quickview-desc">
              {product.description ||
                "Premium personalized Spider Gift Store item, expertly crafted for your special celebrations and milestones."}
            </p>

            {/* Live Customization Option */}
            <div className="customization-box">
              <label htmlFor="custom-text">
                <FaGift /> Personalization Text (Optional):
              </label>
              <input
                id="custom-text"
                type="text"
                placeholder="Enter Name / Date / Message..."
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
              />
            </div>

            {/* Gift Wrap Checkbox */}
            <label className="giftwrap-label">
              <input
                type="checkbox"
                checked={giftWrap}
                onChange={(e) => setGiftWrap(e.target.checked)}
              />
              <span>Add Premium Gift Wrapping (+₹49)</span>
            </label>

            {/* Quantity Selector */}
            <div className="quantity-row">
              <span className="qty-label">Quantity:</span>
              <div className="qty-controls">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <FaMinus />
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <FaPlus />
                </button>
              </div>

              <button
                className={`modal-wishlist-btn ${
                  isInWishlist(product.id) ? "active" : ""
                }`}
                onClick={handleWishlist}
                title="Wishlist"
              >
                <FaHeart />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="quickview-actions">
              <button
                className="modal-cart-btn"
                onClick={handleAddToCart}
              >
                <FaShoppingCart /> Add to Cart
              </button>

              <button className="modal-buy-btn" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>

            <a
              href={`https://wa.me/918300589035?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-whatsapp-btn"
            >
              <FaWhatsapp /> Order on WhatsApp
            </a>

            <div className="view-full-details-link">
              <Link to={`/product/${product.id}`} onClick={onClose}>
                View Full Details Page →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
