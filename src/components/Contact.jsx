import axios from "axios";
import { Wrapper } from "../wrappers/Contact";
import { Form, useNavigation } from "react-router-dom";
import { notify } from "./Notification";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(
      "https://sports-club-server.onrender.com/api/v1/email/contact",
      data
    );
    document.querySelector(".contact-form").reset();
    notify.success("Query sent successfully!");
  } catch (error) {
    notify.error("Something went wrong. Please try again!");
  }
  return null;
};
const Contact = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
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
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn contact-btn"
            >
              {isSubmitting ? "submitting..." : "submit"}
            </button>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Contact;
