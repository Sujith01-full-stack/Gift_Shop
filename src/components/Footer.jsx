import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import{
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

const Footer=()=>{

const year=new Date().getFullYear();

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

<FaLink/>

</div>

<h3>

Quick Links

</h3>

</div>

<div className="heading-line"></div>

<ul className="footer-links">

<li>

<Link to="/">

<FaChevronRight/>

Home

</Link>

</li>

<li>

<Link to="/products">

<FaChevronRight/>

Products

</Link>

</li>

<li>

<Link to="/wishlist">

<FaChevronRight/>

Wishlist

</Link>

</li>

<li>

<Link to="/cart">

<FaChevronRight/>

Cart

</Link>

</li>

<li>

<Link to="/contact">

<FaChevronRight/>

Contact

</Link>

</li>

<li>

<Link to="/about">

<FaChevronRight/>

About Us

</Link>

</li>

<li>

<Link to="/faq">

<FaChevronRight/>

FAQ

</Link>

</li>

<li>

<Link to="/terms">

<FaChevronRight/>

Terms & Conditions

</Link>

</li>

<li>

<Link to="/privacy">

<FaChevronRight/>

Privacy Policy

</Link>

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

        <div className="category-column">

            <Link to="/products"><FaImage /> Photo Frames</Link>

            <Link to="/products"><FaKey /> Keychains</Link>

            <Link to="/products"><FaCoffee /> Cup Printing</Link>

            <Link to="/products"><FaMobileAlt /> Mobile Cases</Link>

            <Link to="/products"><FaWallet /> Wallets</Link>

            <Link to="/products"><FaPaintBrush /> Resin Art</Link>

            <Link to="/products"><FaPiggyBank /> Money Box</Link>

            <Link to="/products"><FaGift /> Customized Gifts</Link>

        </div>

        <div className="category-column">

            <Link to="/products"><FaRegImage /> Acrylic Frames</Link>

            <Link to="/products"><FaLightbulb /> Mirror Light</Link>

            <Link to="/products"><FaLightbulb /> LED Mirror Light</Link>

            <Link to="/products"><FaIdCard /> Wallet Card</Link>

            <Link to="/products"><FaGlassWhiskey /> Customized Bottle</Link>

            <Link to="/products"><FaRegImage /> Customized Stand</Link>

            <Link to="/products"><FaImage /> Polaroid</Link>

            <Link to="/products"><FaEye /> Custom Eyes Print</Link>

            <Link to="/products"><FaTags /> School Label Sticker</Link>

            <Link to="/products"><FaPenFancy /> Engraved Metal Pen</Link>

            

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