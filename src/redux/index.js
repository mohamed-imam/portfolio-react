import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
import shopSlice from "./features/shopSlice";

// STORE
export const store = configureStore({
  reducer: {
    todoReducer,
    shopSlice,
  },
});
