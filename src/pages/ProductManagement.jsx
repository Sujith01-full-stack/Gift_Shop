import React, { useState, useEffect } from "react";
import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye,
  FaBoxOpen,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import defaultProducts from "../data/products";
import "./ProductManagement.css";

const ProductManagement = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    const adminProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    setProducts([...defaultProducts, ...adminProducts]);
  };

  const deleteProduct = (id) => {
    if (!window.confirm("Delete this product?")) return;

    const adminProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    const updatedProducts = adminProducts.filter(
      (item) => item.id !== id
    );

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

    loadProducts();
  };

  const filteredProducts = products.filter((item) => {
    const keyword = search.toLowerCase();

    return (
      item.name.toLowerCase().includes(keyword) ||
      item.category.toLowerCase().includes(keyword)
    );
  });

  const getStockClass = (stock) => {
    if (stock >= 20) return "stock-high";
    if (stock >= 10) return "stock-medium";
    return "stock-low";
  };

  return (
    <div className="product-management">

      <div className="product-header">

        <h2>
          <FaBoxOpen />
          Product Management
        </h2>

        <button
          className="add-btn"
          onClick={() => navigate("/admin/add-product")}
        >
          <FaPlus />
          Add Product
        </button>

      </div>

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <div className="table-container">

        <table>

          <thead>

            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {filteredProducts.length > 0 ? (
  filteredProducts.map((item) => (
    <tr key={item.id}>
      <td>
        <img
          src={
            item.image && !item.image.startsWith("blob:")
              ? item.image
              : "/images/no-image.png"
          }
          alt={item.name}
          className="product-image"
          onError={(e) => {
            e.target.src = "/images/no-image.png";
          }}
        />
      </td>

      <td>
        <div className="product-name">
          {item.name}
        </div>

        <div className="product-category">
          {item.description
            ? item.description.substring(0, 40) + "..."
            : "No Description"}
        </div>
      </td>

      <td>{item.category}</td>

      <td>
        <span className="price">
          ₹{item.price}
        </span>
      </td>

      <td>
        <span
          className={getStockClass(
            item.stock || 20
          )}
        >
          {item.stock || 20}
        </span>
      </td>

      <td>

        <div className="action-buttons">

          <button
            className="view-btn"
            title="View Product"
            onClick={() =>
              navigate(`/product/${item.id}`)
            }
          >
            <FaEye />
          </button>

          <button
  className="edit-btn"
  onClick={() =>
    navigate(`/admin/edit-product/${item.id}`)
  }
>
  <FaEdit />
</button>

          <button
            className="delete-btn"
            title="Delete Product"
            onClick={() =>
              deleteProduct(item.id)
            }
          >
            <FaTrash />
          </button>

        </div>

      </td>

    </tr>
  ))
) : (
  <tr>
    <td
      colSpan="6"
      style={{
        textAlign: "center",
        padding: "40px",
        color: "#9ca3af",
        fontSize: "18px",
      }}
    >
      No Products Found
    </td>
  </tr>
)}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ProductManagement;