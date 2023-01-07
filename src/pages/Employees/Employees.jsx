import React, {useEffect} from 'react';
import EmployeesInfo from "../../components/EmployeesInfo/EmployeesInfo";
import EmployeesTable from "../../components/EmployeesTable/EmployeesTable";
import {EmployeesState} from "../../context/EmployeesContext";
import useFetch from "../../hooks/useFetch/useFetch";

const Employees = () => {
    const { setEmployees } = EmployeesState();

    async function useEmployees() {
        const {persons} = await useFetch('/persons');
        console.log(persons);
        setEmployees(persons);
    }

    useEffect(() => {
        const employees = useEmployees;
        employees();
    }, [])

    return (
        <div>
            <EmployeesInfo/>
            <EmployeesTable/>
        </div>
    );
};

export default Employees;