import React from "react";
import {Link} from "react-router-dom";

import AuthService from "../../services/auth.service";
import {UserContext} from "../../context";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const {setUser} = React.useContext(UserContext);
    const navigate = useNavigate();

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const doLogin = async () => {

        if (window.global.debug) {
            console.log("do Login");
            console.log(username);
            console.log(password);
        }

        let result = await AuthService.login(username, password);

        if (window.global.debug)
            console.log("Login result: ", result);

        if (result) {
            setUser(true);
            navigate('/', { replace: true });
        }

    }

    return (
        <div className="m-popup m-login-bg">
            <div className="m-popup__card">
                <div className="m-login-form">
                    <div className="m-login-form__section">
                        <p className="m-login-form__title">Вход</p>
                        <div className="a-field">
                            <div className="a-field__inner">
                                <input className="a-field__input"
                                       name="email"
                                       type="email"
                                       autoComplete="email"
                                       placeholder="Введите логин"
                                       onChange={event => setUsername(event.target.value)}>
                                </input>
                                <i className="a-field__icon"/>
                                <span className="a-field__info"/>
                            </div>
                        </div>
                        <div className="a-field">
                            <div className="a-field__inner">
                                <input className="a-field__input"
                                       name="password"
                                       type="password"
                                       autoComplete="password"
                                       placeholder="Введите пароль"
                                       onChange={event => setPassword(event.target.value)}>
                                </input>
                                <i className="a-field__icon"/>
                                <i className="a-field__eye-icon"/>
                                <span className="a-field__info"/>
                            </div>
                        </div>
                        <button
                            onClick={() => doLogin()}
                            className="m-login-form__btn"
                            type="button"
                        >
                            Войти
                        </button>
                    </div>
                    <div className="m-login-form__social --hide">
                        <p className="m-login-form__label">Вход с помощью:</p>
                        <button className="a-social-icon-link --facebook"></button>
                        <button className="a-social-icon-link --vk"></button>
                        <button className="a-social-icon-link --telegram"></button>
                        <button className="a-social-icon-link --viber"></button>
                        <button className="a-social-icon-link --whatsapp"></button>
                    </div>
                    <div className="m-login-form__bottom --hide">
                        <Link to="/forgot">Забыли пароль?</Link>
                        <Link className="a-link-btn" to="/register">Регистрация</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
