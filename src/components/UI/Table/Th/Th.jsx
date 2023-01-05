import React from 'react';
import classes from './Th.module.css';

const Th = ({ children, ...props }) => {
    return (
        <th
            className={classes.th}
            {...props}
        >{children}</th>
    );
};

export default Th;