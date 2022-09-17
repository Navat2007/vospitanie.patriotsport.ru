import React, { Component } from 'react';
import image from '../../../images/team-strength-img.png';

export default class TeamStrengthPage extends Component {

    render() {
        return (
            <div className="content__block">
                <h2 className="content__title">Проект для школьных классов «Сила команды»</h2>
                <p>
                    <b>Организатор:</b>
                    <a className="link" href="https://lab-putesh.mskobr.ru/" rel="nofollow noreferrer noopener"
                        target="_blank">ГБУ
                        «Лаборатория путешествий»</a>
                </p>
                <p>
                    Проект разработан для учащихся 10-х классов и их классных руководителей и направлен на
                    налаживание коммуникации между детьми и классным руководителем в недавно сформированном классном
                    коллективе.
                </p>
                <p>
                    Проект реализуется в формате путешествия в студию онлайн телевидения <a className="link"
                        rel="nofollow noreferrer noopener"
                        target="_blank"
                        href="https://www.youtube.com/channel/UCA9UkxqGvkIS5kmwAhVJ6mg">#ПроПоходТВ</a> и
                    предполагает непосредственное участие детей в онлайн игре в прямом эфире.
                </p>
                <p>
                    Студия онлайн-телевидения <a className="link" rel="nofollow noreferrer noopener" target="_blank"
                        href="https://www.youtube.com/channel/UCA9UkxqGvkIS5kmwAhVJ6mg">#ПроПоходТВ</a>
                    располагается в офисе ГБУ “Лаборатория путешествий” по адресу, г. Москва, ул. Нижегородская д.3.
                </p>
                <img src={image} alt="Сила команды" className='image' width={"50%"} style={{"margin": "0 auto", "display": "block"}}/>
                <ul className="list --type-number-label --theme-accent">
                    <li>
                        Подача <span className="--color-primary --fw-bold">заявки</span> на сайте <a href="https://lab-putesh.mskobr.ru/"
                            className="link --color-accent"
                            rel="noopener noreferrer nofollow"
                            target="_blank">www.lab-putesh.mskobr.ru</a>
                    </li>
                    <li><span className="--color-primary --fw-bold">Встреча</span> специалиста ГБУ «Лаборатория
                        путешествий» <span className="--color-primary --fw-bold">с классным руководителем</span>,
                        формирование запроса по работе с классом;
                    </li>
                    <li>
                        <span className="--color-primary --fw-bold">Встреча</span> специалиста ГБУ «Лаборатория
                        путешествий» <span className="--color-primary --fw-bold">с классом</span>, рассказ о проекте;
                    </li>
                    <li>
                        <span className="--color-primary --fw-bold">Съемка</span> классом видеоролика-визитки;
                    </li>
                    <li>
                        <span className="--color-primary --fw-bold">Выезд класса в студию</span> онлайн-телевидения <a
                            className="link"
                            rel="nofollow noreferrer noopener" target="_blank"
                            href="https://www.youtube.com/channel/UCA9UkxqGvkIS5kmwAhVJ6mg">#ПроПоходТВ</a>, участие
                        в игре во время прямой трансляции;
                    </li>
                    <li>
                        Получение обратной связи от класса — <span className="--color-primary --fw-bold">съемка интервью
                            участников</span> после игры.
                    </li>
                </ul>
            </div>
        )
    }

}