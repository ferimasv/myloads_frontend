import React from 'react';
import EmployeesContext from "./EmployeesContext";
import StatisticContext from "./StatisticContext";

const Context = ({children}) => {
    return (
        <EmployeesContext>
            <StatisticContext>
                {children}
            </StatisticContext>
        </EmployeesContext>
    );
};

export default Context;