import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import {HashRouter} from "react-router-dom";

import App from './App';

const baseConfig = () => {

    window.global = {
        debug: true,
        debugArea: {
            login: true,
            register: true,
        },
        baseUrl: "62.113.118.96:9988",
        colors: {
            error: 'F24E38',
            success: '50B25F',
            alert: 'F2C438',
            info: '4363D4'
        }
    }

    axios.defaults.baseURL = 'http://' + window.global.baseUrl + '/';

    if(window.global.debug)
        console.log("App in debug mode!");

}

const startApp = () => {

    baseConfig();

    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <HashRouter>
            <App />
        </HashRouter>
    );

}

startApp();