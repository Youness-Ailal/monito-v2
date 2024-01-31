import { useMediaQuery } from "react-responsive";
import MobileNav from "./MobileNav";
import DeskNav from "./DeskNav";

function Nav() {
  const isMobile = useMediaQuery({
    query: "(max-width:700px)",
  });
  if (isMobile) return <MobileNav />;
  return <DeskNav />;
}

export default Nav;
