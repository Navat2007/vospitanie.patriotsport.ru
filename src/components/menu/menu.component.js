import React from 'react';
import {Link, NavLink} from "react-router-dom";

import {UserContext} from "../../context";
import AccordionMenu from "../accordion/accordion.menu.component";

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
                    id: 10,
                    title: "Календарь",
                    link: "/calendar",
                    children: []
                },
                {
                    id: 11,
                    title: "Федеральные проекты по воспитанию",
                    link: "/federal_project",
                    children: []
                },
                {
                    id: 12,
                    title: "Московские проекты и конкурсы",
                    link: "",
                    children: [
                        {
                            id: 120,
                            title: "Онлайн-проекты",
                            link: "/online_project",
                            children: []
                        },
                        {
                            id: 121,
                            title: "Поход выходного дня «300 ПВД»",
                            link: "/weekend_hike",
                            children: []
                        },
                        {
                            id: 122,
                            title: "Сила команды",
                            link: "/team_strength",
                            children: []
                        },
                        {
                            id: 123,
                            title: "Спортивное тестирование детей",
                            link: "/sports_testing_of_children",
                            children: []
                        },
                        {
                            id: 124,
                            title: "Спортивные каникулы",
                            link: "/sports_holidays",
                            children: []
                        },
                        {
                            id: 125,
                            title: "Спортивные субботы",
                            link: "/sports_saturdays",
                            children: []
                        },
                        {
                            id: 126,
                            title: "Я шагаю по Москве",
                            link: "/i_walking_moscow",
                            children: []
                        },
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Траектория успеха ребенка",
            link: "",
            children: [
                {
                    id: 20,
                    title: "Профориентация",
                    link: "/professional_orientation",
                    children: []
                },
                {
                    id: 21,
                    title: "Гражданская активность",
                    link: "/civil_activity",
                    children: []
                },
                {
                    id: 22,
                    title: "Проектная деятельность",
                    link: "/project_activity",
                    children: []
                },
                {
                    id: 23,
                    title: "Спорт",
                    link: "/sport",
                    children: []
                },
            ]
        },
        {
            id: 3,
            title: "Нормативные документы",
            link: "",
            children: [
                {
                    id: 30,
                    title: "Поиск в нормативных документах",
                    link: "/documents_search",
                    children: []
                },
                {
                    id: 31,
                    title: "Федеральные Законы",
                    link: "/federal_law",
                    children: []
                },
                {
                    id: 32,
                    title: "Федеральные Концепции и стратегии",
                    link: "/federal_conception_strategy",
                    children: []
                },
                {
                    id: 33,
                    title: "Приказы ДОНМ",
                    link: "/order_donm",
                    children: []
                },
                {
                    id: 34,
                    title: "Полезные ресурсы",
                    link: "/documents_useful_resources",
                    children: []
                },
            ]
        },
        {
            id: 4,
            title: "Сложные ситуации",
            link: "",
            children: [
                {
                    id: 40,
                    title: "Буллинг",
                    link: "/bullying",
                    children: []
                },
                {
                    id: 41,
                    title: "Девиантное поведение",
                    link: "/deviant_behavior",
                    children: []
                },
                {
                    id: 42,
                    title: "Полезные ресурсы",
                    link: "/situation_useful_resources",
                    children: []
                },

            ]
        },
        {
            id: 5,
            title: "Безопасная среда",
            link: "",
            children: [
                {
                    id: 50,
                    title: "Профилактика травматизма",
                    link: "/injury_prevention",
                    children: []
                },
                {
                    id: 51,
                    title: "Дорожная безопасность",
                    link: "/road_safety",
                    children: []
                },
                {
                    id: 52,
                    title: "Лаборатория безопасности (с сайта МЦПС “Воспитательная деятельность)",
                    link: "/security_laboratory",
                    children: []
                },
                {
                    id: 53,
                    title: "Безопасное лето (с сайта МЦПС “Воспитательная деятельность)",
                    link: "/safe_summer",
                    children: []
                },
                {
                    id: 54,
                    title: "Безопасная школа (с сайта МЦПС “Воспитательная деятельность)",
                    link: "/safe_school",
                    children: []
                },
                {
                    id: 55,
                    title: "Регламенты",
                    link: "/regulations",
                    children: []
                },
                {
                    id: 56,
                    title: "Инструктажи ТБ",
                    link: "/briefings",
                    children: []
                },
                {
                    id: 57,
                    title: "Контакты экстренных служб",
                    link: "/emergency_services",
                    children: []
                },
            ]
        },
        {
            id: 6,
            title: "Классный руководитель онлайн",
            link: "/teacher_online",
            children: []
        },
        {
            id: 7,
            title: "Особенный ребенок",
            link: "/special_child",
            children: []
        },
        {
            id: 8,
            title: "Дополнительное образование",
            link: "/additional_education",
            children: []
        },
        {
            id: 9,
            private: true,
            title: "Личный кабинет",
            link: "",
            children: [
                {
                    id: 90,
                    title: "Мой класс",
                    link: "/my_class",
                    children: []
                },
                {
                    id: 91,
                    title: "Рекомендации",
                    link: "/recommendations",
                    children: []
                },
                {
                    id: 92,
                    title: "Подать заявку",
                    link: "/submit_application",
                    children: []
                },
                {
                    id: 93,
                    title: "Документы",
                    link: "/lk_documents",
                    children: []
                },
                {
                    id: 94,
                    title: "Профессиональные сообщества",
                    link: "/professional_communities",
                    children: []
                },
                {
                    id: 95,
                    title: "Классный руководитель онлайн",
                    link: "/lk_teacher_online",
                    children: []
                },
                {
                    id: 96,
                    title: "Ресурсы",
                    link: "/lk_resources",
                    children: []
                }
            ]
        }
    ];

    const activeClassName = "main-menu__link --no-select --no-drag --active";

    const MenuList = ({array}) => {

        return (
            <>
                {array.filter(item => {
                    if (item.private && !user)
                        return false;

                    return true;
                }).map(item => item.children.length === 0 ?
                    (
                        <li key={item.id}>
                            <NavLink exact={true} className={({isActive}) => isActive ? activeClassName : 'main-menu__link --no-select --no-drag'} to={item.link}>{item.title}</NavLink>
                        </li>
                    )
                    :
                    (
                        <AccordionMenu key={item.id} title={item.title} opened={item.opened}>
                            <MenuList array={item.children}/>
                        </AccordionMenu>
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
                        <Link style={{color: 'white'}} className="control-panel__icon-btn mdi mdi-information-outline"
                              to={"/contacts"}
                              aria-label="Контактная информация"/>
                    </li>
                    <li>
                        <Link style={{color: 'white'}} className="control-panel__icon-btn mdi mdi-home" aria-label=""
                              to={"/"}/>
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