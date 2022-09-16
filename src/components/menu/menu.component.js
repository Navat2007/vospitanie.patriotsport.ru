import React from 'react';

import {Link} from "react-router-dom";
import Accordion from "../accordion/accordion.component";

import './menu.component.css';

const Menu = ({opened = false}) => {

    const [openState, setOpenState] = React.useState(opened);

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
        }
    ];

    const MenuList = ({array}) => {

        return (
            <>
                {array.map(item => item.children.length === 0 ? (
                        <li key={item.id}>
                            <Link className="main-menu__link" to={item.link}>{item.title}</Link>
                        </li>
                    )
                    :
                    (
                        <Accordion key={item.id} title={item.title} opened={item.opened}>
                            <MenuList array={item.children} />
                        </Accordion>
                    ))}
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
                            <span id="info_btn" data-id="info"
                                  className="control-panel__icon-btn mdi mdi-information-outline"
                                  aria-label="Контактная информация"></span>
                    </li>
                    <li>
                        <span className="control-panel__icon-btn mdi mdi-home" aria-label=""></span>
                    </li>
                </ul>
                <div className="field --type-label-icon control-panel__search-field">
                    <input className="field__input" name="search" type="search"
                           placeholder="Поиск"/>
                    <label className="field__icon --type-label mdi mdi-magnify" htmlFor=""></label>
                </div>
            </div>
        </menu>
    );
};

export default Menu;