import React from "react";
import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "918300589035"; // Replace with your WhatsApp number
  const message = encodeURIComponent(
    "Hello Spider Gift Store! I'm interested in your personalized gifts."
  );

  return (
    <a
  href={`https://wa.me/918300589035?text=${encodeURIComponent(
    "Hi 👋, I'm interested in your gift items. Can you share the details?"
  )}`}
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp />
</a>
  );
};

export default WhatsAppButton;