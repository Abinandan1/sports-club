import { useNavigation } from "react-router-dom";
import { Wrapper } from "../wrappers/Notification";
class Notify {
  constructor(props) {}
  success = (msg) => {
    console.log(1);
    document
      .querySelector(".notification")
      .classList.add("show-success-notification");
    console.log(msg);

    document.querySelector(".notification p").textContent = msg;
    setTimeout(() => {
      document
        .querySelector(".notification")
        .classList.remove("show-success-notification");
    }, 3000);
  };
  error = (msg) => {
    console.log(2);
    document
      .querySelector(".notification")
      .classList.add("show-error-notification");
    console.log(msg);

    document.querySelector(".notification p").textContent = msg;
    setTimeout(() => {
      document
        .querySelector(".notification")
        .classList.remove("show-error-notification");
    }, 3000);
  };
}
export const notify = new Notify();
const Notification = () => {
  return (
    <Wrapper className="notification">
      <p></p>
    </Wrapper>
  );
};
export default Notification;
