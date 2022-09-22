import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class SportPage extends Component {

    render() {
        return (
            <div className="content__block">
                <h2 className="content__title">Спорт</h2>
                <ul className="card-deck --size-xs">
                    <li>
                        <Link to="/sport/gto/" className="card --type-sport-icon">
                            <span className="card__icon sport-icon --type-gto"/>
                            <h3 className="card__title">ГТО</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sport/cybersport/" className="card --type-sport-icon">
                            <span className="card__icon sport-icon --type-cybersport"/>
                            <h3 className="card__title">Киберспорт</h3>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

}