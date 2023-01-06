import React, {createContext, useContext, useState} from 'react';

const Statistic = createContext(null);

const StatisticContext = ({children}) => {
    const [ startDate, setStartDate ] = useState(Date.now());
    const [ endDate, setEndDate ] = useState(Date.now());

    const [ carrier, setCarrier ] = useState([
        { id: 1, company_info: { name: "OOO"}, carrier_info: { bidding_for_goods: "1", victory: "1", active_cargoes: "1", deleted_cargo: "1", losses: "1", average_starting_price: "1", average_final_freight_price: "1",  } },
        { id: 3, company_info: { name: "OOO"}, carrier_info: { bidding_for_goods: "1", victory: "1", active_cargoes: "1", deleted_cargo: "1", losses: "1", average_starting_price: "1", average_final_freight_price: "1",  } },
        { id: 4, company_info: { name: "OOO"}, carrier_info: { bidding_for_goods: "1", victory: "1", active_cargoes: "1", deleted_cargo: "1", losses: "1", average_starting_price: "1", average_final_freight_price: "1",  } },
    ]);
    const [ owner, setOwner ] = useState([
        { id: 1, company_model: { name: "OOO"}, info_owner: { created_cargo: "1", active_cargoes: "1", deleted_cargo: "1", cargo_with_assigned_carrier: "1", cargoes_without_a_carrier: "1", average_starting_price: "1", average_final_freight_price: "1",  } },
        { id: 3, company_model: { name: "OOO"}, info_owner: { created_cargo: "1", active_cargoes: "1", deleted_cargo: "1", cargo_with_assigned_carrier: "1", cargoes_without_a_carrier: "1", average_starting_price: "1", average_final_freight_price: "1",  } },
        { id: 4, company_model: { name: "OOO"}, info_owner: { created_cargo: "1", active_cargoes: "1", deleted_cargo: "1", cargo_with_assigned_carrier: "1", cargoes_without_a_carrier: "1", average_starting_price: "1", average_final_freight_price: "1",  } },
    ]);


    return (
        <Statistic.Provider
            value={{
                carrier, setCarrier,
                owner, setOwner,
                startDate, setStartDate,
                endDate, setEndDate,
            }}
        >{children}</Statistic.Provider>
    );
};

export const StatisticState = () => {
    return useContext(Statistic);
};

export default StatisticContext;