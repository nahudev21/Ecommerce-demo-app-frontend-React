import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: [],
    productsCopy: [],
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setAllProducts: (state, action) => {
            state.allProducts = action.payload;
            state.productsCopy = action.payload;
        },
        updateProductsCopy: (state, action) => {
            state.productsCopy = action.payload;
        },
        sortProducts: (state , action) => {
            const sortedProducts = [...state.productsCopy].sort((a, b) => {
                return action.payload === "asc" ? a.price - b.price : b.price - a.price;
            });
            state.productsCopy = sortedProducts;
        },
        filterByStatus: (state, action) => {
            const filteredProducts = state.allProducts.filter((product) => {
                return product.status.toLowerCase().includes(action.payload);
            })
            state.productsCopy = action.payload === "todos" ? state.allProducts : filteredProducts;
        },
        filterByCategory: (state, action) => {
            const filteredProducts = state.allProducts.filter((product) => {
                return product.category.includes(action.payload);
            })
            state.productsCopy = action.payload === "all" ? state.allProducts : filteredProducts;
        }
    },
})

export const { setAllProducts, updateProductsCopy, sortProducts, filterByStatus, filterByCategory } = productsSlice.actions;
export default productsSlice.reducer;