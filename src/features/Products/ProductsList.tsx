import { PRODUCTS } from "@/data/productsData";
import Container from "../../components/ui/Container";
import "./products.scss";
import ProductCard from "./ProductCard";
function ProductsList({ limit = 8 }) {
  return (
    <Container>
      <div className="products__container">
        {PRODUCTS.slice(0, limit).map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </Container>
  );
}

export default ProductsList;
