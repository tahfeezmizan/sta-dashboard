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
        }),
        verifyEmail: build.mutation({
            query: (emailData) => ({
                url: "/user/auth/verify-email",
                method: "POST",
                body: emailData
            })
        }),
        resendVerificationCode: build.mutation({
            query: (resendCodeData) => ({
                url: "/user/auth/email-verification/resend-code",
                method: "POST",
                body: resendCodeData
            })
        }),

        sendForgetPasswordOTP: build.mutation({
            query: (email) => ({
                url: "/auth/forget-password/send-otp",
                method: "POST",
                body: email
            })
        }),
        verifyOTP: build.mutation({
            query: ({ email, otp }) => ({
                url: "/auth/verify-otp",
                method: "POST",
                body: { email, otp }
            })
        })
    }),
})


export const { useSingupMutation, useLoginMutation, useVerifyEmailMutation, resendCodeData, useSendForgetPasswordOTPMutation } = authApi;
export default authApi;