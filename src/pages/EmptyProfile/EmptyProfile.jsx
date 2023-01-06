import React from 'react';
import classes from './EmptyProfile.module.css';

const EmptyProfile = () => {
    return (
        <div className={classes.empty}>Чтобы посмотреть информацию, перейдите по вкладкам выше</div>
    );
};

export default EmptyProfile;