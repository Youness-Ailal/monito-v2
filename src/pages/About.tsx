import PageHeader from "@/components/ui/PageHeader";
import MainLayout from "@/layouts/MainLayout";
import about from "/images/about.webp";
import Container from "@/components/ui/Container";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <MainLayout>
      <Container>
        <PageHeader src={about} title={"Know about us"} />
        <AboutUs />
      </Container>
    </MainLayout>
  );
}

export default About;
