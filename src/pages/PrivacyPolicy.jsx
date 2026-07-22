import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserShield,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";

import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">

        {/* Header */}

        <div className="privacy-header">

          <FaUserShield className="privacy-icon" />

          <h1>Privacy Policy</h1>

          <p>
            Your privacy is important to us. This Privacy
            Policy explains how Spider Frame Gallery
            collects, uses, and protects your personal
            information.
          </p>

        </div>

        {/* Privacy Card */}

        <div className="privacy-card">

          <section>

            <h2>
              <FaCheckCircle />
              Information We Collect
            </h2>

            <p>
              We collect information such as your name,
              email address, phone number, shipping
              address, and payment details when you place
              an order or contact us.
            </p>

          </section>

          <section>

            <h2>
              <FaCheckCircle />
              How We Use Your Information
            </h2>

            <p>
              Your information is used to process orders,
              deliver products, provide customer support,
              improve our website, and send order updates.
            </p>

          </section>

          <section>

            <h2>
              <FaCheckCircle />
              Payment Security
            </h2>

            <p>
              We do not store your debit or credit card
              information. All online payments are handled
              securely through trusted payment gateways.
            </p>

          </section>

          <section>

            <h2>
              <FaCheckCircle />
              Cookies
            </h2>

            <p>
              Our website may use cookies to improve your
              browsing experience, remember preferences,
              and analyze website traffic.
            </p>

          </section>

          <section>

            <h2>
              <FaCheckCircle />
              Sharing Your Information
            </h2>

            <p>
              We never sell your personal information.
              Data is shared only with trusted delivery
              partners and payment providers when
              necessary.
            </p>

          </section>

          <section>

            <h2>
              <FaCheckCircle />
              Data Protection
            </h2>

            <p>
              We use appropriate security measures to
              protect your personal information from
              unauthorized access, misuse, or disclosure.
            </p>

          </section>

          <section>

            <h2>
              <FaCheckCircle />
              Your Rights
            </h2>

            <p>
              You may request to update, correct, or
              delete your personal information by
              contacting us.
            </p>

          </section>

          <section>

            <h2>
              <FaCheckCircle />
              Policy Updates
            </h2>

            <p>
              We may update this Privacy Policy from time
              to time. Any changes will be posted on this
              page.
            </p>

          </section>

          <section>

            <h2>
              <FaCheckCircle />
              Contact Us
            </h2>

            <p>
              If you have any questions regarding this
              Privacy Policy, please contact us.
            </p>

            <p>📧 spiderframegallery@gmail.com</p>

            <p>📞 +91 83005 89035</p>

          </section>

        </div>

        {/* Footer */}

        <div className="privacy-footer">

          <Link
            to="/"
            className="back-btn"
          >
            <FaArrowLeft />
            Back to Home
          </Link>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;