import React, { useEffect, useState } from "react";
import { FaTags, FaSave, FaTrash } from "react-icons/fa";
import "./AdminOffer.css";

const AdminOffer = () => {

  const [offer, setOffer] = useState("");
  const [offerImage, setOfferImage] = useState("");

  useEffect(() => {

    const savedOffer = localStorage.getItem("bannerOffer");
    const savedImage = localStorage.getItem("bannerOfferImage");

    if (savedOffer) setOffer(savedOffer);
    if (savedImage) setOfferImage(savedImage);

  }, []);

  // Upload Image
  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setOfferImage(reader.result);
    };

    reader.readAsDataURL(file);

  };

  // Save
  const saveOffer = () => {

    if (offer.trim() === "") {
      alert("Please enter an offer.");
      return;
    }

    localStorage.setItem("bannerOffer", offer);
    localStorage.setItem("bannerOfferImage", offerImage);

    window.dispatchEvent(new Event("offerUpdated"));

    alert("Offer Saved Successfully!");

  };

  // Remove
  const clearOffer = () => {

    localStorage.removeItem("bannerOffer");
    localStorage.removeItem("bannerOfferImage");

    setOffer("");
    setOfferImage("");

    window.dispatchEvent(new Event("offerUpdated"));

    alert("Offer Removed");

  };

  return (

    <div className="admin-offer-page">

      <div className="admin-offer-card">

        <h2>
          <FaTags />
          Banner Offer Management
        </h2>

        <p>
          Add or update the offer shown on the homepage banner.
        </p>

        {/* Offer Text */}

        <textarea
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
          placeholder={`Example:

🎉 Flat 40% OFF on Customized Gifts
🔥 Free Shipping Above ₹999
🎁 Buy 2 Get 1 Free`}
        />

        {/* Upload Image */}

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="offer-image-input"
        />

        {/* Preview */}

        {offerImage && (

          <div className="offer-preview">

            <img
              src={offerImage}
              alt="Offer Preview"
            />

          </div>

        )}

        {/* Buttons */}

        <div className="offer-buttons">

          <button
            className="save-offer-btn"
            onClick={saveOffer}
          >
            <FaSave />
            Save Offer
          </button>

          <button
            className="clear-offer-btn"
            onClick={clearOffer}
          >
            <FaTrash />
            Remove Offer
          </button>

        </div>

      </div>

    </div>

  );

};

export default AdminOffer;