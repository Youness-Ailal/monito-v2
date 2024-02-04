import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import "../styles/home.scss";
import Container from "@/components/ui/Container";
import PetsList from "@/features/Pets/PetsList";
import HeroSecond from "@/components/Hero/HeroSecond";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductsList from "@/features/Products/ProductsList";
import Footer from "@/components/Footer";
//@ts-ignore
import { shuffle } from "lodash";
import { PETS } from "@/data/petsData";
const petsList = shuffle(PETS);
function Home() {
  return (
    <>
      {/* <div className="offer">
        Midseason Sale! 20% OFF - auto applied at checkout
      </div> */}
      <div className="home">
        <Nav />
        <div className="spacing"></div>
        <Hero />
      </div>
      <Container>
        <SectionHeader
          title1={"New Arrivals!"}
          title2={"Take A Look At Our Pets"}
        />
        <PetsList petsList={petsList} />
      </Container>
      <HeroSecond />
      <Container>
        <SectionHeader
          title1={"Hard to choose right products for your pets?"}
          title2={"Our Products"}
        />

        <ProductsList />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
