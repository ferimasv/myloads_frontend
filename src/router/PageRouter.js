import {createBrowserRouter, Navigate} from "react-router-dom";
import React from "react";
import Profile from "../pages/Profile/Profile";
import Employees from "../pages/Employees/Employees";
import Statistic from "../pages/Statistic/Statistic";

export const pages = createBrowserRouter([
    {
        path: '/product/profile',
        element: <Profile/>,
        children: [
            {
                path: "employees",
                element: <Employees/>,
            },
            {
                path: "statistic",
                element: <Statistic/>,
            },
            {
                path: '*',
                element: <Navigate to={'employees'} replace={true}/>
            },
        ]
    },
    {
        path: '*',
        element: <Navigate to={'/product/profile'} replace={true}/>,
    }
])