import { FaTimes } from "react-icons/fa";
import { Wrapper } from "../wrappers/Sidebar";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = ({ showSidebar, setShowSidebar, theme, setTheme }) => {
  const handleNavigation = (e) => {
    document.querySelector(".active.side-link").classList.remove("active");
    e.currentTarget.classList.add("active");
    setShowSidebar(!showSidebar);
  };
  return (
    <Wrapper
      style={{
        marginLeft: showSidebar && "0px",
      }}
      theme={theme}
      showsidebar={showSidebar}
    >
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo show-logo-1">
            S<span>ports</span>C<span>lub</span>
          </div>
          <button onClick={() => setShowSidebar(false)} className="close-btn">
            <FaTimes />
          </button>
        </div>
        <ul className="side-links">
          <li>
            <a onClick={handleNavigation} href="#" className="active side-link">
              home
            </a>
          </li>
          <li>
            <a onClick={handleNavigation} href="#about" className="side-link">
              about
            </a>
          </li>
          <li>
            <a
              onClick={handleNavigation}
              href="#experience"
              className="side-link"
            >
              experience
            </a>
          </li>
          <li>
            <a
              onClick={handleNavigation}
              href="#objectives"
              className="side-link"
            >
              objectives
            </a>
          </li>
          <li>
            <a onClick={handleNavigation} href="#contact" className="side-link">
              contact
            </a>
          </li>
          <li>
            <Link
              to="/about-us"
              onClick={handleNavigation}
              href="#"
              className="side-link"
            >
              knowMore
            </Link>
          </li>
          {/* <li>
            <button
              onClick={() => {
                document
                  .querySelector(".side-buttons-container")
                  .classList.toggle("show-side-buttons-container");
              }}
              className="options-btn"
            >
              <FaChevronCircleDown />
            </button>
          </li> */}
        </ul>
        <div className="nav-buttons-container">
          <button to="/register" className={`btn`}>
            join us
          </button>
          <button to="/login" className={`btn btn-hipster`}>
            login
          </button>
        </div>
        <div className="theme">
          <BsMoonFill className="theme-icon" />
          <div
            className="dark-theme-container"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <span className="theme-btn"></span>
          </div>
          <BsSunFill className="theme-icon" />
        </div>
      </div>
    </Wrapper>
  );
};
export default Sidebar;
