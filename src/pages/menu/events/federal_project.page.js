import React, { Component } from 'react';
import Accordion from "../../../components/accordion/accordion.component";
import MyLink from '../../../components/link/link.component';
import Calendar from "../../../components/calendar/calendar";

const FederalProjectPage = () => {

    const [tab, setTab] = React.useState(1);

    React.useEffect(() => {

        document.title = "Федеральные проекты по воспитанию";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">Федеральные проекты по воспитанию</h2>
            <div className="notice --theme-primary --place-federal-project">
                <div className="notice__wrap">
                    <p className="notice__title">Система поддержки и реализации федеральных проектов в городе Москве </p>
                    <div className="notice__content --type-two-column">
                        <p>
                            Служба сопровождения управленческих команд школ по воспитательной деятельности
                        </p>
                        <p>
                            <span>Горячая линия</span> <MyLink href={"tel:84953692523"} text={"+7 (495) 369 25 23 доб. 0"} />
                        </p>
                    </div>
                </div>
            </div>
            <div className="tab">
                <ul className="tab__list">
                    <li className={tab === 1 ? "tab__item --active" : "tab__item"} onClick={() => setTab(1)}>Церемония поднятия (спуска) государственного флага Российской Федерации</li>
                    <li className={tab === 2 ? "tab__item --active" : "tab__item"} onClick={() => setTab(2)}>&laquo;Разговоры о&nbsp;важном&raquo;</li>
                    <li className={tab === 3 ? "tab__item --active" : "tab__item"} onClick={() => setTab(3)}>Российское движение детей и&nbsp;молодежи</li>
                    <li className={tab === 4 ? "tab__item --active" : "tab__item"} onClick={() => setTab(4)}>Советник по&nbsp;воспитанию и&nbsp;взаимодействию с&nbsp;детскими общественными объединениями</li>
                    <li className={tab === 5 ? "tab__item --active" : "tab__item"} onClick={() => setTab(5)}>Историческое просвещение</li>
                    <li className={tab === 6 ? "tab__item --active" : "tab__item"} onClick={() => setTab(6)}>Школьный театр</li>
                    <li className={tab === 7 ? "tab__item --active" : "tab__item"} onClick={() => setTab(7)}>Школьные спортивные клубы</li>
                </ul>
                <div className="tab__container">
                    <section className={tab === 1 ? "tab__section --active" : "tab__section"}>
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
                            <li>
                                <MyLink href={"https://patriotsport.moscow/wp-content/uploads/2022/08/new_reglament-provedenija-ceremonii-podnjatija-spuska-gosudarstvennogo-flaga.docx"} text={"Типовой Регламент проведения церемонии поднятия (спуска) Государственного флага Российской Федерации;"} />
                            </li>
                            <li>
                                <MyLink href={"https://patriotsport.moscow/wp-content/uploads/2022/08/new_metodicheskie-rekomendacii.docx"} text={"Методические рекомендации по проведению Церемонии торжественного поднятия (спуска) Государственного флага Российской Федерации в образовательных организациях, подведомственных Департаменту образования и науки города Москвы;"} />
                            </li>
                            <li>
                                <MyLink href={"https://patriotsport.moscow/wp-content/uploads/2022/08/new_proekt-prikaza-shkoly-po-provedeniju-ceremonii.docx"} text={"Проект приказа в ОО о проведении Церемонии;"} />
                            </li>
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
                    </section>
                    <section className={tab === 2 ? "tab__section --active" : "tab__section"}>
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
                    </section>
                    <section className={tab === 3 ? "tab__section --active" : "tab__section"}>
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
                    </section>
                    <section className={tab === 4 ? "tab__section --active" : "tab__section"}>
                        <p><b>Должность советника по воспитанию включена в перечень должностей
                            педагогических работников постановлением Правительства Российской Федерации
                            21
                            февраля 2022 года.</b></p>
                        <p><b>Этапы реализации проекта:</b></p>
                        <ul className="list --type-number">
                            <li>Подбор кандидатов</li>
                            <li>Обучение</li>
                            <li>Введение в должность</li>
                        </ul>
                        <p><b>Подбор кандидатов</b> будет произведен путем проведения
                            регионального
                            конкурсного отбора кандидатов на должность советника по воспитанию.
                        </p>
                        <p><b>Критерии подбора кандидатов:</b></p>
                        <ul className="list">
                            <li>Опыт вожатской деятельности</li>
                            <li>Участие в реализации проектов РДШ</li>
                            <li>Лидерские качества и управленческие компетенции</li>
                            <li>Опыт работы с детскими объединениями</li>
                            <li>Педагогический опыт работ</li>
                        </ul>
                        <p>В каждом регионе по согласованию с ФГБУ «Российский детско-юношеский центр»
                            назначается Координатор, который формирует региональный штаб по работе с
                            Советниками
                            по воспитанию в образовательных организациях.
                        </p>
                        <p><b>Штаб выполняет следующие функции:</b></p>
                        <ul className="list">
                            <li>Кадровое сопровождение</li>
                            <li>Проектную и программную деятельность</li>
                            <li>Информационно-медийное сопровождение</li>
                            <li>Методическая и консультационная поддержка</li>
                            <li>Аналитическая деятельность</li>
                        </ul>
                        <p>
                            Информация на <MyLink href={"https://edu.gov.ru/press/4283/dolzhnost-sovetnika-direktora-po-vospitaniyu-budet-vvedena-v-perechen-dolzhnostey-pedagogicheskih-rabotnikov/"} text={"сайте Министерства просвещения России"} />
                        </p>
                        <p>
                            <MyLink href={"https://regulation.gov.ru/projects#search=номенклатуру%20должности%20&amp;npa=121747"} text={"Проект “Об утверждении номенклатуры должностей педагогических работников организаций, осуществляющих образовательную деятельность, должностей руководителей образовательных организаций”"} />
                        </p>
                    </section>
                    <section className={tab === 5 ? "tab__section --active" : "tab__section"}>
                        <p><b>Историческое просвещение </b>– это один из механизмов формирования
                            самоидентичности и гражданской ответственности российского школьника,
                            строящийся
                            на
                            знании истории своей страны.
                        </p>
                        <div className="quote">
                            <blockquote className="quote__text">
                                «Историческое просвещение будет проводиться в школах с первого класса.
                                Не
                                уроки
                                истории, которые начинались и будут начинаться с 5-го класса, а именно
                                просветительские программы. Их можно проводить в рамках предмета
                                «Окружающий
                                мир»,
                                изучать историю своей семьи, своего региона, можно в рамках внеурочной
                                деятельности
                                посещать музеи и выставки»
                            </blockquote>
                            <span
                                className="quote__author">Министр просвещения России С.С. Кравцов</span>
                        </div>
                        <h3 className="contact__caption --place-tab">Перспективы развития</h3>
                        <ul className="list">
                            <li>Усиление исторического просвещения с первого класса в рамках
                                интегрированного
                                урока (окружающий мир, литературное чтение, русский язык, ОРКСЭ, музыка,
                                ИЗО)
                            </li>
                            <li>Проведение занятий по историческому просвещению на базе музеев города
                                Москвы
                            </li>
                            <li>Преподавание истории через художественные образы (введение киноуроков,
                                постановка спектаклей на историческое сюжеты)
                            </li>
                            <li>Проведение лекций, встреч, семинаров с приглашением историков,
                                общественных
                                деятелей
                            </li>
                        </ul>
                        <p>
                            <MyLink href={"https://edu.gov.ru/press/5022/sergey-kravcov-razyasnil-kak-budet-izuchatsya-istoriya-v-shkolah-s-pervogo-klassa/"} text={"Новость на сайте Министерства просвещения России от 19.04.2022 г."} />
                        </p>
                    </section>
                    <section className={tab === 6 ? "tab__section --active" : "tab__section"}>
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
                    </section>
                    <section className={tab === 7 ? "tab__section --active" : "tab__section"}>
                        <p><b>Школьные спортивные клубы (ШСК) – механизм объединения всех участников
                            образовательного процесса для развития физической культуры и спорта в школе
                            и
                            популяризации здорового образа жизни среди всех участников образовательного
                            процесса</b></p>
                        <p><b>Развитие проекта:</b></p>
                        <ul className="list">
                            <li>Выездные обучающие семинары для руководителей школьных спортивных
                                (партнеры
                                Москомспорт, федерации по видам спорта).
                            </li>
                            <li>Школьные спортивные лиги по видам спорта (партнеры Москомспорт,
                                федерации по
                                видам спорта).
                            </li>
                            <li>Рейтинг школьных спортивных клубов (учет результатов в школьных
                                спортивных
                                лигах
                                и ГТО)
                            </li>
                            <li>Итоговый Фестиваль школьного спорта (май-июнь 2023 г.)</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )

}

export default FederalProjectPage;