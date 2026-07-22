import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import { FaHome, FaShoppingBag } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="notfound-page">
      <div className="notfound-container">

        <h1 className="error-code">404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for doesn't exist or has been moved.
        </p>

        <img
          src="https://illustrations.popsy.co/gray/web-error.svg"
          alt="404 Not Found"
        />

        <div className="notfound-buttons">
          <Link to="/">
            <button className="home-btn">
              <FaHome />
             🏠 Back to Home
            </button>
          </Link>

          <Link to="/products">
            <button className="shop-btn">
              <FaShoppingBag />
               🛍 Shop Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;