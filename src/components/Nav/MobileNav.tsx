import { IoMdHeartEmpty } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import Cart from "../../features/Cart";
import { createPortal } from "react-dom";
import { forwardRef, useRef } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

function MobileNav() {
  const navRef = useRef(null);
  function showNav() {
    const element = navRef.current! as HTMLElement;
    [...element.children].forEach(item =>
      item?.setAttribute("data-state", "open")
    );
  }
  function hideNav() {
    console.log("im closing");

    const element = navRef.current! as HTMLElement;
    [...element.children].forEach(item =>
      item?.setAttribute("data-state", "closed")
    );
  }
  return (
    <header className="header">
      <button className="header__menu" onClick={showNav}>
        <RiMenu2Fill />
      </button>
      <div className="header__right">
        <Link to="/wishlist" className="header__hurt">
          <IoMdHeartEmpty />
        </Link>
        <Cart />
      </div>
      {createPortal(
        <MobileNavLinks
          //@ts-ignore
          onHideNav={hideNav}
          ref={navRef}
        />,
        document.body
      )}
    </header>
  );
}

export default MobileNav;

const MobileNavLinks = forwardRef<HTMLElement>(function MobileNavLinks(
  //@ts-ignore*
  { onHideNav },
  ref
) {
  return (
    //@ts-ignore*
    <div ref={ref}>
      <nav data-state="closed" className="header__navigation-mobile">
        <button
          onClick={onHideNav}
          className="header__menu header__menu--close">
          <IoIosCloseCircleOutline />
        </button>
        <ul className="header__list-mobile">
          <li className="header__item-mobile">
            <NavLink onClick={onHideNav} to="/" className="header__link-mobile">
              Home
            </NavLink>
          </li>

          <li className="header__item-mobile">
            <NavLink
              onClick={onHideNav}
              to="/about"
              className="header__link-mobile">
              About
            </NavLink>
          </li>
          <li className="header__item-mobile">
            <NavLink
              onClick={onHideNav}
              to="/contact"
              className="header__link-mobile">
              Contact
            </NavLink>
          </li>
          <li className="header__item-mobile">
            <NavLink
              onClick={onHideNav}
              to="/popular-dogs"
              className="header__link-mobile">
              Popular
            </NavLink>
          </li>
          <li className="header__item-mobile">
            <NavLink
              onClick={onHideNav}
              to="/large-dogs"
              className="header__link-mobile">
              Larg Dogs
            </NavLink>
          </li>
          <li className="header__item-mobile">
            <NavLink
              onClick={onHideNav}
              to="/small-dogs"
              className="header__link-mobile">
              Small Dogs
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        onClick={onHideNav}
        className="header__overlay"
        data-state="closed"
      />
    </div>
  );
});
