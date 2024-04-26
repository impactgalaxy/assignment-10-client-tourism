import { createBrowserRouter } from "react-router-dom";
import Root from "../../pages/Root";
import ErrorPage from "../../pages/ErrorPage";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/login",
                element: <LoginPage></LoginPage>
            },
            {
                path: "/register",
                element: <RegisterPage></RegisterPage>
            }
        ]
    }
])    