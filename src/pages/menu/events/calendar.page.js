import React from 'react';
import Calendar from '../../../components/calendar/calendar';

const CalendarPage = () => {

    React.useEffect(() => {

        document.title = "Календарь";

        let calendar = new Calendar("calendar");
        calendar.selectMonth(null, calendar.currYear, calendar.currMonth);

    }, []);

    return (
        <div className="content__block" id="calendar_section">
            <h2 className="content__title">Календарь</h2>

            <ul className="mounth-list --hide">
                <li>
                    <button className="button --theme-light-primary mounth-list__btn" type="button" id="september_btn">
                        Сентябрь
                    </button>
                </li>
                <li>
                    <button className="button --theme-light-primary mounth-list__btn" type="button" id="october_btn">
                        Октябрь
                    </button>
                </li>
                <li>
                    <button className="button --theme-light-primary mounth-list__btn" type="button" id="november_btn">
                        Ноябрь
                    </button>
                </li>
                <li>
                    <button className="button --theme-light-primary mounth-list__btn" type="button" id="december_btn">
                        Декабрь
                    </button>
                </li>
                <li>
                    <button className="button --theme-light-primary mounth-list__btn" type="button" id="january_btn">
                        Январь
                    </button>
                </li>
                <li>
                    <button className="button --theme-light-primary mounth-list__btn" type="button" id="february_btn">
                        Февраль
                    </button>
                </li>
                <li>
                    <button className="button --theme-light-primary mounth-list__btn" type="button" id="march_btn">
                        Март
                    </button>
                </li>
                <li>
                    <button className="button --theme-light-primary mounth-list__btn" type="button" id="april_btn">
                        Апрель
                    </button>
                </li>
                <li>
                    <button className="button --theme-light-primary mounth-list__btn" type="button" id="may_btn">Май
                    </button>
                </li>
                <li>
                    <button className="button --theme-light-primary mounth-list__btn" type="button" id="june_btn">Июнь
                    </button>
                </li>
                <li>
                    <button className="button --theme-light-primary mounth-list__btn" type="button" id="july_btn">Июль
                    </button>
                </li>
                <li>
                    <button className="button --theme-light-primary mounth-list__btn" type="button" id="august_btn">
                        Август
                    </button>
                </li>
            </ul>

            <div className="calendar-container">
                <div className="calendar" id="calendar"/>
                <div className="calendar-container__tooltip tooltip --hidden">
                    <div id="calendar_static_tooltip" className="tooltip__content">
                        <p className="tooltip__title">День знаний</p>
                        <p className="tooltip__title">Всероссийский урок ОБЖ
                            <span className="tooltip__span-accent">(урок подготовки детей к действиям в условиях
                    различного рода чрезвычайных ситуаций)</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CalendarPage;