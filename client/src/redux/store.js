import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import paymentReducer from "./slices/paymentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    payment: paymentReducer, // ✅ add
  },
});

export default store;