import { Wrapper } from "../wrappers/Hero";
import tennis from "/assets/images/tennis.jpg";
import football from "/assets/images/football.jpg";
import basketball from "/assets/images/basketball.jpg";
const Hero = () => {
  return (
    <Wrapper id="home">
      <div className="section-center">
        <div className="hero">
          <div className="left">
            <div className="quote">
              <h1>engage</h1>
              <h1>play</h1>
              <h1>win</h1>
              <h1>celebrate</h1>
            </div>
            <button to="/register" className="btn">
              join now
            </button>
          </div>
          <div className="right">
            <div className="hero-images-container">
              <div className="hero-img-container">
                <img src={tennis} alt="" />
              </div>
              <div className="hero-img-container">
                <img src={football} alt="" />
              </div>
              <div className="hero-img-container">
                <img src={basketball} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Hero;
