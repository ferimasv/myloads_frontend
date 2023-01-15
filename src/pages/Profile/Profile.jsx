import React from 'react';
import classes from './Profile.module.css'
import Header from "../../components/Header/Header";
import Block from "../../components/UI/Block/Block";
import {Outlet} from "react-router-dom";
import Tab from "../../components/UI/Tab/Tab";
import Error from "../../components/Error/Error";

const Profile = () => {
    return (
        <div>
            <Header/>
            <div className={classes.container}>
                <div className={classes.tab_container}>
                    <Tab to="employees">Сотрудники</Tab>
                    <Tab to="statistic">Статистика</Tab>
                </div>
                <Block>
                    <div className={classes.block_inner}>
                        <Outlet/>
                    </div>
                </Block>
            </div>
            <Error/>
        </div>
    );
};

export default Profile;