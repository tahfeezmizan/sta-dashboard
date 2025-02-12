import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./api/baseApi";

const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
    }
});

export default store;