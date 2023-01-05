import React from 'react';
import classes from "./Block.module.css";

const Block = ({children}) => {
    return (
        <div className={classes.block}>
            {children}
        </div>
    );
};

export default Block;