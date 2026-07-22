import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Wishlist loading failed:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // ==========================
  // Add Product
  // ==========================
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) return prev;

      return [...prev, product];
    });
  };

  // ==========================
  // Remove Product
  // ==========================
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // ==========================
  // Toggle Wishlist
  // ==========================
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }

      return [...prev, product];
    });
  };

  // ==========================
  // Clear Wishlist
  // ==========================
  const clearWishlist = () => {
    setWishlist([]);
  };

  // ==========================
  // Check Product
  // ==========================
  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  // ==========================
  // Counts
  // ==========================
  const wishlistCount = wishlist.length;

  // ==========================
  // Total Price
  // ==========================
  const wishlistTotal = wishlist.reduce(
    (total, item) => total + Number(item.price || 0),
    0
  );

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount,
        wishlistTotal,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        clearWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);

export default WishlistContext;