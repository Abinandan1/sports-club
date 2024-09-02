import { Wrapper } from "../wrappers/Contact";

const Contact = () => {
  return (
    <Wrapper id="contact" onSubmit={(e) => e.preventDefault()}>
      <div className="section-center">
        <div className="contact">
          <h6>Feel free to get in touch with us.</h6>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="name" className="form-input" />
            </div>
            <div className="form-row">
              <input
                type="text"
                placeholder="roll no."
                className="form-input"
              />
            </div>
            <div className="form-row">
              <input type="text" placeholder="query" className="form-input" />
            </div>
            <button className="btn contact-btn">submit</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Contact;
