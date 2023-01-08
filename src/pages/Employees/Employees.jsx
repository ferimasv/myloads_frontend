import React, {useEffect} from 'react';
import EmployeesInfo from "../../components/EmployeesInfo/EmployeesInfo";
import EmployeesTable from "../../components/EmployeesTable/EmployeesTable";
import {EmployeesState} from "../../context/EmployeesContext";
import useFetch from "../../hooks/useFetch/useFetch";

const Employees = () => {
    const { setEmployees } = EmployeesState();

    async function useEmployees() {
        const {persons} = await useFetch('/persons');
        const _persons = persons.filter(item => item.user_info.first_name !== "" && item.user_info.position_person !== "");
        setEmployees(_persons);
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