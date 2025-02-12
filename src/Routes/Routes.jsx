import Login from "../pages/Login";
import { createBrowserRouter, } from "react-router-dom";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword";
import SetNewPassword from "../pages/SetNewPassword";
import OtpVerification from "../pages/OtpVerification";
import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/set-new-password",
        element: <SetNewPassword />,
    },
    {
        path: "/otp-verification",
        element: <OtpVerification />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
]);

export default router;