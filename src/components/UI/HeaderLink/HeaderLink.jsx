import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./HeaderLink.module.css";

const HeaderLink = ({ icon, to, children }) => {
    return (
        <NavLink
            className={({isActive }) => (isActive ? `${classes.link} ${classes.link_active} ${classes[`${icon}_active`]} ${classes.icon}` : `${classes.link} ${classes[icon]} ${classes.icon}`)} to={to}
        >{children}</NavLink>
    );
};

export default HeaderLink;