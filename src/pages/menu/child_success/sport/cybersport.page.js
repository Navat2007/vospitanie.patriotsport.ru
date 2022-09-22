import React from "react";
import MyLink from "../../../../components/link/link.component";

import card_image_04 from "../../../../images/gto/card-img-04.jpg";
import card_image_05 from "../../../../images/gto/card-img-05.jpg";

const CyberSportPage = () => {

    return (
        <div className="content__block">
            <h2 className="content__title">Киберспорт</h2>
            <p>
                - это одно из самых перспективных направлений XXI века, эффективная образовательная модель для московских школьников.
            </p>
            <p>
                Участвуя в соревнованиях Центра, ребята учатся работать в команде и быть целеустремленными, развивают тактическое мышление и ряд важнейших навыков: скорость принятия решений, реакцию, усидчивость.
            </p>
            <p>
                Благодаря интеллектуальным видам спорта московские школьники прокладывают дорогу к профессиям будущего: архитектор умного дома, оператор беспилотника, специалист по поиску уязвимостей, художник виртуальной реальности, разработчик нейронных сетей.
            </p>
            <p>
                <b>Контактная информация: </b> Отдел развития киберспорта <MyLink href={"mailto:ESports@edu.mos.ru"} text={"ESports@edu.mos.ru"} />
            </p>
            <h2 className="content__caption">Мероприятия</h2>
            <ul className="card-deck --size-md">
                <li>
                    <a href="" rel="noopener noreferrer nofollow" target="_blank" className="card">
                        <img className='card__img --ratio-half' src={card_image_04} alt="Функции кураторов дополнительного образования по киберспорту в школах" />
                        <p className='card__caption --place-gto'><span className="mdi mdi-star"></span> КиберКлуб</p>
                        <h3 className="card__title">Функции кураторов дополнительного образования по киберспорту в школах</h3>
                        <p className='card__more-btn'>Читать &rarr;</p>
                    </a>
                </li>
                <li>
                    <a href="" rel="noopener noreferrer nofollow" target="_blank" className="card">
                        <img className='card__img --ratio-half' src={card_image_05} alt="Каникулы в сети" />
                        <p className='card__caption --place-gto'><span className="mdi mdi-star"></span> Киберспорт</p>
                        <h3 className="card__title">Каникулы в сети</h3>
                        <p className='card__more-btn'>Читать &rarr;</p>
                    </a>
                </li>
            </ul>
            <p>
                С мероприятиями Московского киберспорта Департамента спорта города Москвы можно познакомиться <MyLink href={"https://cybermos.ru/"} text={"на сайте"} />
            </p>
        </div>
    );
};

export default CyberSportPage;
