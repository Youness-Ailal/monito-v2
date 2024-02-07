import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import MainLayout from "@/layouts/MainLayout";
import puppies from "/images/contact.webp";
import ContactForm from "@/components/ContactForm";

function Contact() {
  return (
    <MainLayout>
      <Container>
        <PageHeader src={puppies} title={"Can we help ?"} />
        <ContactForm />
      </Container>
    </MainLayout>
  );
}

export default Contact;
