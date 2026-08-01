import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

import {
  FaGift,
  FaLink,
  FaThLarge,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,

  FaInstagram,
  FaWhatsapp,

  FaChevronRight,

  FaImage,
  FaKey,
  FaCoffee,
  FaMobileAlt,
  FaWallet,
  FaPaintBrush,
  FaPiggyBank,
  FaRegImage,
  FaLightbulb,
  FaIdCard,
  FaGlassWhiskey,
  FaEye,
  FaTags,
  FaPenFancy,

} from "react-icons/fa";

const Footer = () => {

  const navigate = useNavigate();

  const year = new Date().getFullYear();

return(

<footer className="footer">

<div className="footer-container">

{/* ================= COMPANY ================= */}

<div className="footer-section">

<div className="footer-heading">

<div className="heading-icon">

<FaGift/>

</div>

<h2>

Spider Gift Store

</h2>

</div>

<div className="heading-line"></div>

<p>

We create unique and personalized gifts for every
special occasion.

<br/><br/>

Make your memories unforgettable with our premium
customized products.

</p>

<div className="social-icons">

<a
href="https://www.instagram.com/spider_gift_store"
target="_blank"
rel="noreferrer">

<FaInstagram/>

</a>

<a
href="https://wa.me/918300589035"
target="_blank"
rel="noreferrer">

<FaWhatsapp/>

</a>

</div>

</div>

{/* ================= QUICK LINKS ================= */}

<div className="footer-section">

  <div className="footer-heading">

    <div className="heading-icon">
      <FaLink />
    </div>

    <h3>Quick Links</h3>

  </div>

  <div className="heading-line"></div>

  <ul className="footer-links">

    <li>
      <button
        className="footer-nav-btn"
        onClick={() => navigate("/")}
      >
        <FaChevronRight />
        <span>Home</span>
      </button>
    </li>

    <li>
      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products")}
      >
        <FaChevronRight />
        <span>Products</span>
      </button>
    </li>

    <li>
      <button
        className="footer-nav-btn"
        onClick={() => navigate("/wishlist")}
      >
        <FaChevronRight />
        <span>Wishlist</span>
      </button>
    </li>

    <li>
      <button
        className="footer-nav-btn"
        onClick={() => navigate("/cart")}
      >
        <FaChevronRight />
        <span>Cart</span>
      </button>
    </li>

    <li>
      <button
        className="footer-nav-btn"
        onClick={() => navigate("/orders")}
      >
        <FaChevronRight />
        <span>Orders</span>
      </button>
    </li>

    <li>
      <button
        className="footer-nav-btn"
        onClick={() => navigate("/contact")}
      >
        <FaChevronRight />
        <span>Contact</span>
      </button>
    </li>

    <li>
      <button
        className="footer-nav-btn"
        onClick={() => navigate("/about")}
      >
        <FaChevronRight />
        <span>About Us</span>
      </button>
    </li>

    <li>
      <button
        className="footer-nav-btn"
        onClick={() => navigate("/faq")}
      >
        <FaChevronRight />
        <span>FAQ</span>
      </button>
    </li>

    <li>
      <button
        className="footer-nav-btn"
        onClick={() => navigate("/terms")}
      >
        <FaChevronRight />
        <span>Terms & Conditions</span>
      </button>
    </li>

    <li>
      <button
        className="footer-nav-btn"
        onClick={() => navigate("/privacy")}
      >
        <FaChevronRight />
        <span>Privacy Policy</span>
      </button>
    </li>

  </ul>

</div>

{/* ================= CATEGORIES ================= */}

<div className="footer-section">

  <div className="footer-heading">

    <div className="heading-icon">
      <FaThLarge />
    </div>

    <h3>Categories</h3>

  </div>

  <div className="heading-line"></div>

  <div className="category-grid">

    {/* LEFT */}

    <div className="category-column">

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=Photo Frames")}
      >
        <FaImage />
        Photo Frames
      </button>

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=Keychains")}
      >
        <FaKey />
        Keychains
      </button>

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=Cup Printing")}
      >
        <FaCoffee />
        Cup Printing
      </button>

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=Mobile Cases")}
      >
        <FaMobileAlt />
        Mobile Cases
      </button>

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=Wallets")}
      >
        <FaWallet />
        Wallets
      </button>

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=Resin Art")}
      >
        <FaPaintBrush />
        Resin Art
      </button>

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=Money Box")}
      >
        <FaPiggyBank />
        Money Box
      </button>

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=Customized Gifts")}
      >
        <FaGift />
        Customized Gifts
      </button>

    </div>

    {/* RIGHT */}

    <div className="category-column">

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=Acrylic Frames")}
      >
        <FaRegImage />
        Acrylic Frames
      </button>

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=Mirror Light")}
      >
        <FaLightbulb />
        Mirror Light
      </button>

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=LED Mirror Light")}
      >
        <FaLightbulb />
        LED Mirror Light
      </button>

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=Wallet Card")}
      >
        <FaIdCard />
        Wallet Card
      </button>

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=Customized Bottle")}
      >
        <FaGlassWhiskey />
        Customized Bottle
      </button>

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=Customized Stand")}
      >
        <FaRegImage />
        Customized Stand
      </button>

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=Polaroid")}
      >
        <FaImage />
        Polaroid
      </button>

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=Custom Eyes Print")}
      >
        <FaEye />
        Custom Eyes Print
      </button>

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=School Label Sticker")}
      >
        <FaTags />
        School Label Sticker
      </button>

      <button
        className="footer-nav-btn"
        onClick={() => navigate("/products?category=Engraved Metal Pen")}
      >
        <FaPenFancy />
        Engraved Metal Pen
      </button>

    </div>

  </div>

</div>

{/* ================= CONTACT ================= */}

<div className="footer-section">

    <div className="footer-heading">

        <div className="heading-icon">
            <FaPhoneAlt />
        </div>

        <h3>Contact Us</h3>

    </div>

    <div className="heading-line"></div>

    <div className="contact-box">

        <div className="contact-item">

            <div className="contact-icon">
                <FaPhoneAlt />
            </div>

            <span>+91 83005 89035</span>

        </div>

        <div className="contact-item">

            <div className="contact-icon">
                <FaEnvelope />
            </div>

            <span>spiderframegallery@gmail.com</span>

        </div>

        <div className="contact-item">

            <div className="contact-icon">
                <FaMapMarkerAlt />
            </div>

            <span>Veeyanoor, Tamil Nadu, India</span>

        </div>

    </div>

</div>

</div>

{/* ================= FOOTER BOTTOM ================= */}

<div className="footer-bottom">

    <div className="bottom-line"></div>

    <p>

        © {year} Spider Gift Store • Made with ❤️ in India

    </p>

    <div className="bottom-line"></div>

</div>

</footer>

);

};

export default Footer;