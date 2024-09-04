import axios from "axios";
import { Wrapper } from "../wrappers/Contact";
import { Form } from "react-router-dom";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/email/contact",
      data
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  return null;
};
const Contact = () => {
  return (
    <Wrapper id="contact" onSubmit={(e) => e.preventDefault()}>
      <div className="section-center">
        <div className="contact">
          <h6>Feel free to get in touch with us.</h6>
          <Form method="post" className="contact-form">
            <div className="form-row">
              <input
                name="name"
                type="text"
                placeholder="name"
                className="form-input"
              />
            </div>
            <div className="form-row">
              <input
                name="rollNo"
                type="text"
                placeholder="roll no."
                className="form-input"
              />
            </div>
            <div className="form-row">
              <input
                name="query"
                type="text"
                placeholder="query"
                className="form-input"
              />
            </div>
            <button type="submit" className="btn contact-btn">
              submit
            </button>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Contact;
