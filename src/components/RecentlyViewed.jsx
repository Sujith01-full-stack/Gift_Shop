import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHistory,
  FaEye,
  FaShoppingCart,
} from "react-icons/fa";

import "./RecentlyViewed.css";
import { useCart } from "../context/CartContext";

const RecentlyViewed = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const viewed =
      JSON.parse(localStorage.getItem("recentProducts")) || [];

    setProducts(viewed);
  }, []);

  return (
    <div className="recently-viewed">

      <div className="recent-header">
        <h2>
          <FaHistory />
          Recently Viewed
        </h2>
      </div>

      {products.length === 0 ? (
        <p>No recently viewed products.</p>
      ) : (
        <div className="recent-grid">

          {products.map((product) => (

            <div
              className="recent-card"
              key={product.id}
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <div className="recent-content">

                <p className="category">
                  {product.category}
                </p>

                <h3>{product.name}</h3>

                <h4>₹{product.price}</h4>

                <div className="recent-buttons">

                  {/* View Button */}
                  <button
                    className="view-btn"
                    onClick={() =>
                      navigate(`/product/${product.id}`)
                    }
                  >
                    <FaEye />
                    View
                  </button>

                  {/* Cart Button */}
                  <button
                    className="cart-btn"
                    onClick={() => {
                      addToCart({
                        ...product,
                        quantity: 1,
                      });

                      alert("Product added to cart!");
                    }}
                  >
                    <FaShoppingCart />
                    Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
};

export default RecentlyViewed;