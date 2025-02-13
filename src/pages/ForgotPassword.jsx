import React from 'react';
import { useForm } from 'react-hook-form';
import { useSendForgetOtpMutation } from '../redux/api/auth/authApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function ForgotPassword() {
    const [sendForgetOtp, { isLoading, error }] = useSendForgetOtpMutation();
    const navigate = useNavigate(); // Initialize navigate

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const email = data.email;
        console.log("Requested Email: ", email);

        try {
            const res = await sendForgetOtp(email).unwrap();
            console.log("OTP Sent: ", res);
            toast.success('OTP sent successfully to your email!');
            navigate('/otp-verification');

        } catch (err) {
            console.error("Error sending OTP:", err);
            toast.error('Failed to send OTP. Please try again.');
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
                        <button type="submit" className="px-4 bg-[#ED1E79] text-white py-2 rounded hover:bg-pink-600">
                            {isLoading ? 'Sending...' : 'Send Code'}
                        </button>
                    </div>
                </form>

                {error && <p className="text-red-500 text-center mt-2">Failed to send OTP. Please try again.</p>}
            </div>
        </div>
    );
}
