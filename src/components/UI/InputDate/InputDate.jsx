import React from 'react';
import classes from "./InputDate.module.css";

//TODO: в один универсальный input

const InputDate = ({data_type = 'start', ...props}) => {
    return (
        <div className={classes.container}>
            <label className={classes.label}>{data_type === 'start' ? 'от' : 'до'}</label>
            <input {...props} className={classes.date} type="text"/>
        </div>
    );
};

export default InputDate;