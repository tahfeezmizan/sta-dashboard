import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://outlet-appointment-booking.onrender.com/v1",
        // credentials: "include",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            headers.set("Content-Type", "application/json");
            return headers;
        }
    }),
    endpoints: () => ({}),
});

export const { useGetPostsQuery, useAddPostMutation } = baseApi;
export default baseApi;
