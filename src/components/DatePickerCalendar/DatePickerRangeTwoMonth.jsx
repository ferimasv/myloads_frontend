import React from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import InputDate from "../UI/InputDate/InputDate";
import './DatePickerRangeTwoMonth.css';
registerLocale("ru", ru);
const DatePickerRangeTwoMonth = ({ type, ...props }) => {
    return (
        <DatePicker
            locale="ru"
            dateFormat="dd.MM.yyyy"
            monthsShown={2}
            customInput={<InputDate data_type={type}/>}
            {...props}
        />
    );
};

export default DatePickerRangeTwoMonth;