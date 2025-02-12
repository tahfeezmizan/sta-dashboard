import Login from "../pages/Login";
import { createBrowserRouter, } from "react-router-dom";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    }
]);

export default router;