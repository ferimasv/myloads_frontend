import React from 'react';
import {StatisticState} from "../../context/StatisticContext";
import Table from "../UI/Table/Table";
import Tr from "../UI/Table/Tr/Tr";
import Td from "../UI/Table/Td/Td";

const StatisticOwnerTable = () => {
    const { owner } = StatisticState();

    return (
        <Table
            head={[ "Компания", 'Создано грузов', 'Активных грузов', 'Удаленных грузов', 'С водителем',
                'Без водителей', 'Стартовая средняя стоимость перевозки', 'Принятая средняя стоимость перевозки' ]}
        >
            {owner?.map((item, index) => (
                <Tr
                    type={ (index % 2 === 0) ? "striped" : "" }
                    key={item.id}
                >
                    <Td>{item.company_model.name}</Td>
                    <Td>{item.info_owner.created_cargo}</Td>
                    <Td>{item.info_owner.active_cargoes}</Td>
                    <Td>{item.info_owner.deleted_cargo}</Td>
                    <Td>{item.info_owner.cargo_with_assigned_carrier}</Td>
                    <Td>{item.info_owner.cargoes_without_a_carrier}</Td>
                    <Td>{item.info_owner.average_starting_price}</Td>
                    <Td>{item.info_owner.average_final_freight_price}</Td>
                </Tr>
            ))}
        </Table>
    );
};

export default StatisticOwnerTable;