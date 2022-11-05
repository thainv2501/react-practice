import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../components/reducers/productsReducer";
import cartSlice from "../components/reducers/cartReducer";

const store = configureStore({
  reducer: { product: productSlice.reducer, cart: cartSlice.reducer },
});

export default store;
