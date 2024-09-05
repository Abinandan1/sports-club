import { Link } from "react-router-dom";
import { Wrapper } from "../wrappers/SecondaryNavbar";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useAppContext } from "../App";

const SecondaryNavbar = () => {
  const { theme, setTheme } = useAppContext();
  return (
    <Wrapper>
      <div className="section-center">
        <div className="navbar">
          <Link to="/" className="logo show-logo">
            SC
          </Link>
          <Link to="/" className="logo show-logo-1">
            S<span>ports</span>C<span>lub</span>
          </Link>

          <div className="nav-buttons-container">
            <Link to="/register" className="btn">
              join us
            </Link>
            <Link to="/login" className="btn btn-hipster">
              login
            </Link>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="theme-btn"
            >
              {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SecondaryNavbar;
