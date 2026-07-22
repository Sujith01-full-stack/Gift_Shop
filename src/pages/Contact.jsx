import React, { useState } from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
Name : ${formData.name}
Email : ${formData.email}
Phone : ${formData.phone}

Subject : ${formData.subject}

Message :
${formData.message}
`;

    window.open(
      `https://wa.me/918300589035?text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );

    alert("Message Sent Successfully ❤️");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">

        {/* Left */}

        <div className="contact-info">

          <h1>Contact Us</h1>

          <p>
            Have questions or want to place a customized gift order?
            Contact Spider Gift Store anytime.
          </p>

          <div className="info-box">
            <FaMapMarkerAlt className="icon" />

            <div>
              <h3>Address</h3>

              <p>Veeyanoor, Tamil Nadu, India</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="icon" />

            <div>
              <h3>Phone</h3>

              <a href="tel:+918300589035">
                +91 83005 89035
              </a>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="icon" />

            <div>
              <h3>Email</h3>

              <a href="mailto:support@spidergiftstore.com">
                spiderframegallery@gmail.com
              </a>
            </div>
          </div>

          <div className="info-box">
            <FaClock className="icon" />

            <div>
              <h3>Working Hours</h3>

              <p>9:00 AM - 9:00 PM</p>
            </div>
          </div>

          <a
  href={`https://wa.me/918300589035?text=${encodeURIComponent(
    `Hi Spider Gift Store 👋

I am interested in your customized gift items.

Please share:
✅ Product Catalog
✅ Price List
✅ Available Designs
✅ Delivery Details

Thank you 😊`
  )}`}
  target="_blank"
  rel="noreferrer"
  className="whatsapp-btn"
>
  <FaWhatsapp />
  Chat on WhatsApp
</a>

          {/* Social */}

          <div className="social-links">

            <a
              href="https://www.instagram.com/spider_gift_store"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

        

          </div>

        </div>

        {/* Right */}

        <div className="contact-form">

          <h2>Send Message</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

      {/* Google Map */}

      <div className="map-section">

        <iframe
          title="Spider Gift Store"
          src="https://maps.google.com/maps?q=veeyanoor&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>

      </div>

    </div>
  );
};

export default Contact;