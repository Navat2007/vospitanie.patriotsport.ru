import React from "react";
import MyLink from "../../../../components/link/link.component";

import image_03 from "../../../../images/logo/professional-orientation/ticket-to-the-future.png";
import image_03_qr from "../../../../images/qr-codes/professional-orientation/qr-code-ticket-to-the-future.gif";
import image_04 from "../../../../images/logo/professional-orientation/proektoria.png";
import image_04_qr from "../../../../images/qr-codes/professional-orientation/qr-code-proektoria.gif";
import image_05 from "../../../../images/logo/professional-orientation/profession-show.png";
import image_05_qr from "../../../../images/qr-codes/professional-orientation/qr-code-profession-show.gif";

const FederalProjectsPage = () => {

    const [tab, setTab] = React.useState(1);

    React.useEffect(() => {

        document.title = "Федеральные проекты";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">Федеральные проекты</h2>
            <div className="tab">
                <ul className="tab__list">
                    <li className={tab === 1 ? "tab__item --active" : "tab__item"} onClick={() => setTab(1)}>Билет в будущее</li>
                    <li className={tab === 2 ? "tab__item --active" : "tab__item"} onClick={() => setTab(2)}>ПроеКТОриЯ</li>
                    <li className={tab === 3 ? "tab__item --active" : "tab__item"} onClick={() => setTab(3)}>Шоу профессий</li>
                </ul>
                <div className="tab__container">
                    <section className={tab === 1 ? "tab__section --active" : "tab__section"}>
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
                    <section className={tab === 2 ? "tab__section --active" : "tab__section"}>
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
                    <section className={tab === 3 ? "tab__section --active" : "tab__section"}>
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
        </div>
    );
};

export default FederalProjectsPage;
