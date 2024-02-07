import "./products.scss";
import ProductCard from "./ProductCard";
import { ProductType } from "@/data/productsData";
function ProductsList({ products }: { products: ProductType[] }) {
  return (
    <div className="products__container">
      {products.map(item => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductsList;
