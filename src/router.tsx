import {createBrowserRouter} from "react-router-dom";
import {Auth} from "./components/static/auth/Auth";
import {Landing} from "./components/static/landing/Landing";
import {Dashboard} from "./components/static/dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "/auth",
        element: <Auth />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
])