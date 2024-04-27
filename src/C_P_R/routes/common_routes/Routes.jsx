import { createBrowserRouter } from "react-router-dom";
import Root from "../../pages/Root";
import ErrorPage from "../../pages/ErrorPage";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import AddTouristsSpot from "../../pages/AddTouristsSpot";
import PrivateRoute from "../private_routes/PrivateRoute";
import AllTouristsSpot from "../../pages/AllTouristsSpot";
import MyList from "../../pages/MyList";

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
            },
            {
                path: "add-tourists-spot",
                element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
            },
            {
                path: "all-tourists-spot",
                element: <AllTouristsSpot></AllTouristsSpot>,
                loader: () => fetch("http://localhost:5000/touristSpots")
            },
            {
                path: "my-list",
                element: <PrivateRoute><MyList></MyList></PrivateRoute>,
                loader: () => fetch("http://localhost:5000/touristSpots")
            }
        ]
    }
])    