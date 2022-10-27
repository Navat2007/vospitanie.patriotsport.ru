import React from 'react';
import MyLink from '../../../../components/link/link.component';
import Accordion from "../../../../components/accordion/accordion.component";

const FederalProjectImportantPage = () => {

    React.useEffect(() => {

        document.title = "«Разговоры о важном»";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">«Разговоры о важном»</h2>
            <div>
                <div className="quote">
                    <blockquote className="quote__text">
                        «Разговоры о важном» — информационно-просветительские занятия в формате
                        бесед, направленные на формирование у учащихся традиционных российских
                        духовно-нравственных ценностей.
                    </blockquote>
                </div>
                <p><b>Реализация проекта:</b></p>
                <ul className="list">
                    <li><b>Первым уроком каждый понедельник</b> после церемонии поднятия
                        государственного флага
                    </li>
                    <li><b>Проводит классный руководитель</b></li>
                    <li><b>Тарифицируется сотруднику как час внеурочной деятельности</b></li>
                </ul>
                <p><b>Содержание курса:</b></p>
                <ul className="list">
                    <li>Научное познание</li>
                    <li>Развитие, самореализация</li>
                    <li>Эстетика</li>
                    <li>Традиционные семейные ценности</li>
                    <li>Историческая память и преемственность поколений</li>
                    <li>Социальное служение</li>
                    <li>Приоритет духовного над материальным</li>
                    <li>Ответственность</li>
                    <li>Патриотизм, любовь к Родине</li>
                    <li>Жизнь, достоинство, права и свободы человека</li>
                    <li>Созидательный труд</li>
                    <li>Культура здорового образа жизни</li>
                </ul>
                <h3 className="content__caption --place-tab">В помощь классному
                    руководителю</h3>
                <ul className="list">
                    <li><b>24 АВГУСТА ОБУЧАЮЩИЙ СЕМИНАР</b> для классных руководителей по
                        реализации
                        проекта
                    </li>
                    <li>Курсы повышения квалификации «Как правильно построить с классом
                        «разговор о
                        важном»
                    </li>
                    <li>Создание тематических экспозиций, выставок для проведения занятий на
                        базе
                        музеев
                        города Москвы
                    </li>
                </ul>
                <p>Методические разработки, сценарии уроков и интерактивные задания можно найти
                    на <MyLink href={"https://razgovor.edsoo.ru/"} text={"официальном сайте Проекта «Разговоры о важном»"} />.
                </p>
                <p>Материалы для проведения уроков в образовательных организациях,
                    подведомственных
                    Департаменту образования и науки города Москвы размещены
                    <MyLink href={"https://patriotsport.moscow/razgovory-o-vazhnom/"} text={"в разделе Разговоры о важном сайта ГБОУ ДПО МЦПС"} />.</p>
                <h3 className="content__caption --place-tab">
                    24 августа прошел обучающий семинар для классных руководителей <MyLink href={"https://disk.yandex.ru/i/CM08JekLJCQPIA"} text={"Скачать"} />
                </h3>
                <div className="iframe" style={{ 'marginBottom': '1em' }}>
                    <iframe title={"Seminar"} className="iframe__item"
                            src="https://rutube.ru/play/embed/12fedb60cf482bf9ff662e2c9861fbc9" />
                </div>
                <Accordion title={"Рабочие программы, КТП и методические рекомендации по циклу занятий"}>
                    <ul className="list --type-empty">
                        <li>
                            <MyLink className={"link --type-pdf-icon"}
                                    href={"https://patriotsport.moscow/wp-content/uploads/2022/08/rabochaja-programma-rov-1-2.docx"}
                                    text={"Рабочая программа 1-2 класс"} />
                        </li>
                        <li>
                            <MyLink className={"link --type-pdf-icon"}
                                    href={"https://patriotsport.moscow/wp-content/uploads/2022/08/ktp-1-2_.docx"}
                                    text={"КТП 1-2 класс"} />
                        </li>
                        <li>
                            <MyLink className={"link --type-pdf-icon"}
                                    href={"https://patriotsport.moscow/wp-content/uploads/2022/08/rabochaja-programma-rov-3-4.docx"}
                                    text={"Рабочая программа 3-4 класс"} />
                        </li>
                        <li>
                            <MyLink className={"link --type-pdf-icon"}
                                    href={"https://patriotsport.moscow/wp-content/uploads/2022/08/ktp-3-4_.docx"}
                                    text={"КТП 3-4 класс"} />
                        </li>
                        <li>
                            <MyLink className={"link --type-pdf-icon"}
                                    href={"https://patriotsport.moscow/wp-content/uploads/2022/08/rabochaja-programma-rov-5-7.docx"}
                                    text={"Рабочая программа 5-7 класс"} />
                        </li>
                        <li>
                            <MyLink className={"link --type-pdf-icon"}
                                    href={"https://patriotsport.moscow/wp-content/uploads/2022/08/rabochaja-programma-rov-8-9.docx"}
                                    text={"Рабочая программа 8-9 класс"} />
                        </li>
                        <li>
                            <MyLink className={"link --type-pdf-icon"}
                                    href={"https://patriotsport.moscow/wp-content/uploads/2022/08/ktp-8-9_.docx"}
                                    text={"КТП 8-9 класс"} />
                        </li>
                        <li>
                            <MyLink className={"link --type-pdf-icon"}
                                    href={"https://patriotsport.moscow/wp-content/uploads/2022/08/rabochaja-programma-rov-10-11-spo.docx"}
                                    text={"Рабочая программа 10-11 класс, СПО"} />
                        </li>
                        <li>
                            <MyLink className={"link --type-pdf-icon"}
                                    href={"https://patriotsport.moscow/wp-content/uploads/2022/08/ktp-10-11-spt_.docx"}
                                    text={"КТП 10-11 класс, СПО"} />
                        </li>
                        <li>
                            <MyLink className={"link --type-pdf-icon"}
                                    href={"https://patriotsport.moscow/wp-content/uploads/2022/08/mietod._riekomiendatsii.pdf"}
                                    text={"Методические рекомендации по реализации цикла внеурочных занятий «Разговоры о важном»"} />
                        </li>
                        <li>
                            <MyLink className={"link --type-pdf-icon"}
                                    href={"https://patriotsport.moscow/wp-content/uploads/2022/08/metodicheskie-rekomendacii-po-organizacii-cikla-vneurochnyh-zanjatij-razgovory-o-vazhnom-pri-realizacii-adaptirovannyh-osnovnyh-obshheo.pdf"}
                                    text={"Методические рекомендации по организации цикла внеурочных занятий «Разговоры о важном» при реализации адаптированных основных общеобразовательных программ"} />
                        </li>
                    </ul>
                </Accordion>

                <div className="accordion --theme-g100 --icon-caption-plus"
                     style={{ "marginTop": '1em' }}>
                </div>
            </div>
        </div>
    )

}

export default FederalProjectImportantPage;