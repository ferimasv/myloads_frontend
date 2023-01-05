import React from 'react';
import classes from './Td.module.css';

const Td = ({ children, ...props }) => {
    return (
        <td
            className={classes.td}
            {...props}
        >{children}</td>
    );
};

export default Td;