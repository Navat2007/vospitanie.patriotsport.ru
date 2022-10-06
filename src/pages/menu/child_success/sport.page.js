import React from 'react';
import {Link} from "react-router-dom";

const SportPage = () => {

    React.useEffect(() => {

        document.title = "Спорт";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">Спорт</h2>
            <ul className="card-deck --size-md">
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

export default SportPage;