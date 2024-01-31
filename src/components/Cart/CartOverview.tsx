import { forwardRef } from "react";
import "./cart.scss";
import { IoIosCloseCircleOutline } from "react-icons/io";

const CartOverview = forwardRef<HTMLDivElement>(function CartOverview(
  //@ts-ignore
  { onHideCart },
  ref
) {
  return (
    <div ref={ref}>
      <div className="cart__overview" data-state="closed">
        <button onClick={onHideCart} className="cart__close">
          <IoIosCloseCircleOutline />
        </button>
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
