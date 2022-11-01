import React from 'react';
import MyLink from '../../../../components/link/link.component';

const FederalProjectTheatrePage = () => {

    React.useEffect(() => {

        document.title = "Школьный театр";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">Школьный театр</h2>
            <div>
                <p><b>Школьный театр</b> — площадка <b>для взаимодействия и
                    неформального
                    общения</b> детей, родителей, педагогов путем совместного участия в
                    коллективном творческом деле.
                </p>
                <div className="quote">
                    <blockquote className="quote__text">
                        «Наша задача – к 2024 году создать театр в каждой школе. Важно
                        разработать
                        модель
                        создания школьного театра через механизмы взаимодействия
                        школа-вуз-театр-партнер»
                    </blockquote>
                    <span
                        className="quote__author">Министр просвещения России С.С. Кравцов</span>
                </div>
                <ul className="list">
                    <li>Возможность обучаться театральному искусству</li>
                    <li>Открытые показы спектаклей</li>
                    <li>Совместная деятельность детей и взрослых</li>
                </ul>
                <p><b>Реализация проекта на уровне школы:</b></p>
                <ul className="list">
                    <li>Наличие в каждой школе театра</li>
                    <li>Страница школьных театров на сайте Школа.Москва</li>
                    <li>Открытие/реализация программ дополнительного образования
                        <ul className="list">
                            <li>сценическая речь;</li>
                        </ul>
                        <ul>
                            <li>ораторское искусство;</li>
                        </ul>
                        <ul>
                            <li>актерское мастерство;</li>
                        </ul>
                        <ul>
                            <li>режиссура;</li>
                        </ul>
                        <ul>
                            <li>сценарное искусство;</li>
                        </ul>
                        <ul>
                            <li>искусство грима;</li>
                        </ul>
                        <ul>
                            <li>мастерская художника-декоратора</li>
                        </ul>
                        <ul>
                            <li>вокал;</li>
                        </ul>
                        <ul>
                            <li>мастерская театрального костюма;</li>
                        </ul>
                        <ul>
                            <li>ритмопластика;</li>
                        </ul>
                        <ul>
                            <li>хореография;</li>
                        </ul>
                        <ul>
                            <li>сценическое движение;</li>
                        </ul>
                        <ul>
                            <li>звукорежиссура</li>
                        </ul>
                        <ul>
                            <li>Другие</li>
                        </ul>
                    </li>
                </ul>
                <p><b>Организационно-методическая поддержка</b></p>
                <ul className="list">
                    <li>Проект «Профессиональный наставник»</li>
                </ul>
                <p>Постановка школьных спектаклей педагогами школы под руководством
                    профессиональных
                    режиссеров</p>
                <ul className="list">
                    <li>Клуб руководителей школьных театров</li>
                </ul>
                <p>Мастер-классы по специальным театральным дисциплинам, место встречи с
                    ведущими
                    театральными деятелями</p>
                <ul className="list">
                    <li>Создание банка сценариев и типовых программ ДО</li>
                </ul>
                <p>Размещение на сайте Школа.Москва сценариев, адаптированных для Школьных
                    театров,
                    а
                    также типовых программ по специальным театральным дисциплинам</p>

                <p>
                    <MyLink href={"http://vcht.center/metodcenter/shkolnye-teatry/"} text={"Перечень документов на сайте Всероссийского центра художественного творчества"} />
                </p>
            </div>
        </div>
    )

}

export default FederalProjectTheatrePage;