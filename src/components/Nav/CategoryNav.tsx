import { Link } from "react-router-dom";
import "./categoryNav.scss";
import { forwardRef, type ReactNode } from "react";
import { IoArrowForward } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import categoryJoin from "/images/category-join.webp";

import { categoryLinks } from "@/utils/constants";

const CategoryNav = forwardRef<HTMLDivElement>(function CategoryNav(_, ref) {
  return (
    <div className="category" ref={ref}>
      <div className="category__container">
        <div className="category__lists">
          {categoryLinks.map((item, i) => {
            return (
              <div key={i} className="category__list">
                <CategoryTitleLink
                  icon={<IoArrowForward />}
                  to={`/${item.title.toLocaleLowerCase().replace(" ", "-")}`}>
                  {item.title}
                </CategoryTitleLink>
                <ul>
                  {item.subLinks.map((link, i) => (
                    <CategoryLink
                      key={i}
                      to={`/${link.toLocaleLowerCase().replace(" ", "-")}`}>
                      {link}
                    </CategoryLink>
                  ))}
                </ul>
              </div>
            );
          })}
          <Link className="category__image" to="/">
            <img src={categoryJoin} />
          </Link>
        </div>
      </div>
    </div>
  );
});

export default CategoryNav;
type LinkProps = {
  to: string;
  children: ReactNode;
  icon?: ReactNode;
};
function CategoryTitleLink({ to, children, icon }: LinkProps) {
  return (
    <Link className="category__title-link" to={to}>
      {children}
      <span className="category__title-link--icon">{icon}</span>
    </Link>
  );
}

function CategoryLink({ to, children }: LinkProps) {
  return (
    <Link className="category__link" to={to}>
      {children}
      <span className="category__link--icon">
        <GoArrowRight />
      </span>
    </Link>
  );
}
