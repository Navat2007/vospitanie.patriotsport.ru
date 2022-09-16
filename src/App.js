import './styles/App.scss';

function App() {
    return (
        <div class="page">
            <div className="page__container">

                <div className="preloader --lines --hide" id="main_preloader">
                    <div className="preloader__item">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <header className="header">
                    <div className="header__logo-block">
                        <img className="logo --place-header" src="./images/logo.svg" alt="Логотип"/>
                        <h1 className="header__title">Организация воспитания</h1>
                    </div>

                    <div id="login_block" className="lk-block --place-header --hide">
                        <button type="button" className="lk-block__login-btn"
                                aria-label="Авторизация для сотрудников">Авторизация
                            для сотрудников
                            <span className="lk-block__icon mdi mdi-login-variant"></span>
                        </button>
                    </div>

                    <div id="lk_block" className="lk-block --place-header --hide">
                        <div className="lk-block__container">
                            <p className="lk-block__school-info">
                                <span className="lk-block__icon mdi mdi-home-city-outline"></span>
                                ГБОУ дополнительного профессионального образования города Москвы “Московский центр
                                “Патриот.Спорт”
                            </p>
                            <div className="lk-block__person-info">
                                <p className="lk-block__name">Людмила Васильевна И.</p>
                                <div className="lk-block__position">Классный руководитель</div>
                                <span className="lk-block__icon mdi mdi-account-circle"></span>
                                <button id="login_exit_btn"
                                        className="lk-block__btn-exit button --theme-primary --outline">Выйти
                                    <span className="mdi mdi-exit-to-app"></span></button>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="content">
                    <menu className="main-menu content__asside">
                        <button className="main-menu__wrap-btn" aria-label="Свернуть боковое меню"><span
                            className="mdi mdi-chevron-left"></span></button>
                        <ul className="main-menu__list">

                            <li className="accordion --opened">
                                <p className="main-menu__link accordion__caption">События и мероприятия <span
                                    className="mdi mdi-menu-right"></span></p>
                                <ul className="main-menu__sublist accordion__section">
                                    <li>
                                        <p className="main-menu__link" data-id="calendar" id="calendar_btn">Календарь</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="federal_project" id="federal_project_btn">
                                            Федеральные
                                            проекты по воспитанию</p>
                                    </li>
                                    <li className="accordion">
                                        <p className="main-menu__link accordion__caption">Московские проекты и
                                            конкурсы <span
                                                className="mdi mdi-menu-right"></span></p>
                                        <ul className="main-menu__sublist accordion__section">
                                            <li>
                                                <p className="main-menu__link" data-id="online_project"
                                                   id="online_project_btn">
                                                    Онлайн-проекты</p>
                                            </li>
                                            <li>
                                                <p className="main-menu__link" data-id="weekend_hike"
                                                   id="weekend_hike_btn">Поход
                                                    выходного дня «300 ПВД»</p>
                                            </li>
                                            <li>
                                                <p className="main-menu__link" data-id="team_strength"
                                                   id="team_strength_btn">Сила команды</p>
                                            </li>
                                            <li>
                                                <p className="main-menu__link" data-id="sports_testing_of_children"
                                                   id="sports_testing_of_children_btn">Спортивное тестирование детей</p>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="accordion">
                                <p className="main-menu__link accordion__caption">Траектория успеха ребенка <span
                                    className="mdi mdi-menu-right"></span></p>
                                <ul className="main-menu__sublist accordion__section">
                                    <li>
                                        <p className="main-menu__link" data-id="professional_orientation"
                                           id="professional_orientation_btn">Профориентация</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="civil_activity"
                                           id="civil_activity_btn">Гражданская
                                            активность</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="sport" id="sport_btn">Спорт</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="creativity"
                                           id="creativity_btn">Творчество</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="project_activity" id="project_activity_btn">
                                            Проектная
                                            деятельность</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="education" id="education_btn">Образование
                                            (Ресурсы)
                                        </p>
                                    </li>
                                </ul>
                            </li>

                            <li className="accordion">
                                <p className="main-menu__link accordion__caption">Нормативные документы <span
                                    className="mdi mdi-menu-right"></span></p>
                                <ul className="main-menu__sublist accordion__section">
                                    <li>
                                        <p className="main-menu__link" data-id="federal_law"
                                           id="federal_law_btn">Федеральные Законы
                                        </p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="federal_conception_strategy"
                                           id="federal_conception_strategy_btn">Федеральные Концепции и стратегии</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="order_donm" id="order_donm_btn">Приказы
                                            ДОНМ</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="documents_search"
                                           id="documents_search_btn">Поиск в
                                            нормативных документах</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="documents_useful_resources"
                                           id="documents_useful_resources_btn">Полезные ресурсы</p>
                                    </li>
                                </ul>
                            </li>

                            <li className="accordion">
                                <p className="main-menu__link accordion__caption">Сложные ситуации <span
                                    className="mdi mdi-menu-right"></span></p>
                                <ul className="main-menu__sublist accordion__section">
                                    <li>
                                        <p className="main-menu__link" data-id="help" id="help_btn">ПОМОЩЬ</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="identification_response"
                                           id="identification_response_btn">Выявление и реагирование</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="bullying" id="bullying_btn">Буллинг</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="suicidal_behavior"
                                           id="suicidal_behavior_btn">
                                            Суицидальное поведение</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="difficult_child"
                                           id="difficult_child_btn">“Трудный
                                            ребенок”</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="school_shooting"
                                           id="school_shooting_btn">Скулшутинг
                                        </p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="situation_useful_resources"
                                           id="situation_useful_resources_btn">Полезные ресурсы</p>
                                    </li>
                                </ul>
                            </li>

                            <li className="accordion">
                                <p className="main-menu__link accordion__caption">Безопасная среда <span
                                    className="mdi mdi-menu-right"></span></p>
                                <ul className="main-menu__sublist accordion__section">
                                    <li>
                                        <p className="main-menu__link" data-id="injury_prevention"
                                           id="injury_prevention_btn">
                                            Профилактика травматизма</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="road_safety" id="road_safety_btn">Дорожная
                                            безопасность</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="security_laboratory"
                                           id="security_laboratory_btn">
                                            Лаборатория безопасности (с сайта МЦПС “Воспитательная
                                            деятельность)</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="safe_summer" id="safe_summer_btn">Безопасное
                                            лето (с
                                            сайта МЦПС “Воспитательная деятельность)</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="safe_school" id="safe_school_btn">Безопасная
                                            школа
                                            (с
                                            сайта МЦПС “Воспитательная деятельность)</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="regulations"
                                           id="regulations_btn">Регламенты</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="briefings" id="briefings_btn">Инструктажи
                                            ТБ</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="emergency_services"
                                           id="emergency_services_btn">
                                            Контакты
                                            экстренных служб</p>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a rel="noopener nofollow" className="main-menu__link" data-id="teacher_online"
                                   id="teacher_online_btn">Классный
                                    руководитель онлайн</a>
                            </li>

                            <li>
                                <a rel="noopener nofollow" className="main-menu__link" data-id="special_child"
                                   id="special_child_btn">Особенный
                                    ребенок</a>
                            </li>

                            <li>
                                <a rel="noopener nofollow" className="main-menu__link" data-id="additional_education"
                                   id="additional_education_btn">Дополнительное образование</a>
                            </li>

                            <li id="lk_menu_block" className="accordion --hide">
                                <p className="main-menu__link accordion__caption">Личный кабинет <span
                                    className="mdi mdi-menu-right"></span></p>
                                <ul className="main-menu__sublist accordion__section">
                                    <li>
                                        <p className="main-menu__link" data-id="my_class" id="my_class_btn">Мой класс</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="recommendations" id="recommendations_btn">
                                            Рекомендации</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="submit_application"
                                           id="submit_application_btn">
                                            Подать
                                            заявку</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="lk_documents"
                                           id="lk_documents_btn">Документы</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="professional_communities"
                                           id="professional_communities_btn">Профессиональные сообщества</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="lk_teacher_online"
                                           id="lk_teacher_online_btn">
                                            Классный
                                            руководитель онлайн</p>
                                    </li>
                                    <li>
                                        <p className="main-menu__link" data-id="lk_resources"
                                           id="lk_resources_btn">Ресурсы</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="control-panel main-menu__control-panel">
                            <ul className="control-panel__list">
                                <li>
                            <span id="info_btn" data-id="info"
                                  className="control-panel__icon-btn mdi mdi-information-outline"
                                  aria-label="Контактная информация"></span>
                                </li>
                                <li>
                                    <span className="control-panel__icon-btn mdi mdi-home" aria-label=""></span>
                                </li>
                            </ul>
                            <div className="field --type-label-icon control-panel__search-field">
                                <input className="field__input" name="search" type="search" placeholder="Поиск"/>
                                <label className="field__icon --type-label mdi mdi-magnify" htmlFor=""></label>
                            </div>
                        </div>
                    </menu>
                    <section id="content_section" className="content__section">


                    </section>
                </main>
            </div>
        </div>
    );
}

export default App;
