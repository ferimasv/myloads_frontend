import {useEffect, useState} from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import classes from './DatePickerCalendar.module.css';
import Select from "../UI/Select/Select";
import ru from "date-fns/locale/ru";
import {add} from "date-fns";
import DatePickerRangeTwoMonth from "./DatePickerRangeTwoMonth";
import {StatisticState} from "../../context/StatisticContext";

registerLocale("ru", ru);

const DatePickerCalendar = () => {
    const [ selected, setSelected ] = useState("1")
    const { startDate, setStartDate, endDate, setEndDate, } = StatisticState();

    function changeDate(value) {
        let start, end;
        const today = Date.now();
        const yesterday = add(today, {days: -1});

        const isDateFromCalendar = value === '6';
        if (isDateFromCalendar) {
            return
        }

        switch (value) {
            case "1":
                start = today; end = today;
                break;
            case "2":
                start = yesterday; end = yesterday;
                break;
            case "3":
                const startWeek = add(today, {weeks: -1});
                start = startWeek; end = yesterday;
                break;
            case "4":
                const startMouth = add(today, {months: -1});
                start = startMouth; end = yesterday;
                break;
            case "5":
                const endTime = today;
                const startTime = new Date('01/01/2018');
                start = startTime; end = endTime;
                break;
            default: break;
        }
        setStartDate(start); setEndDate(end);
    }

    return (
        <div className={classes.container}>
            <div className={classes.container__DatePicker}>
                <DatePickerRangeTwoMonth
                    selected={startDate}
                    onChange={(date) => {
                        setSelected("6");
                        setStartDate(date)
                    }}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    type='start'
                />
            </div>
            <div className={classes.container__DatePicker}>
                <DatePickerRangeTwoMonth
                    selected={endDate}
                    onChange={(date) => {
                        setSelected("6");
                        setEndDate(date)
                    }}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    type='end'
                />
            </div>

            <Select
                value={selected}
                onChange={(e) => {
                    setSelected(e.target.value);
                    changeDate(e.target.value)
                }}
            >
                <option value="1">Сегодня</option>
                <option value="2">Вчера</option>
                <option value="3">За прошедшую неделю</option>
                <option value="4">За прошедший месяц</option>
                <option value="5">За все время</option>
                <option value="6">Из календаря</option>
            </Select>

        </div>
    );
};

export default DatePickerCalendar;