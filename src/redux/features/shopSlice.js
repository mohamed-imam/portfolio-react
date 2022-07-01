import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://fakestoreapi.com";

export const getShopItems = createAsyncThunk("shop/getShopItems", () => {
  return fetch(`${baseURL}/products`)
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => err);
});

const initialState = {
  products: [],
  loading: false,
  err: {},
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addProduct: () => {
      console.log("add produc");
    },
  },
  extraReducers: {
    [getShopItems.pending]: (state) => {
      // pending
      state.loading = true;
    },
    [getShopItems.fulfilled]: (state, action) => {
      // fulfilled
      state.products = action.payload;
      state.loading = false;
    },
    [getShopItems.rejected]: (state, action) => {
      // rejected
      state.err = action.payload;
      state.loading = false;
    },
  },
});

export const { addProduct } = shopSlice.actions;

export default shopSlice.reducer;
