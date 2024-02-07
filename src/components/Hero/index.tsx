import Container from "../ui/Container";
import "./hero.scss";
import linesvg from "/images/line-2.svg";
import Button from "../ui/Button";
import { IoArrowDownSharp } from "react-icons/io5";
import { MdOutlinePlayCircle } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const isDesktop = useMediaQuery({
    query: "(min-width:1000px)",
  });
  return (
    <Container>
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__title heading-1">
            <span>One</span>
            <span>More</span>
            <span className="hero__title--friend">
              Friend
              <img src={linesvg} className="hero__title--line" />
            </span>
          </h1>
          <h2 className="hero__title-second heading-2">Thousands More Fun!</h2>
          <p className="paragraph hero__paragraph">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="hero__buttons">
            <Button
              onClick={() => {
                window.scrollTo({ behavior: "smooth", top: 700 });
              }}
              styling="overflow"
              icon={<IoArrowDownSharp />}>
              Explore More
            </Button>
            <Button variant="outline">
              Watch Intro
              <MdOutlinePlayCircle style={{ fontSize: "2.4rem" }} />
            </Button>
          </div>
        </div>
        <div className="hero__image-container">
          <img
            src={!isDesktop ? "images/hero-mobile.webp" : "images/hero.webp"}
            alt={!isDesktop ? "a group of puppies" : "a woman holdin her puppy"}
            loading="lazy"
            className="hero__image"
          />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
