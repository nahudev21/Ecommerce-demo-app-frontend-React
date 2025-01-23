import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action) => {
        const product = action.payload;
        const existedProduct = state.find((item) => item.id === product.id);

        if(!existedProduct) {
            state.push({...product, quantity: 1});
        } else {
            existedProduct.quantity += 1;
        };
      },
      removeToCart: (state, action) => {
        const productId = action.payload;
        return state.filter((item) => item.id !== productId);
      },
      updateQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const existedProduct = state.find((item) => item.id === id);

        if(existedProduct) {
            existedProduct.quantity = quantity;
        }
      },
      clearCart: (state, action) => {
        return [];
      },
    },
});

export const {addToCart, removeToCart, updateQuantity, clearCart} = cartSlice.actions;
export default cartSlice.reducer;