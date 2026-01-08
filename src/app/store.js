import { configureStore } from "@reduxjs/toolkit";
import furnitureReducer from "../features/furnitures/furnitureSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    furniture: furnitureReducer,
    cart: cartReducer,
  },
});
