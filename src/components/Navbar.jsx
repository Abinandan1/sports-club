import { FaBars, FaChevronCircleDown } from "react-icons/fa";
import { Wrapper } from "../wrappers/Navbar";
import {
  BsFillMoonFill,
  BsFillSunFill,
  BsMoonFill,
  BsSunFill,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ showSidebar, setShowSidebar, theme, setTheme }) => {
  document.addEventListener("scroll", (e) => {
    if (window.scrollY > 80) {
      document.querySelector("nav").style.boxShadow = "var(--shadow-1)";
    } else {
      document.querySelector("nav").style.boxShadow = "none";
    }
  });
  const handleNavigation = (e) => {
    document.querySelector(".active.nav-link").classList.remove("active");
    e.currentTarget.classList.add("active");
  };
  return (
    <Wrapper theme={theme}>
      <div className="section-center">
        <div className="navbar">
          <Link to="/" className="logo show-logo">
            SC
          </Link>
          <Link to="/" className="logo show-logo-1">
            S<span>ports</span>C<span>lub</span>
          </Link>
          <ul className="nav-links">
            <li>
              <a
                onClick={handleNavigation}
                href="#"
                className="active nav-link"
              >
                home
              </a>
            </li>
            <li>
              <a onClick={handleNavigation} href="#about" className="nav-link">
                about
              </a>
            </li>
            <li>
              <a
                onClick={handleNavigation}
                href="#experience"
                className="nav-link"
              >
                experience
              </a>
            </li>
            <li>
              <a
                onClick={handleNavigation}
                href="#objectives"
                className="nav-link"
              >
                objectives
              </a>
            </li>
            <li>
              <a
                onClick={handleNavigation}
                href="#contact"
                className="nav-link"
              >
                contact
              </a>
            </li>
            <li>
              <Link
                onClick={handleNavigation}
                to="/about-us"
                className="nav-link"
              >
                knowMore
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  document
                    .querySelectorAll(".nav-buttons-container")[1]
                    .classList.toggle("show-nav-buttons-container");
                }}
                className="options-btn"
              >
                <FaChevronCircleDown />
              </button>
            </li>
          </ul>
          <div className="nav-buttons-container">
            <Link to="/register" className="btn">
              join us
            </Link>
            <Link to="/login" className="btn btn-hipster">
              login
            </Link>
            <div className="theme">
              <BsMoonFill className="theme-icon" />
              <div
                className="dark-theme-container"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <span className="theme-btn-1"></span>
              </div>
              <BsSunFill className="theme-icon" />
            </div>
          </div>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="theme-btn"
          >
            {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
          </button>
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="toggle-btn"
          >
            <FaBars />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
