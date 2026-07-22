import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditProduct.css";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
    oldPrice: "",
    discount: "",
    rating: "",
    stock: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const products =
      JSON.parse(localStorage.getItem("products")) || [];

    const selectedProduct = products.find(
      (item) => item.id === Number(id)
    );

    if (selectedProduct) {
      setProduct(selectedProduct);
    } else {
      alert("Product not found");
      navigate("/admin/products");
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setProduct((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let products =
      JSON.parse(localStorage.getItem("products")) || [];

    products = products.map((item) =>
      item.id === Number(id)
        ? {
            ...product,
            id: Number(id),
            price: Number(product.price),
            oldPrice: Number(product.oldPrice),
            discount: Number(product.discount),
            rating: Number(product.rating),
            stock: Number(product.stock),
          }
        : item
    );

    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );

    alert("Product Updated Successfully");

    navigate("/admin/products");
  };

  return (
    <div className="edit-product-page">
      <div className="edit-product-card">

        <h2>Edit Product</h2>

        <form
          className="edit-form"
          onSubmit={handleSubmit}
        >
<input
  type="text"
  name="name"
  placeholder="Product Name"
  value={product.name}
  onChange={handleChange}
  required
/>

<input
  type="text"
  name="category"
  placeholder="Category"
  value={product.category}
  onChange={handleChange}
  required
/>

<input
  type="number"
  name="price"
  placeholder="Price"
  value={product.price}
  onChange={handleChange}
  required
/>

<input
  type="number"
  name="oldPrice"
  placeholder="Old Price"
  value={product.oldPrice}
  onChange={handleChange}
/>

<input
  type="number"
  name="discount"
  placeholder="Discount (%)"
  value={product.discount}
  onChange={handleChange}
/>

<input
  type="number"
  step="0.1"
  name="rating"
  placeholder="Rating"
  value={product.rating}
  onChange={handleChange}
/>

<input
  type="number"
  name="stock"
  placeholder="Stock"
  value={product.stock}
  onChange={handleChange}
/>

<textarea
  rows="5"
  name="description"
  placeholder="Description"
  value={product.description}
  onChange={handleChange}
/>

<input
  type="file"
  accept="image/*"
  onChange={handleImageChange}
/>

{product.image && (
  <img
    src={product.image}
    alt={product.name}
    className="image-preview"
  />
)}

<div className="button-group">

  <button
    type="submit"
    className="save-btn"
  >
    Update Product
  </button>

  <button
    type="button"
    className="cancel-btn"
    onClick={() =>
      navigate("/admin/products")
    }
  >
    Cancel
  </button>

</div>

        </form>

      </div>
    </div>
  );
};

export default EditProduct;