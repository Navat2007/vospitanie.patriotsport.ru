import React, {Component} from 'react';

import Header from "./components/header/header.component";
import PreloaderComponent from "./components/preloader/preloader.component";
import Menu from "./components/menu/menu.component";

import './styles/App.scss';
import RoutesList from "./components/routes.list.component";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(state => ({
                loaded: true
            }));
        }, 1000);
    }

    render() {
        return (
            <div className="page">
                <div className="page__container">

                    <PreloaderComponent loaded={this.state.loaded}/>

                    <Header/>

                    <main className="content">

                        <Menu opened />
                        <RoutesList/>

                    </main>
                </div>
            </div>
        )
    }
}