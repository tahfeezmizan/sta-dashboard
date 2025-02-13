import React from 'react';
import { useForm } from 'react-hook-form';
import { useSendForgetPasswordOTPMutation } from '../redux/api/auth/authApi';
import { toast } from 'react-toastify';

export default function ForgotPassword() {
    const [] =

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data) => {
        const email = data.email
        console.log("Regusest Email ", email);
        try {
            const result = await sendOtp(email).unwrap();
            console.log('Backend Response', result);
            toast.success("OTP sent successfully! Check your email.");

        } catch (error) {
            console.log(error);
            toast.error(error?.data?.message || "Failed to send OTP.");
        }

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-14 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-4">Forgot Password ?</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email format" } })}
                            className="mt-1 w-full p-2 border rounded focus:ring focus:ring-pink-300"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>


                    <div className="text-center">
                        <button type="submit" className="px-4 bg-[#ED1E79] text-white py-2 rounded hover:bg-pink-600">Send Code</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
