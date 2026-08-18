import "./services.css";

const SERVICES = [
  {
    title: "Property maintenance",
    description:
      "Common areas, parking lots, seasonal cleanups — on a fixed schedule.",
    colorClass: "service-card-teal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="6" height="16" rx="1.5" fill="currentColor" />
        <rect
          x="14"
          y="4"
          width="6"
          height="16"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Landscaping",
    description: "Mowing, edging, pruning, planting and irrigation checks.",
    colorClass: "service-card-pink",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4C11 4 4 11 4 20c9 0 16-7 16-16z" fill="currentColor" />
        <path
          d="M9 20c2-5 6-9 11-11"
          stroke="var(--service-icon-accent)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Concrete services",
    description:
      "Sidewalks, pads, curbs and repairs — formed, poured and finished.",
    colorClass: "service-card-purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 15c2.5-2 5.5-2 8 0s5.5 2 8 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="4" y="15" width="16" height="5" rx="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Repair & renovation",
    description:
      "Fences, decks, drywall, doors and the small jobs that keep piling up.",
    colorClass: "service-card-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
        <path
          d="M7.5 12.5l3 3 6-6.5"
          stroke="var(--service-icon-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function Services() {
  return (
    <div id="services" className="services-container">
      <span className="services-label">Services</span>
      <div className="services-grid">
        {SERVICES.map((service, index) => (
          <div
            key={service.title}
            className={`service-card ${service.colorClass}`}
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
