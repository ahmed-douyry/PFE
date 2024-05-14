import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../pages/Users";
import Notfound from "../pages/Notfound";
import Layout from "../Layouts/Layout";

export const router = createBrowserRouter([
    {
        element:<Layout />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            },
            {
                path:'/users',
                element:<Users />
            },
            {
                path:'*', 
                element:<Notfound />
            }
        
        ]
    },
    
])