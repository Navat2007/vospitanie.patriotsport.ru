import React, { Component } from 'react';
import MyLink from '../../../components/link/link.component';

import card_image_01 from '../../../images/card-urban-projects.jpg';
import card_image_02 from '../../../images/card-federal-projects.jpg';
import card_image_03 from '../../../images/card-professional-skill-championships.jpg';

import image_01 from '../../../images/logo/professional-orientation/vocational-training-without-borders.png';
import image_01_qr from '../../../images/qr-codes/professional-orientation/qr-code-vocational-training-without-borders.gif';
import image_02 from '../../../images/logo/professional-orientation/saturdays-of-a-moscow-schoolboy.png';
import image_02_qr from '../../../images/qr-codes/professional-orientation/qr-code-saturdays-of-a-moscow-schoolboy.gif';
import image_03 from '../../../images/logo/professional-orientation/ticket-to-the-future.png';
import image_03_qr from '../../../images/qr-codes/professional-orientation/qr-code-ticket-to-the-future.gif';
import image_04 from '../../../images/logo/professional-orientation/proektoria.png';
import image_04_qr from '../../../images/qr-codes/professional-orientation/qr-code-proektoria.gif';
import image_05 from '../../../images/logo/professional-orientation/profession-show.png';
import image_05_qr from '../../../images/qr-codes/professional-orientation/qr-code-profession-show.gif';
import image_06 from '../../../images/logo/professional-orientation/world-skills-russia.png';
import image_06_qr from '../../../images/qr-codes/professional-orientation/qr-code-world-skills-russia.gif';
import image_07 from '../../../images/logo/professional-orientation/masteryata.png';
import image_07_qr from '../../../images/qr-codes/professional-orientation/qr-code-masteryata.gif';
import image_08 from '../../../images/logo/professional-orientation/abilimpix.png';
import image_08_qr from '../../../images/qr-codes/professional-orientation/qr-code-abilimpix.gif';

