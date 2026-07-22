import React, { useState } from "react";
import "./FAQ.css";

import {
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaBoxOpen,
  FaCreditCard,
  FaTruck,
  FaUndo,
  FaGift,
} from "react-icons/fa";

const faqData = [
  {
    id: 1,
    category: "Orders",
    icon: <FaBoxOpen />,
    question: "How can I place an order?",
    answer:
      "Browse products, add them to your cart, proceed to checkout, complete payment, and your order will be confirmed instantly.",
  },
  {
    id: 2,
    category: "Payment",
    icon: <FaCreditCard />,
    question: "What payment methods are available?",
    answer:
      "We accept UPI, Debit Card, Credit Card, Net Banking, Wallets, and Cash on Delivery (selected locations).",
  },
  {
    id: 3,
    category: "Shipping",
    icon: <FaTruck />,
    question: "How long does delivery take?",
    answer:
      "Orders are delivered within 3-7 business days depending on your location.",
  },
  {
    id: 4,
    category: "Orders",
    icon: <FaBoxOpen />,
    question: "Can I cancel my order?",
    answer:
      "Yes. Orders can be cancelled before they are shipped from the Orders page.",
  },
  {
    id: 5,
    category: "Shipping",
    icon: <FaTruck />,
    question: "How can I track my order?",
    answer:
      "Open My Orders from your Profile Dashboard to view the live order status.",
  },
  {
    id: 6,
    category: "Gifts",
    icon: <FaGift />,
    question: "Do you offer gift wrapping?",
    answer:
      "Yes. Gift wrapping is available during checkout for selected products.",
  },
  {
    id: 7,
    category: "Returns",
    icon: <FaUndo />,
    question: "Can I return customized products?",
    answer:
      "Customized products cannot be returned unless the product is damaged or incorrect.",
  },
  {
    id: 8,
    category: "Payment",
    icon: <FaCreditCard />,
    question: "Is online payment secure?",
    answer:
      "Yes. All online payments are processed through secure encrypted payment gateways.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");

  const filteredFAQ = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFAQ = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <div className="faq-page">
      <div className="faq-container">

        {/* Header */}

        <div className="faq-header">
          <FaQuestionCircle className="faq-icon" />

          <h1>Frequently Asked Questions</h1>

          <p>
            Find answers to common questions about Spider Gift Store.
          </p>

          <div className="faq-search">

            <FaSearch />

            <input
              type="text"
              placeholder="Search your question..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>

        {/* FAQ */}

        <div className="faq-list">

          {filteredFAQ.length === 0 ? (

            <div className="faq-empty">

              <h3>No Questions Found</h3>

              <p>Try another keyword.</p>

            </div>

          ) : (

            filteredFAQ.map((item) => (

              <div
                className={`faq-item ${
                  active === item.id ? "active" : ""
                }`}
                key={item.id}
              >

                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(item.id)}
                >

                  <div className="question-left">

                    <span className="faq-category">
                      {item.icon}
                      {item.category}
                    </span>

                    <h3>{item.question}</h3>

                  </div>

                  {active === item.id ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}

                </button>

                {active === item.id && (

                  <div className="faq-answer">

                    <p>{item.answer}</p>

                  </div>

                )}

              </div>

            ))
          )}

        </div>

        {/* Support */}

        <div className="faq-support">

          <h2>Still Need Help?</h2>

          <p>
            Contact our support team anytime.
          </p>

          <div className="support-buttons">

            <a
              href="https://wa.me/918300589035"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href="tel:+918300589035"
              className="call-btn"
            >
              <FaPhoneAlt />
              Call
            </a>

            <a
              href="mailto:spiderframegallery@gmail.com"
              className="mail-btn"
            >
              <FaEnvelope />
              Email
            </a>

          </div>

        </div>

      </div>
    </div>
  );
};

export default FAQ;