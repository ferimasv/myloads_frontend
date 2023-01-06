import React from 'react';
import Tr from "../UI/Table/Tr/Tr";
import classes from "./EmployeesTable.module.css";
import Checkbox from "../UI/Checkbox/Checkbox";
import Td from "../UI/Table/Td/Td";
import {getCompanyStatusPerson, isExtendedRightsAccount} from "../../helpers/companyStatus";
import Button from "../UI/Button/Button";
import Table from "../UI/Table/Table";
import {EmployeesState} from "../../context/EmployeesContext";
import Th from "../UI/Table/Th/Th";

const EmployeesTable = () => {
    const { employees, setEmployees, isEditMode, setIsEditMode, toggleMode, calculationCountSelected } = EmployeesState();
    const head = [ 'Полное имя', 'Должность', 'Руководитель', 'Телефон', 'Контактный e-mail', ];

    function changeSelected(e, item) {
        item.selected = e.currentTarget.checked;
        calculationCountSelected();
    }

    return (
        <Table head={ isEditMode ? [ "", ...head ] : head}>
            {employees?.map((item, index) => (
                <Tr
                    key={item.id}
                    type={ (index % 2 === 0) ? "striped" : "" }
                    onDoubleClick={() => toggleMode(item)}
                >
                    {
                        isEditMode ?
                            <Td className={classes.checkbox__outer}><Checkbox checked={item.selected} onChange={(e) => changeSelected(e, item)}/></Td>
                            :
                            <></>
                    }
                    <Td>
                        <div className={classes[`company_status_${item.company_status}`]}>{`${item.user_info.first_name} ${item.user_info.last_name}`} <div className={classes.status}>{getCompanyStatusPerson(item.company_status)}</div></div>
                    </Td>
                    <Td>{item.user_info.position_person}</Td>
                    <Td>{`${item.chief_first_name} ${item.chief_last_name}`}</Td>
                    <Td>{item.user_info.contact_phone_number}</Td>
                    <Td>{item.user_info.contact_email}</Td>
                    {
                        isEditMode?
                            <></>
                            :
                            <Td>
                                <div className={classes.buttons_container}>
                                    <Button type='secondary' size='small'>редактировать</Button>
                                    {(isExtendedRightsAccount(item.company_status))?
                                        <Button type='secondary' size='small'>удалить</Button>
                                        :
                                        <></>
                                    }
                                </div>
                            </Td>
                    }

                </Tr>
            ))}
        </Table>
    );
};

export default EmployeesTable;