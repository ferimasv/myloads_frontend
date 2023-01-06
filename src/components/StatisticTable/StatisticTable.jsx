import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import classes from "./StatisticTable.module.css";
import TableLink from "./TableLink/TableLink";

const StatisticTable = () => {
    return (
        <div className={classes.statistic_table}>
            <TableLink
                to="carrier"
                data_type="start"
            ></TableLink>
            <div className={classes.content}>
                <Outlet/>
            </div>
            <TableLink
                data_type="end"
                to="owner"
            ></TableLink>
        </div>
    );
};

export default StatisticTable;