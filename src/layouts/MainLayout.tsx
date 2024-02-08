import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { type ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <div className="spacing"></div>
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
