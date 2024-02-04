import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useEffect, type ReactNode, useRef } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  const navRef = useRef(null);
  let prevOffsetY = window.scrollY;

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
