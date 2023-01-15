import React from 'react';
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {ErrorState} from "../../context/ErrorContext";

const Error = () => {
    const { error } = ErrorState();

    return (
        <>
            {error.length !== 0
                ?
                <ErrorMessage
                    text={error[0].text}
                    solution={error[0].solution}
                />
                :
                <></>
            }
        </>
    );
};

export default Error;