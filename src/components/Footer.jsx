import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Wrapper } from "../wrappers/Footer";

const Footer = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="footer">
          <div className="social-icons">
            <a
              target="_blank"
              href="https://www.instagram.com/abinandan_at"
              className="social-icon"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/abidev3009"
              className="social-icon"
            >
              <FaTwitter />
            </a>
            <a className="social-icon">
              <FaYoutube />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/abinandan-a-t-465657211/"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="copyright-info">
            <p>
              <span>
                &copy; 2024 Sports Club of District Public School. All rights
                reserved.
              </span>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;
