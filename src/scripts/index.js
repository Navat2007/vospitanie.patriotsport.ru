import '../styles/App.scss';
import 'regenerator-runtime/runtime';
import Cookies from './js.cookie.js';
import Calendar from './calendar.js';
import hideMainPreloader from './preloader.js';

const popupLogin = document.querySelector('.--popup-login');
const loginPopupBtn = document.querySelector('.lk-block__login-btn');
const popupLoginCloseBtn = document.querySelector('.popup__icon');

const loginForm = document.forms['login-form'];
const loginFormName = loginForm.elements.name;
const login_btn = document.querySelector('#login_btn');
const login_exit_btn = document.querySelector('#login_exit_btn');
const login_form_error = document.querySelector('#login_form_error');
const login_block = document.querySelector('#login_block');
const lk_block = document.querySelector('#lk_block');
const lk_menu_block = document.querySelector('#lk_menu_block');

const mainMenu = document.querySelector('.main-menu');
const accordions = document.getElementsByClassName('accordion__caption');
const mainMenuWrapBtn = mainMenu.querySelector('.main-menu__wrap-btn');

const content_section = document.querySelector('#content_section');

function togglePopup() {
    popupLogin.classList.toggle('--opened');
}

function openLoginForm() {
    togglePopup();
    loginFormName.focus();
}

function toggleAccordion(caption) {

    let accordion = caption.parentElement;
    let section = accordion.querySelector('.accordion__section');
    let transitionDuration = parseFloat(getComputedStyle(section)['transitionDuration']) * 1000;

    if (accordion.classList.contains('--opened')) {
        section.style.maxHeight = section.scrollHeight + "px";
        section.style.overflow = null;
        setTimeout(() => {
            section.style.maxHeight = null;
        }, 100);
    } else {
        section.style.maxHeight = section.scrollHeight + "px";
        setTimeout(() => {
            section.style.overflow = 'unset';
            section.style.maxHeight = 'unset';
        }, transitionDuration);
    }

    accordion.classList.toggle("--opened");

}

function wrapMainMenu() {

    if (mainMenu.classList.contains('--wrapped')) mainMenuWrapBtn.setAttribute('aria-label', 'Свернуть боковое меню');
    else mainMenuWrapBtn.setAttribute('aria-label', 'Развернуть боковое меню');

    mainMenu.classList.toggle('--wrapped');
}

function showSection(sectionID) {

    function hideAllSection() {

        Array.from(content_section.children).map(item => item.classList.add("--hide"));
        Array.from(document.getElementsByClassName('main-menu__link --active')).map(item => item.classList.remove("--active"));

    }

    hideAllSection();

    document.querySelector('#' + sectionID + "_section").classList.remove('--hide');
    document.querySelector('#' + sectionID + "_btn").classList.add('--active');

}

