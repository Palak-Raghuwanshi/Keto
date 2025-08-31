


import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

export default function Footer({ overview }) {
  return (
    <footer className="footer">
     
      <div className="newsletter">
        <h3>Subscribe to our Newsletter</h3>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>


      <div className="social-icons">
        {overview?.linkedin && (
          <a
            href={overview.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={22} />
          </a>
        )}
        {overview?.twitter && (
          <a
            href={overview.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={22} />
          </a>
        )}
        {overview?.instagram && (
          <a
            href={overview.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={22} />
          </a>
        )}
      </div>
    </footer>
  );
}
