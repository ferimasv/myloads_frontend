import React, {createContext, useContext} from 'react';

const Statistic = createContext(null);

const StatisticContext = ({children}) => {
    return (
        <Statistic.Provider
            value={{}}
        >{children}</Statistic.Provider>
    );
};

export const StatisticState = () => {
    return useContext(Statistic);
};

export default StatisticContext;