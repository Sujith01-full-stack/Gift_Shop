// ==========================
// Currency Formatter
// ==========================

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(amount);
};

// ==========================
// Discount Percentage
// ==========================

export const calculateDiscount = (
  oldPrice,
  newPrice
) => {
  if (!oldPrice || oldPrice <= newPrice) return 0;

  return Math.round(
    ((oldPrice - newPrice) / oldPrice) * 100
  );
};

// ==========================
// Generate Random ID
// ==========================

export const generateId = () => {
  return (
    Date.now().toString() +
    Math.floor(Math.random() * 1000)
  );
};

// ==========================
// Search Products
// ==========================

export const searchProducts = (
  products,
  keyword
) => {
  if (!keyword) return products;

  return products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(keyword.toLowerCase())
  );
};

// ==========================
// Filter By Category
// ==========================

export const filterByCategory = (
  products,
  category
) => {
  if (!category || category === "All")
    return products;

  return products.filter(
    (product) => product.category === category
  );
};

// ==========================
// Sort Products
// ==========================

export const sortProducts = (
  products,
  type
) => {
  const sorted = [...products];

  switch (type) {
    case "low-high":
      return sorted.sort(
        (a, b) => a.price - b.price
      );

    case "high-low":
      return sorted.sort(
        (a, b) => b.price - a.price
      );

    case "rating":
      return sorted.sort(
        (a, b) => b.rating - a.rating
      );

    case "name":
      return sorted.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

    default:
      return sorted;
  }
};

// ==========================
// Calculate Cart Total
// ==========================

export const calculateCartTotal = (cart) => {
  return cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
};

// ==========================
// Calculate Cart Quantity
// ==========================

export const calculateCartCount = (cart) => {
  return cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
};

// ==========================
// Validate Email
// ==========================

export const validateEmail = (email) => {
  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
};

// ==========================
// Validate Phone Number
// ==========================

export const validatePhone = (phone) => {
  return /^[6-9]\d{9}$/.test(phone);
};

// ==========================
// Capitalize First Letter
// ==========================

export const capitalize = (text) => {
  if (!text) return "";

  return (
    text.charAt(0).toUpperCase() +
    text.slice(1).toLowerCase()
  );
};

// ==========================
// Get Today's Date
// ==========================

export const getCurrentDate = () => {
  return new Date().toLocaleDateString("en-IN");
};

// ==========================
// Local Storage Helpers
// ==========================

export const saveToStorage = (key, value) => {
  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
};

export const getFromStorage = (key) => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : null;
};

export const removeFromStorage = (key) => {
  localStorage.removeItem(key);
};

// ==========================
// WhatsApp Order Link
// ==========================

export const generateWhatsAppLink = (
  phone,
  productName
) => {
  const message = encodeURIComponent(
    `Hello Spider Gift Store, I'm interested in ${productName}.`
  );

  return `https://wa.me/${phone}?text=${message}`;
};