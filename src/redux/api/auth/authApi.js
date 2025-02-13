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
            query: ({ email, code }) => ({
                url: '/user/auth/verify-email',
                method: 'POST',
                body: { email, code },
            }),
        }),
        resendVerificationCode: build.mutation({
            query: ({ email }) => ({
                url: '/user/auth/email-verification/resend-code',
                method: 'POST',
                body: { email },
            }),
        }),
        changePassword: build.mutation({
            query: (data) => ({
                url: "/auth/admin/change-password",
                method: "POST",
                body: data,
            }),
        }),
    }),
})


export const {
    resendCodeData,
    useLoginMutation,
    useSingupMutation,
    useVerifyOTPMutation,
    useVerifyEmailMutation,
    useSendForgetOtpMutation,
    useChangePasswordMutation,
    useResendVerificationCodeMutation,
} = authApi;
export default authApi;