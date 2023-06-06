import { configureStore } from "@reduxjs/toolkit";
import userTokenReducer from "./token";
export const store = configureStore({
  reducer: { tokenData: userTokenReducer },
});
