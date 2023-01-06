import React from 'react';
import {StatisticState} from "../../context/StatisticContext";
import Tr from "../UI/Table/Tr/Tr";
import Td from "../UI/Table/Td/Td";
import Table from "../UI/Table/Table";
import H2 from "../UI/H2/H2";
import classes from './StatisticCarrierTable.module.css';

//TODO: переделать type={ (index % 2 === 0) ? "striped" : "" }
//      внутрь Tr

const StatisticCarrierTable = () => {
    const { carrier } = StatisticState();
    console.log('sjdflkjs')

    return (
        <div>
            <div className={classes.head}>
                <H2>Перевозчики</H2>
            </div>
            <Table
                head={[ "Компания", 'Всего торгов', 'Победа', 'Принятых в работу', 'Из них удаленных',
                    'Поражение', 'Стартовая средняя стоимость перевозки', 'Принятая средняя стоимость перевозки' ]}
            >
                {carrier?.map((item, index) => (
                    <Tr
                        type={ (index % 2 === 0) ? "striped" : "" }
                        key={item.id}
                    >
                        <Td>{item.company_info.name}</Td>
                        <Td>{item.carrier_info.bidding_for_goods}</Td>
                        <Td>{item.carrier_info.victory}</Td>
                        <Td>{item.carrier_info.active_cargoes}</Td>
                        <Td>{item.carrier_info.deleted_cargo}</Td>
                        <Td>{item.carrier_info.losses}</Td>
                        <Td>{item.carrier_info.average_starting_price}</Td>
                        <Td>{item.carrier_info.average_final_freight_price}</Td>
                    </Tr>
                ))}
            </Table>
        </div>
    );
};

export default StatisticCarrierTable;