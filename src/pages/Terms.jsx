import React from "react";
import { Link } from "react-router-dom";
import {
  FaFileContract,
  FaCheckCircle,
  FaArrowLeft,
  FaShieldAlt,
} from "react-icons/fa";

import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-page">

      <div className="terms-container">

        {/* Header */}

        <div className="terms-header">

          <FaFileContract className="terms-icon" />

          <span className="terms-badge">
            Spider Frame Gallery
          </span>

          <h1>Terms & Conditions</h1>

          <p>
            Please read these Terms & Conditions carefully
            before using Spider Frame Gallery. These terms
            explain your rights, responsibilities,
            payments, shipping, cancellations and privacy.
          </p>

        </div>

        {/* Terms Card */}

        <div className="terms-card">

          <section className="terms-section">

            <h2>
              <FaCheckCircle />
              Acceptance of Terms
            </h2>

            <p>
              By accessing and using Spider Frame Gallery,
              you agree to comply with these Terms &
              Conditions. If you do not agree with any part
              of these terms, please discontinue using this
              website immediately.
            </p>

          </section>

          <section className="terms-section">

            <h2>
              <FaCheckCircle />
              User Accounts
            </h2>

            <p>
              You are responsible for maintaining the
              confidentiality of your account credentials.
              Any activity performed using your account
              will be considered your responsibility.
            </p>

          </section>

          <section className="terms-section">

            <h2>
              <FaCheckCircle />
              Orders & Payments
            </h2>

            <p>
              Orders are accepted only after successful
              payment confirmation. Product availability
              may change without prior notice.
            </p>

          </section>

          <section className="terms-section">

            <h2>
              <FaCheckCircle />
              Shipping & Delivery
            </h2>

            <p>
              Delivery time depends on your location,
              courier partner, weather conditions and
              holidays. Estimated delivery dates are not
              guaranteed.
            </p>

          </section>

          <section className="terms-section">

            <h2>
              <FaCheckCircle />
              Returns & Refunds
            </h2>

            <p>
              Customized and personalized gifts cannot be
              returned unless they are damaged or have a
              manufacturing defect.
            </p>

          </section>
                    <section className="terms-section">

            <h2>
              <FaCheckCircle />
              Privacy Policy
            </h2>

            <p>
              Your personal information is collected only
              for processing orders, customer support,
              shipping, and improving our services. We
              never sell or share your personal data with
              third parties without your consent.
            </p>

          </section>

          <section className="terms-section">

            <h2>
              <FaCheckCircle />
              Cancellation Policy
            </h2>

            <p>
              Orders can be cancelled before production
              begins. Customized products cannot be
              cancelled once the manufacturing process has
              started.
            </p>

          </section>

          <section className="terms-section">

            <h2>
              <FaCheckCircle />
              Warranty
            </h2>

            <p>
              If you receive a damaged or incorrect
              product, please contact us within 48 hours
              with photos for verification. We will review
              the issue and provide an appropriate
              resolution.
            </p>

          </section>

          <section className="terms-section">

            <h2>
              <FaCheckCircle />
              Intellectual Property
            </h2>

            <p>
              All website content including product
              images, graphics, text, logos and designs
              are the intellectual property of Spider
              Frame Gallery and are protected under
              copyright laws.
            </p>

          </section>

          <section className="terms-section">

            <h2>
              <FaCheckCircle />
              Limitation of Liability
            </h2>

            <p>
              Spider Frame Gallery shall not be liable for
              any indirect, incidental or consequential
              damages arising from the use of this website
              or our products.
            </p>

          </section>

          <section className="terms-section">

            <h2>
              <FaShieldAlt />
              Security
            </h2>

            <p>
              We use secure technologies to protect your
              information and payment details. However,
              users are also responsible for keeping their
              account credentials secure.
            </p>

          </section>

          <section className="terms-section">

            <h2>
              <FaCheckCircle />
              Changes to Terms
            </h2>

            <p>
              We reserve the right to modify these Terms &
              Conditions at any time. Updated versions
              will always be available on this page.
            </p>

          </section>

                    <section className="terms-section">

            <h2>
              <FaCheckCircle />
              Governing Law
            </h2>

            <p>
              These Terms & Conditions are governed by the
              laws of India. Any disputes shall be subject
              to the jurisdiction of the courts in
              Tamil Nadu.
            </p>

          </section>

          <section className="terms-section contact-section">

            <h2>
              <FaCheckCircle />
              Contact Us
            </h2>

            <p>
              If you have any questions regarding these
              Terms & Conditions, feel free to contact us.
            </p>

            <p className="contact-email">
              📧 spiderframegallery@gmail.com
            </p>

            <p className="contact-phone">
              📞 +91 83005 89035
            </p>

          </section>

        </div>

        {/* Last Updated */}

        <div className="terms-note">

          <FaCheckCircle />

          <span>
            Last Updated : July 2026
          </span>

        </div>

        {/* Footer */}

        <div className="terms-footer">

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

export default Terms;

