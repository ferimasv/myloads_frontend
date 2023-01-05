import React, {createContext, useContext} from 'react';

const Employees = createContext(null);

const EmployeesContext = ({children}) => {
    return (
        <Employees.Provider
            value={{}}
        >{children}</Employees.Provider>
    );
};

export function EmployeesState () {
    return useContext(Employees);
}

export default EmployeesContext;