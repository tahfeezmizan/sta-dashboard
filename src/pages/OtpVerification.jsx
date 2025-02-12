import React from 'react';
import { useForm } from 'react-hook-form';

export default function OtpVerification() {
    const { register, handleSubmit, setFocus } = useForm();

    const onSubmit = (data) => {
        const code = Object.values(data).join('');
        console.log('Verification Code:', code);
    };

    // Automatically focus the first input on component mount
    React.useEffect(() => {
        setFocus('digit1');
    }, [setFocus]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-2xl p-14 max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center mb-4">Verification code</h2>
                <p className="text-center text-sm text-gray-600 mb-6">
                    We sent a reset link to <span className="font-medium">contact@dscode...com </span> Enter the 5-digit code mentioned in the email
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                    <div className="flex space-x-3 mb-6">
                        {[...Array(5)].map((_, index) => (
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
                        className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
                    >
                        Verify Code
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    You have not received the email?{' '}
                    <button className="text-green-500 font-medium hover:underline" onClick={() => alert('Resend Code')}>Resend</button>
                </p>
            </div>
        </div>
    );
}
