import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";
import {
  FaImage,
  FaKey,
  FaCoffee,
  FaMobileAlt,
  FaWallet,
  FaPaintBrush,
  FaPiggyBank,
  FaRegSquare,
  FaLightbulb,
  FaWineBottle,
  FaIdCard,
  FaEye,
  FaTags,
  FaPenFancy,  
} from "react-icons/fa";

const categoryList = [
  {
    id: 1,
    name: "Photo Frames",
    icon: <FaImage />,
  },
  {
    id: 2,
    name: "Keychains",
    icon: <FaKey />,
  },
  {
    id: 3,
    name: "Cup Print",
    icon: <FaCoffee />,
  },
  {
    id: 4,
    name: "Mobile Cases",
    icon: <FaMobileAlt />,
  },
  {
    id: 5,
    name: "Wallets",
    icon: <FaWallet />,
  },
  {
    id: 6,
    name: "Resin Art",
    icon: <FaPaintBrush />,
  },
  {
    id: 7,
    name: "Money Box",
    icon: <FaPiggyBank />,
  },
   {
  id: 8,
  name: "Acrylic Frames",
  icon: <FaImage />,
},
 {
    id: 9,
    name: "Mirror Light",
    icon: <FaLightbulb />,
  },
  {
    id: 10,
    name: "LED Mirror Light",
    icon: <FaLightbulb />,
  },
  {
    id: 11,
    name: "Wallet Card",
    icon: <FaIdCard />,
  },
  {
    id: 12,
    name: "Customized Bottle",
    icon: <FaWineBottle />,
  },
  {
    id: 13,
    name: "Customized Stand",
    icon: <FaRegSquare />,
  },
  {
    id: 14,
    name: "Polaroid",
    icon: <FaImage />,
  },
  {
  id: 15,
  name: "Custom Eyes Print",
  icon: <FaEye />,
},
{
  id: 16,
  name: "School Label Sticker",
  icon: <FaTags />,
},
{
  id: 17,
  name: "Pen",
  icon: <FaPenFancy />,
},

];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title">Shop by Category</h2>

        <p className="section-subtitle">
          Find the perfect personalized gift for every occasion.
        </p>

        <div className="categories-grid">
          {categoryList.map((category) => (
            <div
              key={category.id}
              className="category-card"
              onClick={() => handleCategoryClick(category.name)}
              style={{ cursor: "pointer" }}
            >
              <div className="category-icon">
                {category.icon}
              </div>

              <h3>{category.name}</h3>

              <button
                className="category-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCategoryClick(category.name);
                }}
              >
                View Products
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;