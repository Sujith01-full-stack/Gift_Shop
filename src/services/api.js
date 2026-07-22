import axios from "axios";

// Change this URL to your backend server
const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

// =============================
// Request Interceptor
// =============================

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// =============================
// Response Interceptor
// =============================

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized! Please login again.");
      localStorage.removeItem("token");
    }

    return Promise.reject(error);
  }
);

// =============================
// Authentication APIs
// =============================

export const loginUser = (data) =>
  API.post("/login", data);

export const registerUser = (data) =>
  API.post("/register", data);

export const getProfile = () =>
  API.get("/profile");

// =============================
// Product APIs
// =============================

export const getProducts = () =>
  API.get("/products");

export const getProduct = (id) =>
  API.get(`/products/${id}`);

export const addProduct = (data) =>
  API.post("/products", data);

export const updateProduct = (id, data) =>
  API.put(`/products/${id}`, data);

export const deleteProduct = (id) =>
  API.delete(`/products/${id}`);

// =============================
// Cart APIs
// =============================

export const getCart = () =>
  API.get("/cart");

export const addToCart = (data) =>
  API.post("/cart", data);

export const updateCart = (id, data) =>
  API.put(`/cart/${id}`, data);

export const removeCartItem = (id) =>
  API.delete(`/cart/${id}`);

// =============================
// Wishlist APIs
// =============================

export const getWishlist = () =>
  API.get("/wishlist");

export const addToWishlist = (data) =>
  API.post("/wishlist", data);

export const removeWishlist = (id) =>
  API.delete(`/wishlist/${id}`);

// =============================
// Order APIs
// =============================

export const getOrders = () =>
  API.get("/orders");

export const createOrder = (data) =>
  API.post("/orders", data);

export const getOrder = (id) =>
  API.get(`/orders/${id}`);

// =============================
// Contact API
// =============================

export const sendMessage = (data) =>
  API.post("/contact", data);

export default API;