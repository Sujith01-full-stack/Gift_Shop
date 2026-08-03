import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";
import bannerImage from "../assets/images/Dp1.jpeg";

import {
  FaGlassWhiskey,
  FaImage,
  FaKey,
  FaCoffee,
  FaMobileAlt,
  FaWallet,
  FaPaintBrush,
  FaPiggyBank,
  FaGift,
  FaRegImage,
  FaLightbulb,
  FaIdCard,
  FaTags,
  FaPenFancy,
  FaEye,
} from "react-icons/fa";

const Banner = () => {

  const navigate = useNavigate();

  // Banner Offer
  const [offer, setOffer] = useState(
    "🎉 Flat 20% OFF on Selected Gifts"
  );

  // Banner Offer Image
  const [offerImage, setOfferImage] = useState("");

  useEffect(() => {

    const loadOffer = () => {

      const savedOffer =
        localStorage.getItem("bannerOffer");

      const savedImage =
        localStorage.getItem("bannerOfferImage");

      if (savedOffer && savedOffer.trim() !== "") {
        setOffer(savedOffer);
      } else {
        setOffer("🎉 Flat 20% OFF on Selected Gifts");
      }

      if (savedImage) {
        setOfferImage(savedImage);
      } else {
        setOfferImage("");
      }

    };

    loadOffer();

    window.addEventListener(
      "offerUpdated",
      loadOffer
    );

    return () => {
      window.removeEventListener(
        "offerUpdated",
        loadOffer
      );
    };

  }, []);

  const whatsappMessage = `Hi 👋,

I want to order gift items from Spider Gift Store.

🖼️ Photo Frames
🔑 Keychains
☕ Cup Print
📱 Mobile Cases
👛 Wallets
🎨 Resin Art
🐷 Money Box
🎁 Customized Gifts
🖼️ Acrylic Frames
💡 Mirror Light
💡 LED Mirror Light
💳 Wallet Card
🧴 Customized Bottle
🖼️ Customized Stand
📸 Polaroid
👁️ Custom Eyes Print
🏷️ School Label Sticker
🖊️ Engraved Metal Pen

Please share your catalog and price list.`;

return (
  <section className="banner">
    <div className="banner-overlay">

      {/* Left Content */}
      <div className="banner-content">

        {/* Dynamic Offer */}

        <div className="offer-tag">

          {offerImage && (
            <img
              src={offerImage}
              alt="Offer"
              className="offer-tag-image"
            />
          )}

          <span>{offer}</span>

        </div>

        <h1>
          Welcome to <span>Spider Gift Store</span>
        </h1>

        <p className="main-text">
          ❤️ Celebrate Every Moment with Personalized Gifts ❤️
        </p>

        <p className="sub-text">
          Create unforgettable memories with our premium customized
          gifts for your loved ones.
        </p>

        {/* Categories */}

        <div className="categories">

          <span><FaImage /> Photo Frames</span>

          <span><FaKey /> Keychains</span>

          <span><FaCoffee /> Cup Print</span>

          <span><FaMobileAlt /> Mobile Cases</span>

          <span><FaWallet /> Wallets</span>

          <span><FaPaintBrush /> Resin Art</span>

          <span><FaPiggyBank /> Money Box</span>

          <span><FaGift /> Customized Gifts</span>

          <span><FaRegImage /> Acrylic Frames</span>

          <span><FaLightbulb /> Mirror Light</span>

          <span><FaLightbulb /> LED Mirror Light</span>

          <span><FaIdCard /> Wallet Card</span>

          <span><FaGlassWhiskey /> Customized Bottle</span>

          <span><FaRegImage /> Customized Stand</span>

          <span><FaImage /> Polaroid</span>

          <span><FaEye /> Custom Eyes Print</span>

          <span><FaTags /> School Label Sticker</span>

          <span><FaPenFancy /> Engraved Metal Pen</span>

        </div>

        {/* Buttons */}

        <div className="banner-buttons">

          <button
            className="shop-btn"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>

          <a
            href={`https://wa.me/918300589035?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="whatsapp-btn">
              WhatsApp Order
            </button>
          </a>

        </div>

        {/* Features */}

        <div className="banner-features">

          <div>🚚 Pan India Shipping</div>

          <div>🎁 Customized Gifts</div>

          <div>⭐ Premium Quality</div>

        </div>

      </div>

      {/* Right Image */}

      <div className="banner-image">

        <img
          src={bannerImage}
          alt="Spider Gift Store"
        />

      </div>

    </div>
  </section>
);
};
export default Banner;