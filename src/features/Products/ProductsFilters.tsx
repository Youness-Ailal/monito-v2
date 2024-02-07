import Checkbox from "@/components/ui/Checkbox/Checkbox";
import Header from "@/components/ui/Header";
import "@/index.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MdOutlineAttachMoney } from "react-icons/md";
import { PRODUCTS } from "@/data/productsData";

function ProductsFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const brandsData = [
    ...new Set(PRODUCTS.map(item => item.brand.toLowerCase())),
  ];
  const typeParam = searchParams.get("type");

  const [type, setType] = useState(typeParam || "");

  const [min, setMin] = useState<number | string>("");
  const [max, setMax] = useState<number | string>("");
  const [brands, setBrands] = useState<string[]>([]);

  function hasBrand(brand: string) {
    return brands.includes(brand);
  }
  useEffect(() => {
    if (type) {
      searchParams.set("type", type);
    } else {
      searchParams.delete("type");
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
    if (brands.length) {
      searchParams.set("brands", JSON.stringify(brands));
    } else {
      searchParams.delete("brands");
    }

    setSearchParams(searchParams);
  }, [type, searchParams, setSearchParams, min, max, brands]);
  return (
    <div>
      <div>
        <Header>Filters</Header>
      </div>
      <ul className="filters">
        <li>
          <p>Type</p>
          <Checkbox
            checked={type === "food"}
            onChange={e => (e.target.checked ? setType("food") : setType(""))}
            id="food"
            label="Food"
          />
          <Checkbox
            checked={type === "toy"}
            onChange={e => (e.target.checked ? setType("toy") : setType(""))}
            id="toy"
            label="Toy"
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
          <p>Brand</p>
          {brandsData.map(item => (
            <Checkbox
              key={item}
              id={item}
              label={item}
              checked={brands.includes(item)}
              onChange={() => {
                if (hasBrand(item))
                  setBrands(prev => prev.filter(brand => brand !== item));
                if (!hasBrand(item)) setBrands(prev => [...prev, item]);
              }}
            />
          ))}
        </li>
      </ul>
    </div>
  );
}

export default ProductsFilters;
