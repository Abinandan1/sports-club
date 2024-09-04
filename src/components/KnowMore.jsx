import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { Wrapper } from "../wrappers/KnowMore";
import { Link } from "react-router-dom";
import { useAppContext } from "../App";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import football from "/assets/images/football-event.jpg";
import hurdles from "/assets/images/hurdles-event.jpg";
import marathon from "/assets/images/marathon-event.jpg";
import swimming from "/assets/images/swimming-event.jpg";
import basketballTournament from "/assets/images/basketball-tournament.jpg";
import hockeyTournament from "/assets/images/girls-hockey-tournament.jpg";
import cyclingTournament from "/assets/images/cycling-tournament.jpg";
import footballTournament from "/assets/images/football-tournament.jpg";
import rugbyCoaching from "/assets/images/rugby-coaching.jpg";
import mountainClimbing from "/assets/images/mountain-climbing-children.jpg";
import Footer from "./Footer";
import { useState } from "react";

const KnowMore = () => {
  document.addEventListener("scroll", (e) => {
    if (window.scrollY > 80) {
      document.querySelector("nav").style.boxShadow = "var(--shadow-1)";
    } else {
      document.querySelector("nav").style.boxShadow = "none";
    }
  });
  const { theme, setTheme } = useAppContext();
  const gallery = [
    footballTournament,
    hockeyTournament,
    basketballTournament,
    cyclingTournament,
    mountainClimbing,
    rugbyCoaching,
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  return (
    <Wrapper>
      <nav>
        <div className="section-center">
          <div className="navbar">
            <Link to="/" className="logo show-logo">
              SC
            </Link>
            <Link to="/" className="logo show-logo-1">
              S<span>ports</span>C<span>lub</span>
            </Link>

            <div className="nav-buttons-container">
              <button className="btn">join us</button>
              <button className="btn btn-hipster">login</button>
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="theme-btn"
              >
                {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* BACK BTN */}
      <article>
        <div className="section-center">
          <Link to="/" className="back-btn">
            <FaArrowLeftLong /> Back Home
          </Link>
        </div>
      </article>
      {/* CONTENT */}
      <article>
        <div className="section-center">
          <div className="content">
            {/* GOALS */}
            <div className="section goals">
              <h5 className="title">our goals</h5>
              <div className="goals-list">
                <span className="goal">
                  offer coaching sessions in various sports and recreational
                  activities.
                </span>
                <span className="goal">
                  offer wide range of different sports and give students the
                  opportunity to try something new and get out of comfort zone.
                </span>
                <span className="goal">
                  identify sports talents early and nurture them.
                </span>
                <span className="goal">
                  strengthen and train our NGP teams to participate in
                  University level and National level events.
                </span>
                <span className="goal">
                  encourage students to take regular physical exercise for
                  improved health and wellbeing.
                </span>
                <span className="goal">
                  develop character through life skills such as Sportsmanship,
                  Discipline, Planning, Systematic Thinking and Organization.
                </span>
                <span className="goal">
                  help students reinforce attributes such as teamwork, grit, and
                  work ethic.
                </span>
              </div>
            </div>

            {/* UPCOMING EVENTS */}
            <div className="section upcoming-activities">
              <h5 className="title">upcoming activities</h5>
              <div className="events">
                {/* EVENT */}
                <div className="event">
                  <img src={football} alt="" className="event-img" />
                  <div className="event-info">
                    <p className="info-heading">Event</p>
                    <p className="info">U-15 Football Team Selection</p>
                    <p className="info-heading">Date</p>
                    <p className="info">14-09-24</p>
                    <p className="info-heading">Venue</p>
                    <p className="info">AV Football Stadium</p>
                    <p className="info-heading">Authority</p>
                    <p className="info">Mr. Derrick Simon, Football Coach</p>
                  </div>
                </div>
                {/* EVENT */}
                <div className="event">
                  <img src={hurdles} alt="" className="event-img" />
                  <div className="event-info">
                    <p className="info-heading">Event</p>
                    <p className="info">Hurdles Practice (Girls)</p>
                    <p className="info-heading">Date</p>
                    <p className="info">07-09-24</p>
                    <p className="info-heading">Venue</p>
                    <p className="info">STM Track & Field</p>
                    <p className="info-heading">Authority</p>
                    <p className="info">Mr. Justin Gatlin, 100m Champion</p>
                  </div>
                </div>
                {/* EVENT */}
                <div className="event">
                  <img src={swimming} alt="" className="event-img" />
                  <div className="event-info">
                    <p className="info-heading">Event</p>
                    <p className="info">Swimming U-19 Trials</p>
                    <p className="info-heading">Date</p>
                    <p className="info">18-09-24</p>
                    <p className="info-heading">Venue</p>
                    <p className="info">Swimming Pool Arena</p>
                    <p className="info-heading">Authority</p>
                    <p className="info">Mr. Well Rockford, Swimming Coach</p>
                  </div>
                </div>
                {/* EVENT */}
                <div className="event">
                  <img src={marathon} alt="" className="event-img" />
                  <div className="event-info">
                    <p className="info-heading">Event</p>
                    <p className="info">10K Marathon</p>
                    <p className="info-heading">Date</p>
                    <p className="info">25-09-24</p>
                    <p className="info-heading">Venue</p>
                    <p className="info">
                      Academic Block Entrance to STM Track & Field
                    </p>
                    <p className="info-heading">Authority</p>
                    <p className="info">
                      Mr. Peter Craig, Chief Sports Secretary
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* GALLERY */}
            <div className="section gallery">
              <h5 className="title">gallery</h5>
              <div className="gallery-images">
                {gallery.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        setOpenModal(true);
                        setCurrentImage(index);
                      }}
                      className="gallery-img-container"
                    >
                      <img src={item} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
            {openModal && (
              <div className="gallery-modal">
                <div className="section-center">
                  <button
                    onClick={() => setOpenModal(false)}
                    className="close-btn"
                  >
                    <FaTimes />
                  </button>
                  <div className="modal-slider">
                    {/* <div className="modal-main-img-container">
                  <img src={mainModalImage} alt="" />
                  </div> */}
                    <div className="modal-main-images-container">
                      {gallery.map((item, index) => {
                        let position = "next";
                        if (index === currentImage) {
                          position = "active";
                        } else if (
                          index ===
                          (currentImage - 1 < 0
                            ? gallery.length - 1
                            : currentImage - 1)
                        ) {
                          position = "last";
                        }
                        return (
                          <div
                            className={`modal-main-img-container ${position}`}
                          >
                            <img src={item} alt="" />
                          </div>
                        );
                      })}
                    </div>
                    <button
                      onClick={() =>
                        setCurrentImage(
                          currentImage - 1 < 0
                            ? gallery.length - 1
                            : currentImage - 1
                        )
                      }
                      className="modal-btn"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentImage(
                          currentImage + 1 >= gallery.length
                            ? 0
                            : currentImage + 1
                        )
                      }
                      className="modal-btn"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                  <div className="modal-collection">
                    {gallery.map((item, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => setMainModalImage(item)}
                          className="modal-img-container"
                        >
                          <img src={item} alt="" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            {/* AUTHORITIES */}
            <div className="section authorities">
              <h5 className="title">authorities</h5>
              <table className="authority-table">
                <thead>
                  <tr>
                    <th scope="column">name</th>
                    <th scope="column">designation</th>
                    <th scope="column">email</th>
                    <th scope="column">cabin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Peter Craig</td>
                    <td>Chief Sports Secretary</td>
                    <td>petercraig@dps.com</td>
                    <td>2nd floor, DPE Office, Academic Block</td>
                  </tr>
                  <tr>
                    <td>Nick Murray</td>
                    <td>Tennis Coach</td>
                    <td>nickmurray@dps.com</td>
                    <td>1st floor,DPE Office, Academic Block</td>
                  </tr>
                  <tr>
                    <td>Roger Sanders</td>
                    <td>Physical Director</td>
                    <td>rogersanders@dps.com</td>
                    <td>1st floor, DPE Office, Academic Block</td>
                  </tr>
                  <tr>
                    <td>Amy Connors</td>
                    <td>Nutritionist</td>
                    <td>amyconnors@dps.com</td>
                    <td>3rd floor, DPE Office, Academic Block</td>
                  </tr>
                  <tr>
                    <td>Wayde Van Niekerk</td>
                    <td>Athletics Coach</td>
                    <td>vanniekerk@dps.com</td>
                    <td>2nd floor, DPE Office, Academic Block</td>
                  </tr>
                  <tr>
                    <td>Aaron Brown</td>
                    <td>Cricket Coach</td>
                    <td>aaronbrow@dps.com</td>
                    <td>2nd floor, DPE Office, Academic Block</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* ACHIEVEMENTS */}
          </div>
        </div>
      </article>
      <Footer />
    </Wrapper>
  );
};
export default KnowMore;
