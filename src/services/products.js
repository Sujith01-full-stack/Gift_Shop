import API from "./api";

// ==========================
// Get All Products
// ==========================

export const getProducts = async () => {
  try {
    const response = await API.get("/products");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ==========================
// Get Product By ID
// ==========================

export const getProductById = async (id) => {
  try {
    const response = await API.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ==========================
// Add Product
// ==========================

export const addProduct = async (productData) => {
  try {
    const response = await API.post("/products", productData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ==========================
// Update Product
// ==========================

export const updateProduct = async (id, productData) => {
  try {
    const response = await API.put(`/products/${id}`, productData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ==========================
// Delete Product
// ==========================

export const deleteProduct = async (id) => {
  try {
    const response = await API.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ==========================
// Search Products
// ==========================

export const searchProducts = async (keyword) => {
  try {
    const response = await API.get(
      `/products/search?q=${keyword}`
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ==========================
// Get Products By Category
// ==========================

export const getProductsByCategory = async (category) => {
  try {
    const response = await API.get(
      `/products/category/${category}`
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ==========================
// Upload Product Image
// ==========================

export const uploadProductImage = async (formData) => {
  try {
    const response = await API.post(
      "/products/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ==========================
// Get Featured Products
// ==========================

export const getFeaturedProducts = async () => {
  try {
    const response = await API.get("/products/featured");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ==========================
// Get Latest Products
// ==========================

export const getLatestProducts = async () => {
  try {
    const response = await API.get("/products/latest");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ==========================
// Get Best Selling Products
// ==========================

export const getBestSellingProducts = async () => {
  try {
    const response = await API.get("/products/best-selling");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};