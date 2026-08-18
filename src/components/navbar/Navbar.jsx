import { Link } from "react-scroll";
import "./navbar.css";

function Navbar() {
  const handleHam = () => {
    const ham = document.querySelector(".hamburger-menu");
    ham.classList.toggle("active-ham");
    const mobileItemsContainer = document.querySelector(
      ".mobile-menu-items-container",
    );
    mobileItemsContainer.classList.toggle("active-mobile-menu");
  };
  return (
    <nav className="navbar">
      <div className="menu">
        <div className="logo">
          <span>RONIK</span>
          <span>PROPERTY SERVICES</span>
        </div>
        <div className="menu-item-container">
          <div
            className="hamburger-menu"
            onClick={() => {
              handleHam();
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className="menu-items">
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              duration={500}
              spy={true}
            >
              <li>Home</li>
            </Link>
            <Link
              to="services"
              activeClass="active"
              smooth={true}
              duration={500}
              spy={true}
            >
              <li>Services</li>
            </Link>
            <Link
              to="about"
              activeClass="active"
              smooth={true}
              duration={500}
              spy={true}
            >
              <li>About</li>
            </Link>

            <Link
              to="contact"
              activeClass="active"
              smooth={true}
              duration={500}
              spy={true}
            >
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="mobile-menu-items-container">
        <ul className="mobile-menu-items">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            duration={500}
            spy={true}
            onClick={() => {
              handleHam();
            }}
          >
            <li>Home</li>
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            duration={500}
            spy={true}
            onClick={() => {
              handleHam();
            }}
          >
            <li>Services</li>
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            duration={500}
            spy={true}
            onClick={() => {
              handleHam();
            }}
          >
            <li>About</li>
          </Link>

          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            duration={500}
            spy={true}
            onClick={() => {
              handleHam();
            }}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
