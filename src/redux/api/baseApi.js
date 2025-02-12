import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: " https://outlet-appointment-booking.onrender.com/v1",
        credentials: "include"
    }),
    endpoints: () => ({}),
})

export const { useGetPostsQuery, useAddPostMutation } = baseApi;
export default baseApi;