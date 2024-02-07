import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import "../styles/home.scss";
import Container from "@/components/ui/Container";
import PetsList from "@/features/Pets/PetsList";
import HeroSecond from "@/components/Hero/HeroSecond";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductsList from "@/features/Products/ProductsList";
import Footer from "@/components/Footer";

import { IoArrowForward } from "react-icons/io5";
import Button from "../components/ui/Button";
//@ts-ignore
import { shuffle } from "lodash";
import { PETS } from "@/data/petsData";
import { PRODUCTS } from "@/data/productsData";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
const petsList = shuffle(PETS.slice(0, 8));
const products = PRODUCTS.slice(0, 8);
function Home() {
  const isMobile = useMediaQuery({
    query: "(max-width:500px)",
  });

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
          title1={"Hard to choose right products for your pets?"}
          title2={"Our Products"}
          path={"/products"}
        />

        <ProductsList products={products} />
        {/* {isMobile && (
          <Container>
            <Link to={"/products"} className="pets__more-desk">
              <Button
                variant="outline"
                styling="expand"
                icon={<IoArrowForward />}>
                View more
              </Button>
            </Link>
          </Container>
        )} */}
      </Container>
      <HeroSecond />
      <Container>
        <SectionHeader
          title1={"New Arrivals!"}
          title2={"Take A Look At Our Pets"}
          path={"/pets"}
        />
        <PetsList petsList={petsList} />
        {/* {isMobile && (
          <Container>
            <Link to={"/pets"} className="pets__more-desk">
              <Button
                variant="outline"
                styling="expand"
                icon={<IoArrowForward />}>
                View more
              </Button>
            </Link>
          </Container>
        )} */}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
