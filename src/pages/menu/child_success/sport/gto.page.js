import React from "react";
import MyLink from "../../../../components/link/link.component";
import Accordion from "../../../../components/accordion/accordion.component";

import card_image_01 from "../../../../images/gto/card-img-01.png";
import card_image_02 from "../../../../images/gto/card-img-02.png";
import card_image_03 from "../../../../images/gto/card-img-03.jpg";
import card_person_01 from "../../../../images/gto/card-person-01.jpg";
import card_person_02 from "../../../../images/gto/card-person-02.jpg";
import img_no_photo from "../../../../images/no-photo.png";
import card_person_04 from "../../../../images/gto/card-person-04.jpg";
import card_person_06 from "../../../../images/gto/card-person-06.jpg";
import card_person_07 from "../../../../images/gto/card-person-07.jpg";
import card_person_10 from "../../../../images/gto/card-person-10.jpg";
import card_person_12 from "../../../../images/gto/card-person-12.jpg";
import card_person_14 from "../../../../images/gto/card-person-14.jpg";
import card_person_15 from "../../../../images/gto/card-person-15.jpg";
import card_person_16 from "../../../../images/gto/card-person-16.jpg";

const GtoPage = () => {

    React.useEffect(() => {

        document.title = "ГТО";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">ГТО</h2>
            <p>
                По интересующим вопросам, в том числе по получению знаков ГТО, обращайтесь по телефону <MyLink href={"tel:84953692523"} text={"+7(495)369-25-23"} />
            </p>
            <h2 className="content__caption">Что такое ГТО?</h2>
            <p>
                Всероссийский физкультурно-спортивный комплекс «Готов к труду и обороне» (ГТО) — это нормативная основа физического воспитания населения страны, нацеленная на развитие массового спорта.
            </p>
            <Accordion className='accordion --theme-g100 --icon-caption-chevron' title={"Документы"}>
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
            <Accordion className='accordion --theme-g100 --icon-caption-chevron' title={"Результаты Фестиваля ГТО по отбору участников на Всероссийские этапы среди обучающихся профессиональных образовательных организаций"}>
                <ul className="list --type-empty">
                    <li>
                        <MyLink className='link --type-pdf-icon' href={"/files/gto/itogovyj-protokol-lichnyj-zachet.pdf"} text={"Итоговый протокол личного зачета"} />
                    </li>
                    <li>
                        <MyLink className='link --type-pdf-icon' href={"/files/gto/itogovyj-protokol-komandnyj-zachet_.pdf"} text={"Итоговый протокол командного зачета"} />
                    </li>
                </ul>
            </Accordion>
            <h2 className="content__caption">Полезные советы</h2>
            <ul className="card-deck --size-md" style={{ "marginBottom": "1.875em" }}>
                <li>
                    <a href="https://patriotsport.moscow/gto-so-zvezdoj/" rel="noopener noreferrer nofollow" target="_blank" className="card">
                        <img className='card__img --ratio-half' src={card_image_01} alt="ГТО со звездой" />
                        <p className='card__caption --place-gto'><span className="mdi mdi-star"></span> ГТО</p>
                        <h3 className="card__title">ГТО со звездой</h3>
                        <p className='card__more-btn'>Читать &rarr;</p>
                    </a>
                </li>
                <li>
                    <a href="https://patriotsport.moscow/raspisanie-priema-normativov-vfsk-gto/" rel="noopener noreferrer nofollow" target="_blank" className="card">
                        <img className='card__img --ratio-half' src={card_image_02} alt="Расписание приема нормативов ВФСК ГТО" />
                        <p className='card__caption --place-gto'><span className="mdi mdi-star"></span> ГТО</p>
                        <h3 className="card__title">Расписание приема нормативов ВФСК ГТО</h3>
                        <p className='card__more-btn'>Читать &rarr;</p>
                    </a>
                </li>
                <li>
                    <a href="https://patriotsport.moscow/zdorovye-kanikuly-normy-gto/" rel="noopener noreferrer nofollow" target="_blank" className="card">
                        <img className='card__img --ratio-half' src={card_image_03} alt="«Здоровые каникулы» Нормы ГТО" />
                        <p className='card__caption --place-gto'><span className="mdi mdi-star"></span> ГТО</p>
                        <h3 className="card__title">«Здоровые каникулы» Нормы ГТО</h3>
                        <p className='card__more-btn'>Читать &rarr;</p>
                    </a>
                </li>
            </ul>
            <Accordion className='accordion --theme-g100 --icon-caption-chevron' title={"Телефоны кураторов по округам"}>
                <ul className="card-deck --size-lg">
                    <li className="card --type-person-card">
                        <img src={card_person_01} alt="Тищенко Марина Николаевна" className="card__img" />
                        <div className="card__content">
                            <h3 className="card__title">Тищенко Марина Николаевна</h3>
                            <p className="card__caption">куратор ГТО в ЦАО</p>
                            <MyLink className='link --type-icon --icon-email' href={"mailto:TischenkoMN@edu.mos.ru"} text={"TischenkoMN@edu.mos.ru"} />
                            <MyLink className='link --type-icon --icon-phone' href={"tel:89453692523"} text={"+7(495)369 25 23 доб. 1171"} />
                        </div>
                    </li>
                    <li className="card --type-person-card">
                        <img src={card_person_02} alt="Агеева Марина Фидануровна" className="card__img" />
                        <div className="card__content">
                            <h3 className="card__title">Агеева Марина Фидануровна</h3>
                            <p className="card__caption">куратор ГТО в СВАО</p>
                            <MyLink className='link --type-icon --icon-email' href={"mailto:ageevaMF@edu.mos.ru"} text={"ageevaMF@edu.mos.ru"} />
                            <MyLink className='link --type-icon --icon-phone' href={"tel:89453692523"} text={"+7(495)369 25 23"} />
                        </div>
                    </li>
                    <li className="card --type-person-card">
                        <img src={img_no_photo} alt="Козлов Михаил Андреевич" className="card__img" />
                        <div className="card__content">
                            <h3 className="card__title">Козлов Михаил Андреевич</h3>
                            <p className="card__caption">куратор ГТО в СВАО</p>
                            <MyLink className='link --type-icon --icon-email' href={"mailto:KozlovMA1@edu.mos.ru"} text={"KozlovMA1@edu.mos.ru"} />
                            <MyLink className='link --type-icon --icon-phone' href={"tel:89453692523"} text={"+7(495)369 25 23"} />
                        </div>
                    </li>
                    <li className="card --type-person-card">
                        <img src={card_person_04} alt="Жамалетдинова Екатерина Викторовна" className="card__img" />
                        <div className="card__content">
                            <h3 className="card__title">Жамалетдинова Екатерина Викторовна</h3>
                            <p className="card__caption">куратор ГТО в СЗАО</p>
                            <MyLink className='link --type-icon --icon-email' href={"mailto:zhamaletdinovaEV@edu.mos.ru"} text={"zhamaletdinovaEV@edu.mos.ru"} />
                            <MyLink className='link --type-icon --icon-phone' href={"tel:89453692523"} text={"+7(495)369 25 23"} />
                        </div>
                    </li>
                    <li className="card --type-person-card">
                        <img src={img_no_photo} alt="Баринов Роман Константинович" className="card__img" />
                        <div className="card__content">
                            <h3 className="card__title">Баринов Роман Константинович</h3>
                            <p className="card__caption">куратор ГТО в ЮВАО</p>
                            <MyLink className='link --type-icon --icon-email' href={"mailto:BarinovRK@edu.mos.ru"} text={"BarinovRK@edu.mos.ru"} />
                            <MyLink className='link --type-icon --icon-phone' href={"tel:89453692523"} text={"+7(495)369 25 23"} />
                        </div>
                    </li>
                    <li className="card --type-person-card">
                        <img src={card_person_06} alt="Мухамедияров Руслан Ринатович" className="card__img" />
                        <div className="card__content">
                            <h3 className="card__title">Мухамедияров Руслан Ринатович</h3>
                            <p className="card__caption">куратор ГТО в ВАО</p>
                            <MyLink className='link --type-icon --icon-email' href={"mailto:mukhamediyarovRR@edu.mos.ru"} text={"mukhamediyarovRR@edu.mos.ru"} />
                            <MyLink className='link --type-icon --icon-phone' href={"tel:89453692523"} text={"+7(495)369 25 23"} />
                        </div>
                    </li>
                    <li className="card --type-person-card">
                        <img src={card_person_07} alt="Клещева Наталья Александровна" className="card__img" />
                        <div className="card__content">
                            <h3 className="card__title">Клещева Наталья Александровна</h3>
                            <p className="card__caption">куратор ГТО в ВАО</p>
                            <MyLink className='link --type-icon --icon-email' href={"mailto:KleschevaNA@edu.mos.ru"} text={"KleschevaNA@edu.mos.ru"} />
                            <MyLink className='link --type-icon --icon-phone' href={"tel:89453692523"} text={"+7(495)369 25 23"} />
                        </div>
                    </li>
                    <li className="card --type-person-card">
                        <img src={img_no_photo} alt="Копейкин Максим Николаевич" className="card__img" />
                        <div className="card__content">
                            <h3 className="card__title">Копейкин Максим Николаевич</h3>
                            <p className="card__caption">куратор ГТО в ЮЗАО</p>
                            <MyLink className='link --type-icon --icon-email' href={"mailto:KopeykinMN@edu.mos.ru"} text={"KopeykinMN@edu.mos.ru"} />
                            <MyLink className='link --type-icon --icon-phone' href={"tel:89453692523"} text={"+7(495)369 25 23"} />
                        </div>
                    </li>
                    <li className="card --type-person-card">
                        <img src={img_no_photo} alt="Бельчикова Марина Анатольевна" className="card__img" />
                        <div className="card__content">
                            <h3 className="card__title">Бельчикова Марина Анатольевна</h3>
                            <p className="card__caption">куратор ГТО в ЮЗАО</p>
                            <MyLink className='link --type-icon --icon-email' href={"mailto:BelchikovaMA@edu.mos.ru"} text={"BelchikovaMA@edu.mos.ru"} />
                            <MyLink className='link --type-icon --icon-phone' href={"tel:89453692523"} text={"+7(495)369 25 23"} />
                        </div>
                    </li>
                    <li className="card --type-person-card">
                        <img src={card_person_10} alt="Харчук Ирина Александровна" className="card__img" />
                        <div className="card__content">
                            <h3 className="card__title">Харчук Ирина Александровна</h3>
                            <p className="card__caption">куратор ГТО в ЗАО</p>
                            <MyLink className='link --type-icon --icon-email' href={"mailto:KharchukLA@edu.mos.ru"} text={"KharchukLA@edu.mos.ru"} />
                            <MyLink className='link --type-icon --icon-phone' href={"tel:89453692523"} text={"+7(495)369 25 23"} />
                        </div>
                    </li>
                    <li className="card --type-person-card">
                        <img src={img_no_photo} alt="Бекренев Дмитрий Николаевич" className="card__img" />
                        <div className="card__content">
                            <h3 className="card__title">Бекренев Дмитрий Николаевич</h3>
                            <p className="card__caption">куратор ГТО в ЗАО</p>
                            <MyLink className='link --type-icon --icon-email' href={"mailto:BekrenevDN1@edu.mos.ru"} text={"BekrenevDN1@edu.mos.ru"} />
                            <MyLink className='link --type-icon --icon-phone' href={"tel:89453692523"} text={"+7(495)369 25 23"} />
                        </div>
                    </li>
                    <li className="card --type-person-card">
                        <img src={card_person_12} alt="Заусаев Василий Валентинович" className="card__img" />
                        <div className="card__content">
                            <h3 className="card__title">Заусаев Василий Валентинович</h3>
                            <p className="card__caption">куратор ГТО в ЮАО</p>
                            <MyLink className='link --type-icon --icon-email' href={"mailto:zausaevVV@edu.mos.ru"} text={"zausaevVV@edu.mos.ru"} />
                            <MyLink className='link --type-icon --icon-phone' href={"tel:89453692523"} text={"+7(495)369 25 23"} />
                        </div>
                    </li>
                    <li className="card --type-person-card">
                        <img src={img_no_photo} alt="Писарева Мария Алексеевна" className="card__img" />
                        <div className="card__content">
                            <h3 className="card__title">Писарева Мария Алексеевна</h3>
                            <p className="card__caption">куратор ГТО в ЮАО</p>
                            <MyLink className='link --type-icon --icon-email' href={"mailto:PisarevaMA@edu.mos.ru"} text={"PisarevaMA@edu.mos.ru"} />
                            <MyLink className='link --type-icon --icon-phone' href={"tel:89453692523"} text={"+7(495)369 25 23"} />
                        </div>
                    </li>
                    <li className="card --type-person-card">
                        <img src={card_person_14} alt="Чернова Елена Александровна" className="card__img" />
                        <div className="card__content">
                            <h3 className="card__title">Чернова Елена Александровна</h3>
                            <p className="card__caption">куратор ГТО в САО</p>
                            <MyLink className='link --type-icon --icon-email' href={"mailto:chernovaEA3@edu.mos.ru"} text={"chernovaEA3@edu.mos.ru"} />
                            <MyLink className='link --type-icon --icon-phone' href={"tel:89453692523"} text={"+7(495)369 25 23"} />
                        </div>
                    </li>
                    <li className="card --type-person-card">
                        <img src={card_person_15} alt="Соленова Марина Александровна" className="card__img" />
                        <div className="card__content">
                            <h3 className="card__title">Соленова Марина Александровна</h3>
                            <p className="card__caption">куратор ГТО в ЗелАО</p>
                            <MyLink className='link --type-icon --icon-email' href={"mailto:solenovaMA@edu.mos.ru"} text={"solenovaMA@edu.mos.ru"} />
                            <MyLink className='link --type-icon --icon-phone' href={"tel:89453692523"} text={"+7(495)369 25 23"} />
                        </div>
                    </li>
                    <li className="card --type-person-card">
                        <img src={card_person_16} alt="Салтыкова Анна Николаевна" className="card__img" />
                        <div className="card__content">
                            <h3 className="card__title">Салтыкова Анна Николаевна</h3>
                            <p className="card__caption">куратор ГТО в ТиНАО</p>
                            <MyLink className='link --type-icon --icon-email' href={"mailto:saltykovaan@edu.mos.ru"} text={"saltykovaan@edu.mos.ru"} />
                            <MyLink className='link --type-icon --icon-phone' href={"tel:89453692523"} text={"+7(495)369 25 23"} />
                        </div>
                    </li>
                </ul>
            </Accordion>
            <h2 className="content__caption">Ответы на вопросы</h2>
            <Accordion className='accordion --theme-g100 --icon-caption-chevron' title={"Как зарегистрироваться на мероприятия по приему нормативов ВФСК ГТО"}>
                <ul className="list --type-empty">
                    <li>
                        По всем интересующим вопросам Вы можете обратиться по телефону: <MyLink href={"tel:84953692523"} text={"8(495)369-25-23"} />
                    </li>
                </ul>
            </Accordion>
            <Accordion className='accordion --theme-g100 --icon-caption-chevron' title={"За сколько открывается онлайн-регистрация на мероприятия по приему нормативов ВФСК ГТО"}>
                <ul className="list --type-empty">
                    <li>
                        Онлайн регистрация на мероприятия по приему нормативов ВФСК ГТО открывается за 5 дней до начала мероприятия
                    </li>
                </ul>
            </Accordion>
            <Accordion className='accordion --theme-g100 --icon-caption-chevron' title={"Как с вами связаться?"}>
                <ul className="list --type-empty">
                    <li>
                        Вы можете позвонить по телефону ГБОУ ДПО МЦПС: <MyLink href={"tel:84953692523"} text={"8(495)369-25-23"} /> или обратиться на почту: <MyLink href={"mailto:PatriotSport@edu.mos.ru"} text={"PatriotSport@edu.mos.ru"} />
                    </li>
                </ul>
            </Accordion>
        </div>
    );
};

export default GtoPage;
