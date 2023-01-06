import {createBrowserRouter, Navigate} from "react-router-dom";
import React from "react";
import Profile from "../pages/Profile/Profile";
import Employees from "../pages/Employees/Employees";
import Statistic from "../pages/Statistic/Statistic";
import EmptyProfile from "../pages/EmptyProfile/EmptyProfile";
import StatisticCarrierTable from "../components/StatisticCarrierTable/StatisticCarrierTable";
import StatisticOwnerTable from "../components/StatisticOwnerTable/StatisticOwnerTable";
import EmptyStatistic from "../pages/EmptyStatistic/EmptyStatistic";

export const pages = createBrowserRouter([
    {
        path: '/product/profile',
        element: <Profile/>,
        children: [
            {
                path: "",
                element: <EmptyProfile/>,
            },
            {
                path: "employees",
                element: <Employees/>,
            },
            {
                path: "statistic",
                element: <Statistic/>,
                children: [
                    {
                        path: "",
                        element: <EmptyStatistic/>,
                    },
                    {
                        path: "carrier",
                        element: <StatisticCarrierTable/>,
                    },
                    {
                        path: "owner",
                        element: <StatisticOwnerTable/>,
                    },
                    {
                        path: '*',
                        element: <Navigate to="" replace={true}/>
                    },
                ]
            },
            {
                path: '*',
                element: <Navigate to="" replace={true}/>
            },
        ]
    },
    {
        path: '*',
        element: <Navigate to={'/product/profile'} replace={true}/>,
    }
])