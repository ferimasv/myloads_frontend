import React from 'react';
import StatisticOwnerTable from "../StatisticOwnerTable/StatisticOwnerTable";
import StatisticCarrierTable from "../StatisticCarrierTable/StatisticCarrierTable";

const StatisticTable = () => {
    return (
        <div>
            <StatisticCarrierTable/>
            <StatisticOwnerTable/>
        </div>
    );
};

export default StatisticTable;