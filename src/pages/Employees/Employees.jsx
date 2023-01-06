import React from 'react';
import EmployeesInfo from "../../components/EmployeesInfo/EmployeesInfo";
import EmployeesTable from "../../components/EmployeesTable/EmployeesTable";

const Employees = () => {
    return (
        <div>
            <EmployeesInfo/>
            <EmployeesTable/>
        </div>
    );
};

export default Employees;