export default class ProfessionalOrientationPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tab: 1
        }
    }

    setTab = (tab) => {
        this.setState(state => ({
            tab: tab
        }))
    }

    render() {
        return (
            <div className="content__block">
                <h2 className="content__title">Профориентация</h2>
                <ul className="card-deck --size-md">
                    <li>
                        <a className="card" href=""
                            rel="noopener noreferrer nofollow"
                            target="_blank">
                            <img className="card__img --ratio-half" src={card_image_01} alt="Спорт" />
                            <span className="card__more-btn">Подробнее &rarr;</span>
                        </a>
                    </li>
                    <li>
                        <a className="card" href=""
                            rel="noopener noreferrer nofollow"
                            target="_blank">
                            <img className="card__img --ratio-half" src={card_image_02} alt="Досуг" />
                            <span className="card__more-btn">Подробнее &rarr;</span>
                        </a>
                    </li>
                    <li>
                        <a className="card" href=""
                            rel="noopener noreferrer nofollow" target="_blank">
                            <img className="card__img --ratio-half" src={card_image_03} alt="Образование" />
                            <span className="card__more-btn">Подробнее &rarr;</span>
                        </a>
                    </li>
                </ul>
                <h2 className="content__title">Городские проекты</h2>
                <div className="tab">
                    <ul className="tab__list">
                        <li className={this.state.tab === 1 ? "tab__item --active" : "tab__item"} onClick={() => this.setTab(1)}>Профессиональное обучение без границ</li>
                        <li className={this.state.tab === 2 ? "tab__item --active" : "tab__item"} onClick={() => this.setTab(2)}>&laquo;Субботы московского школьника&raquo;</li>
                    </ul>
                    <div className="tab__container">
                        <section className={this.state.tab === 1 ? "tab__section --active" : "tab__section"}>
                            <img className='image' src={image_01} alt="Профессиональное обучение без границ" />
                            <p>
                                <b>Профессиональное обучение без границ </b>
                                предполагает освоение основных программ профессионального обучения по программам профессиональной подготовки по профессиям рабочих, должностям служащих за счет средств бюджета города Москвы в образовательных организациях, подведомственных Департаменту образования и науки города Москвы.
                            </p>
                            <p><b>Участники проекта:</b></p>
                            <ul className="list">
                                <li>
                                    Лица различного возраста с ограниченными возможностями здоровья (с различными формами умственной отсталости), не имеющие основного общего или среднего общего образования;
                                </li>
                                <li>
                                    Лица, не достигшие 18 лет и не имеющие основного общего или среднего общего образования, при условии обучения в 9-11 классе на момент завершения освоения программы профессиональной подготовки по профессиям рабочих, должностям служащих.
                                </li>
                            </ul>
                            <p><b>Цели проекта: </b></p>
                            <ul className="list --type-number">
                                <li>
                                    Ранняя профессиональная социализация лиц в возрасте до восемнадцати лет;
                                </li>
                                <li>
                                    Удовлетворение потребности в профессиональном обучении лиц с ограниченными возможностями здоровья.
                                </li>
                                <li>
                                    Расширение интереса к трудовому и профессиональному обучению в условиях структурных изменений на рынке труда, роста конкуренции, определяющих постоянную потребность экономики города Москвы в профессиональной мобильности молодежи
                                </li>
                            </ul>
                            <p>
                                <b>
                                    Подробную информацию можно получить на сайте <MyLink href={"https://school.mcrpo.ru/o-proekte/obshhie-svedeniya/"} text={"МЦРПО"} />и на официальных сайтах образовательных организаций.
                                </b>
                            </p>
                            <img className='image' src={image_01_qr} alt="qrcode" />
                        </section>
                        <section className={this.state.tab === 2 ? "tab__section --active" : "tab__section"}>
                            <img className='image' src={image_02} alt="Субботы московского школьника" width={"350"} />
                            <p>
                                <b>«Субботы московского школьника» </b>
                                — общегородской просветительско-образовательный проект, который позволяет ученикам с пользой проводить выходные. Мероприятия проводятся в формате мастер-классов, лекций, экскурсий, спортивных тренировок, деловых игр, квестов, встреч с известными учеными, актерами, путешественниками.
                            </p>
                            <p>
                                В рамках «Суббот московского школьника» проходят «Университетские субботы», «Мультидисциплинарные субботы московского школьника» и занятия цикла «Профессиональная среда».
                            </p>
                            <p>
                                <b>«Университетские субботы» </b>
                                организуют ведущие высшие учебные заведения столицы. Со школьниками занимаются преподаватели и ученые. Это помогает детям подготовиться к поступлению в университет.
                            </p>
                            <p>
                                Направление <b>«Профессиональная среда» </b> позволяет школьникам побывать в колледжах и на предприятиях, познакомиться с востребованными специальностями и даже пройти стажировку. Участников знакомят с профессиями, связанными со сферой услуг, творчеством и дизайном, ИТ- и инженерными технологиями, строительством и транспортом.
                            </p>
                            <p>
                                <b>«Мультидисциплинарные субботы московского школьника» </b> включают в себя сразу несколько направлений. Участников «Космических суббот» возят в Звездный городок и знакомят с достижениями отечественной космонавтики. На «Субботах активиста» ребята развивают лидерские навыки. Патриотическим воспитанием занимаются на «Субботах мужества». Во время «Спортивных суббот» школьники могут сдать нормативы ГТО и попасть на мастер-классы олимпийских чемпионов. На «Арт-субботах» они изучают различные направления искусства, а на «Экосубботах» — природу. На «Финансовых и предпринимательских субботах» рассказывают о финансовой грамотности, на «ТВ-субботах» — о профессиях, связанными с телевидением. Во время «Научных суббот» ученики могут побывать в научно-исследовательских институтах, а во время «Транспортных суббот» узнать, как устроена транспортная система мегаполиса.
                            </p>
                            <p>
                                <b>
                                    Подробную информацию можно получить на <MyLink href={"https://events.educom.ru/"} text={"официальном сайте проекта."} />
                                </b>
                            </p>
                            <img className='image' src={image_02_qr} alt="qrcode" />
                        </section>
                    </div>
                </div>
                <h2 className="content__title">Федеральные проекты</h2>
                <div className="tab">
                    <ul className="tab__list">
                        <li className={this.state.tab === 1 ? "tab__item --active" : "tab__item"} onClick={() => this.setTab(1)}>Билет в будущее</li>
                        <li className={this.state.tab === 2 ? "tab__item --active" : "tab__item"} onClick={() => this.setTab(2)}>ПроеКТОриЯ</li>
                        <li className={this.state.tab === 3 ? "tab__item --active" : "tab__item"} onClick={() => this.setTab(3)}>Шоу профессий</li>
                    </ul>
                    <div className="tab__container">
                        <section className={this.state.tab === 1 ? "tab__section --active" : "tab__section"}>
                            <img className='image' src={image_03} alt="Билет в будущее" width={"250"} />
                            <div className="quote">
                                <blockquote className='quote__text'>
                                    «Билет в будущее - чрезвычайно значимый проект. Нет ничего важнее выбора пути в жизни. Профориентация - один из ключевых элементов работы с молодыми людьми сегодня».
                                </blockquote>
                                <span className='quote__author'>Президент Российской Федерации В.В. Путин</span>
                            </div>

                            <p>
                                <b>"Билет в будущее" </b>
                                - проект ранней профессиональной ориентации обучающихся 6-11 классов общеобразовательных организаций.
                            </p>
                            <p>
                                Проект "Билет в будущее" позволяет как можно раньше выявить предпочтения, склонности ребят, помочь в развитии навыков в выбранном направлении, а также предоставляет возможность попробовать себя в конкретных профессиях, погрузившись в практическую деятельность.
                            </p>
                            <p><b>В проекте могут участвовать:</b></p>
                            <ul className='list'>
                                <li>обучающиеся 6 – 11 классов;</li>
                                <li>родители и педагоги.</li>
                            </ul>
                            <p><b>Этапы проекта:</b></p>
                            <ul className='list'>
                                <li>профориентационная онлайн-диагностика (тестирование) на платформе проекта;</li>
                                <li>проведение профориентационных уроков и консультаций;</li>
                                <li>практические мероприятия профессионального выбора "Профессиональные пробы" очного и онлайн-форматов на базе колледжей и предприятий.</li>
                            </ul>
                            <p>
                                <b>
                                    Подробную информацию можно получить на <MyLink href={"https://bvbinfo.ru/"} text={"официальном сайте проекта."} />
                                </b>
                            </p>
                            <img className='image' src={image_03_qr} alt="qrcode" />
                        </section>
                        <section className={this.state.tab === 2 ? "tab__section --active" : "tab__section"}>
                            <img className='image' src={image_04} alt="ПроеКТОриЯ" />
                            <p>
                                <b>«ПроеКТОриЯ» </b>
                                – самый масштабный профориентационный проект, проводимый при поддержке Министерства просвещения Российской Федерации. Его основная цель – познакомить учеников 8–11-х классов с перспективными профессиями, а также достижениями отечественной науки и экономики.
                            </p>
                            <p><b>Проект включает себя три составляющие:</b></p>
                            <ul className="list" style={{ "marginBottom": "1em" }}>
                                <li>Портал, который включает в себя полезный контент об около 500 профессий;</li>
                                <li>Всероссийский форум профессиональной навигации, проводимый по распоряжению Президента РФ с 2013 года, на котором представители вузов, крупнейших российских компаний и лучшие педагоги страны делятся со школьниками опытом и помогают им выбрать профессию мечты;</li>
                                <li>Всероссийские открытые уроки, на которых приглашенные спикеры рассказывают школьникам о новых технологиях, знакомят с современными профессиями, в дистанционном формате.</li>
                            </ul>
                            <div className="quote">
                                <blockquote className='quote__text'>
                                    «Каждому школьнику предстоит определиться с профессией. Главное преимущество уроков «ПроеКТОриЯ» заключается в том, что перед детьми выступают увлечённые своим делом профессионалы, которые могут всерьез заинтересовать детей. Именно поэтому внимание к нашим урокам постоянно растёт», –
                                </blockquote>
                                <span className='quote__author'>Министр просвещения России С.С. Кравцов</span>
                            </div>
                            <p>
                                <b>
                                    Подробную информацию можно получить на <MyLink href={"https://proektoria.online/"} text={"официальном сайте проекта."} />
                                </b>
                            </p>
                            <img className='image' src={image_04_qr} alt="qrcode" />
                        </section>
                        <section className={this.state.tab === 3 ? "tab__section --active" : "tab__section"}>
                            <img className='image' src={image_05} alt="Шоу профессий" width={"250"} />

                            <p>
                                <b>Шоу профессий </b> - проект, направленный на раннюю профориентацию учащихся общеобразовательных школ.
                            </p>
                            <p>
                                Онлайн-Уроки являются частью учебного процесса и проходят один - два раза в месяц. Онлайн-уроки представляет из себя видеовыпуск «Шоу профессий» по одной из компетенций длительностью от 20 до 40 минут.
                            </p>
                            <p>
                                Цель проекта – популяризация рабочих профессии и образа профессионала, в том числе деятельности системы среднего профессионального образования среди учащихся общеобразовательных организаций.
                            </p>
                            <p>
                                Целевая аудитория проекта – обучающиеся общеобразовательных организаций с 1 по 12 класс, их родители и педагоги.
                            </p>
                            <p>
                                В рамках Проекта Участники знакомятся с передовыми отраслями экономики России, востребованными профессиями и соответствующими компетенциями. Для лучшего погружения в новую для Участников область знаний используется соревновательный момент двух команд их сверстников, которые решают реальный производственный кейс, который был взят с производства и специально адаптирован для безопасного и лимитированного по времени решения. За ходом выполнения задания следит Эксперт, который помогает и поддерживает Конкурсантов. Затем итоговый результат презентуется Конкурсантами, а Эксперт оценивает его и комментирует.
                            </p>
                            <p>
                                <b>
                                    Подробную информацию можно получить на <MyLink href={"https://шоупрофессий.рф/"} text={"официальном сайте проекта."} />
                                </b>
                            </p>
                            <img className='image' src={image_05_qr} alt="qrcode" />
                        </section>
                    </div>
                </div>
                <h2 className="content__title">Чемпионаты профессионального мастерства</h2>
                <div className="tab">
                    <ul className="tab__list">
                        <li className={this.state.tab === 1 ? "tab__item --active" : "tab__item"} onClick={() => this.setTab(1)}>WorldSkills Russia</li>
                        <li className={this.state.tab === 2 ? "tab__item --active" : "tab__item"} onClick={() => this.setTab(2)}>Московский детский чемпионат Мастерята</li>
                        <li className={this.state.tab === 3 ? "tab__item --active" : "tab__item"} onClick={() => this.setTab(3)}>Абилимпикс</li>
                    </ul>
                    <div className="tab__container">
                        <section className={this.state.tab === 1 ? "tab__section --active" : "tab__section"}>
                            <img className='image' src={image_06} alt="Билет в будущее" />
                            <p>
                                <b>WorldSkills Russia </b> проводит чемпионаты профессионального мастерства по всей России по 5 направлениям:
                            </p>
                            <ul className="list">
                                <li>Чемпионаты профессионального мастерства среди обучающихся школ и колледжей в возрасте от 10 до 16 лет (юниорская группа) и от 16 до 22 лет (основная группа).</li>
                                <li>Корпоративные чемпионаты, организуемые и проводимые крупнейшими российскими компаниями среди молодых работников в возрасте от 16 до 28 лет.  </li>
                                <li>Чемпионат в сфере высокотехнологичных профессий IT-сектора – DigitalSkills. </li>
                                <li>AgroSkills – отраслевой чемпионат профессионального мастерства среди сотрудников компаний сельского хозяйства в возрасте от 18 до 28 лет. </li>
                                <li>Межвузовский чемпионат по стандартам WorldSkills. В данном конкурсе профессионального мастерства участвуют студенты высших учебных заведений России, а также иностранные студенты их ведущих мировых вузов.</li>
                            </ul>
                            <p>
                                <b>
                                    Подробную информацию можно получить на <MyLink href={"https://worldskills.ru/"} text={"официальном сайте проекта."} />
                                </b>
                            </p>
                            <img className='image' src={image_06_qr} alt="qrcode" />
                        </section>
                        <section className={this.state.tab === 2 ? "tab__section --active" : "tab__section"}>
                            <img className='image' src={image_07} alt="Московский детский чемпионат Мастерята" width={"300"} />
                            <p>
                                <b>Московский детский чемпионат Мастерята </b> — это соревнования по профессиональному мастерству среди дошкольников и учеников младших классов. Они помогают сформировать и усовершенствовать умения и навыки, необходимые ребенку в будущем.
                            </p>
                            <p>
                                <b>
                                    Подробную информацию можно получить на <MyLink href={"https://kid.mcrpo.ru/o_chempionate/"} text={"официальном сайте проекта."} />
                                </b>
                            </p>
                            <img className='image' src={image_07_qr} alt="qrcode" />
                        </section>
                        <section className={this.state.tab === 3 ? "tab__section --active" : "tab__section"}>
                            <img className='image' src={image_08} alt="Абилимпикс"/>
                            <p>
                                <b>Абилимпикс </b>– международное движение, основной деятельностью которого является проведение конкурсов профессионального мастерства для людей с инвалидностью с целью их профессиональной ориентации и содействия в трудоустройстве.
                            </p>
                            <p>
                                Цель Московского чемпионата Абилимпикс – профессиональная ориентация и трудоустройство людей с инвалидностью и ограниченными возможностями здоровья.
                            </p>
                            <p>
                                <b>
                                    Подробную информацию можно получить на <MyLink href={"https://abilympics.moscow/"} text={"официальном сайте проекта."} />
                                </b>
                            </p>
                            <img className='image' src={image_08_qr} alt="qrcode" />
                        </section>
                    </div>
                </div>
            </div>
        )
    }

}