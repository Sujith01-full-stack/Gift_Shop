import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import "./ProductDetails.css";

import {
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaWhatsapp,
  FaMinus,
  FaPlus,
  FaTruck,
  FaShieldAlt,
  FaBoxOpen,
  FaTag,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  // Products added from Admin
  const localProducts =
    JSON.parse(localStorage.getItem("products")) || [];

  // Merge default products + admin products
  const allProducts = [...products, ...localProducts];

  // Find product
  const product = allProducts.find(
    (item) => Number(item.id) === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: 50 }}>
        Product Not Found
      </h2>
    );
  }

  useEffect(() => {
    let viewed =
      JSON.parse(localStorage.getItem("recentProducts")) || [];

    viewed = viewed.filter((p) => p.id !== product.id);
    viewed.unshift(product);
    viewed = viewed.slice(0, 8);

    localStorage.setItem(
      "recentProducts",
      JSON.stringify(viewed)
    );
  }, [product]);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    });

    alert("Product added to cart!");
  };

  const handleBuyNow = () => {
  const customer =
    JSON.parse(localStorage.getItem("currentCustomer")) || {
      name: "Guest User",
      email: "guest@gmail.com",
      phone: "-",
      city: "-",
      payment: "Cash on Delivery",
    };

  const order = {
  id: "#ORD" + Date.now(),

  customer: {
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    city: "Chennai",
    payment: "Cash on Delivery",
  },

  product: product.name,
  image: product.image,
  price: product.price,
  quantity,
  status: "Pending",
  date: new Date().toLocaleDateString("en-IN"),
};

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  orders.push(order);

  localStorage.setItem("orders", JSON.stringify(orders));

  navigate("/orders");
};

  return (
    <div className="product-details-page">

      <div className="product-details-container">

        {/* LEFT SIDE */}

       <div className="product-gallery">

  <div className="product-image-card">

    <img
  src={
    product.image
      ? product.image
      : "/images/no-image.png"
  }
  alt={product.name}
  className="main-product-image"
  onError={(e) => {
    e.target.src = "/images/no-image.png";
  }}
/>

    <div className="premium-badge">
      ⭐ Premium Quality
    </div>

  </div>

  <div className="gallery-buttons">

    <button
      className="cart-btn"
      onClick={handleAddToCart}
    >
      <FaShoppingCart />
      Add To Cart
    </button>

    <button
      className="buy-btn"
      onClick={handleBuyNow}
    >
      ⚡ Buy Now
    </button>

  </div>

  <a
    href={`https://wa.me/918300589035?text=${encodeURIComponent(
      `Hi, I want to order:

Product: ${product.name}
Price: ₹${product.price}
Quantity: ${quantity}`
    )}`}
    target="_blank"
    rel="noreferrer"
    className="whatsapp-order"
  >
    <FaWhatsapp />
    Order on WhatsApp
  </a>

</div>

        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="product-info">

          <div className="top-badges">

            {product.oldPrice && (
              <span className="offer-badge">
                {Math.round(
                  ((product.oldPrice - product.price) /
                    product.oldPrice) *
                    100
                )}% OFF
              </span>
            )}

            <span className="category-badge">
              <FaTag />
              {product.category}
            </span>

            <button
              className="wishlist-circle"
              onClick={() => {
                addToWishlist(product);
                alert("Added to Wishlist ❤️");
              }}
            >
              <FaHeart />
            </button>

          </div>

          <h1 className="product-title">
            {product.name}
          </h1>

          <div className="rating-row">

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <span>{product.rating}</span>

            <small>
              ({product.reviews} Reviews)
            </small>

            <span className="best-seller">
              🏆 Best Seller
            </span>

          </div>

          <div className="price-box">

            <span className="price">
              ₹{product.price}
            </span>

            {product.oldPrice && (
              <span className="old-price">
                ₹{product.oldPrice}
              </span>
            )}

          </div>

          <p className="tax-text">
            Inclusive of all taxes
          </p>

          <div className="highlight-card">

            <h3>
              ✨ Customized Photo Frame
            </h3>

            <p>
              Make your memories more special with
              our premium quality photo frames.
            </p>

          </div>
                    {/* Description */}

          <div className="description-box">

            <h3>Description</h3>

            <p>
              {product.description}
            </p>

          </div>

          {/* Quantity */}

          <div className="quantity-section">

            <h3>Quantity</h3>

            <div className="quantity-box">

              <button
                onClick={() =>
                  quantity > 1 &&
                  setQuantity(quantity - 1)
                }
              >
                <FaMinus />
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
              >
                <FaPlus />
              </button>

            </div>

          </div>

          {/* Delivery Information */}

          <div className="delivery-card">

  <h3>
    <FaTruck />
    Delivery Information
  </h3>

  <div className="delivery-item">
    <FaBoxOpen className="delivery-icon" />
    <div>
      <h4>Delivery</h4>
      <p>Estimated Delivery in <strong>3 - 5 Working Days</strong></p>
    </div>
  </div>

  <div className="delivery-item">
    <span className="delivery-icon">💳</span>
    <div>
      <h4>Delivery Amount <strong>Rs : 100</strong></h4>
      <p>Pay after your order is delivered.</p>
    </div>
  </div>

  <div className="delivery-item">
    <FaShieldAlt className="delivery-icon" />
    <div>
      <h4>100% Secure Payment</h4>
      <p>SSL Encrypted & Trusted Payment Gateway.</p>
    </div>
  </div>

  <div className="delivery-item">
    <span className="delivery-icon">🔄</span>
    <div>
      <h4>Easy Replacement</h4>
      <p>7 Days Hassle-Free Replacement Policy.</p>
    </div>
  </div>

</div>
        </div>

      </div>

    </div>

  );

};

export default ProductDetails;
