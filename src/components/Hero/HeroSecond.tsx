import { IoArrowDownSharp } from "react-icons/io5";
import Container from "../ui/Container";
import Button from "../ui/Button";
import secondHero from "/images/second-hero.webp";
import { MdOutlinePlayCircle } from "react-icons/md";
import { FaPaw } from "react-icons/fa";

function HeroSecond() {
  return (
    <Container>
      <section className="second-hero">
        <div className="second-hero__container">
          <img
            src={secondHero}
            alt="woman holding a puppy"
            className="second-hero__image"
          />

          <div className="second-hero__text">
            <h1 className="second-hero__title heading-1">
              Adoption
              <FaPaw className="second-hero__feet" />
            </h1>
            <h2 className="second-hero__title-second heading-2">
              We need help. so do they!
            </h2>
            <p className="second-hero__paragraph paragraph">
              Adopt a pet and give it a home, it will be love you back
              unconditionally.
            </p>
            <div className="second-hero__buttons">
              <Button styling="overflow" icon={<IoArrowDownSharp />}>
                Explore More
              </Button>
              <Button variant="outline">
                Watch Intro
                <MdOutlinePlayCircle style={{ fontSize: "2.4rem" }} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default HeroSecond;
