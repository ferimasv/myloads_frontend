import React from 'react';
import DatePickerCalendar from "../../components/DatePickerCalendar/DatePickerCalendar";
import Button from "../../components/UI/Button/Button";
import classes from './Statistic.module.css'
import StatisticTable from "../../components/StatisticTable/StatisticTable";
import useFetch from "../../hooks/useFetch/useFetch";
import {StatisticState} from "../../context/StatisticContext";

const Statistic = () => {
    const { setCarrier, setOwner } = StatisticState();

    async function useStatisticCarrier() {
        const { carrier } = await useFetch('/auth/analytic/currier', {
            headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzM0NDIwNDIsInN1YiI6IjIyIn0.UxB5TN2UEv7ALQw1noCOlBdUQyhohunxJHCyPSnl4ss'},
        });

        setCarrier(carrier);
    }

    async function useStatisticOwner() {
        const { owner } = await useFetch('/auth/analytic/owner', {
            headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzM0NDIwNDIsInN1YiI6IjIyIn0.UxB5TN2UEv7ALQw1noCOlBdUQyhohunxJHCyPSnl4ss'},
        });
        const _owner = owner.filter(item => item.company_model.name !== "" ).slice(0, 5);
        setOwner(_owner);
    }

    async function useStatistic() {
        await useStatisticCarrier();
        await useStatisticOwner()
    }

    return (
        <div>
            <div className={classes.block__inner}>
                <DatePickerCalendar/>

                <div className={classes.button__outer}>
                    <Button onClick={useStatistic}>Запросить</Button>
                </div>
            </div>

            <StatisticTable/>
        </div>
    );
};

export default Statistic;