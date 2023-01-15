import React from 'react';
import DatePickerCalendar from "../../components/DatePickerCalendar/DatePickerCalendar";
import Button from "../../components/UI/Button/Button";
import classes from './Statistic.module.css'
import StatisticTable from "../../components/StatisticTable/StatisticTable";
import fetchData from "../../hooks/fetchData";
import {StatisticState} from "../../context/StatisticContext";
import {ErrorState} from "../../context/ErrorContext";

const Statistic = () => {
    const { setCarrier, setOwner } = StatisticState();
    const { error, setError, addError } = ErrorState();

    async function useStatisticCarrier() {

        try {
            const { carrier } = await fetchData('/auth/analytic/currier', {
                headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzM0NDIwNDIsInN1YiI6IjIyIn0.UxB5TN2UEv7ALQw1noCOlBdUQyhohunxJHCyPSnl4ss'},
            });
            setCarrier(carrier);
        } catch (e) {
            addError(e.message, e.status)
        }
    }

    async function useStatisticOwner() {
        const { owner } = await fetchData('/auth/analytic/owner', {
            headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzM0NDIwNDIsInN1YiI6IjIyIn0.UxB5TN2UEv7ALQw1noCOlBdUQyhohunxJHCyPSnl4ss'},
        });
        const _owner = owner.filter(item => item.company_model.name !== "" ).slice(0, 5);
        setOwner(_owner);
    }

    async function useStatistic() {

        try {
            await useStatisticCarrier();
        } catch (e) {

        }

        try {
            await useStatisticOwner()
        } catch (e) {

        }

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