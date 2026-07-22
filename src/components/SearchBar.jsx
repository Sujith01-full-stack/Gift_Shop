import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import products from "../data/products";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredProducts =
    searchTerm.trim() === ""
      ? []
      : products.filter((product) => {
          const keyword = searchTerm.toLowerCase();

          return (
            product.name.toLowerCase().includes(keyword) ||
            product.category.toLowerCase().includes(keyword)
          );
        });

  // Search Button / Enter Key
  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(
        `/products?search=${encodeURIComponent(
          searchTerm
        )}`
      );
      setSearchTerm("");
    }
  };

  return (
    <div className="searchbar">

      <div className="search-input-box">

        <FaSearch
          className="search-icon"
          onClick={handleSearch}
        />

        <input
          type="text"
          placeholder="Search gifts..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

      </div>

      {searchTerm.trim() !== "" && (
        <div className="search-results">

          {filteredProducts.length > 0 ? (
            filteredProducts
              .slice(0, 6)
              .map((product) => (
                <div
                  key={product.id}
                  className="search-item"
                  onClick={() => {
                    navigate(
                      `/product/${product.id}`
                    );
                    setSearchTerm("");
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <div className="search-info">
                    <h4>{product.name}</h4>

                    <p>{product.category}</p>

                    <span>
                      ₹{product.price}
                    </span>
                  </div>
                </div>
              ))
          ) : (
            <div className="no-result">
              No products found
            </div>
          )}

        </div>
      )}

    </div>
  );
};

export default SearchBar;