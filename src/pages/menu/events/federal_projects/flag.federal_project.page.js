import React from 'react';
import MyLink from '../../../../components/link/link.component';

const FederalProjectFlagPage = () => {

    React.useEffect(() => {

        document.title = "Церемония поднятия (спуска) государственного флага Российской Федерации";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">Церемония поднятия (спуска) государственного флага Российской Федерации</h2>
            <div>
                <div className="quote">
                    <blockquote className="quote__text">
                        «Церемония поднятия флага способствует формированию чувства патриотизма
                        и
                        гражданственности у подрастающего поколения» –
                    </blockquote>
                    <span
                        className="quote__author">Министр просвещения России С.С. Кравцов</span>
                </div>
                <h3 className="content__caption --place-tab">Место и время проведения</h3>
                <ul className="list">
                    <li><b>Еженедельно</b>
                        <ul className="list">
                            <li>
                                Поднятие флага <b>в начале каждой недели </b>перед первым
                                уроком
                            </li>
                            <li>
                                Спуск флага <b>в конце каждой учебной недели</b>
                            </li>
                        </ul>
                    </li>
                    <li>на пришкольной территории у флагштока;</li>
                    <li>в актовом зале, рекреации, холле и др.;</li>
                    <li>в учебных аудиториях (трансляция ролика — формат предусмотрен для всех
                        обучающихся, не принимающих непосредственное участие в церемонии).
                    </li>
                </ul>
                <h3 className="content__caption --place-tab">
                    Алгоритм действий образовательных организаций по подготовке к проведению
                    Церемонии
                </h3>
                <p>Для организации и проведения церемонии поднятия (спуска) Государственного
                    флага
                    Российской Федерации <b>руководитель образовательной организации</b>:
                </p>
                <ul className="list">
                    <li>утверждает Регламент проведения церемонии;</li>
                    <li>определяет время и место проведения церемонии в зданиях;</li>
                    <li>утверждает еженедельный график участия обучающихся (классы, группы) в
                        церемонии;
                    </li>
                    <li>назначает ответственное лицо – руководителя церемонии.</li>
                </ul>
                <p><b>Руководитель церемонии:</b></p>
                <ul className="list">
                    <li>проводит инструктаж для классных руководителей, педагогического состава
                        и
                        администрации;
                    </li>
                    <li>информирует обучающихся и их родителей (законных представителей) об
                        особенностях
                        церемонии поднятия (спуска)
                        Государственного флага Российской Федерации;
                    </li>
                    <li>утверждает график тренировок знаменных групп;</li>
                    <li>включает в знаменную группу обучающихся, имеющих общественно-значимые
                        достижения.
                    </li>
                </ul>
                <h3 className="content__caption --place-tab">
                    Церемония проходит в соответствии с:
                </h3>
                <ul className="list">
                    <li>
                        <MyLink href={"https://patriotsport.moscow/wp-content/uploads/2022/08/new_standart-ceremonii-podnjatija-spuska-gosudarstvennogo-flaga.pdf"} text={"Стандарт Церемонии поднятия (спуска) Государственного флага Российской Федерации;"} />
                    </li>
                </ul>
                <h3 className="content__caption --place-tab">
                    Типовые документы:
                </h3>
                <ul className="list">
                    <li>
                        <MyLink href={"https://patriotsport.moscow/wp-content/uploads/2022/08/new_proekt-prikaza-shkoly-po-provedeniju-ceremonii.docx"} text={"Проект приказа в ОО о проведении Церемонии;"} />
                    </li>
                    <li>
                        <MyLink href={"https://patriotsport.moscow/wp-content/uploads/2022/08/new_reglament-provedenija-ceremonii-podnjatija-spuska-gosudarstvennogo-flaga.docx"} text={"Типовой Регламент проведения церемонии поднятия (спуска) Государственного флага Российской Федерации;"} />
                    </li>
                </ul>
                <h3 className="content__caption --place-tab">
                    Полезные материалы:
                </h3>
                <ul className="list">
                    {/*
                            <li>
                                <MyLink href={"https://patriotsport.moscow/wp-content/uploads/2022/08/new_metodicheskie-rekomendacii.docx"} text={"Методические рекомендации по проведению Церемонии торжественного поднятия (спуска) Государственного флага Российской Федерации в образовательных организациях, подведомственных Департаменту образования и науки города Москвы;"} />
                            </li>
                            */}
                    <li>
                        <MyLink href={"https://patriotsport.moscow/wp-content/uploads/2022/08/new_chek-list-proverki-gotovnosti-oo-k-provedeniju-ceremonii.docx"} text={"Чек-лист проверки готовности ОО к реализации инициативы по регулярному проведению церемонии торжественного поднятия флага;"} />
                    </li>
                    <li>
                        <MyLink href={"https://rutube.ru/video/118dcfab6349423497814fa915c3b49d/"} text={"Видеоинструкция церемонии поднятия (спуска) Государственного флага Российской Федерации в образовательной организации города Москвы"} />
                    </li>
                </ul>
                <h3 className="content__caption --place-tab">
                    Государственный гимн Российской Федерации <MyLink href={"https://disk.yandex.ru/i/Q7pWS9oVRsEoNg"} text={"Скачать"} />
                </h3>
                <div className="iframe">
                    <iframe title={"Gimn"} className="iframe__item"
                            src="https://rutube.ru/play/embed/af0ced005165a6e26f0b109e8c8d1db7" />
                </div>
                <h3 className="content__caption --place-tab">
                    Ролик про Государственный флаг Российской Федерации <MyLink href={"https://disk.yandex.ru/i/2DzvYYTUlUpPvg"} text={"Скачать"} />
                </h3>
                <div className="iframe">
                    <iframe title={"Flag"} className="iframe__item"
                            src="https://rutube.ru/play/embed/121ed65ddae7371806b69b95d84091fd" />
                </div>
            </div>
        </div>
    )

}

export default FederalProjectFlagPage;