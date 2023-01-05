import React from 'react';
import classes from "./Ul.module.css";

const Ul = ({children}) => {
    return (
        <ul className={classes.container}>
            {Array.isArray(children) ?
                children?.map((item) => (
                    <li className={classes.item}>{item}</li>
                ))
                :
                children
            }
        </ul>
    );
};

export default Ul;