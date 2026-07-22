import API from "./api";

// ==========================
// Login
// ==========================

export const login = async (credentials) => {
  try {
    const response = await API.post("/login", credentials);

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ==========================
// Register
// ==========================

export const register = async (userData) => {
  try {
    const response = await API.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ==========================
// Logout
// ==========================

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// ==========================
// Current User
// ==========================

export const getCurrentUser = () => {
  const user = localStorage.getItem("user");

  if (!user) return null;

  return JSON.parse(user);
};

// ==========================
// Token
// ==========================

export const getToken = () => {
  return localStorage.getItem("token");
};

// ==========================
// Check Login
// ==========================

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

// ==========================
// Profile
// ==========================

export const getProfile = async () => {
  try {
    const response = await API.get("/profile");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ==========================
// Update Profile
// ==========================

export const updateProfile = async (userData) => {
  try {
    const response = await API.put("/profile", userData);

    if (response.data.user) {
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );
    }

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ==========================
// Change Password
// ==========================

export const changePassword = async (passwordData) => {
  try {
    const response = await API.put(
      "/change-password",
      passwordData
    );

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ==========================
// Forgot Password
// ==========================

export const forgotPassword = async (email) => {
  try {
    const response = await API.post("/forgot-password", {
      email,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ==========================
// Reset Password
// ==========================

export const resetPassword = async (token, password) => {
  try {
    const response = await API.post("/reset-password", {
      token,
      password,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};