import { useCartDispatch } from "@/store/hooks";
import { IMAGE_URL } from "@/utils/constants";
import { LuTrash } from "react-icons/lu";
import { addToCart, removeFromCart } from "./CartSlice";

function CartItem({ item }) {
  const { id: productId, name, id, price, quantity } = item;
  const dispatch = useCartDispatch();
  const itemTotal = +(price * quantity).toFixed(2);

  function increaseQty() {
    dispatch(addToCart({ ...item, quantity: 1 }));
  }
  function descreaseQty() {
    dispatch(removeFromCart(productId));
  }
  return (
    <div className="cart__item">
      <div className="cart__item--top">
        <img src={IMAGE_URL(name!.replaceAll(" ", "%20"), 800)} alt={name} />
        <div className="cart__item--info">
          <span>#{id}</span>
          <p>{name}</p>
        </div>
        <button>
          <LuTrash className="cart__item--top--icon" />
        </button>
      </div>
      <div className="cart__item--bottom">
        <div className="cart__item--buttons">
          <button onClick={descreaseQty}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQty}>+</button>
        </div>
        <div className="cart__item--total-item">
          <p>{itemTotal.toLocaleString()} DH</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
