import React from 'react';
import MyLink from '../../../components/link/link.component';

import image_01 from '../../../images/logo/civil_activity/big-peremen.png';
import image_01_qr from '../../../images/qr-codes/civil_activity/qr-code-big-peremen.gif';
import image_02 from '../../../images/logo/civil_activity/cadet-class-at-the-moscow-school.png';
import image_03 from '../../../images/logo/civil_activity/relay-of-live-affairs.png';
import image_04 from '../../../images/logo/civil_activity/the-russian-movement-of-schoolchildren.png';
import image_04_qr from '../../../images/qr-codes/civil_activity/qr-code-the-russian-movement-of-schoolchildren.gif';
import image_05 from '../../../images/logo/civil_activity/unarmia.png';
import image_05_qr from '../../../images/qr-codes/civil_activity/qr-code-unarmia.gif';

const CivilActivityPage = () => {

    const [tab, setTab] = React.useState(1);

    React.useEffect(() => {

        document.title = "Гражданская активность";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">Гражданская активность</h2>
            <div className="tab">
                <ul className="tab__list">
                    <li className={tab === 1 ? "tab__item --active" : "tab__item"} onClick={() => setTab(1)}>Большая перемена</li>
                    <li className={tab === 2 ? "tab__item --active" : "tab__item"} onClick={() => setTab(2)}>Кадетское движение</li>
                    <li className={tab === 3 ? "tab__item --active" : "tab__item"} onClick={() => setTab(3)}>Эстафета живых дел</li>
                    <li className={tab === 4 ? "tab__item --active" : "tab__item"} onClick={() => setTab(4)}>Российское движение школьников</li>
                    <li className={tab === 5 ? "tab__item --active" : "tab__item"} onClick={() => setTab(5)}>Юнармия</li>
                </ul>
                <div className="tab__container">
                    <section className={tab === 1 ? "tab__section --active" : "tab__section"}>
                        <img className='image' src={image_01} alt="Большая перемена" />
                        <div className="quote">
                            <blockquote className='quote__text'>
                                «Большая перемена» – гораздо больше, чем просто конкурс: это дружная команда, которая объединяет сотни тысяч молодых людей по всей стране, настоящее сообщество единомышленников, где ценят каждого, помогают поверить в себя, свои силы, найти собственный путь в жизни», – сказал глава государства. – Искренне поздравляю победителей конкурса. Вы ярко проявили себя, свои способности, лучшие личностные качества, блестяще справились со всеми заданиями. Молодцы! Конечно, поздравляю всех финалистов: вы также добились отличных результатов. Многим из вас совсем чуть-чуть не хватило до победы, но тем интереснее будет бороться за неё в следующем году». – »
                            </blockquote>
                            <p className='quote__author'>Президент Российской Федерации В.В. Путин </p>
                        </div>
                        <p>
                            Всероссийский конкурс <b>«Большая перемена» </b> – это онлайн-платформа для образования, развития и коммуникации всех учеников 8-10 классов.
                        </p>
                        <p>
                            Ключевая цель конкурса – дать возможность каждому подростку раскрыть свои уникальные способности. Главным критерием отбора станет не оценка успеваемости, а наличие навыков, которые пригодятся школьникам в современном мире, в том числе умение вести коммуникацию и находить нестандартные решения в сложных ситуациях.
                        </p>
                        <p>
                            В рамках конкурса учащиеся со всей России смогут пройти профессиональные тестирования на эрудицию, профориентацию, интеллект, получить доступ к образовательным программам и рекомендации ведущих экспертов – представителей научной, финансовой, образовательной сфер, искусства и спорта.
                        </p>
                        <p>
                            <b>
                                Подробную информацию можно получить на <MyLink href={"https://bolshayaperemena.online/"} text={"официальном сайте проекта."} />
                            </b>
                        </p>
                        <img className='image' src={image_01_qr} alt="qrcode" />
                    </section>
                    <section className={tab === 2 ? "tab__section --active" : "tab__section"}>
                        <img className='image' src={image_02} alt="Кадетское движение" />
                        <p>
                            <b>Кадетское движение </b>– это большая и крепкая семья, членами которой школьники останутся на всю жизнь.
                        </p>
                        <p>
                            Кадетские классы в столичных школах появились в 2014 году. В настоящий момент по программе проекта «Кадетский класс в московской школе» учатся более 27 тысяч детей.
                        </p>
                        <div className="quote">
                            <blockquote className='quote__text'>
                                «Московская школа предлагает молодежи огромный выбор профессионального образования во всех областях современной науки, техники и культуры. И тем замечательней, что все больше школьников выбирают один из самых сложных путей – кадетское образование… Правительство Москвы поддерживает традиционные кадетские корпуса и открывает новые кадетские классы в московских школах…»». –
                            </blockquote>
                            <p className="quote__author">
                                Мэр города Москвы С.С. Собянин.
                            </p>
                        </div>
                        <p>
                            Московские кадеты – призеры и победители спортивных соревнований самого разного уровня, участники олимпиад, а свыше 70% выпускников поступает в высшие учебные заведения страны, в том числе – в вузы Министерства обороны РФ, а также других силовых министерств и ведомств.
                        </p>
                        <p>
                            Получить кадетское образование могут ученики 7-11 классов. Программа нацелена на подготовку ребят к гражданской и военной службе. Кадетам доступны 16 профилей обучения, соглашения заключены с партнерами из Минобороны России, МЧС, МВД, МИД, Минюст, ФСБ, ФСО, ФСИН, Росгвардией и Роспотребнадзором.
                        </p>
                        <p>
                            Учеба в кадетских классах – это не только патриотическое воспитание, но и первоклассное образование, всестороннее развитие ребенка. Будущие защитники и защитницы Отечества получают ряд совершенно уникальных навыков, становятся более дисциплинированными и ответственными.
                        </p>
                        <p>
                            <b>
                                Подробную информацию можно получить на <MyLink href={"https://patriotsport.moscow/kadety/"} text={"официальной странице Московского центра Патриот.Спорт."} />
                            </b>
                        </p>
                    </section>
                    <section className={tab === 3 ? "tab__section --active" : "tab__section"}>
                        <img className='image' src={image_03} alt="Эстафета живых дел" />
                        <p>
                            Образовательный проект <b>«Эстафета живых дел» </b> разработан с целью трансляции мероприятий, направленных на развитие и поддержку волонтерского движения в образовательных организациях города. Любая школа или колледж, участвующие в проекте, делятся своими мероприятиями, идеями и проектами с другими организациями города Москвы. Центр оказывает методическую, информационную и другие виды поддержки лучшим проектам образовательных организаций, транслируя их на город. В рамках проекта проводятся мероприятия по каждому из основных направлений волонтерской деятельности. Школы передают эстафету мероприятий друг другу, делятся полезным опытом, идеями и предложениями.
                        </p>
                        <p>
                            Проект осуществляется в <b> несколько этапов:</b>
                        </p>
                        <ul className="list --type-number">
                            <li>Формирование участников проекта;</li>
                            <li>Формирование «Копилки идей» от образовательных организаций города Москвы;</li>
                            <li>Включение лучших проектов в план мероприятий, совместная подготовка мероприятий с ГБОУ ДПО МЦПС (с привлечением социальных партнеров);</li>
                            <li>Проведение мероприятия</li>
                        </ul>
                    </section>
                    <section className={tab === 4 ? "tab__section --active" : "tab__section"}>
                        <img className='image' src={image_04} alt="Российское движение школьников" />
                        <p>
                            <b>Российское движение школьников (РДШ) </b>— Общероссийская общественно-государственная детско-юношеская организация, деятельность которой направлена на воспитание подрастающего поколения, развитие детей на основе их интересов и потребностей, а также организацию досуга и занятости школьников.
                        </p>
                        <p>
                            Присоединится к движению может любой обучающийся с 8 до 18 лет, родитель и учитель.
                        </p>
                        <p>
                            <b>
                                Подробную информацию можно получить на <MyLink href={"https://рдш.рф/"} text={"официальном сайте проекта."} />
                            </b>
                        </p>
                        <img className='image' src={image_04_qr} alt="qrcode" />
                    </section>
                    <section className={tab === 5 ? "tab__section --active" : "tab__section"}>
                        <img className='image' src={image_05} alt="Юнармия" />
                        <p>
                            <b>ЮНАРМИЯ </b> – Всероссийское детско-юношеское военно-патриотическое общественное движение, созданное в 2016 году по инициативе Министра обороны РФ Сергея Шойгу.
                        </p>
                        <p>
                            Присоединится к движению может любой желающий с 8 до 18 лет.
                        </p>
                        <p><b>Цели юнармейского движения:</b></p>
                        <ul className="list">
                            <li>Участие в реализации государственной молодежной политики Российской Федерации; </li>
                            <li>Всестороннее развитие и совершенствование личности детей и подростков, удовлетворение их индивидуальных потребностей в интеллектуальном, нравственном и физическом совершенствовании; </li>
                            <li>Повышение в обществе авторитета и престижа военной службы; </li>
                            <li>Сохранение и приумножение патриотических традиций;</li>
                            <li>Формирование у молодежи готовности и практической способности к выполнению гражданского долга и конституционных обязанностей по защите Отечества. </li>
                        </ul>
                        <p>
                            <b>
                                Подробную информацию можно получить на <MyLink href={"https://yunarmy.ru/"} text={"официальном сайте движения."} />
                            </b>
                        </p>
                        <img className='image' src={image_05_qr} alt="qrcode" />
                    </section>
                </div>
            </div>
        </div>
    )

}

export default CivilActivityPage;