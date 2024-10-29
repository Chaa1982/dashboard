import {createBrowserRouter} from "react-router-dom";
import {Auth} from "./components/static/auth/Auth";
import {Landing} from "./components/static/landing/Landing";
import {Dashboard} from "./components/static/dashboard/Dashboard";
import {Settings} from "./components/static/setings/Settings";
import {UsersList} from "./components/users/UsersList";
import {PostsList} from "./components/posts/PostsList";
import {Comments} from "./components/coments/Comments";

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
                path: "comments",
                // eslint-disable-next-line react/jsx-no-undef
                element: <Comments />
            },
            {
                path: "settings",
                element: <Settings />
            },
        ]
    },

])