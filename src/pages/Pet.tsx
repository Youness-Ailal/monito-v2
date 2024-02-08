import Container from "@/components/ui/Container";
import Header from "@/components/ui/Header";
import SectionHeader from "@/components/ui/SectionHeader";
import { PETS } from "@/data/petsData";
import Customers from "@/features/Pets/Customers";
import PetDetails from "@/features/Pets/PetDetails";
import PetsList from "@/features/Pets/PetsList";
import MainLayout from "@/layouts/MainLayout";
//@ts-ignore
import { shuffle } from "lodash";

function Pet() {
  const petsList = shuffle(PETS).slice(0, 4);

  return (
    <MainLayout>
      <PetDetails />
      <Container>
        <div className="spacing"></div>
        <Header>Our lovely customer</Header>
        <Customers />
      </Container>
      <Container>
        <SectionHeader
          path={"/pets"}
          title1={"Whats new?"}
          title2={"See more puppies"}
        />
        <PetsList petsList={petsList} />
      </Container>
    </MainLayout>
  );
}

export default Pet;
