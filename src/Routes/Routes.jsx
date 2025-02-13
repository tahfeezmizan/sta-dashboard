import Login from "../pages/Login";
import { createBrowserRouter, } from "react-router-dom";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword";
import SetNewPassword from "../pages/SetNewPassword";
import OtpVerification from "../pages/OtpVerification";
import Dashboard from "../pages/Dashboard/Dashboard";
import ChangePassword from "../pages/Dashboard/Profile/ChangePassword";
import Profile from "../pages/Dashboard/Profile/Profile";
import UserTable from "../pages/Dashboard/Profile/UserTable";
import App from "../App";
import DashboardLayOut from "../layout/DashboardLayOut";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Register />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/forgot-password/",
                element: <ForgotPassword />,
            },
            {
                path: "/set-new-password",
                element: <SetNewPassword />,
            },
            {
                path: "/otp-verification/:email",
                element: <OtpVerification />,
            },
        ]
    },

    {
        path: "dashboard",
        element: <DashboardLayOut />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
        ]
    },
    {
        path: "profile",
        element: <DashboardLayOut />,
        children: [
            {
                index: true,
                element: <Profile />
            },
        ]
    },
    {
        path: "change-password",
        element: <DashboardLayOut />,
        children: [
            {
                index: true,
                element: <ChangePassword />
            },
        ]
    },
    {
        path: "user-list",
        element: <DashboardLayOut />,
        children: [
            {
                index: true,
                element: <UserTable />
            },
        ]
    },

]);

export default router;