import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  login,
  logout,
  register,
  getCurrentUser,
  isAuthenticated,
} from "../services/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getCurrentUser());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated()) {
      setUser(getCurrentUser());
    }

    setLoading(false);
  }, []);

  // ==========================
  // Login
  // ==========================

  const loginUser = async (credentials) => {
    try {
      const data = await login(credentials);

      setUser(data.user);

      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  };

  // ==========================
  // Register
  // ==========================

  const registerUser = async (userData) => {
    try {
      const data = await register(userData);

      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  };

  // ==========================
  // Logout
  // ==========================

  const logoutUser = () => {
    logout();
    setUser(null);
  };

  // ==========================
  // Update User
  // ==========================

  const updateUser = (updatedUser) => {
    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,

        loginUser,
        registerUser,
        logoutUser,
        updateUser,

        isLoggedIn: !!user,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

// ==========================
// Custom Hook
// ==========================

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;