import React from 'react';
import close from '../icons/close.svg';
import classes from "./Message.module.css";

const Message = ({ title, text, solution, backgroundColor, borderColor, deleteElement }) => {
    return (
        <div
            style={{backgroundColor: backgroundColor, borderLeft: `5px solid ${borderColor}`}}
            className={classes.message}
        >
            <h4 className={classes.message__title}>{title}</h4>
            <p className={classes.message__text}>{text}</p>
            <p className={classes.message__solution}>{solution}</p>
            <button className={classes.message__close} onClick={deleteElement}>
                <img src={close} className={classes.message__close_img}/>
            </button>
        </div>
    );
};

export default Message;