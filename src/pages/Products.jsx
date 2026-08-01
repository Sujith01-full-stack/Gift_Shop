import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaEye,
} from "react-icons/fa";
import { toast } from "react-toastify";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";
import "./Products.css";

const Products = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const params = new URLSearchParams(search);

  const category = params.get("category") || "";
  const keyword = params.get("search") || "";

  // LocalStorage Products
  const localProducts =
    JSON.parse(localStorage.getItem("products")) || [];

  // Merge Products
  const allProducts = [...products, ...localProducts];

  let filteredProducts = [...allProducts];

  // Category Filter
  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.category?.toLowerCase().trim() ===
        category.toLowerCase().trim()
    );
  }

  // Search Filter
  if (keyword) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name
          ?.toLowerCase()
          .includes(keyword.toLowerCase()) ||
        product.category
          ?.toLowerCase()
          .includes(keyword.toLowerCase())
    );
  }

  return (
    <div className="products-page">

      <div className="products-header">
        <h2 className="page-title">
          {keyword
            ? `Search : ${keyword}`
            : category
            ? category
            : "All Products"}
        </h2>

        <p className="page-subtitle">
          {filteredProducts.length} Products Available
        </p>
      </div>

      <div className="products-grid">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => {

            const discount = product.oldPrice
              ? Math.round(
                  ((product.oldPrice - product.price) /
                    product.oldPrice) *
                    100
                )
              : 0;

            return (

              <div
                className="product-card"
                key={product.id}
                onClick={() =>
                  navigate(`/product/${product.id}`)
                }
              >

                {product.oldPrice && (
                  <span className="discount">
                    {discount}% OFF
                  </span>
                )}

                <button
  className="wishlist"
  onClick={(e) => {
    e.stopPropagation();

    addToWishlist(product);

    toast.success("❤️ Added to Wishlist", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });
  }}
>
  <FaHeart />
</button>

                {/* Product Image */}

                <div className="product-image">

                  <img
                    src={
                      product.image
                        ? product.image
                        : "/images/no-image.png"
                    }
                    alt={product.name}
                    loading="lazy"
                  />

                  <div className="category">
                    {product.category}
                  </div>

                </div>

                <div className="product-content">

                  <h3>{product.name}</h3>

                 <p className="description">
  {product.description || "Premium Customized Gift"}
</p>

                  <div className="rating">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} />
                    ))}

                    <span className="rating-value">
                      {product.rating || 4.8}
                    </span>

                    <small className="rating-count">
                      ({product.reviews || 125})
                    </small>

                  </div>

                  <div className="price-box">

                    <div>

                      <span className="price">
                        ₹{product.price}
                      </span>

                      {product.oldPrice && (
                        <span className="old-price">
                          ₹{product.oldPrice}
                        </span>
                      )}

                    </div>

                  </div>

                  <div className="product-divider"></div>

                  <div className="product-buttons">

                    <button
  className="cart-btn"
  onClick={(e) => {
    e.stopPropagation();

    addToCart({
      ...product,
      quantity: 1,
    });

    toast.success("🛒 Product Added to Cart", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });
  }}
>
  <FaShoppingCart />
  Add to Cart
</button>

                    <button
                      className="buy-btn"
                      onClick={(e) => {
                        e.stopPropagation();

                        addToCart({
                          ...product,
                          quantity: 1,
                        });

                        navigate("/checkout");
                      }}
                    >
                      Buy Now
                    </button>

                  </div>

                  <button
                    className="details-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.id}`);
                    }}
                  >
                    <FaEye />
                    View Details
                  </button>

                </div>

              </div>

            );

          })

        ) : (

          <div className="no-products">

            <img
              src="/images/no-image.png"
              alt="No Products"
            />

            <h3>No Products Found 😔</h3>

            <p>
              Try another category or search keyword.
            </p>

          </div>

        )}

      </div>

    </div>
  );
};

export default Products;