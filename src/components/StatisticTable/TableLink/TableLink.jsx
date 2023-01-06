import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./TableLink.module.css";
import classNames from "../../../helpers/classNames";
import getClassesByActivity from "../../../helpers/getClassesByActivity";

const TableLink = ({ children, ...props }) => {
    return (
        <NavLink
            {...props}
            className={({isActive}) => getClassesByActivity(isActive, [ classes.link, classes.arrow_disabled ], [ classes.link, classes.arrow ])}
        >{children}</NavLink>
    );
};

export default TableLink;