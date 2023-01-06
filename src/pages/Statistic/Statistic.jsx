import React from 'react';
import DatePickerCalendar from "../../components/DatePickerCalendar/DatePickerCalendar";
import Button from "../../components/UI/Button/Button";
import classes from './Statistic.module.css'
import StatisticTable from "../../components/StatisticTable/StatisticTable";

const Statistic = () => {
    function fetchStatistic() {

    }
    return (
        <div>
            <div className={classes.block__inner}>
                <DatePickerCalendar/>

                <div className={classes.button__outer}>
                    <Button onClick={fetchStatistic}>Запросить</Button>
                </div>
            </div>

            <StatisticTable/>
        </div>
    );
};

export default Statistic;