import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../Components/MainRoot";
import ErrorElement from "../Components/ErrorElement";
import Home from "../Components/Home";
import UserProfile from "../Components/UserProfile";
import UpdateProfile from "../Components/UpdateProfile";
import SignIn from "../Components/SignIn";
import Register from "../Components/Register";

const WebPaths = createBrowserRouter([
    {
        path: '/',
        element: <MainRoot></MainRoot>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/user',
                element:<UserProfile></UserProfile>
            },
            {
                path: '/updateProfile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])


export default WebPaths;