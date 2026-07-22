import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

import "./ProductCard.css";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const rating = product.rating || 4.8;
  const ratingCount = product.ratingCount || 125;

  const oldPrice =
    product.oldPrice ||
    Math.round(product.price * 1.25);

  const discount =
    product.discount ||
    Math.round(
      ((oldPrice - product.price) / oldPrice) * 100
    );

  return (
    <div className="product-card">

      {/* Discount */}
      <span className="discount-badge">
        {discount}% OFF
      </span>

      {/* Image */}
      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

        <button
          className="wishlist-btn"
          onClick={handleWishlist}
        >
          <FaHeart
            color={
              isInWishlist(product.id)
                ? "#ff3b6b"
                : "#ffffff"
            }
          />
        </button>

        <span className="product-category">
          {product.category}
        </span>

      </div>

      {/* Details */}
      <div className="product-details">

        <h3>{product.name}</h3>

        {/* Rating */}

        <div className="rating">

          <FaStar />

          <span>{rating}</span>

          <small>({ratingCount})</small>

        </div>

        {/* Price */}

        <div className="price-row">

          <div>

            <span className="price">
              ₹{product.price}
            </span>

            <span className="old-price">
              ₹{oldPrice}
            </span>

          </div>

          <span className="discount">
            {discount}% OFF
          </span>

        </div>

        <div className="product-divider"></div>

        {/* Buttons */}

        <div className="product-actions">

          <button
            className="cart-btn"
            onClick={() =>
              addToCart({
                ...product,
                quantity: 1,
              })
            }
          >
            <FaShoppingCart />

            Add to Cart

          </button>

          <Link
            to={`/product/${product.id}`}
            className="buy-btn"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;