import { CiShoppingCart } from "react-icons/ci";
import "./cart.scss";
import { createPortal } from "react-dom";
import CartOverview from "./CartOverview";
import { useRef } from "react";

function Cart({ cartItems = 2 }) {
  const cartRef = useRef(null);
  function showCart() {
    const element = cartRef.current! as HTMLElement;
    [...element.children].forEach(item =>
      item?.setAttribute("data-state", "open")
    );
  }
  function hideCart() {
    const element = cartRef.current! as HTMLElement;
    [...element.children].forEach(item =>
      item?.setAttribute("data-state", "closed")
    );
  }
  return (
    <>
      <button className="header__cart" onClick={showCart}>
        <CiShoppingCart className="header__cart--icon" />
        {cartItems > 0 && (
          <span className="header__cart--count">{cartItems}</span>
        )}
      </button>

      {createPortal(
        <CartOverview
          //@ts-ignore
          onHideCart={hideCart}
          ref={cartRef}
        />,
        document.body
      )}
    </>
  );
}

export default Cart;
