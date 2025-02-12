import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./api/baseApi";
import authApi from "./api/auth/authApi";

const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware)
});

export default store;