import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import { Wrapper } from "../wrappers/Slider";
import { useState } from "react";
import person1 from "/assets/images/person1.jpg";
import person2 from "/assets/images/person2.jpg";
import person3 from "/assets/images/person3.jpg";
import person4 from "/assets/images/person4.jpg";
import person5 from "/assets/images/person5.jpg";
const Slider = () => {
  const arr = [
    {
      name: "Peter Craig",
      designation: "Chief Sports Secretary",
      quote:
        "The friendships and relationships I have developed from being on the sports club are more than anyone could ask for.",
      image: person1,
    },
    {
      name: "Walt Shelton",
      designation: "400m Champion",
      quote:
        "Being part of a sports club opens doors to exciting experiences like tournament, competitions, social events and even trips.",
      image: person2,
    },
    {
      name: "Nick Murray",
      designation: "Tennis Coach",
      quote:
        "You gain knowledge on how to maintain your fitness, best practices in training techniques, and nutrition.",
      image: person3,
    },
    {
      name: "Roger Sanders",
      designation: "Physical Director",
      quote:
        "Being in a sports club can help students develop discipline and commitment as they learn to set goals and work hard to improve their skills.",
      image: person4,
    },
    {
      name: "Amy Connors",
      designation: "Nutritionist",
      quote:
        "One of the very best reasons to consider joining a sports club is a serious improvement to your overall health.",
      image: person5,
    },
  ];
  const [current, setCurrent] = useState(0);
  const handlePrev = () => {
    if (current === 0) {
      setCurrent(arr.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  const handleNext = () => {
    if (current === arr.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  return (
    <Wrapper id="experience">
      <div className="section-center">
        <div className="slider">
          <div className="slider-container">
            {arr.map((i, index) => {
              let position = "next";
              if (index === current) {
                position = "active";
              }
              if (
                index === (current - 1 === -1 ? arr.length - 1 : current - 1)
              ) {
                position = "last";
              }
              return (
                <div key={index} className={`slide ${position}`}>
                  <div className="quote-container">
                    <FaQuoteLeft />
                    <p className="quote">{i.quote}</p>
                    <FaQuoteRight className="quote-right" />
                  </div>
                  <div className="person-img-container">
                    <img src={i.image} alt="" className="person-img" />
                  </div>
                  <h6 className="name">{i.name}</h6>
                  <p className="designation">{i.designation}</p>
                </div>
              );
            })}
          </div>
          <button onClick={handlePrev} className="slider-btn left-btn">
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className="slider-btn right-btn">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Slider;
