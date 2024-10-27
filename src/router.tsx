import {createBrowserRouter} from "react-router-dom";
import {Auth} from "./components/static/auth/Auth";
import {Landing} from "./components/static/landing/Landing";
import {Dashboard} from "./components/static/dashboard/Dashboard";
import {PrivateRouter} from "./components/shared/PrivateRouter";
import {Settings} from "./components/static/setings/Settings";
import {UsersList} from "./components/users/UsersList";
import {PostsList} from "./components/posts/PostsList";

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
        element: (
            // <PrivateRouter fallback={'/auth'}>
                <Dashboard />
            // </PrivateRouter>
        ),
        children: [
            {
                path: "users",
                element: <UsersList />
            },
            {
                path: "posts",
                // eslint-disable-next-line react/jsx-no-undef
                element: <PostsList />
            },
            {
                path: "settings",
                element: <Settings />
            },
        ]
    },

])