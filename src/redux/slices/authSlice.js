import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticate: false,
    user: null,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSucces: (state, action) => {
            state.isAuthenticate = true;
            state.user = action.payload;
            state.loading = false;
            localStorage.setItem("token", JSON.stringify(state.user.token));
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isAuthenticate = false;
            state.user = null;
            localStorage.removeItem("token");
        }
    },
});

export const { loginStart, loginSucces, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;