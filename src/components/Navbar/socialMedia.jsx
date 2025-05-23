import React from "react";
import "./ContactBar.css";
import { FaFacebook, FaYoutube, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaSnapchat, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactBar = () => {
  return (
    <div className="contact-bar">
      {/* Social Icons */}
      <div className="social-icons">
        <button className="social-icon-button"><FaFacebook size={20} /></button>
        <button className="social-icon-button"><FaYoutube size={20} /></button>
        <button className="social-icon-button"><FaXTwitter size={20} /></button>
        <button className="social-icon-button"><FaInstagram size={20} /></button>
        <button className="social-icon-button"><FaSnapchat size={20} /></button>
        <button className="social-icon-button"><FaTiktok size={20} /></button>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope size={20} />
          <p>info@masters.clinic</p>
        </div>
        <div className="contact-item">
          <FaPhone size={20} />
          <p>8002440181</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
