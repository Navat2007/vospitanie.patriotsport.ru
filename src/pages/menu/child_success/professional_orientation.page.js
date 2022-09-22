import React from 'react';
import {Link} from "react-router-dom";

import card_image_01 from '../../../images/card-urban-projects.jpg';
import card_image_02 from '../../../images/card-federal-projects.jpg';
import card_image_03 from '../../../images/card-professional-skill-championships.jpg';

const ProfessionalOrientationPage = () => {

    React.useEffect(() => {

        document.title = "Профориентация";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">Профориентация</h2>
            <ul className="card-deck --size-md">
                <li>
                    <Link className="card" to="/professional_orientation/city_projects">
                        <img className="card__img --ratio-half" src={card_image_01} alt="Городские проекты" />
                        <span className="card__more-btn">Подробнее &rarr;</span>
                    </Link>
                </li>
                <li>
                    <Link className="card" to="/professional_orientation/federal_projects">
                        <img className="card__img --ratio-half" src={card_image_02} alt="Федеральные проекты" />
                        <span className="card__more-btn">Подробнее &rarr;</span>
                    </Link>
                </li>
                <li>
                    <Link className="card" to="/professional_orientation/championship_mastery">
                        <img className="card__img --ratio-half" src={card_image_03} alt="Чемпионат проф. мастерства" />
                        <span className="card__more-btn">Подробнее &rarr;</span>
                    </Link>
                </li>
            </ul>
        </div>
    )

}

export default ProfessionalOrientationPage;