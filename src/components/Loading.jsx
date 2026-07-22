import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>

      <h2>Spider Gift Store</h2>

      <p>Loading amazing gifts...</p>
    </div>
  );
};

export default Loading;