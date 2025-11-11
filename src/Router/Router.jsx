import { createBrowserRouter } from "react-router";

import Root from "../Components/Pages/Root/Root";
import Home from "../Components/Home";
import SignUp from "../Components/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
                index:true,
                path:"/",
                Component:Home
            },
            {
                path:"/signup",
                Component:SignUp
            }
        ]
    }
])