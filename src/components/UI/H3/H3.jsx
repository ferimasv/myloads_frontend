import React from 'react';
import classes from './H3.module.css'

const H3 = ({ children, ...props }) => {
    return (
        <h3 className={classes.h3} {...props}>{children}</h3>
    );
};

export default H3;