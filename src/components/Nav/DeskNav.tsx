import { Link, NavLink } from "react-router-dom";
import "./nav.scss";
import logo from "/images/logo.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

import Cart from "../../features/Cart";
import CategoryNav from "./CategoryNav";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function DeskNav() {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <header className="header">
          <Link to="/">
            <img src={logo} alt="" className="header__logo" />
          </Link>
          <nav className="header__navigation">
            <ul className="header__list">
              <li className="header__item">
                <NavLink to="/" className="header__link">
                  Home
                </NavLink>
              </li>
              <NavigationMenu.Item className="header__item">
                <NavigationMenu.Trigger>
                  <p className="header__link">
                    Category
                    <MdKeyboardArrowDown className="header__link--icon" />
                  </p>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="DialogContent">
                  <CategoryNav />
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <li className="header__item">
                <NavLink to="/about" className="header__link">
                  About
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink to="/contact" className="header__link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__right">
            <Link to="/wishlist" className="header__hurt">
              <IoMdHeartEmpty />
            </Link>
            <Cart />
          </div>
        </header>
      </NavigationMenu.List>
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
}
