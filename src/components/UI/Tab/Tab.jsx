import React from 'react';
import classes from "./Tab.module.css";
import {NavLink} from "react-router-dom";

const Tab = ({ to, children }) => {
    return (
        <NavLink
            className={({isActive }) => (isActive ? `${classes.link} ${classes.link_active}` : classes.link)} to={to}
        >{children}</NavLink>
    );
};

export default Tab;
