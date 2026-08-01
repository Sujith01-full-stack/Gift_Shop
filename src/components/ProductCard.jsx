import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaEye,
} from "react-icons/fa";

import "./ProductCard.css";
import { toast } from "react-toastify";
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

      <span className="discount-badge">
        {discount}% OFF
      </span>

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
                : "#fff"
            }
          />
        </button>

        <span className="product-category">
          {product.category}
        </span>

      </div>

      <div className="product-details">

        <h3>{product.name}</h3>

        {/* Description */}

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

        <div className="product-actions">

          <button
  className="cart-btn"
  onClick={() => {

    addToCart({
      ...product,
      quantity: 1,
    });

    toast.success("🛒 Product Added to Cart", {
      position: "top-right",
      autoClose: 2000,
    });

  }}
>
  <FaShoppingCart />
  Add to Cart
</button>

          <Link
  to={`/product/${product.id}`}
  className="buy-btn"
>
  <FaEye />
  View Details
</Link>

        </div>

      </div>

    </div>

  );
};

export default ProductCard;