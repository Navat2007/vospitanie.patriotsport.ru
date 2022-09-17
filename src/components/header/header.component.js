import React from 'react';
import { useNavigate } from "react-router-dom";

import {UserContext} from "../../context";
import AuthService from "../../services/auth.service";

import logoImage from '../../images/logo.svg';


const Header = () => {

    const {user, setUser} = React.useContext(UserContext);
    const userData = AuthService.getCurrentUser();
    const navigate = useNavigate();

    const doLogin = () => {

        navigate('/login', { replace: true });

    }

    const doLogout = () => {

        AuthService.logout();
        setUser(false);
        navigate('/', { replace: true });

    }

    if(window.global.debug){
        console.log("User: ", userData);
    }

    return (
        <header className="header">
            <div className="header__logo-block">
                <img className="logo --place-header" src={logoImage} alt="Логотип"/>
                <h1 className="header__title">Организация воспитания</h1>
            </div>

            {
                user ?
                    (
                        <div id="lk_block" className="lk-block --place-header">
                            <div className="lk-block__container">
                                <p className="lk-block__school-info">
                                    <span className="lk-block__icon mdi mdi-home-city-outline"/>
                                    ГБОУ дополнительного профессионального образования города Москвы “Московский центр
                                    “Патриот.Спорт”
                                </p>
                                <div className="lk-block__person-info">
                                    <p className="lk-block__name">{userData?.title}</p>
                                    <div className="lk-block__position">{userData?.position}</div>
                                    <span className="lk-block__icon mdi mdi-account-circle"/>
                                    <button id="login_exit_btn"
                                            className="lk-block__btn-exit button --theme-primary --outline"
                                            onClick={doLogout}
                                    >
                                        Выйти <span className="mdi mdi-exit-to-app"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div id="login_block" className="lk-block --place-header">
                            <button type="button" className="lk-block__login-btn"
                                    aria-label="Авторизация для сотрудников"
                                    onClick={doLogin}
                            >
                                Авторизация для сотрудников <span className="lk-block__icon mdi mdi-login-variant"/>
                            </button>
                        </div>
                    )
            }
        </header>
    );
};

export default Header;