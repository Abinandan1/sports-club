import { Form, useNavigation } from "react-router-dom";
import { Wrapper } from "../wrappers/Login";
import { SecondaryNavbar } from "../components";
import { notify } from "../components/Notification";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(
      "https://sports-club-server.onrender.com/api/v1/email/login",
      data
    );
    document.querySelector(".login-form").reset();
    notify.success("Logged in successfully!");
  } catch (error) {
    notify.error("Currently we are working on this functionality!");
  }
  return null;
};
const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <SecondaryNavbar />
      <div className="form-center">
        <div className="contact">
          <h6>login</h6>
          <Form method="post" className="login-form">
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
              className="btn login-btn"
            >
              {isSubmitting ? "submitting..." : "submit"}
            </button>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Login;
