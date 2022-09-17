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
        <form name="login-form" className="field-group">
            <div className="field">
                <label className="field__label" htmlFor="">Логин</label>
                <input
                    className="field__input" name="login" type="text" autoComplete="login" placeholder="Введите логин"
                    onChange={event => setUsername(event.target.value)}
                />
                    <span className="field__icon --type-error mdi mdi-alert-circle"/>
            </div>
            <div className="field">
                <label className="field__label" htmlFor="">Пароль</label>
                <input
                    className="field__input" name="password" type="password" autoComplete="password" placeholder="Введите пароль"
                    onChange={event => setPassword(event.target.value)}
                />
                    <span className="field__icon --type-error mdi mdi-alert-circle"/>
            </div>
            <span id="login_form_error" className="field-group__info-msg --hide">Логин или пароль указаны не
              верно.</span>
            <input
                className="button --theme-primary" id="login_btn" value="Войти"
                onClick={() => doLogin()}
            />
        </form>
    );
};

export default LoginPage;
