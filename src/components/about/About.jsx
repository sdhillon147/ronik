import "./about.css";

const EXPERIENCE_YEARS = "10+";

const ALL_SERVICES = [
  "Property Maintenance",
  "Landscaping",
  "Concrete Services",
  "Plumbing",
  "Repair & Renovation",
];

function About() {
  return (
    <div id="about" className="about-container">
      <div className="about-left-content">
        <span className="about-badge">Trusted Across the Lower Mainland</span>
        <h2 className="about-heading">
          {EXPERIENCE_YEARS} years of renovation experience, backed by a full
          property services crew.
        </h2>
        <p>
          Ronik Property Services has spent over a decade renovating and
          maintaining properties across the Lower Mainland. Strata councils,
          landlords and homeowners trust us to show up, do the job right, and
          keep coming back.
        </p>
      </div>
      <div className="about-right-content">
        <div className="about-stat">
          <h1 className="about-stat-number">{EXPERIENCE_YEARS}</h1>
          <p className="about-stat-label">Years of renovation experience</p>
        </div>
        <div className="about-services">
          <span className="about-services-label">
            All property management services
          </span>
          <ul className="about-services-list">
            {ALL_SERVICES.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
