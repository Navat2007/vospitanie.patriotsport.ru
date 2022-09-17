import React, {Component} from 'react';

import imageSport from '../../../images/card__img-sport.jpg';
import imageDosug from '../../../images/card__img-dosug.jpg';
import imageEducom from '../../../images/card__img-educom.jpg';
import imageArhiv from '../../../images/card__img-arhiv.jpg';

export default class OnlineProjectPage extends Component {

    render() {
        return (
            <div className="content__block">
                <h2 className="content__title">Онлайн-проекты</h2>
                <ul className="card-deck --size-md">
                    <li>
                        <a className="card" href="https://patriotsport.moscow/category/online-projects/sport/"
                           rel="noopener noreferrer nofollow"
                           target="_blank">
                            <img className="card__img --ratio-half" src={imageSport} alt="Спорт"/>
                            <span className="card__more-btn">Подробнее &rarr;</span>
                        </a>
                    </li>
                    <li>
                        <a className="card" href="https://patriotsport.moscow/category/online-projects/dosug/"
                           rel="noopener noreferrer nofollow"
                           target="_blank">
                            <img className="card__img --ratio-half" src={imageDosug} alt="Досуг"/>
                            <span className="card__more-btn">Подробнее &rarr;</span>
                        </a>
                    </li>
                    <li>
                        <a className="card" href="https://patriotsport.moscow/category/online-projects/educom/"
                           rel="noopener noreferrer nofollow" target="_blank">
                            <img className="card__img --ratio-half" src={imageEducom} alt="Образование"/>
                            <span className="card__more-btn">Подробнее &rarr;</span>
                        </a>
                    </li>
                    <li>
                        <a className="card" href="https://patriotsport.moscow/category/online-projects/arhiv/"
                           rel="noopener noreferrer nofollow"
                           target="_blank">
                            <img className="card__img --ratio-half" src={imageArhiv} alt="Архив"/>
                            <span className="card__more-btn">Подробнее &rarr;</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

}