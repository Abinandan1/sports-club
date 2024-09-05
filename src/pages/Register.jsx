import { Form, useNavigation } from "react-router-dom";
import { Wrapper } from "../wrappers/Register";
import { SecondaryNavbar } from "../components";
import { notify } from "../components/Notification";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(
      "https://sports-club-server.onrender.com/api/v1/email/register",
      data
    );
    document.querySelector(".register-form").reset();
    notify.success("Registered successfully!");
  } catch (error) {
    notify.error("Currently we are working on this functionality!");
  }
  return null;
};
const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <SecondaryNavbar />
      <div className="form-center">
        <div className="contact">
          <h6>Register</h6>
          <Form method="post" className="register-form">
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
                name="email"
                type="email"
                placeholder="email"
                className="form-input"
              />
            </div>
            <div className="form-row">
              <input
                name="password"
                type="password"
                placeholder="password"
                className="form-input"
              />
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn register-btn"
            >
              {isSubmitting ? "submitting..." : "submit"}
            </button>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Register;
