import "./Pet.scss";
import { PetType } from "@/data/petsData";
import PetCard from "./PetCard";
import { useMediaQuery } from "react-responsive";
import { IoArrowForward } from "react-icons/io5";
import Button from "../../components/ui/Button";

function PetsList({ limit = 8, petsList }) {
  const isMobile = useMediaQuery({
    query: "(max-width:500px)",
  });

  return (
    <>
      <div className="pets__container">
        {petsList.slice(0, limit).map((item: PetType) => (
          <PetCard key={item.id} pet={item} />
        ))}
      </div>
      {isMobile && (
        <div className="pets__more-desk">
          <Button variant="outline" styling="expand" icon={<IoArrowForward />}>
            View more
          </Button>
        </div>
      )}
    </>
  );
}

export default PetsList;
