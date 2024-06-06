import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../Components/MainRoot";
import ErrorElement from "../Components/ErrorElement";
import Home from "../Components/Home";
import UserProfile from "../Components/UserProfile";
import UpdateProfile from "../Components/UpdateProfile";
import SignIn from "../Components/SignIn";
import Register from "../Components/Register";
import PrivateRoute from "../Components/PrivateRoute";
import SelectedProperty from "../Components/SelectedProperty";

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
                element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: '/updateProfile',
                element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><SelectedProperty></SelectedProperty></PrivateRoute>,
                loader: ()=> fetch('/Data.json')
            }
        ]
    }
])


export default WebPaths;