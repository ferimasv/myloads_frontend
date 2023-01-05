import React from 'react';
import classes from './Tr.module.css';
import classNames from "../../../../helpers/classNames";

const Tr = ({ type, children, ...props }) => {
    const css = classNames(classes.tr, (type === 'striped') ? classes.striped : "")
    return (
        <tr
            className={css}
            {...props}
        >{children}</tr>
    );
};

export default Tr;