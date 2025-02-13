import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';  // To access Redux state
import { useResendVerificationCodeMutation, useVerifyOTPMutation } from '../redux/api/auth/authApi';
import { useParams } from 'react-router-dom';

export default function OtpVerification() {
    const { register, handleSubmit, setFocus } = useForm();
    const [verifyOTP, { isLoading, error }] = useVerifyOTPMutation();
    const [resendVerificationCode] = useResendVerificationCodeMutation();
    const param = useParams();
    const email = param.email;

    const onSubmit = async (data) => {
        const code = Object.values(data).join('');
        console.log('Verification Code:', code);

        try {
            const result = await verifyOTP({ email, code }).unwrap();
            console.log("Verified Res", result);
            toast.success("OTP verified successfully!");
        } catch (error) {
            console.log("OTP Error",error);
            toast.error(error?.data?.message || "Invalid OTP, please try again.");
        }
    };

    // Resend OTP functionality
    const onResend = async () => {
        try {
            const result = await resendVerificationCode({ email }).unwrap();
            toast.success("Verification code sent to your email!");
        } catch (error) {
            console.log(error);
            toast.error(error?.data?.message || "Failed to resend OTP. Please try again.");
        }
    };

    React.useEffect(() => {
        setFocus('digit1');
    }, [setFocus]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-2xl p-14 max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center mb-4">Verification code</h2>
                <p className="text-center text-sm text-gray-600 mb-6">
                    We sent a reset link to <span className="font-medium">{param?.email}</span>. Enter the 5-digit code mentioned in the email.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                    <div className="flex space-x-3 mb-6">
                        {[...Array(4)].map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                {...register(`digit${index + 1}`, { required: true })}
                                className="w-12 h-12 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                onInput={(e) => {
                                    if (e.target.value.length === 1 && index < 4) {
                                        setFocus(`digit${index + 2}`);
                                    }
                                }}
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#ED1E79] text-white py-2 rounded-lg hover:bg-pink-600 transition"
                    >
                        Verify Code
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    You have not received the email?{' '}
                    <button
                        onClick={onResend}  // Trigger resend on click
                        className="text-green-500 font-medium hover:underline">
                        Resend
                    </button>
                </p>
            </div>
        </div>
    );
}
