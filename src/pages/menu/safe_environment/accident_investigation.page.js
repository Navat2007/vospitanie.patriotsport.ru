import React from 'react';
import Accordion from "../../../components/accordion/accordion.component";
import MyLink from '../../../components/link/link.component';

import illustration_01 from '../../../images/accident_investigation/В случае пожара в высотном здании.jpg';
import illustration_02 from '../../../images/accident_investigation/Гражданская оборона .jpg';
import illustration_03 from '../../../images/accident_investigation/Действия при пожаре.jpg';
import illustration_04 from '../../../images/accident_investigation/Если вы стали свидетелем хулиганских действий в вагоне поезда .jpg';
import illustration_05 from '../../../images/accident_investigation/Если Вы увидели, что человеку стало плохо на станции .jpg';
import illustration_06 from '../../../images/accident_investigation/Если вы упали на рельсы и поезд движется на вас .jpg';
import illustration_07 from '../../../images/accident_investigation/Если вы упали на рельсы и поезда в зоне видимости нет  .jpg';
import illustration_08 from '../../../images/accident_investigation/Если произошло возгорание.jpg';
import illustration_09 from '../../../images/accident_investigation/Если человеку стало плохо в вагоне поезда.jpg';
import illustration_10 from '../../../images/accident_investigation/Если эсклатор остановился.jpg';
import illustration_11 from '../../../images/accident_investigation/Звонок в единую службу.png';
import illustration_12 from '../../../images/accident_investigation/Как вести себя в вагоне.jpg';
import illustration_13 from '../../../images/accident_investigation/Как вести себя в толпе.jpg';
import illustration_14 from '../../../images/accident_investigation/Как вести себя на платформе.jpg';
import illustration_15 from '../../../images/accident_investigation/Как вести себя на эскалаторе.jpg';
import illustration_16 from '../../../images/accident_investigation/Как помочь человеку во время ЧС .png';
import illustration_17 from '../../../images/accident_investigation/Массовое мероприятие.jpg';
import illustration_18 from '../../../images/accident_investigation/Первичные средсва пожаротушения.jpg';
import illustration_19 from '../../../images/accident_investigation/Пожарная безопасность - кабина лифта.jpg';
import illustration_20 from '../../../images/accident_investigation/Правила поведения при пожаре в автобусе.jpg';
import illustration_21 from '../../../images/accident_investigation/Телефонный терроризм.jpg';
import illustration_22 from '../../../images/accident_investigation/Что делать если застрял в лифте..jpg';
import illustration_23 from '../../../images/accident_investigation/Что делать если лифт падает.jpg';
import illustration_24 from '../../../images/accident_investigation/Что делать при пожаре в метро .jpg';

