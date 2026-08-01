
import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaStar,
  FaFileAlt,
} from "react-icons/fa";

import "./SearchResults.css";
import products from "../data/products";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

/* -----------------------------
   Searchable Pages
------------------------------ */

const pages = [
  {
    id: 1,
    title: "Terms & Conditions",
    description: "Read our terms and conditions.",
    url: "/terms",
  },
  {
    id: 2,
    title: "Privacy Policy",
    description: "Read our privacy policy.",
    url: "/privacy",
  },
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q") || "";

  const [results, setResults] = useState([]);
  const [pageResults, setPageResults] = useState([]);

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  useEffect(() => {
    if (!search.trim()) {
      setResults([]);
      setPageResults([]);
      return;
    }

    const filteredProducts = products.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    );

    const filteredPages = pages.filter(
      (page) =>
        page.title.toLowerCase().includes(search.toLowerCase()) ||
        page.description.toLowerCase().includes(search.toLowerCase())
    );

    setResults(filteredProducts);
    setPageResults(filteredPages);
  }, [search]);

  return (
    <div className="search-page">
      <div className="search-container">

        <div className="search-header">
          <h1>
            <FaSearch />
            Search Results
          </h1>

          <p>
            {results.length + pageResults.length} result
            {results.length + pageResults.length !== 1 && "s"} found for
            <strong> "{search}"</strong>
          </p>
        </div>

        {results.length === 0 && pageResults.length === 0 ? (

          <div className="empty-search">
            <FaSearch className="empty-icon" />

            <h2>No Results Found</h2>

            <p>Try another keyword.</p>

            <Link
              to="/products"
              className="browse-btn"
            >
              Browse Products
            </Link>

          </div>

        ) : (

          <>
            {/* PAGE RESULTS */}

            {pageResults.length > 0 && (
              <>

                <h2 className="page-title">
                  Pages
                </h2>

                <div className="page-results">

                  {pageResults.map((page) => (

                    <Link
                      key={page.id}
                      to={page.url}
                      className="page-card"
                    >
                      <FaFileAlt />

                      <div>

                        <h3>{page.title}</h3>

                        <p>{page.description}</p>

                      </div>

                    </Link>

                  ))}

                </div>

              </>
            )}

            {/* PRODUCT RESULTS */}

            {results.length > 0 && (
              <>
                <h2 className="page-title">
                  Products
                </h2>

                <div className="search-grid">

                  {results.map((product) => (

                    <div
                      className="search-card"
                      key={product.id}
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      <div className="search-content">

                        <p className="category">
                          {product.category}
                        </p>

                        <h3>{product.name}</h3>

                        <div className="rating">
                          <FaStar />
                          <span>
                            {product.rating || 4.8}
                          </span>
                        </div>

                        <h2>
                          ₹
                          {Number(product.price).toLocaleString("en-IN")}
                        </h2>

                        <div className="search-buttons">

                          <button
                            className="cart-btn"
                            onClick={() =>
                              addToCart({
                                ...product,
                                quantity: 1,
                              })
                            }
                          >
                            <FaShoppingCart />
                            Add to Cart
                          </button>

                          <button
                            className="wish-btn"
                            onClick={() =>
                              isInWishlist(product.id)
                                ? removeFromWishlist(product.id)
                                : addToWishlist(product)
                            }
                          >
                            <FaHeart
                              color={
                                isInWishlist(product.id)
                                  ? "red"
                                  : "white"
                              }
                            />
                          </button>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </>
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default SearchResults;