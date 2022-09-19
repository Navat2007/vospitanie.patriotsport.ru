import React from 'react';
import {Link} from "react-router-dom";

import {UserContext} from "../../context";
import Accordion from "../accordion/accordion.component";

const Menu = ({opened = false}) => {

    const [openState, setOpenState] = React.useState(opened);
    const {user} = React.useContext(UserContext);

    const menuList = [
        {
            id: 1,
            title: "События и мероприятия",
            opened: true,
            link: "",
            children: [
                {
                    id: 2,
                    title: "Календарь",
                    link: "/",
                    children: []
                },
                {
                    id: 3,
                    title: "Федеральные проекты по воспитанию",
                    link: "/federal_project",
                    children: []
                },
                {
                    id: 4,
                    title: "Московские проекты и конкурсы",
                    link: "",
                    children: [
                        {
                            id: 5,
                            title: "Онлайн-проекты",
                            link: "/online_project",
                            children: []
                        },
                        {
                            id: 6,
                            title: "Поход выходного дня «300 ПВД»",
                            link: "/weekend_hike",
                            children: []
                        },
                        {
                            id: 7,
                            title: "Сила команды",
                            link: "/team_strength",
                            children: []
                        },
                        {
                            id: 8,
                            title: "Спортивное тестирование детей",
                            link: "/sports_testing_of_children",
                            children: []
                        },
                        {
                            id: 9,
                            title: "Спортивные каникулы",
                            link: "/sports_holidays",
                            children: []
                        },
                        {
                            id: 10,
                            title: "Спортивные субботы",
                            link: "/sports_saturdays",
                            children: []
                        },
                        {
                            id: 11,
                            title: "Я шагаю по Москве",
                            link: "/i_walking_moscow",
                            children: []
                        },
                    ]
                }
            ]
        },
        {
            id: 12,
            title: "Траектория успеха ребенка",
            link: "",
            children: [
                {
                    id: 13,
                    title: "Профориентация",
                    link: "/professional_orientation",
                    children: []
                },
                {
                    id: 14,
                    title: "Гражданская активность",
                    link: "/civil_activity",
                    children: []
                },
                {
                    id: 15,
                    title: "Спорт",
                    link: "/sport",
                    children: []
                },
                {
                    id: 16,
                    title: "Творчество",
                    link: "/creativity",
                    children: []
                },
                {
                    id: 17,
                    title: "Проектная деятельность",
                    link: "/project_activity",
                    children: []
                },
                {
                    id: 18,
                    title: "Образование (Ресурсы)",
                    link: "/education",
                    children: []
                },
            ]
        },
        {
            id: 19,
            title: "Нормативные документы",
            link: "",
            children: [
                {
                    id: 20,
                    title: "Федеральные Законы",
                    link: "/federal_law",
                    children: []
                },
                {
                    id: 21,
                    title: "Федеральные Концепции и стратегии",
                    link: "/federal_conception_strategy",
                    children: []
                },
                {
                    id: 22,
                    title: "Приказы ДОНМ",
                    link: "/order_donm",
                    children: []
                },
                {
                    id: 23,
                    title: "Поиск  нормативных документах",
                    link: "/documents_search",
                    children: []
                },
                {
                    id: 24,
                    title: "Полезные ресурсы",
                    link: "/documents_useful_resources",
                    children: []
                },
            ]
        },
        {
            id: 25,
            title: "Сложные ситуации",
            link: "",
            children: [
                {
                    id: 26,
                    title: "ПОМОЩЬ",
                    link: "/help",
                    children: []
                },
                {
                    id: 27,
                    title: "Выявление и реагирование",
                    link: "/identification_response",
                    children: []
                },
                {
                    id: 28,
                    title: "Буллинг",
                    link: "/bullying",
                    children: []
                },
                {
                    id: 29,
                    title: "Суицидальное поведение",
                    link: "/suicidal_behavior",
                    children: []
                },
                {
                    id: 30,
                    title: "“Трудный ребенок”",
                    link: "/difficult_child",
                    children: []
                },
                {
                    id: 31,
                    title: "Скулшутинг",
                    link: "/school_shooting",
                    children: []
                },
                {
                    id: 32,
                    title: "Полезные ресурсы",
                    link: "/situation_useful_resources",
                    children: []
                },
            ]
        },
        {
            id: 33,
            title: "Безопасная среда",
            link: "",
            children: [
                {
                    id: 34,
                    title: "Профилактика травматизма",
                    link: "/injury_prevention",
                    children: []
                },
                {
                    id: 35,
                    title: "Дорожная безопасность",
                    link: "/road_safety",
                    children: []
                },
                {
                    id: 36,
                    title: "Лаборатория безопасности (с сайта МЦПС “Воспитательная деятельность)",
                    link: "/security_laboratory",
                    children: []
                },
                {
                    id: 37,
                    title: "Безопасное лето (с сайта МЦПС “Воспитательная деятельность)",
                    link: "/safe_summer",
                    children: []
                },
                {
                    id: 38,
                    title: "Безопасная школа (с сайта МЦПС “Воспитательная деятельность)",
                    link: "/safe_school",
                    children: []
                },
                {
                    id: 39,
                    title: "Регламенты",
                    link: "/regulations",
                    children: []
                },
                {
                    id: 40,
                    title: "Инструктажи ТБ",
                    link: "/briefings",
                    children: []
                },
                {
                    id: 41,
                    title: "Контакты экстренных служб",
                    link: "/emergency_services",
                    children: []
                },
            ]
        },
        {
            id: 42,
            title: "Классный руководитель онлайн",
            link: "/teacher_online",
            children: []
        },
        {
            id: 43,
            title: "Особенный ребенок",
            link: "/special_child",
            children: []
        },
        {
            id: 44,
            title: "Дополнительное образование",
            link: "/additional_education",
            children: []
        },
        {
            id: 45,
            private: true,
            title: "Личный кабинет",
            link: "",
            children: [
                {
                    id: 46,
                    title: "Мой класс",
                    link: "/my_class",
                    children: []
                },
                {
                    id: 47,
                    title: "Рекомендации",
                    link: "/recommendations",
                    children: []
                },
                {
                    id: 48,
                    title: "Подать заявку",
                    link: "/submit_application",
                    children: []
                },
                {
                    id: 49,
                    title: "Документы",
                    link: "/lk_documents",
                    children: []
                },
                {
                    id: 50,
                    title: "Профессиональные сообщества",
                    link: "/professional_communities",
                    children: []
                },
                {
                    id: 51,
                    title: "Классный руководитель онлайн",
                    link: "/lk_teacher_online",
                    children: []
                },
                {
                    id: 52,
                    title: "Ресурсы",
                    link: "/lk_resources",
                    children: []
                }
            ]
        }
    ];

    const MenuList = ({array}) => {

        return (
            <>
                {array.filter(item => {
                    if(item.private && !user)
                        return false;

                    return true;
                }).map(item => item.children.length === 0 ?
                    (
                        <li key={item.id}>
                            <Link className="main-menu__link --no-select --no-drag" to={item.link}>{item.title}</Link>
                        </li>
                    )
                    :
                    (
                        <Accordion key={item.id} title={item.title} opened={item.opened}>
                            <MenuList array={item.children}/>
                        </Accordion>
                    )
                )}
            </>
        )

    }

    return (
        <menu className={openState ? "main-menu content__asside" : "main-menu content__asside --wrapped"}>
            <button className="main-menu__wrap-btn"
                    aria-label={openState ? "Свернуть боковое меню" : "Развернуть боковое меню"}
                    onClick={() => setOpenState(!openState)}>
                <span className="mdi mdi-chevron-left"/>
            </button>
            <ul className="main-menu__list">
                <MenuList array={menuList}/>
            </ul>
            <div className="control-panel main-menu__control-panel">
                <ul className="control-panel__list">
                    <li>
                        <Link style={{color: 'white'}} className="control-panel__icon-btn mdi mdi-information-outline" to={"/contacts"}
                              aria-label="Контактная информация"/>
                    </li>
                    <li>
                        <Link style={{color: 'white'}} className="control-panel__icon-btn mdi mdi-home" aria-label="" to={"/"}/>
                    </li>
                </ul>
                <div className="field --type-label-icon control-panel__search-field">
                    <input className="field__input" name="search" type="search"
                           placeholder="Поиск"/>
                    <label className="field__icon --type-label mdi mdi-magnify" htmlFor=""/>
                </div>
            </div>
        </menu>
    );
};

export default Menu;