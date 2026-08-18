import { useState } from "react";
import "./home.css";

const PHONE_NUMBER = "604-780-7890";
const PHONE_HREF = "tel:+16047807890";

function Home() {
  const [isPhoneRevealed, setIsPhoneRevealed] = useState(false);

  const handleCallClick = () => {
    const isMobileSize = window.matchMedia("(max-width: 767px)").matches;

    if (isMobileSize) {
      window.location.href = PHONE_HREF;
      return;
    }

    setIsPhoneRevealed(true);
  };

  return (
    <div id="home" className="home-container">
      <div className="home-left-content">
        <h1 className="home-heading">One Crew For Whole Property.</h1>
        <p>
          Lawns, Landscaping, Concrete, Plumbing, Renovation and Maintenance
          Services
        </p>
        <div className="call-now-container">
          <button className="call-now-button" onClick={handleCallClick}>
            Call Now
          </button>
          {isPhoneRevealed && (
            <a className="home-phone-number" href={PHONE_HREF}>
              {PHONE_NUMBER}
            </a>
          )}
        </div>
      </div>
      <div className="home-right-content">
        <span className="home-offer-label">Two ways to save</span>
        <div className="home-offer-grid">
          <div className="home-offer">
            <h2 className="senior-discount">20%</h2>
            <p className="senior-discount-text">Senior Discount</p>
            <p className="senior-discount-note">
              Applies to every service for eligible seniors, 65+.
            </p>
          </div>
          <div className="home-offer home-offer-recurring">
            <h1 className="regular-discount">Special Rates</h1>
            <p className="regular-discount-text">
              For regular recurring services
            </p>
            <p className="regular-discount-note">
              For weekly, bi-weekly, or monthly services. Contact us for
              more details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
