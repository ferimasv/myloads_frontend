import React from 'react';
import classes from './Td.module.css';

const Td = ({ children, ...props }) => {
    return (
        <td
            {...props}
            className={classes.td}
        >{children}</td>
    );
};

export default Td;