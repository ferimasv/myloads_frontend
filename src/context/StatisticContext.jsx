import React, {createContext, useContext, useState} from 'react';

const Statistic = createContext(null);

const StatisticContext = ({children}) => {
    const [ startDate, setStartDate ] = useState(Date.now());
    const [ endDate, setEndDate ] = useState(Date.now());

    const [ carrier, setCarrier ] = useState([
        { id: 1, company_info: { name: "OOO \"КРИСТАЛ\""}, carrier_info: { bidding_for_goods: "12", victory: "9", active_cargoes: "2", deleted_cargo: "2", losses: "3", average_starting_price: "85000", average_final_freight_price: "79540",  } },
        { id: 3, company_info: { name: "OOO \"АВРОРА\""}, carrier_info: { bidding_for_goods: "4", victory: "2", active_cargoes: "0", deleted_cargo: "1", losses: "2", average_starting_price: "60000", average_final_freight_price: "57350",  } },
    ]);
    const [ owner, setOwner ] = useState([
        { id: 4, company_model: { name: "OOO \"АВРОРА\""}, info_owner: { created_cargo: "3", active_cargoes: "1", deleted_cargo: "1", cargo_with_assigned_carrier: "3", cargoes_without_a_carrier: "0", average_starting_price: "55000", average_final_freight_price: "55000",  } },
        { id: 8, company_model: { name: "OOO \"КАПИТАЛ\""}, info_owner: { created_cargo: "1", active_cargoes: "1", deleted_cargo: "0", cargo_with_assigned_carrier: "0", cargoes_without_a_carrier: "1", average_starting_price: "48000", average_final_freight_price: "48000",  } },
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