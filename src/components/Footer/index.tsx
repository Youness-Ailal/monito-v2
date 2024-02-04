import Container from "../ui/Container";
import logo from "/images/logo.svg";
import "./footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__container">
          <figure className="subscribe">
            <h3 className="subscribe__title heading-3">
              Register now so you don't miss our programs
            </h3>
            <form className="subscribe__form">
              <input
                type="email"
                name="email"
                className="subscribe__email"
                placeholder="Enter Your Email"
                required
              />
              <button type="submit" className="subscribe__button">
                Subscribe
              </button>
            </form>
          </figure>
          <div className="footer__sections">
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  Home
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/pets" className="footer__link">
                  Category
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/about" className="footer__link">
                  About
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/contact" className="footer__link">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="footer__socials">
              <li className="footer__social">
                <i className="bx bxl-facebook-circle"></i>
              </li>
              <li className="footer__social">
                <i className="bx bxl-twitter"></i>
              </li>
              <li className="footer__social">
                <i className="bx bxl-youtube"></i>
              </li>
              <li className="footer__social">
                <i className="bx bxl-instagram"></i>
              </li>
            </ul>
          </div>
          <div className="footer__bottom">
            <p className="footer__copyright">
              &copy; {new Date().getFullYear()}{" "}
              <a
                target="_blank"
                href="ttps://www.linkedin.com/in/youness-ailal/">
                Youness Ailal
              </a>
              . All right reserved
            </p>
            <img src={logo} alt="monito logo" className="footer__logo" />
            <div className="footer__policy">
              <a>Terms of Service</a>
              <a>Privacy Policy</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
