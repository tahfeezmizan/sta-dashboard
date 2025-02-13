import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

export default function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const passwordToggle = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="">
            <div className="w-full max-w-2xl bg-white p-6  mt-4">
                <h2 className="text-2xl font-semibold text-center mb-4">Change Password</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700">Current Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                            className="mt-1 w-full p-2 border rounded focus:ring focus:ring-pink-300"
                            placeholder="********"
                        />
                        <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-9 text-gray-500">
                            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                        </button>
                        {errors.currentPassword && <p className="text-red-500 text-xs mt-1">{errors.currentPassword.message}</p>}
                    </div>
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700">New Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                            className="mt-1 w-full p-2 border rounded focus:ring focus:ring-pink-300"
                            placeholder="********"
                        />
                        <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-9 text-gray-500">
                            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                        </button>
                        {errors.newPassword && <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>}
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            {...register("confirmPassword", { required: "Confirm Password is required" })}
                            className="mt-1 w-full p-2 border rounded focus:ring focus:ring-pink-300"
                            placeholder="********"
                        />
                        <button type="button" onClick={passwordToggle} className="absolute right-3 top-9 text-gray-500">
                            {showConfirmPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                        </button>
                        {errors.confirmNewPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmNewPassword.message}</p>}
                    </div>

                    <div className="text-center">
                        <button type="submit" className="w-full px-4 bg-[#ED1E79] text-white py-2 rounded hover:bg-pink-600">Sing Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
