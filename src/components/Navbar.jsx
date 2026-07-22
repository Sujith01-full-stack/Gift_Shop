import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import SearchBar from "./SearchBar";

import {
  FaShoppingCart,
  FaHeart,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaHome,
  FaBoxOpen,
  FaInfoCircle,
  FaEnvelope,
  FaClipboardList,
  FaUserShield,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link
        to="/"
        className="logo"
        onClick={() => setMenuOpen(false)}
      >
        <span>Spider Gift Store</span>
      </Link>

      {/* Navigation */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
  <Link to="/" onClick={() => setMenuOpen(false)}>
    <FaHome className="nav-icon" />
    Home
  </Link>
</li>

<li>
  <Link
    to="/products"
    onClick={() => setMenuOpen(false)}
  >
    <FaBoxOpen className="nav-icon" />
    Products
  </Link>
</li>

<li>
  <Link
    to="/about"
    onClick={() => setMenuOpen(false)}
  >
    <FaInfoCircle className="nav-icon" />
    About
  </Link>
</li>

<li>
  <Link
    to="/contact"
    onClick={() => setMenuOpen(false)}
  >
    <FaEnvelope className="nav-icon" />
    Contact
  </Link>
</li>

<li>
  <Link
    to="/orders"
    onClick={() => setMenuOpen(false)}
  >
    <FaClipboardList className="nav-icon" />
    Orders
  </Link>
</li>

<li>
  <Link
    to="/admin"
    onClick={() => setMenuOpen(false)}
    className="admin-link"
  >
    <FaUserShield className="nav-icon" />
    Admin
  </Link>
</li>

      </ul>

      {/* Search */}
      <SearchBar />

      {/* Icons */}
      <div className="nav-icons">

        <Link
          to="/wishlist"
          title="Wishlist"
          onClick={() => setMenuOpen(false)}
        >
          <FaHeart />
          {wishlistCount > 0 && (
            <span className="badge">
              {wishlistCount}
            </span>
          )}
        </Link>

        <Link
          to="/cart"
          title="Cart"
          onClick={() => setMenuOpen(false)}
        >
          <FaShoppingCart />
          {cartCount > 0 && (
            <span className="badge">
              {cartCount}
            </span>
          )}
        </Link>

        <Link
          to="/profile"
          title="Profile"
          onClick={() => setMenuOpen(false)}
        >
          <FaUserCircle />
        </Link>

      </div>

      {/* Mobile Menu */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
};

export default Navbar;