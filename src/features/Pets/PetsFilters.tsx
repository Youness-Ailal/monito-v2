import Checkbox from "@/components/ui/Checkbox/Checkbox";
import Header from "@/components/ui/Header";
import "@/index.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MdOutlineAttachMoney } from "react-icons/md";
import { PETS } from "@/data/petsData";

function PetsFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const colors = [...new Set(PETS.map(item => item.color.toLowerCase()))];

  const [gender, setGender] = useState("");
  const [min, setMin] = useState<number | string>("");
  const [max, setMax] = useState<number | string>("");
  const [color, setColor] = useState("");

  useEffect(() => {
    if (gender) {
      searchParams.set("gender", gender);
    } else {
      searchParams.delete("gender");
    }
    if (min) {
      searchParams.set("min", min.toString());
    } else {
      searchParams.delete("min");
    }
    if (max) {
      searchParams.set("max", max.toString());
    } else {
      searchParams.delete("max");
    }
    if (color) {
      searchParams.set("color", color);
    } else {
      searchParams.delete("color");
    }

    setSearchParams(searchParams);
  }, [gender, searchParams, setSearchParams, min, max, color]);
  return (
    <div>
      <Header>Filters</Header>
      <ul className="filters">
        <li>
          <p>Gender</p>
          <Checkbox
            checked={gender === "male"}
            onChange={e =>
              e.target.checked ? setGender("male") : setGender("")
            }
            id="male"
            label="Male"
          />
          <Checkbox
            checked={gender === "female"}
            onChange={e =>
              e.target.checked ? setGender("female") : setGender("")
            }
            id="female"
            label="Female"
          />
        </li>
        <li>
          <p>Price</p>
          <div className="filters__inputs">
            <div className="filters__input">
              <input
                value={min}
                onChange={e => setMin(e.target.value)}
                type="number"
                placeholder="Min"
              />
              <MdOutlineAttachMoney className="filters__icon" />
            </div>
            <div className="filters__input">
              <input
                value={max}
                onChange={e => setMax(e.target.value)}
                type="number"
                placeholder="Max"
              />
              <MdOutlineAttachMoney className="filters__icon" />
            </div>
          </div>
        </li>
        <li>
          <p>Color</p>
          {colors.map(item => (
            <Checkbox
              key={item}
              id={item}
              label={item}
              checked={color === item}
              onChange={() => setColor(item)}
            />
          ))}
        </li>
      </ul>
    </div>
  );
}

export default PetsFilters;
