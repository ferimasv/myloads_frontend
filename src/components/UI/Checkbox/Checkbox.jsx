import React from 'react';
import classes from './Checkbox.module.css';
import classNames from "../../../helpers/classNames";

const Checkbox = ({...props}) => {
    const { checked, disabled } = props;
    const css = classNames( classes.custom, (checked ? classes.checked : ''), (disabled ? classes.disabled : '')  )
    return (
        <label className={classes.label}>
            <input {...props} className={classes.checkbox} type="checkbox"/>
            <span className={css}></span>
        </label>
    );
};

export default Checkbox;