import React from 'react';
import Message from "../UI/Message/Message";
import {ErrorState} from "../../context/ErrorContext";

const ErrorMessage = ({ text, solution }) => {
    const { deleteError } = ErrorState();
        return (
            <Message
                title='Ошибка'
                text={text}
                solution={solution}
                backgroundColor='var(--color--error-90)'
                borderColor='var(--color--error-50)'
                deleteElement={deleteError}
            />
        );
    };

export default ErrorMessage;