function initMenuButtons() {

    const info_btn = document.querySelector('#info_btn');

//События и мероприятия
    const calendar_btn = document.querySelector('#calendar_btn');
    const federal_project_btn = document.querySelector('#federal_project_btn');
    const online_project_btn = document.querySelector('#online_project_btn');
    const weekend_hike_btn = document.querySelector('#weekend_hike_btn');
    const team_strength_btn = document.querySelector('#team_strength_btn');
    const sports_testing_of_children_btn = document.querySelector('#sports_testing_of_children_btn');

//Траектория успеха ребенка
    const professional_orientation_btn = document.querySelector('#professional_orientation_btn');
    const civil_activity_btn = document.querySelector('#civil_activity_btn');
    const sport_btn = document.querySelector('#sport_btn');
    const creativity_btn = document.querySelector('#creativity_btn');
    const project_activity_btn = document.querySelector('#project_activity_btn');
    const education_btn = document.querySelector('#education_btn');

//Нормативные документы
    const federal_law_btn = document.querySelector('#federal_law_btn');
    const federal_conception_strategy_btn = document.querySelector('#federal_conception_strategy_btn');
    const order_donm_btn = document.querySelector('#order_donm_btn');
    const documents_search_btn = document.querySelector('#documents_search_btn');
    const documents_useful_resources_btn = document.querySelector('#documents_useful_resources_btn');

//Сложные ситуации
    const help_btn = document.querySelector('#help_btn');
    const identification_response_btn = document.querySelector('#identification_response_btn');
    const bullying_btn = document.querySelector('#bullying_btn');
    const suicidal_behavior_btn = document.querySelector('#suicidal_behavior_btn');
    const difficult_child_btn = document.querySelector('#difficult_child_btn');
    const school_shooting_btn = document.querySelector('#school_shooting_btn');
    const situation_useful_resources_btn = document.querySelector('#situation_useful_resources_btn');

//Безопасная среда
    const injury_prevention_btn = document.querySelector('#injury_prevention_btn');
    const road_safety_btn = document.querySelector('#road_safety_btn');
    const security_laboratory_btn = document.querySelector('#security_laboratory_btn');
    const safe_summer_btn = document.querySelector('#safe_summer_btn');
    const safe_school_btn = document.querySelector('#safe_school_btn');
    const regulations_btn = document.querySelector('#regulations_btn');
    const briefings_btn = document.querySelector('#briefings_btn');
    const emergency_services_btn = document.querySelector('#emergency_services_btn');

    const teacher_online_btn = document.querySelector('#teacher_online_btn');
    const special_child_btn = document.querySelector('#special_child_btn');
    const additional_education_btn = document.querySelector('#additional_education_btn');

//Личный кабинет
    const my_class_btn = document.querySelector('#my_class_btn');
    const recommendations_btn = document.querySelector('#recommendations_btn');
    const submit_application_btn = document.querySelector('#submit_application_btn');
    const lk_documents_btn = document.querySelector('#lk_documents_btn');
    const professional_communities_btn = document.querySelector('#professional_communities_btn');
    const lk_teacher_online_btn = document.querySelector('#lk_teacher_online_btn');
    const lk_resources_btn = document.querySelector('#lk_resources_btn');

    loginPopupBtn.addEventListener('click', openLoginForm);
    popupLoginCloseBtn.addEventListener('click', togglePopup);
    mainMenuWrapBtn.addEventListener('click', wrapMainMenu);

    info_btn.onclick = () => showSection(info_btn.dataset.id);

    calendar_btn.onclick = () => showSection(calendar_btn.dataset.id);
    federal_project_btn.onclick = () => showSection(federal_project_btn.dataset.id);
    online_project_btn.onclick = () => showSection(online_project_btn.dataset.id);
    weekend_hike_btn.onclick = () => showSection(weekend_hike_btn.dataset.id);
    team_strength_btn.onclick = () => showSection(team_strength_btn.dataset.id);
    sports_testing_of_children_btn.onclick = () => showSection(sports_testing_of_children_btn.dataset.id);

    professional_orientation_btn.onclick = () => showSection(professional_orientation_btn.dataset.id);
    civil_activity_btn.onclick = () => showSection(civil_activity_btn.dataset.id);
    sport_btn.onclick = () => showSection(sport_btn.dataset.id);
    creativity_btn.onclick = () => showSection(creativity_btn.dataset.id);
    project_activity_btn.onclick = () => showSection(project_activity_btn.dataset.id);
    education_btn.onclick = () => showSection(education_btn.dataset.id);

    federal_law_btn.onclick = () => showSection(federal_law_btn.dataset.id);
    federal_conception_strategy_btn.onclick = () => showSection(federal_conception_strategy_btn.dataset.id);
    order_donm_btn.onclick = () => showSection(order_donm_btn.dataset.id);
    documents_search_btn.onclick = () => showSection(documents_search_btn.dataset.id);
    documents_useful_resources_btn.onclick = () => showSection(documents_useful_resources_btn.dataset.id);

    help_btn.onclick = () => showSection(help_btn.dataset.id);
    identification_response_btn.onclick = () => showSection(identification_response_btn.dataset.id);
    bullying_btn.onclick = () => showSection(bullying_btn.dataset.id);
    suicidal_behavior_btn.onclick = () => showSection(suicidal_behavior_btn.dataset.id);
    difficult_child_btn.onclick = () => showSection(difficult_child_btn.dataset.id);
    school_shooting_btn.onclick = () => showSection(school_shooting_btn.dataset.id);
    situation_useful_resources_btn.onclick = () => showSection(situation_useful_resources_btn.dataset.id);

    injury_prevention_btn.onclick = () => showSection(injury_prevention_btn.dataset.id);
    road_safety_btn.onclick = () => showSection(road_safety_btn.dataset.id);
    security_laboratory_btn.onclick = () => showSection(security_laboratory_btn.dataset.id);
    safe_summer_btn.onclick = () => showSection(safe_summer_btn.dataset.id);
    safe_school_btn.onclick = () => showSection(safe_school_btn.dataset.id);
    regulations_btn.onclick = () => showSection(regulations_btn.dataset.id);
    briefings_btn.onclick = () => showSection(briefings_btn.dataset.id);
    emergency_services_btn.onclick = () => showSection(emergency_services_btn.dataset.id);

    teacher_online_btn.onclick = () => showSection(teacher_online_btn.dataset.id);
    special_child_btn.onclick = () => showSection(special_child_btn.dataset.id);
    additional_education_btn.onclick = () => showSection(additional_education_btn.dataset.id);

    my_class_btn.onclick = () => showSection(my_class_btn.dataset.id);
    recommendations_btn.onclick = () => showSection(recommendations_btn.dataset.id);
    submit_application_btn.onclick = () => showSection(submit_application_btn.dataset.id);
    lk_documents_btn.onclick = () => showSection(lk_documents_btn.dataset.id);
    professional_communities_btn.onclick = () => showSection(professional_communities_btn.dataset.id);
    lk_teacher_online_btn.onclick = () => showSection(lk_teacher_online_btn.dataset.id);
    lk_resources_btn.onclick = () => showSection(lk_resources_btn.dataset.id);

    showSection(calendar_btn.dataset.id);

}

