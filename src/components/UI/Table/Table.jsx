import React from 'react';
import classes from "./Table.module.css";
import Tr from "./Tr/Tr";
import Th from "./Th/Th";

const Table = ({ head, children }) => {
    return (
        <table className={classes.table}>
            <thead className={classes.thead}>
            <Tr>
                {head?.map((item) => <Th style={item === "" ? {width: '0'} : {}}>{item}</Th>)}
            </Tr>
            </thead>
            <tbody className={classes.tbody}>
                {children}
            </tbody>
        </table>
    );
};

export default Table;