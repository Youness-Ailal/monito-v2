import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductDetails from "@/features/Products/ProductDetails";
import ProductsList from "@/features/Products/ProductsList";
import MainLayout from "@/layouts/MainLayout";
import { PRODUCTS } from "@/data/productsData";
//@ts-ignore
import { shuffle } from "lodash";

function Product() {
  return (
    <MainLayout>
      <ProductDetails />
      <Container>
        <SectionHeader
          path={"/products"}
          title1={"Whats new?"}
          title2={"See more products"}
        />
        <ProductsList products={shuffle(PRODUCTS)} />
      </Container>
    </MainLayout>
  );
}

export default Product;
