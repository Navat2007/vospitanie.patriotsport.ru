import tippy, {animateFill} from 'tippy.js';
//import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';

let Calendar = function (divId) {
    //Сохраняем идентификатор div
    this.divId = divId;
    // Дни недели с понедельника
    this.DaysOfWeek = [
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб',
        'Вс'
    ];
    // Месяцы начиная с января
    this.Months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    //Устанавливаем текущий месяц, год
    let d = new Date();
    this.currMonth = d.getMonth();
    this.currYear = d.getFullYear();
    this.currDay = d.getDate();
};
// Переход к следующему месяцу
Calendar.prototype.nextMonth = function () {
    if (this.currMonth === 11) {
        this.currMonth = 0;
        this.currYear = this.currYear + 1;
    } else {
        this.currMonth = this.currMonth + 1;
    }
    this.showcurr();
};
// Переход к предыдущему месяцу
Calendar.prototype.previousMonth = function () {
    if (this.currMonth === 0) {
        this.currMonth = 11;
        this.currYear = this.currYear - 1;
    } else {
        this.currMonth = this.currMonth - 1;
    }
    this.showcurr();
};
// Показать текущий месяц
Calendar.prototype.showcurr = function () {
    this.showMonth(this.currYear, this.currMonth);
};
// Показать месяц (год, месяц)
Calendar.prototype.showMonth = function (y, m) {

    const calendar_static_tooltip = document.getElementById('calendar_static_tooltip');
    calendar_static_tooltip.parentElement.classList.add('--hidden');

    document.getElementById(this.divId).innerHTML = '';

    // Первый день недели в выбранном месяце
    let firstDayOfMonth = new Date(y, m, 7).getDay();
    // Последний день выбранного месяца
    let lastDateOfMonth = new Date(y, m + 1, 0).getDate();
    // Последний день предыдущего месяца
    let lastDayOfLastMonth = m === 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();

    let table = document.createElement('table');
    table.className = "calendar__table";

    let thead = document.createElement('thead');
    thead.className = "calendar__head";
    thead.innerHTML = `<tr class="calendar__row"><td class="calendar__caption" colspan="7">${this.Months[m]} ${y}</td></tr>`;

    let tbody = document.createElement('tbody');
    tbody.className = "calendar__body";

    let trDays = document.createElement('tr');
    trDays.className = "calendar__row";

    for (let i = 0; i < this.DaysOfWeek.length; i++) {
        let td = document.createElement('td');
        td.className = "calendar__day";
        td.textContent = this.DaysOfWeek[i];
        trDays.append(td);
    }

    thead.append(trDays);
    table.append(thead);

    // Записываем дни
    let i = 1;
    let currentTr;
    do {
        let dow = new Date(y, m, i).getDay();
        // Начать новую строку в понедельник
        if (dow === 1) {
            currentTr = document.createElement('tr');
            currentTr.className = "calendar__row";
        }
        // Если первый день недели не понедельник показать последние дни предыдущего месяца
        else if (i === 1) {
            currentTr = document.createElement('tr');
            currentTr.className = "calendar__row";
            let k = lastDayOfLastMonth - firstDayOfMonth + 1;
            for (let j = 0; j < firstDayOfMonth; j++) {
                let td = document.createElement('td');
                td.className = "calendar__day --not-current";
                td.textContent = k;
                currentTr.append(td);
                k++;
            }
        }
        // Записываем текущий день в цикл
        let chk = new Date();
        let chkY = chk.getFullYear();
        let chkM = chk.getMonth();

        let currentDayElement = document.createElement('td');
        currentDayElement.className = "calendar__day";
        currentDayElement.textContent = i;

        if (chkY === this.currYear && chkM === this.currMonth && i === this.currDay && m === this.currMonth) {
            currentDayElement.classList.add('--today');
        }

        if (y === 2022 && m === 8 && i === 1) {

            this.addTooltip(currentDayElement, `
                <p class="tooltip__title">День знаний</p>
                <p class="tooltip__title">Всероссийский урок ОБЖ 
                    <span class="tooltip__span-accent">(урок подготовки детей к действиям в условиях различного рода чрезвычайных ситуаций)</span>
                </p>
            `, calendar_static_tooltip, 1);

        }

        if (y === 2022 && m === 8 && i === 3) {

            this.addTooltip(currentDayElement, `
                <p class="tooltip__title">День солидарности в борьбе с терроризмом</p>
            `, calendar_static_tooltip, 3);

        }

        if (y === 2022 && m === 8 && i === 8) {

            this.addTooltip(currentDayElement, `
                <p class="tooltip__title">Международный день распространения грамотности</p>
            `, calendar_static_tooltip, 8);

        }

        if (y === 2022 && m === 8 && i === 11) {

            this.addTooltip(currentDayElement, `
                <p class="tooltip__title">125 лет со дня рождения В.Л. Гончарова</p>
            `, calendar_static_tooltip, 11);

        }

        if (y === 2022 && m === 8 && i === 14) {

            this.addTooltip(currentDayElement, `
                <p class="tooltip__title">130 лет со дня рождения И.М. Виноградова</p>
            `, calendar_static_tooltip, 14);

        }

        if (y === 2022 && m === 8 && i === 23) {

            this.addTooltip(currentDayElement, `
                <p class="tooltip__title">Международный день жестовых языков</p>
            `, calendar_static_tooltip, 23);

        }

        if (y === 2022 && m === 8 && i === 25) {

            this.addTooltip(currentDayElement, `
                <p class="tooltip__title">Неделя безопасности дорожного движения</p>
            `, calendar_static_tooltip, 25);

        }

        if (y === 2022 && m === 8 && i === 26) {

            this.addTooltip(currentDayElement, `
                <p class="tooltip__title">Неделя безопасности дорожного движения</p>
                <p class="tooltip__title">Международный день глухих</p>
            `, calendar_static_tooltip, 26);

        }

        if (y === 2022 && m === 8 && i === 27) {

            this.addTooltip(currentDayElement, `
                <p class="tooltip__title">Неделя безопасности дорожного движения</p>
                <p class="tooltip__title">День работника школьного образования</p>
            `, calendar_static_tooltip, 27);

        }

        if (y === 2022 && m === 8 && i === 28) {

            this.addTooltip(currentDayElement, `
                <p class="tooltip__title">Неделя безопасности дорожного движения</p>
            `, calendar_static_tooltip, 28);

        }

        if (y === 2022 && m === 8 && i === 29) {

            this.addTooltip(currentDayElement, `
                <p class="tooltip__title">Неделя безопасности дорожного движения</p>
            `, calendar_static_tooltip, 29);

        }

        currentTr.append(currentDayElement);

        // закрыть строку в воскресенье
        if (dow === 0) {
            tbody.append(currentTr);
        }
        // Если последний день месяца не воскресенье, показать первые дни следующего месяца
        else if (i === lastDateOfMonth) {
            let k = 1;
            for (dow; dow < 7; dow++) {
                let td = document.createElement('td');
                td.className = "calendar__day --not-current";
                td.textContent = k;
                currentTr.append(td);
                k++;
            }
            tbody.append(currentTr);
        }
        i++;
    } while (i <= lastDateOfMonth);

    table.append(tbody);
    document.getElementById(this.divId).append(table);

};
//
Calendar.prototype.initMonthButtons = function () {

    const september_btn = document.querySelector('#september_btn');
    const october_btn = document.querySelector('#october_btn');
    const november_btn = document.querySelector('#november_btn');
    const december_btn = document.querySelector('#december_btn');
    const january_btn = document.querySelector('#january_btn');
    const february_btn = document.querySelector('#february_btn');
    const march_btn = document.querySelector('#march_btn');
    const april_btn = document.querySelector('#april_btn');
    const may_btn = document.querySelector('#may_btn');
    const june_btn = document.querySelector('#june_btn');
    const july_btn = document.querySelector('#july_btn');
    const august_btn = document.querySelector('#august_btn');

    september_btn.onclick = () => this.selectMonth(september_btn, this.currYear, 8);
    october_btn.onclick = () => this.selectMonth(october_btn, this.currYear, 9);
    november_btn.onclick = () => this.selectMonth(november_btn, this.currYear, 10);
    december_btn.onclick = () => this.selectMonth(december_btn, this.currYear, 11);
    january_btn.onclick = () => this.selectMonth(january_btn, this.currYear, 0);
    february_btn.onclick = () => this.selectMonth(february_btn, this.currYear, 1);
    march_btn.onclick = () => this.selectMonth(march_btn, this.currYear, 2);
    april_btn.onclick = () => this.selectMonth(april_btn, this.currYear, 3);
    may_btn.onclick = () => this.selectMonth(may_btn, this.currYear, 4);
    june_btn.onclick = () => this.selectMonth(june_btn, this.currYear, 5);
    july_btn.onclick = () => this.selectMonth(july_btn, this.currYear, 6);
    august_btn.onclick = () => this.selectMonth(august_btn, this.currYear, 7);

};