const AccidentInvestigationPage = () => {

    const [tab, setTab] = React.useState(1);

    React.useEffect(() => {

        document.title = "Расследование несчастного случая";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">Расследование несчастного случая</h2>
            <div className="tab">
                <ul className="tab__list">
                    <li className={tab === 1 ? "tab__item --active" : "tab__item"} onClick={() => setTab(1)}>Нормативно-правовая база</li>
                    <li className={tab === 2 ? "tab__item --active" : "tab__item"} onClick={() => setTab(2)}>Типовая документация</li>
                    <li className={tab === 3 ? "tab__item --active" : "tab__item"} onClick={() => setTab(3)}>Иллюстрационный материал</li>
                </ul>
                <div className="tab__container">
                    <section className={tab === 1 ? "tab__section --active" : "tab__section"}>
                        <ul className="list --type-empty">
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/accident_investigation/Организация  работы по расследованию  несчастный случаев.ppt"} text={"Организация работы по расследованию несчастный случаев"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/accident_investigation/Приказ Минобрнауки России от 27_06_2017 N 602.rtf"} text={"Приказ Минобрнауки России от 27_06_2017 N 602"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/accident_investigation/Приказ № 602 от 27.06.2017.pdf"} text={"Приказ № 602 от 27.06.2017"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/accident_investigation/Приказ № 1070 от 30.10.2017.pdf"} text={"Приказ № 1070 от 30.10.2017"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/accident_investigation/Приказ №836 от 20.09.2017.pdf"} text={"Приказ №836 от 20.09.2017"} />
                            </li>
                        </ul>
                    </section>
                    <section className={tab === 2 ? "tab__section --active" : "tab__section"}>
                        <ul className="list --type-empty">
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/accident_investigation/Сопроводительное письмо в ДОНМ.doc"} text={"Сопроводительное письмо в ДОНМ"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/accident_investigation/Протокол осмотра осмотра места несчастного случая.rtf"} text={"Протокол осмотра места несчастного случая"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/accident_investigation/Протокол опроса  очевидца несчастного случая, должностного лица, проводившего учебное занятие (.rtf"} text={"Протокол опроса очевидца несчастного случая, должностного лица, проводившего учебное занятие"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/accident_investigation/Запрос в медицинскую организацию.doc"} text={"Запрос в медицинскую организацию"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/accident_investigation/Журнал регистрации  несчастного случая, .rtf"} text={"Журнал регистрации несчастного случая"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/accident_investigation/Акт о расследовании легкого НС.rtf"} text={"Акт о расследовании легкого НС."} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/accident_investigation/"} text={"Акт о расследовании тяжёлого/смертельного/группового НС"} />
                            </li>
                        </ul>
                    </section>
                    <section className={tab === 3 ? "tab__section --active" : "tab__section"}>
                        <Accordion title={"Видеоматериалы"}>
                            <ul className="list">
                                <li>
                                    <MyLink href={"https://www.youtube.com/watch?v=3borMxwn69c&list=TLGGkblXZ7HSuPwyMzA4MjAyMg"} text={"Пожарная безопасность в быту"} />
                                </li>
                                <li>
                                    <MyLink href={"https://www.youtube.com/watch?v=hZxhK4NyQ-Y&list=TLGGwZ0TdhL-TQkyMzA4MjAyMg&t=34s"} text={"Какие места надо обходить стороной?"} />
                                </li>
                            </ul>
                        </Accordion> 
                        <Accordion title={"Графические материалы"}>
                            <ul className="card-deck">
                                <li>
                                    <img className='image' src={illustration_01} alt="Инфографика: В случае пожара в высотном здании" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_02} alt="Инфографика: Гражданская оборона" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_03} alt="Инфографика: Действия при пожаре" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_04} alt="Инфографика: Если вы стали свидетелем хулиганских действий в вагоне поезда" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_05} alt="Инфографика: Если Вы увидели, что человеку стало плохо на станции" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_06} alt="Инфографика: Если вы упали на рельсы и поезд движется на вас" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_07} alt="Инфографика: Если вы упали на рельсы и поезда в зоне видимости нет" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_08} alt="Инфографика: Если произошло возгорание" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_09} alt="Инфографика: Если человеку стало плохо в вагоне поезда" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_10} alt="Инфографика: Если эсклатор остановился" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_11} alt="Инфографика: Звонок в единую службу" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_12} alt="Инфографика: Как вести себя в вагоне" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_13} alt="Инфографика: Как вести себя в толпе" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_14} alt="Инфографика: Как вести себя на платформе" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_15} alt="Инфографика: Как вести себя на эскалаторе" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_16} alt="Инфографика: Как помочь человеку во время ЧС" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_17} alt="Инфографика: Массовое мероприятие" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_18} alt="Инфографика: Первичные средсва пожаротушения" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_19} alt="Инфографика: Пожарная безопасность - кабина лифта" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_20} alt="Инфографика: Правила поведения при пожаре в автобусе" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_21} alt="Инфографика: Телефонный терроризм" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_22} alt="Инфографика: Что делать если застрял в лифте" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_23} alt="Инфографика: Что делать если лифт падает" />
                                </li>
                                <li>
                                    <img className='image' src={illustration_24} alt="Инфографика: Что делать при пожаре в метро" />
                                </li>
                            </ul>
                        </Accordion>
                    </section>
                </div>
            </div>
        </div>
    )

}

export default AccidentInvestigationPage;