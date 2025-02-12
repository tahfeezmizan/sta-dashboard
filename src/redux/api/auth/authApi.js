import baseApi from "../baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        singup: build.mutation({
            query: (userData) => ({
                url: `/user/create`,
                method: "POST",
                body: userData,
                credentials: "omit"
            })
        }),
        login: build.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
                credentials: "omit"
            })
        })
    }),
})


export const { useSingupMutation, useLoginMutation } = authApi;
export default authApi;