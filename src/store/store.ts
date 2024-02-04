import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/Cart/CartSlice.ts";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const persistedCartReducer = persistReducer(persistConfig, CartReducer);
const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
  },
});
export default store;
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