function initTabs(containerID) {

    const container = document.querySelector('#' + containerID);

    function clearActive() {

        Array.from(container.getElementsByClassName('tab__item --active')).map(item => {
           item.classList.remove('--active');
        });

        Array.from(container.getElementsByClassName('tab__section --active')).map(item => {
            item.classList.remove('--active');
        });

    }

    const tab_items = container.getElementsByClassName('tab__item');
    const tab_sections = container.getElementsByClassName('tab__section');

    for (let i = 0; i < tab_items.length; i++) {
        tab_items[i].onclick = () => {
            clearActive();
            tab_items[i].classList.add('--active');
            tab_sections[i].classList.add('--active');
        };
    }

}

Array.from(accordions).map(accordion => {

    accordion.onclick = () => {

        toggleAccordion(accordion);

    }

});

login_btn.onclick = () => {

    login_form_error.classList.add('--hide');

    const login = loginForm.elements.name.value;
    const password = loginForm.elements.password.value;

    if (login == "1234" && password == "1234") {
        let expire_days = 30;

        Cookies.set('login', login, {
            expires: expire_days,
            sameSite: 'strict',
            secure: true
        });

        login_block.classList.add('--hide');
        lk_block.classList.remove('--hide');
        lk_menu_block.classList.remove('--hide');
        togglePopup();
    } else {

        login_form_error.classList.remove('--hide');

    }


};

login_exit_btn.onclick = () => {

    Cookies.remove("login");

    window.location.reload();

};

window.onload = () => {

    hideMainPreloader();

    let calendar = new Calendar("calendar");
    calendar.initMonthButtons();
    calendar.selectMonth(document.querySelector('#september_btn'), calendar.currYear, 8);

    if (Cookies.get('login') == undefined) {
        login_block.classList.remove('--hide');
    } else {
        lk_block.classList.remove('--hide');
        lk_menu_block.classList.remove('--hide');
    }

    initMenuButtons();
    initTabs("federal_project_section");
    initTabs("teacher_online_section");

};