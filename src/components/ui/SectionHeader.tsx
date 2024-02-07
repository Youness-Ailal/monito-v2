import { IoArrowForward } from "react-icons/io5";
import Button from "../ui/Button";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

//@ts-ignore
function SectionHeader({ title1, title2, path }) {
  const isMobile = useMediaQuery({
    query: "(max-width:500px)",
  });
  return (
    <div className="section__header">
      <div className="section__left">
        <h5 className="heading-5 section__arrival">{title1}</h5>
        <h3 className="section__title heading-3">{title2}</h3>
      </div>
      <div className="section__right">
        {!isMobile && (
          <Link to={path}>
            <Button
              variant="outline"
              styling="expand"
              icon={<IoArrowForward />}>
              View more
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default SectionHeader;
