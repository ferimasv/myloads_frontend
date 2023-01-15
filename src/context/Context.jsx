import React from 'react';
import EmployeesContext from "./EmployeesContext";
import StatisticContext from "./StatisticContext";
import ErrorContext from "./ErrorContext";

const Context = ({children}) => {
    return (
        <EmployeesContext>
            <StatisticContext>
                <ErrorContext>
                    {children}
                </ErrorContext>
            </StatisticContext>
        </EmployeesContext>
    );
};

export default Context;