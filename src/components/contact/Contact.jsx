import { useState } from "react";
import "./contact.css";

const PHONE_NUMBER = "604-780-7890";
const PHONE_HREF = "tel:+16047807890";
const EMAIL = "ronikpropertyservices@gmail.com";
const EMAIL_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Free quote request",
)}`;
const COPIED_MESSAGE_DURATION_MS = 2500;

function Contact() {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const handleQuoteClick = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setIsEmailCopied(true);
      setTimeout(() => setIsEmailCopied(false), COPIED_MESSAGE_DURATION_MS);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-card">
        <div className="contact-info">
          <div className="contact-logo">
            <span className="contact-logo-name">RONIK</span>
            <span className="contact-logo-sub">PROPERTY SERVICES</span>
          </div>
          <div className="contact-details">
            <a className="contact-phone" href={PHONE_HREF}>
              {PHONE_NUMBER}
            </a>
            <a className="contact-email" href={EMAIL_HREF}>
              {EMAIL}
            </a>
          </div>
          <p className="contact-tagline">
            Maintaining your property. Enhancing your business.
          </p>
        </div>
        <div className="contact-cta">
          <a
            className="contact-quote-button"
            href={EMAIL_HREF}
            onClick={handleQuoteClick}
          >
            Get my free quote
          </a>
          <span
            className={`contact-reply-note${
              isEmailCopied ? " contact-reply-note-copied" : ""
            }`}
          >
            <span className="contact-reply-dot" />
            {isEmailCopied ? `Copied ${EMAIL}` : "Usually replies same day"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