Calendar.prototype.selectMonth = function (button, year, month) {

    Array.from(document.querySelector('#calendar_section').getElementsByTagName('button')).forEach(item => {
        item.classList.remove('--selected');
    });

    button.classList.add('--selected');

    this.showMonth(year, month);

};

Calendar.prototype.addTooltip = function (element, data, calendar_static_tooltip, day) {

    element.classList.add('--marked');

    tippy(element, {
        content: `<div class="tooltip">
                    <div class="tooltip__content">
                        ${data}
                    </div>
                </div>`,
        allowHTML: true,
        animateFill: true,
        plugins: [animateFill],
        delay: [100, 0],
        duration: [500, 0],
        maxWidth: 350,
        touch: false,
        zIndex: 9999,
    });

    element.onclick = () => {

        Array.from(document.getElementsByClassName('calendar__day --selected')).map(item => item.classList.remove('--selected'));

        if(calendar_static_tooltip.dataset.day === day)
        {
            calendar_static_tooltip.parentElement.classList.add('--hidden');
            calendar_static_tooltip.dataset.day = "";
        }
        else {
            calendar_static_tooltip.innerHTML = data;
            calendar_static_tooltip.parentElement.classList.remove('--hidden');
            calendar_static_tooltip.dataset.day = day;
            element.classList.add('--selected');
        }

    };

};

export default Calendar;