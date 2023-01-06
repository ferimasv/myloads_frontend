import React from 'react';
import classes from "./EmployeesInfo.module.css";
import H2 from "../UI/H2/H2";
import Button from "../UI/Button/Button";
import Search from "../UI/Search/Search";
import {EmployeesState} from "../../context/EmployeesContext";
import H3 from "../UI/H3/H3";

const EmployeesInfo = () => {
    const { employees, isEditMode, toggleMode, countChecked } = EmployeesState();

    return (
        <div>
            <div className={classes.row}>
                <div className={classes.column}>
                    <H2>Количество сотрудников - {employees.length}</H2>
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

            {
                isEditMode ?
                    <div className={classes.row}>
                        <H3>Выбрано - {countChecked}</H3>
                        <div className={classes.buttons_container}>
                            <Button type='secondary'>Удалить</Button>
                            <Button onClick={() => toggleMode()} type='secondary'>Отмена</Button>
                        </div>
                    </div>
                    :
                    <></>
            }
        </div>
    );
};

export default EmployeesInfo;