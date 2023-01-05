import React from 'react';
import {Link} from "react-router-dom";
import Ul from "../UI/Ul/Ul";
import Logo from "../UI/Logo/Logo";
import HeaderLink from "../UI/HeaderLink/HeaderLink";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__container}>
                <div>
                    <Link to="/product"><Logo/></Link>
                </div>

                <nav>
                    <Ul>
                        <HeaderLink icon="freight" to="/product/shipment">Грузы</HeaderLink>
                        <HeaderLink icon="freight" to="/product/tenders">Тендеры</HeaderLink>
                        <HeaderLink icon="vehicle" to="/product/vehicles">Транспорт</HeaderLink>
                        <HeaderLink icon="chats" to="/product/chat">Сообщения</HeaderLink>
                    </Ul>
                </nav>

                <menu>
                    <Ul>
                        <HeaderLink icon="profile" to="/product/profile"> </HeaderLink>
                    </Ul>
                </menu>
            </div>
        </header>
    );
};

export default Header;