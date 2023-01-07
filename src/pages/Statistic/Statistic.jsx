import React from 'react';
import DatePickerCalendar from "../../components/DatePickerCalendar/DatePickerCalendar";
import Button from "../../components/UI/Button/Button";
import classes from './Statistic.module.css'
import StatisticTable from "../../components/StatisticTable/StatisticTable";
import useFetch from "../../hooks/useFetch/useFetch";
import {EmployeesState} from "../../context/EmployeesContext";

const Statistic = () => {
    const { setCarrier, setOwner } = EmployeesState();

    async function useStatisticCarrier() {
        const { carrier } = await useFetch('/currier', {
            headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzIxNjQ5NDIsInN1YiI6IjIyIn0.7Vi3LuvEnkyoDfD5fli4iNEVRcupYEVZhaIV8CnNP1E'},
        });
        setCarrier(carrier);
    }

    async function useStatisticOwner() {
        const { owner } = await useFetch('/owner', {
            headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzIxNjQ5NDIsInN1YiI6IjIyIn0.7Vi3LuvEnkyoDfD5fli4iNEVRcupYEVZhaIV8CnNP1E'},
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