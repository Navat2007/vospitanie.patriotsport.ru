import React from 'react';

import MyLink from '../../../../components/link/link.component';

const FederalProjectChildrenPage = () => {

    React.useEffect(() => {

        document.title = "Российское движение детей и молодежи";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">Российское движение детей и молодежи</h2>
            <div>
                <p>
                    <b>Общероссийское общественно-государственное движение детей и молодежи</b>
                    – это единое движение, создающееся совместно с детьми. В Движении каждый
                    найдёт
                    для себя полезное и интересное дело, сможет раскрыть свой потенциал в
                    многогранной
                    палитре возможностей.
                </p>
                <div className="quote">
                    <blockquote className="quote__text">
                        «Движение является добровольным, самоуправляемым общероссийским
                        общественно-государственным движением»
                    </blockquote>
                    <span
                        className="quote__author">Федеральный закон от 14.07.2022 г. № 261-ФЗ</span>
                </div>
                <p><b>Особенности движения:</b></p>
                <ul className="list">
                    <li>Новая организация (РДДМ) создается как эволюция существующих детских
                        организаций
                    </li>
                    <li>Участниками Движения могут быть школьники и студенты среднего
                        профессионального
                        образования
                    </li>
                </ul>
                <p><b>Регистрация участников</b></p>
                <ul className="list">
                    <li>В разработке система регистрации через портал mos.ru или МЭШ</li>
                </ul>
                <h3 className="content__caption --place-tab">Структура органов управления
                    движением на региональном уровне
                </h3>
                <img className="image"
                     src="https://patriotsport.moscow/wp-content/uploads/2022/08/struktura.png"
                     alt="Федеральные проекты по воспитанию" />
                <p><MyLink href={"http://www.kremlin.ru/acts/bank/48153"} text={"Федеральный закон «О российском движении детей и молодежи»"} /></p>
            </div>
        </div>
    )

}

export default FederalProjectChildrenPage;