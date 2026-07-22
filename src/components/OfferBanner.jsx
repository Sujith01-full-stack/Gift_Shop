import React from "react";
import { Link } from "react-router-dom";
import "./OfferBanner.css";
import { FaWhatsapp, FaGift, FaTruck } from "react-icons/fa";

const OfferBanner = () => {
  return (
    <section className="offer-banner">
      <div className="offer-container">

        <div className="offer-content">

          <span className="offer-badge">
            🔥 LIMITED TIME OFFER
          </span>

          <h2>
            Flat <span>20% OFF</span>
            <br />
            Personalized Gifts
          </h2>

          <p>
            Celebrate every occasion with customized gifts.
            Use coupon <strong>SPIDER</strong> and get
            instant 20% OFF.
          </p>

          <div className="offer-features">
            <div>
              <FaGift />
              <span>Premium Quality</span>
            </div>

            <div>
              <FaTruck />
              <span>Delivery</span>
            </div>
          </div>

          <div className="coupon">
            Coupon Code :
            <strong> SPIDER</strong>
          </div>

          <div className="offer-buttons">

            <Link to="/products">
              <button className="shop-btn">
                Shop Now
              </button>
            </Link>

            <a
              href="https://wa.me/918300589035?text=Hi, I want to order personalized gifts."
              target="_blank"
              rel="noreferrer"
            >
              <button className="whatsapp-btn">
                <FaWhatsapp />
                WhatsApp Order
              </button>
            </a>

          </div>

        </div>

        <div className="offer-image">
          <img
            src="/src/assets/images/offer.jpg"
            alt="Offer Banner"
          />
        </div>

      </div>
    </section>
  );
};

export default OfferBanner;