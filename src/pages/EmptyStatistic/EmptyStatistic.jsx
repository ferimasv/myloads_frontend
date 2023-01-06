import React from 'react';
import classes from './EmptyStatistic.module.css';

const EmptyStatistic = () => {
    return (
        <div className={classes.empty}>Чтобы посмотреть информацию, нажмите на кнопки справа или слева</div>
    );
};

export default EmptyStatistic;