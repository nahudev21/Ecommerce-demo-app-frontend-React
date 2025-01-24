import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existedProduct = state.find((item) => item.id === product.id);

      if (!existedProduct) {
        state.push({ ...product, quantity: 1 });
      } else {
        existedProduct.quantity += 1;
      }
    },
    removeToCart: (state, action) => {
      const productId = action.payload;
      return state.filter((item) => item.id !== productId);
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existedProduct = state.find((item) => item.id === id);

      if (existedProduct) {
        existedProduct.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existedProduct = state.find((item) => item.id === id);

      if (existedProduct) {
        existedProduct.quantity -= 1;
      }
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});

export const {addToCart, removeToCart, increaseQuantity, decreaseQuantity, clearCart} = cartSlice.actions;
export default cartSlice.reducer;