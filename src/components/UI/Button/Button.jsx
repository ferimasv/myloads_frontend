import React from 'react';
import classes from './Button.module.css';
import classNames from "../../../helpers/classNames";

const Button = ({type = 'primary', size = 'big', children, ...props}) => {
    return (
        <button className={classNames(classes.button, classes[type], classes[size])} {...props}>{children}</button>
    );
};

export default Button;