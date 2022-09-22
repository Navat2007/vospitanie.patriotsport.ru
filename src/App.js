import React from 'react';

import AuthService from "./services/auth.service";
import Header from "./components/header/header.component";
import PreloaderComponent from "./components/preloader/preloader.component";
import Menu from "./components/menu/menu.component";
import RoutesList from "./components/routes.list.component";
import {UserContext} from "./context";

import './styles/App.scss';

const App = () => {

    const [user, setUser] = React.useState(!!AuthService.getCurrentUser());
    const [openState, setOpenState] = React.useState(false);

    setTimeout(() => {
        setOpenState(true);
    }, 1000);

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <div className="page">
                <div className="page__container">

                    <PreloaderComponent loaded={openState}/>

                    <Header/>

                    <RoutesList/>

                </div>
            </div>
        </UserContext.Provider>
    )
}

export default App;