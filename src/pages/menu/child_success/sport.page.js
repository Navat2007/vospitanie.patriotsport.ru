import React, { Component } from 'react';
import Accordion from "../../../components/accordion/accordion.component";
import MyLink from '../../../components/link/link.component';

export default class SportPage extends Component {

    render() {
        return (
            <div className="content__block">
                <h2 className="content__title">Спорт</h2>
                <ul className="card-deck --size-xs">
                    <li>
                        <a href="" className="card --type-sport-icon">
                            <span className="card__icon sport-icon --type-gto"></span>
                            <h3 className="card__title">ГТО</h3>
                        </a>
                    </li>
                    <li>
                        <a href="" className="card --type-sport-icon">
                            <span className="card__icon sport-icon --type-cybersport"></span>
                            <h3 className="card__title">Киберспорт</h3>
                        </a>
                    </li>
                </ul>
                <h2 className="content__title">ГТО</h2>
                <p>
                    По интересующим вопросам, в том числе по получению знаков ГТО, обращайтесь по телефону <MyLink href={"tel:84953692523"} text={"+7(495)369-25-23"} />
                </p>
                <p><b>Что такое ГТО?</b></p>
                <p>
                    Всероссийский физкультурно-спортивный комплекс «Готов к труду и обороне» (ГТО) — это нормативная основа физического воспитания населения страны, нацеленная на развитие массового спорта.
                </p>
                <Accordion title={"Документы"}>
                    <ul className="list --type-empty">
                    <li>
                        <MyLink className='link --type-pdf-icon' href={"/files/gto/metodic.pdf"} text={"Методические рекомендации по организации и выполнению нормативов испытаний (тестов) Всероссийского физкультурно-спортивного комплекса ГТО"} />
                    </li>
                    <li>
                        <MyLink className='link --type-pdf-icon' href={"/files/gto/prikaz-1144.pdf"} text={"Приказ № 1144 Н от 23.10.2020 г. об утверждении порядка организации оказания медицинской помощи лицам, занимающимся физической культурой и спортом (в том числе при подготовке и проведении физкультурных мероприятий и спортивных мероприятий), включая порядок медицинского осмотра лиц, желающих пройти спортивную подготовку, заниматься физической культурой и спортом в организациях и (или) выполнить нормативы испытаний (тестов) Всероссийского физкультурно-спортивного комплекса «Готов к труду и обороне» (ГТО)» и форм медицинских заключений о допуске к участию физкультурных и спортивных мероприятиях"} />
                    </li>
                    <li>
                        <MyLink className='link --type-pdf-icon' href={"/files/gto/175-prikaz.pdf"} text={"Приказ № 175 от 15.10.2021 об утверждении перечня мест тестирования ВФСК ГТО в образовательных организациях, подведомственных Департаменту образования и науки города Москвы"} />
                    </li>
                    <li>
                        <MyLink className='link --type-pdf-icon' href={"/files/gto/polozhenie-festival-gto-po-otboru-uchastnikov.pdf"} text={"Положение о проведении фестиваля ГТО по отбору участников на Всероссийские игры "} />
                    </li>
                    </ul>
                </Accordion>
                <Accordion title={"Результаты Фестиваля ГТО по отбору участников на Всероссийские этапы среди обучающихся профессиональных образовательных организаций"}>
                    <ul className="list --type-empty">
                    <li>
                        <MyLink className='link --type-pdf-icon' href={"/files/gto/itogovyj-protokol-lichnyj-zachet.pdf"} text={"Итоговый протокол личного зачета"} />
                    </li>
                    <li>
                        <MyLink className='link --type-pdf-icon' href={"/files/gto/itogovyj-protokol-komandnyj-zachet_.pdf"} text={"Итоговый протокол командного зачета"} />
                    </li>
                    </ul>
                </Accordion>
                <p><b>Полезные советы</b></p>
            </div>
        )
    }

}