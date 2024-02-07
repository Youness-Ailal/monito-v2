import "../../styles/contact.scss";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiPhoneThin } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__right">
        <h2 className="contact__title">Contact us</h2>
        <form>
          <input required type="text" name="name" placeholder="Full Name" />
          <input required type="email" name="email" placeholder="Email" />
          <textarea required name="message" placeholder="Message"></textarea>
          <button className="button">Send</button>
        </form>
      </div>
      <div className="contact__left">
        <div className="contact__link">
          <MdOutlineMailOutline className="contact__icon" />
          itsyounessaylal@gmail.com
        </div>
        <div className="contact__link">
          <PiPhoneThin className="contact__icon" />
          +212 624360624
        </div>
        <div className="contact__link">
          <IoLocationOutline className="contact__icon" />
          Drarga street 1, Agadir Morocco
        </div>
      </div>
    </div>
  );
}

export default Contact;
