import { CiShoppingCart } from "react-icons/ci";
import "./cart.scss";
import { createPortal } from "react-dom";
import CartOverview from "./CartOverview";
import { useEffect, useRef } from "react";
import { useCartSelector } from "@/store/hooks";
import { useFirstRender } from "@/hooks/useFirstRender";

function Cart() {
  const { items } = useCartSelector(state => state.cart);
  const cartItems = items.reduce((acc, curr) => acc + curr.quantity, 0);
  const cart = useCartSelector(state => state.cart);

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

  const isFirstRender = useFirstRender();
  useEffect(() => {
    if (!isFirstRender) showCart();
  }, [cart]);
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
