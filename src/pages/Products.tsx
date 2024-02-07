import ProductsFilters from "@/features/Products/ProductsFilters";
import ProductsList from "@/features/Products/ProductsList";
import MainLayout from "@/layouts/MainLayout";
import { PRODUCTS } from "@/data/productsData";
import Container from "@/components/ui/Container";
import Header from "@/components/ui/Header";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Products() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(PRODUCTS);
  const brandsString = searchParams.get("brands");
  const brands = brandsString ? JSON.parse(brandsString) : [];
  const type = searchParams.get("type");
  const min = searchParams.get("min");
  const max = searchParams.get("max");

  useEffect(() => {
    let filteredProducts = PRODUCTS;

    if (brands.length > 0) {
      filteredProducts = filteredProducts.filter(item =>
        brands.includes(item.brand.toLowerCase())
      );
    }
    if (type) {
      filteredProducts = filteredProducts.filter(item =>
        item.type.toLowerCase().includes(type.toLowerCase())
      );
    }
    if (min) {
      filteredProducts = filteredProducts.filter(item => item.price >= +min);
    }

    if (max) {
      filteredProducts = filteredProducts.filter(item => item.price <= +max);
    }
    setProducts(filteredProducts);
  }, [type, min, max, brands]);

  return (
    <MainLayout>
      <Container>
        <main className="products-layout">
          <ProductsFilters />
          <div>
            <Header>Our Products</Header>
            {products.length > 0 ? (
              <ProductsList products={products} />
            ) : (
              <p className="no-result">0 Results found!</p>
            )}
          </div>
        </main>
      </Container>
    </MainLayout>
  );
}

export default Products;
