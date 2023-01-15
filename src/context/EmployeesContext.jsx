import React, {createContext, useContext, useState} from 'react';

const Employees = createContext(null);

const EmployeesContext = ({children}) => {
    const [ isEditMode, setIsEditMode ] = useState(false);
    const [ countChecked, setCountChecked ] = useState(0);
    const [ employees, setEmployees ] = useState([
        { id: 3, company_status: '0', chief_last_name: '', chief_first_name: '', role: '1', user_info: { position_person: 'Руководитель', contact_phone_number: '+79113618765', contact_email: 'owner@my-loads.ru', first_name: 'Галина', last_name: 'Иванова', } },
        { id: 5, company_status: '2', chief_last_name: 'Иванова', chief_first_name: 'Галина', role: '1', user_info: { position_person: 'Специалист', contact_phone_number: '+79113602127', contact_email: 'petrovvv@my-loads.ru', first_name: 'Роман', last_name: 'Петров', } },
        { id: 7, company_status: '1', chief_last_name: 'Петров', chief_first_name: 'Роман', role: '1', user_info: { position_person: 'Стажер', contact_phone_number: '+79449008765', contact_email: 'kostivl1@my-loads.ru', first_name: 'Константин', last_name: 'Ивлев', } },
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