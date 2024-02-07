import { forwardRef } from "react";
import "./cart.scss";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useCartSelector } from "@/store/hooks";
import CartItem from "./CartItem";
import emptyCart from "/images/empty-cart.svg";

const CartOverview = forwardRef<HTMLDivElement>(function CartOverview(
  //@ts-ignore
  { onHideCart },
  ref
) {
  const cartItems = useCartSelector(state => state.cart.items);
  const isCartEmpty = cartItems.length === 0;

  const subTotal = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <div ref={ref}>
      <div className="cart__overview" data-state="closed">
        <div className="cart__top">
          <p>Your Cart</p>
          <button onClick={onHideCart} className="cart__close">
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <div className="cart__center">
          <ul>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
        {!isCartEmpty && (
          <div className="cart__total">
            <div className="cart__total--sub">
              <span>Subtotal :</span>
              <span>{subTotal.toLocaleString()} DH</span>
            </div>
            <div className="cart__total--shipping">
              <span>Shipping :</span>
              <span>30 DH</span>
            </div>
            <div className="cart__total--total">
              <span>Total :</span>
              <span>{(subTotal + 30).toLocaleString()} DH</span>
            </div>
          </div>
        )}
        {!isCartEmpty && (
          <button className="button cart__total--pay">Checkout</button>
        )}
        {isCartEmpty && (
          <p className="cart__empty">
            <img
              src={emptyCart}
              alt="empty cart"
              className="cart__empty--icon"
            />
            <span>Your Cart is Empty!</span>
          </p>
        )}
      </div>
      <div
        onClick={onHideCart}
        ref={ref}
        className="cart__overlay"
        data-state="closed"></div>
    </div>
  );
});

export default CartOverview;
