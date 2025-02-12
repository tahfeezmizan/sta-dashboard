import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        const navigate = useNavigate(); 
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
