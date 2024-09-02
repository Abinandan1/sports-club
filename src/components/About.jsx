import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Wrapper } from "../wrappers/About";

const About = () => {
  return (
    <Wrapper id="about">
      <div className="section-center">
        <div className="about">
          <div className="quote-container">
            <h5 className="quote">
              <FaQuoteLeft /> Do you know what is my favorite part of sports is?
              The opportunity to play. <FaQuoteRight />
            </h5>
            <p className="quote-by">- Mike Singletary (49ers Head Coach)</p>
          </div>
          <h6 className="objective">
            We are excited to provide a healthy sporting environment for our
            students.
          </h6>
          {/* <button className="btn">about us</button> */}
        </div>
      </div>
    </Wrapper>
  );
};
export default About;
