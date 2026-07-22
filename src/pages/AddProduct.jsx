import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    oldPrice: "",
    discount: "",
    rating: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Image Upload (Base64)
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setProduct((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.image) {
      alert("Please Select Product Image");
      return;
    }

    const existingProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    const newProduct = {
      id: Date.now(),
      name: product.name,
      category: product.category,
      price: Number(product.price),
      oldPrice: Number(product.oldPrice),
      discount: Number(product.discount),
      rating: Number(product.rating),
      image: product.image,
      description: product.description,
      reviews: 125,
      stock: 20,
    };

    existingProducts.push(newProduct);

    localStorage.setItem(
      "products",
      JSON.stringify(existingProducts)
    );

    alert("Product Added Successfully!");

    setProduct({
      name: "",
      category: "",
      price: "",
      oldPrice: "",
      discount: "",
      rating: "",
      image: "",
      description: "",
    });
  };

  return (
    <div className="add-product-page">
      <div className="add-product-container">
        <h1>Add New Product</h1>

        <p>Create a new product for your Spider Gift Store.</p>

        <form onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="form-group">
            <label>Product Name</label>

            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter product name"
              required
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>

              <option>Photo Frames</option>
              <option>Keychains</option>
              <option>Cup Print</option>
              <option>Mobile Cases</option>
              <option>Wallets</option>
              <option>Resin Art</option>
              <option>Money Box</option>
              <option>Acrylic Frames</option>
              <option>Mirror Light</option>
              <option>LED Mirror Light</option>
              <option>Wallet Card</option>
              <option>Customized Bottle</option>
              <option>Customized Stand</option>
              <option>Polaroid</option>
              <option>Custom Eyes Print</option>
              <option>School Label Sticker</option>
              <option>Engraved Metal Pen</option>
            </select>
          </div>

          {/* Price */}
          <div className="form-row">
            <div className="form-group">
              <label>Price</label>

              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Old Price</label>

              <input
                type="number"
                name="oldPrice"
                value={product.oldPrice}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Discount & Rating */}
          <div className="form-row">
            <div className="form-group">
              <label>Discount</label>

              <input
                type="number"
                name="discount"
                value={product.discount}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Rating</label>

              <input
                type="number"
                step="0.1"
                max="5"
                name="rating"
                value={product.rating}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Image */}
          <div className="form-group">
            <label>Product Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />

            {product.image && (
              <div className="image-preview">
                <img
                  src={product.image}
                  alt="Preview"
                  width="200"
                />
              </div>
            )}
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>

            <textarea
              rows="5"
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </div>

          <button
            className="submit-btn"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;