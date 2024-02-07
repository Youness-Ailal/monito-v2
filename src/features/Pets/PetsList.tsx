import "./Pet.scss";
import { PetType } from "@/data/petsData";
import PetCard from "./PetCard";

function PetsList({ petsList }: { petsList: PetType[] }) {
  return (
    <>
      <div className="pets__container">
        {petsList.map((item: PetType) => (
          <PetCard key={item.id} pet={item} />
        ))}
      </div>
    </>
  );
}

export default PetsList;
