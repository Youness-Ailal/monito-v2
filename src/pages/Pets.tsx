import Container from "@/components/ui/Container";
import Header from "@/components/ui/Header";
import MainLayout from "@/layouts/MainLayout";
import PetsList from "@/features/Pets/PetsList";
import PetsFilters from "@/features/Pets/PetsFilters";
import { PETS } from "@/data/petsData";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Pets() {
  const [searchParams] = useSearchParams();
  const [pets, setPets] = useState(PETS);
  const color = searchParams.get("color");
  const gender = searchParams.get("gender");
  const min = searchParams.get("min");
  const max = searchParams.get("max");

  useEffect(() => {
    let filteredPets = PETS;

    if (color) {
      filteredPets = filteredPets.filter(
        item => item.color.toLocaleLowerCase() === color.toLocaleLowerCase()
      );
    }
    if (gender) {
      filteredPets = filteredPets.filter(
        item => item.gene.toLowerCase() === gender.toLowerCase()
      );
    }
    if (min) {
      filteredPets = filteredPets.filter(
        item => +item.price.split("DH")[0].replaceAll(",", "") >= +min
      );
    }

    if (max) {
      filteredPets = filteredPets.filter(
        item => +item.price.split("DH")[0].replaceAll(",", "") <= +max
      );
    }
    setPets(filteredPets);
  }, [gender, min, max, color]);

  return (
    <MainLayout>
      <Container>
        <main className="products-layout">
          <PetsFilters />
          <div>
            <Header>Our Pets</Header>
            {pets.length > 0 ? (
              <PetsList petsList={pets} />
            ) : (
              <p className="no-result">0 Results found!</p>
            )}
          </div>
        </main>
      </Container>
    </MainLayout>
  );
}

export default Pets;
