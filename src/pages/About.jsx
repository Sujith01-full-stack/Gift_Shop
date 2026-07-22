import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import AboutImage from "../assets/images/About.jpg";

import {
  FaGift,
  FaPalette,
  FaShippingFast,
  FaAward,
  FaCreditCard,
  FaStar,
  FaHeadset,
  FaWhatsapp,
  FaInstagram,
  FaImage,
  FaKey,
  FaCoffee,
  FaMobileAlt,
  FaWallet,
  FaPaintBrush,
  FaPiggyBank,
  FaGem,
  FaLightbulb,
  FaIdCard,
  FaGlassWhiskey,
  FaRegImage,
} from "react-icons/fa";

const About = () => {

  const navigate = useNavigate();

const [email, setEmail] = useState("");

const handleSubscribe = () => {
  if (!email.trim()) {
    alert("Please enter your email.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert(`🎉 Thank you for subscribing!\n\n${email}`);

  setEmail("");
};

  return (

<section className="about">

<div className="about-container">

{/* ================= IMAGE ================= */}

<div className="about-image">

  <img
    src={AboutImage}
    alt="Spider Gift Store"
  />

</div>

{/* ================= CONTENT ================= */}

<div className="about-content">

<span className="about-tag">
✨ Premium Gift Store
</span>

<h1>

Welcome to

<span> Spider Gift Store</span>

</h1>

<p>

Spider Gift Store is one of India's trusted personalized
gift destinations.

We transform your beautiful memories into premium quality
customized gifts with creative designs.

</p>

<p>

From Birthday Gifts, Anniversary Gifts,
Wedding Frames, Couple Gifts, LED Frames,
Photo Clocks, Acrylic Gifts and many more,
every product is specially crafted with love.

</p>

<div className="about-buttons">

<button
className="about-btn"
onClick={() => navigate("/products")}
>

Explore Products

</button>

<button
className="about-btn-outline"
onClick={() => navigate("/contact")}
>

Contact Us

</button>

</div>

{/* ================= FEATURES ================= */}

<div className="about-features">

<div className="feature-card">

<FaGift className="feature-icon"/>

<div>

<h3>Customized Gifts</h3>

<p>

Personalized gifts with your
photos, names and messages.

</p>

</div>

</div>

<div className="feature-card">

<FaShippingFast className="feature-icon"/>

<div>

<h3>Fast Delivery</h3>

<p>

Safe & Fast Delivery
Across India.

</p>

</div>

</div>

<div className="feature-card">

<FaStar className="feature-icon"/>

<div>

<h3>Premium Quality</h3>

<p>

High Quality Printing
and Premium Finish.

</p>

</div>

</div>

<div className="feature-card">

<FaHeadset className="feature-icon"/>

<div>

<h3>24 / 7 Support</h3>

<p>

Friendly Customer Support
Whenever You Need.

</p>

</div>

</div>

</div>

</div>

</div>

      {/* ================= Statistics ================= */}

      <div className="about-stats">

        <div className="stat-box">
          <h2>5000+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-box">
          <h2>1000+</h2>
          <p>Custom Orders</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Gift Categories</p>
        </div>

        <div className="stat-box">
          <h2>4.9★</h2>
          <p>Customer Rating</p>
        </div>

      </div>

      {/* ================= Why Choose Us ================= */}

      <div className="why-us">

        <h2>Why Choose Spider Gift Store?</h2>

        <div className="why-grid">

          <div className="why-card">
            <FaPalette className="why-icon" />
            <h3>Personalized Designs</h3>
            <p>Every product is uniquely crafted based on your memories.</p>
          </div>

          <div className="why-card">
            <FaShippingFast className="why-icon" />
            <h3>Fast Shipping</h3>
            <p>Quick delivery with secure packaging across India.</p>
          </div>

          <div className="why-card">
            <FaAward className="why-icon" />
            <h3>Premium Quality</h3>
            <p>HD printing with premium finishing and long-lasting quality.</p>
          </div>

          <div className="why-card">
            <FaCreditCard className="why-icon" />
            <h3>Secure Payments</h3>
            <p>100% safe and trusted online payment methods.</p>
          </div>

        </div>

      </div>

      {/* ================= Mission ================= */}

      <div className="mission">

        <h2>Our Mission</h2>

        <p>

          Our mission is to create unforgettable memories through
          personalized gifts that bring happiness, love and emotions
          to every celebration.

        </p>

      </div>

      {/* ================= Customer Reviews ================= */}

      <div className="reviews">

        <h2>Customer Reviews</h2>

        <div className="review-grid">

          <div className="review-card">

            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>

            <p>
              Amazing quality photo frame.
              Highly recommended for everyone.
            </p>

            <h4>— Aathira</h4>

          </div>

          <div className="review-card">

            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>

            <p>
              Fast delivery with beautiful customization.
              Loved the product.
            </p>

            <h4>— Ovia</h4>

          </div>

          <div className="review-card">

            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>

            <p>
              Premium quality products and friendly customer support.
            </p>

            <h4>— Jani</h4>

          </div>

        </div>

      </div>

      {/* ================= Products ================= */}

      <div className="categories-section-about">

        <h2>Our Products</h2>

        <div className="category-tags">

          <span><FaImage /> Photo Frames</span>

          <span><FaKey /> Keychains</span>

          <span><FaCoffee /> Cup Print</span>

          <span><FaMobileAlt /> Mobile Cases</span>

          <span><FaWallet /> Wallets</span>

          <span><FaPaintBrush /> Resin Art</span>

          <span><FaPiggyBank /> Money Box</span>

          <span><FaGem /> Acrylic Frames</span>

          <span><FaLightbulb /> LED Mirror Light</span>

          <span><FaIdCard /> Wallet Card</span>

          <span><FaGlassWhiskey /> Customized Bottle</span>

          <span><FaRegImage /> Customized Stand</span>

          <span><FaImage /> Polaroid</span>

        </div>

      </div>

      {/* ================= CTA ================= */}

      <div className="about-cta">

        <h2>Create Beautiful Memories Today</h2>

        <p>
          Surprise your loved ones with premium personalized gifts.
        </p>

        <button
          className="about-btn"
          onClick={() => navigate("/products")}
        >
          Explore Products
        </button>

      </div>

      {/* ================= Newsletter ================= */}

      <div className="newsletter">

  <h2>Subscribe Our Newsletter</h2>

  <p>
    Get updates about exclusive offers,
    new arrivals and premium collections.
  </p>

  <div className="newsletter-box">

    <input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <button
      type="button"
      onClick={handleSubscribe}
    >
      Subscribe
    </button>

  </div>

</div>

      {/* ================= Social ================= */}

      <div className="social-section">

        <h2>Follow Us</h2>

        <div className="social-links">

          <a
            href="https://www.instagram.com/spider_gift_store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/918300589035"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

        </div>

      </div>

    </section>

  );

};

export default About;