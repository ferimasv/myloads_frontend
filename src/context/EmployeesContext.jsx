import React, {createContext, useContext, useState} from 'react';

const Employees = createContext(null);

const EmployeesContext = ({children}) => {
    const [ isEditMode, setIsEditMode ] = useState(false);
    const [ countChecked, setCountChecked ] = useState(0);
    const [ employees, setEmployees ] = useState([
        // { id: 3, company_status: '0', chief_last_name: '1', chief_first_name: '1', role: '1', user_info: { position_person: '1', contact_phone_number: '1', contact_email: '1', first_name: '1', last_name: '1', } },
        // { id: 5, company_status: '2', chief_last_name: '1', chief_first_name: '1', role: '1', user_info: { position_person: '1', contact_phone_number: '1', contact_email: '1', first_name: '1', last_name: '1', } },
        // { id: 7, company_status: '1', chief_last_name: '1', chief_first_name: '1', role: '1', user_info: { position_person: '1', contact_phone_number: '1', contact_email: '1', first_name: '1', last_name: '1', } },
    ]);

    function calculationCountSelected() {
        const count = employees.reduce((sum, current) => ((current.selected) ? sum + 1 : sum), 0);
        setCountChecked(count);
    }

    function toggleMode(currentItem) {
        const isFromTable = typeof currentItem !== "undefined";
        if (isFromTable) {
            if (!isEditMode) {
                employees.forEach((item) =>{
                    item.selected = item.id === currentItem?.id;
                })
                setEmployees(employees);
                setIsEditMode(true);
                calculationCountSelected();
            }
        } else {
            setIsEditMode(false);
        }
    }

    return (
        <Employees.Provider
            value={{
                employees, setEmployees,
                isEditMode, setIsEditMode,
                countChecked, setCountChecked,
                toggleMode, calculationCountSelected,

            }}
        >{children}</Employees.Provider>
    );
};

export function EmployeesState () {
    return useContext(Employees);
}

export default EmployeesContext;