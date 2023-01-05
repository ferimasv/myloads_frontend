import React from 'react';
import classes from "./Search.module.css";

const Search = ({ label, helperText, }) => {
    return (
        <div>
            <label className={classes.label} >{label}</label>
            <input className={classes.input}/>
            <label className={classes.helperText} >{helperText}</label>
        </div>
    );
};

export default Search;