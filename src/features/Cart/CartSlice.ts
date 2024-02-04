// import { ProductType } from "@/data/productsData";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ItemType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};
type StateType = {
  items: ItemType[];
};
const initialState: StateType = {
  items: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ItemType>) {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        state.items[itemIndex].quantity += action.payload.quantity;
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload
      );
      if (state.items[itemIndex].quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload);
      } else {
        state.items[itemIndex].quantity -= 1;
      }
    },
  },
});

export default CartSlice.reducer;
export const { addToCart, removeFromCart } = CartSlice.actions;
