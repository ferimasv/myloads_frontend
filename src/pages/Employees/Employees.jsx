import React from 'react';
import classes from './Employees.module.css';
import Search from "../../components/UI/Search/Search";
import Button from "../../components/UI/Button/Button";

const Employees = () => {
    const employees = [];

    return (
        <div>
            <div className={classes.row}>
                <div className={classes.column}>
                    <h2>Количество сотрудников - {employees.length}</h2>
                </div>
            </div>

            <div className={classes.row}>
                <div className={classes.column}>
                    <Button>Добавить сотрудника</Button>
                </div>

                <div className={classes.column}>
                    <Search/>
                </div>
            </div>
        </div>
    );
};

export default Employees;