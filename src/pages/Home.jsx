import React, { useState } from "react";
import "./Home.css";

import Banner from "../components/Banner";
import Categories from "../components/Categories";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import OfferBanner from "../components/OfferBanner";
import WhatsAppButton from "../components/WhatsAppButton";

import productsData from "../data/products";

import {
  FaGift,
  FaShippingFast,
  FaStar,
  FaHeadset,
  FaQuoteLeft,
  FaEnvelope,
} from "react-icons/fa";

const Home = () => {
  const [products, setProducts] = useState(productsData);

  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    const subscribers =
      JSON.parse(localStorage.getItem("newsletter")) || [];

    subscribers.push({
      email,
      subscribedAt: new Date().toLocaleString(),
    });

    localStorage.setItem(
      "newsletter",
      JSON.stringify(subscribers)
    );

    alert("🎉 Thank you for subscribing!");

    setEmail("");
  };

  return (
    <>
      {/* Banner */}
      <Banner />

      {/* Categories */}
      <Categories />

      {/* Search */}
      <div className="home-search">
        <SearchBar
          products={productsData}
          onSearch={setProducts}
        />
      </div>

      {/* Featured Products */}
      <section className="products-section">

        <div className="container">

          <h2 className="section-title">
            Featured Products
          </h2>

          <p className="section-subtitle">
            Personalized gifts made with love ❤️
          </p>

          <div className="products-grid">

            {products.length > 0 ? (

              products.map((product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              ))

            ) : (

              <h2 className="no-products">

                No Products Found

              </h2>

            )}

          </div>

        </div>

      </section>

      {/* Offer Banner */}

      <OfferBanner />

      {/* Best Selling */}

      <section className="products-section">

        <div className="container">

          <h2 className="section-title">

            Best Selling Gifts

          </h2>

          <p className="section-subtitle">

            Most Loved Products

          </p>

          <div className="products-grid">

            {productsData
              .slice(0, 4)
              .map((product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              ))}

          </div>

        </div>

      </section>

      {/* New Arrivals */}

      <section className="products-section">

        <div className="container">

          <h2 className="section-title">

            New Arrivals

          </h2>

          <p className="section-subtitle">

            Fresh Collections Just For You

          </p>

          <div className="products-grid">

            {productsData
              .slice(4, 8)
              .map((product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              ))}

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="features-section">

        <h2 className="section-title">

          Why Choose <span>Spider Gift Store?</span>

        </h2>

        <div className="features-grid">

          <div className="feature-card">

            <FaGift className="feature-icon"/>

            <h3>Unique Gifts</h3>

            <p>

              Customized gifts for every celebration.

            </p>

          </div>

          <div className="feature-card">

            <FaShippingFast className="feature-icon"/>

            <h3>Fast Delivery</h3>

            <p>

              Quick and secure delivery across India.

            </p>

          </div>

          <div className="feature-card">

            <FaStar className="feature-icon"/>

            <h3>Premium Quality</h3>

            <p>

              High-quality products with great finishing.

            </p>

          </div>

          <div className="feature-card">

            <FaHeadset className="feature-icon"/>

            <h3>24/7 Support</h3>

            <p>

              Friendly customer support anytime.

            </p>

          </div>

        </div>

      </section>

      {/* Customer Reviews */}

      <section className="testimonial-section">

        <h2 className="section-title">

          Customer Reviews

        </h2>

        <div className="testimonial-grid">

          <div className="testimonial-card">

            <FaQuoteLeft className="quote"/>

            <div className="stars">

              ⭐⭐⭐⭐⭐

            </div>

            <p>

              Beautiful gifts and excellent service.

            </p>

            <h4>

              – Ovia

            </h4>

          </div>

          <div className="testimonial-card">

            <FaQuoteLeft className="quote"/>

            <div className="stars">

              ⭐⭐⭐⭐⭐

            </div>

            <p>

              Fast delivery and amazing quality.

            </p>

            <h4>

              – Aathira

            </h4>

          </div>

          <div className="testimonial-card">

            <FaQuoteLeft className="quote"/>

            <div className="stars">

              ⭐⭐⭐⭐⭐

            </div>

            <p>

              Highly recommended for personalized gifts.

            </p>

            <h4>

              – Jani mon

            </h4>

          </div>

        </div>

      </section>

      {/* Newsletter */}

      <section className="newsletter">

        <div className="newsletter-card">

          <div className="newsletter-icon">

            <FaEnvelope/>

          </div>

          <div className="newsletter-content">

            <h2>

              Subscribe to Our Newsletter

            </h2>

            <p>

              Get updates on offers and new arrivals.

            </p>

            <div className="newsletter-box">

              <input

                type="email"

                placeholder="Enter your email address"

                value={email}

                onChange={(e)=>setEmail(e.target.value)}

              />

              <button

                onClick={handleSubscribe}

              >

                Subscribe

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* WhatsApp */}

      <WhatsAppButton/>

    </>
  );
};

export default Home;