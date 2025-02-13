import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useLoginMutation } from "../redux/api/auth/authApi";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // For redirecting after login

    const [login, { isLoading, error }] = useLoginMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (data) => {
        try {
            const result = await login(data).unwrap();
            const token = result.data.accessToken;

            Cookies.set('auth_token', token, { expires: 7, secure: true, sameSite: 'Strict' });

            console.log(result.data.accessToken);
            toast("User Register Sucessfully")
            navigate('/dashboard')
        } catch (error) {
            toast.error(error.message)
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-14 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-4">Log in to your account</h2>
                <p className="text-center text-gray-500 mb-6">Please enter your email and password to continue</p>

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

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                            className="mt-1 w-full p-2 border rounded focus:ring focus:ring-pink-300"
                            placeholder="********"
                        />
                        <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-9 text-gray-500">
                            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                        </button>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" {...register("rememberPassword")} className="rounded" />
                            <span className="text-gray-600">Remember Password</span>
                        </label>
                        <Link to="/forgot-password" className="text-pink-500 hover:underline">Forgot Password?</Link>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="px-4 bg-[#ED1E79] text-white py-2 rounded hover:bg-pink-600">Sign In</button>
                    </div>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Create an account
                    <Link to="/" className="text-pink-500 hover:underline"> Sign Up</Link>
                </p>
            </div>
        </div>
    );
}
