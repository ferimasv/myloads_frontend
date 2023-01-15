import React, {createContext, useContext, useState} from 'react';
import Button from "../components/UI/Button/Button";

const Error = createContext(null);

const ErrorContext = ({children}) => {
    const [ error, setError ] = useState([
        // { text: '1', solution: '2' },
    ]);

    function deleteError() {
        setError(([ first, ...prevError]) => {
            return prevError;
        })
    }
    function addError(text, code = 0) {
        let message;
        switch (code) {
            case 404:
                message = "Данные не были найдены";
                break;
            case 304:
                message = "Данные не были найдены";
                break;
            case 401:
                message = "Вы не авторизованы";
                break;
            case 403:
                message = "Нет прав для просмотра этих данных";
                break;
            default:
                message = 'Произошла ошибка, попробуйте позднее';
                break;
        }
        setError((prev) => {
            return [...prev, { text: text ?? message }]
        })
    }

    return (
        <Error.Provider
            value={{
                error, setError,
                deleteError, addError
            }}
        >{children}</Error.Provider>
    );
};

export function ErrorState () {
    return useContext(Error);
}

export default ErrorContext;