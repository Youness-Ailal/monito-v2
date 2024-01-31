import Nav from "@/components/Nav";
import MobileNav from "@/components/Nav/MobileNav";
import { type ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

export default MainLayout;
