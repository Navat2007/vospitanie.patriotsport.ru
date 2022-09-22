import React from 'react';
import MyLink from '../../../components/link/link.component';

import image_logo from '../../../images/psychological counseling of parents.jpg';

const SituationUsefulResourcesPage = () => {

    const [tab, setTab] = React.useState(1);

    React.useEffect(() => {

        document.title = "Полезные ресурсы";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">Полезные ресурсы</h2>
            <img src={image_logo} alt="Памятка: Психологическое консультирование родителей" className="image" width={"500"} />
            <div className="notice --theme-primary">
                <div className="notice__wrap">
                    <p className="notice__title">«ГОРЯЧАЯ ЛИНИЯ» ГППЦ: МЫ РЯДОМ!</p>
                    <div className="notice__content">
                        <MyLink className='link --type-icon --icon-phone' href={"tel:88002501191"} text={"8 800 250 11 91 "} />
                        <p className='link --type-icon --icon-worktime'>9:00 – 21:00</p>
                        <p className='link --type-icon --icon-calendar'>Понедельник-пятница</p>
                    </div>
                </div>
            </div>
            <p>
                В Городском психолого-педагогическом центре создан Телефон Доверия для оказания неотложной психологической помощи детям и подросткам, находящимся в трудной ситуации, а также родителям и педагогам. Формой работы является дистанционное психологическое консультирование.
            </p>
            <h3 className='content__caption'>Детям и подросткам:</h3>
            <p>Вопросы, с которыми можно обратиться:</p>
            <ul className="list">
                <li>получена плохая оценка, и стыдно идти домой;</li>
                <li>хочется обсудить проблему, с которой больше не к кому обратиться;</li>
                <li>произошла ссора с другом;</li>
                <li>несчастная любовь;</li>
                <li>в школе дразнят, хочется это прекратить;</li>
                <li>одиноко и нет друзей;</li>
                <li>все так плохо, что не знаешь, что дальше делать;</li>
                <li>родители совсем не понимают;</li>
                <li>произошла опасная ситуация – к кому обратиться?</li>
                <li>другие вопросы.</li>
            </ul>
            <h3 className='content__caption'>Родителям</h3>
            <p>Вопросы, с которыми можно обратиться:</p>
            <ul className="list">
                <li>ребенок чего-то боится;</li>
                <li>развитие, обучение и воспитание ребенка;</li>
                <li>ребенок испытывает трудности в общении со сверстниками или взрослыми;</li>
                <li>воспитание приемного ребенка;</li>
                <li>ребенок находится в трудной жизненной ситуации (развод родителей, смерть кого-то из близких);</li>
                <li>у ребенка есть трудности в адаптации (переезд в другой город, смена образовательного учреждения);</li>
                <li>ребенок начал курить, употреблять алкоголь или наркотики;</li>
                <li>ребенок связался с плохой компанией;</li>
                <li>не устраивают отношения с ребенком;</li>
                <li>не знаете, как помочь ребенку при подготовке к сдаче экзаменов;</li>
                <li>другие вопросы.</li>
            </ul>
            <h3 className='content__caption'>Педагогам</h3>
            <p>Вопросы, с которыми можно обратиться:</p>
            <ul className="list">
                <li>как справиться с чувством собственной беспомощности;</li>
                <li>как справиться со стрессом на работе и эмоциональным выгоранием;</li>
                <li>как работать с детьми группы риска;</li>
                <li>возрастные психологические особенности;</li>
                <li>социально-рискованное поведение учащихся;</li>
                <li>как сплотить класс;</li>
                <li>учебная мотивация;</li>
                <li>другие вопросы.</li>
            </ul>
            <p>
                Телефон Доверия – это доступная возможность для Вас получить немедленную квалифицированную психологическую помощь <b>бесплатно, анонимно, конфиденциально.</b>
            </p>
            <h3 className='content__caption'>Полезные ресурсы</h3>
            <div className="tab">
                <ul className="tab__list">
                    <li className={tab === 1 ? "tab__item --active" : "tab__item"} onClick={() => setTab(1)}>Для детей</li>
                    <li className={tab === 2 ? "tab__item --active" : "tab__item"} onClick={() => setTab(2)}>Для родителей</li>
                    <li className={tab === 3 ? "tab__item --active" : "tab__item"} onClick={() => setTab(3)}>Для педагогов</li>
                    <li className={tab === 4 ? "tab__item --active" : "tab__item"} onClick={() => setTab(4)}>Буллинг</li>
                    <li className={tab === 5 ? "tab__item --active" : "tab__item"} onClick={() => setTab(5)}>Полезная литература</li>
                </ul>
                <div className="tab__container">
                    <section className={tab === 1 ? "tab__section --active" : "tab__section"}>
                        <div className="table --theme-standart">
                            <div className="table__wrap">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>Твоя территория.Онлайн</td>
                                        <td>
                                            <MyLink href={"https://www.твоятерритория.онлайн/"} text={"https://www.твоятерритория.онлайн/"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Интернет-портал «Мел»</td>
                                        <td><MyLink href={"https://mel.fm/"} text={"mel.fm"} /></td>
                                    </tr>
                                    <tr>
                                        <td>Помощь в выборе профессии</td>
                                        <td><MyLink href={"http://smart-course.ru/"} text={"smart-course.ru"} /></td>
                                    </tr>
                                    <tr>
                                        <td>Портал поддержки Единого экзамена</td>
                                        <td><MyLink href={"https://obrnadzor.gov.ru/gia/gia-11/"} text={"obrnadzor.gov.ru"} /></td>
                                    </tr>
                                    <tr>
                                        <td>Национальный рейтинг детей и молодежи «Страна молодых»</td>
                                        <td><MyLink href={"https://странамолодых.рф/"} text={"странамолодых.рф"} /></td>
                                    </tr>
                                    <tr>
                                        <td>Игра-интернет «Изучи Интернет — Управляй им.»</td>
                                        <td><MyLink href={"https://игра-интернет.рф/championship/"} text={"игра-интернет.рф"} /></td>
                                    </tr>
                                    <tr>
                                        <td>Субботы московского школьника</td>
                                        <td><MyLink href={"https://events.educom.ru/"} text={"events.educom.ru"} /></td>
                                    </tr>
                                    <tr>
                                        <td>Форсайт профессионального успеха</td>
                                        <td><MyLink href={"https://events.educom.ru/calendar?portalIds=13"} text={"events.educom.ru"} /></td>
                                    </tr>
                                    <tr>
                                        <td>Проект «Профессиональная среда»</td>
                                        <td><MyLink href={"https://events.educom.ru/calendar?portalIds=19"} text={"events.educom.ru"} /></td>
                                    </tr>
                                    <tr>
                                        <td>Сервис индивидуального подбора программ дополнительного образования «ПРОФИЛИУМ»</td>
                                        <td><MyLink href={"https://profilum.ru/"} text={"profilum.ru"} /></td>
                                    </tr>
                                    <tr>
                                        <td>Проект «Правильно и быстро»</td>
                                        <td><MyLink href={"https://mosmetod.ru/centr/proekty/pravilno-i-bystro/pravilno-i-bystro-onlajn-chempionat.html"} text={"mosmetod.ru"} /></td>
                                    </tr>
                                    <tr>
                                        <td>Проект «Больше, чем урок!»</td>
                                        <td><MyLink href={"https://mosmetod.ru/centr/proekty/bolshe-chem-urok.html"} text={"mosmetod.ru"} /></td>
                                    </tr>
                                    <tr>
                                        <td>Московская электронная школа-школьникам</td>
                                        <td><MyLink href={"https://www.mos.ru/city/projects/mesh/children/"} text={"www.mos.ru"} /></td>
                                    </tr>
                                    <tr>
                                        <td>Московская олимпиада школьников</td>
                                        <td><MyLink href={"https://mos.olimpiada.ru/"} text={"mos.olimpiada.ru"} /></td>
                                    </tr>
                                    <tr>
                                        <td>Портал о здоровом образе жизни</td>
                                        <td><MyLink href={"https://www.takzdorovo.ru/"} text={"www.takzdorovo.ru"} /></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p>
                            Видео подкаст <MyLink href={"https://www.youtube.com/watch?v=MmfQ6QorIaY&list=PLIHvm-g_iHriclK8933AQRH-eodO_E028"} text={"5 вопросов к психологу"} />
                        </p>
                    </section>
                    <section className={tab === 2 ? "tab__section --active" : "tab__section"}>
                        <div className="table --theme-standart">
                            <div className="table__wrap">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>Интернет-портал московского образования «Школа большого города»</td>
                                        <td>
                                            <MyLink href={"https://school.moscow/"} text={"school.moscow"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Московская электронная школа-родителям</td>
                                        <td>
                                            <MyLink href={"https://www.mos.ru/city/projects/mesh/parents/"} text={"www.mos.ru"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Интернет-телеканал «Московский Образовательный»</td>
                                        <td>
                                            <MyLink href={"http://dogm.tv/"} text={"dogm.tv"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Новости российского образования</td>
                                        <td>
                                            <MyLink href={"https://edu.ru/"} text={"edu.ru"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Московский центр качества образования</td>
                                        <td>
                                            <MyLink href={"https://mcko.ru/"} text={"mcko.ru"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Интернет-портал «Учеба. Ру»</td>
                                        <td>
                                            <MyLink href={"https://www.ucheba.ru/"} text={"www.ucheba.ru"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Интернет-портал «Дети России.Онлайн»</td>
                                        <td>
                                            <MyLink href={"http://detionline.com/"} text={"detionline.com"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Интернет-портал «Подросток и общество»</td>
                                        <td>
                                            <MyLink href={"https://podrostok.68edu.ru/"} text={"podrostok.68edu.ru"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Интернет-портал о ВИЧ-инфекции для подростков и родителей</td>
                                        <td>
                                            <MyLink href={"https://teensplus.ru/"} text={"teensplus.ru"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Работа для школьников (подработка в свободное время)</td>
                                        <td>
                                            <MyLink href={"https://podrabotnik.ru/"} text={"podrabotnik.ru"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Национальный фонд защиты детей от жестокого обращения</td>
                                        <td>
                                            <MyLink href={"https://www.sirotstvo.ru/"} text={"www.sirotstvo.ru"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Журнал «Профилактика зависимостей»</td>
                                        <td>
                                            <MyLink href={"http://профилактика-зависимостей.рф/"} text={"профилактика-зависимостей.рф"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Центр защиты прав и интересов детей</td>
                                        <td>
                                            <MyLink href={"https://fcprc.ru/"} text={"fcprc.ru"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Фонд поддержки детей, находящихся в трудной жизненной ситуации</td>
                                        <td>
                                            <MyLink href={"https://fond-detyam.ru/"} text={"fond-detyam.ru"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Учительская газета</td>
                                        <td>
                                            <MyLink href={"https://ug.ru/"} text={"ug.ru"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Проект «Семья и Отечество в моей жизни»</td>
                                        <td>
                                            <MyLink href={"https://nra-russia.ru/"} text={"nra-russia.ru"} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Информационные материалы об Ответственном родительстве, подготовленные Фондом поддержки детей, оказавшихся в трудной жизненной ситуации</td>
                                        <td>
                                            <MyLink href={"https://fond-detyam.ru/reklamno-informatsionnye-materialy-ob-otvetstvennom-roditelstve/"} text={"fond-detyam.ru"} />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <section className={tab === 3 ? "tab__section --active" : "tab__section"}>
                        <ul className="list --type-empty">
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"https://www.mos.ru/dogm/function/"} text={"Департамент образования и науки города Москвы"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"https://edu.gov.ru/"} text={"Министерство просвещения Российской Федерации"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://mkdn.mos.ru/"} text={"Московская городская межведомственная комиссия по делам несовершеннолетних и защите их прав "} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://xn----7sbabkslebfandbl1auodu8adkn5a.xn--p1ai/"} text={"Учебно-методический журнал «Профилактика зависимостей»"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://xn--i1abbnckbmcl9fb.xn--p1ai/"} text={"Фестиваль педагогических идей «Открытый урок»"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"https://icmos.ru/press/"} text={"Информационный Центр Правительства Москвы"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://narcologos.ru/"} text={"Московский научно-практический центр наркологии"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://psychlib.ru/resource.php/pdf/documents/KPsh-2012.pdf#page=1"} text={"Профилактика школьных прогулов (методические рекомендации)"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://cmpmos.ru/"} text={"Центр медицинской профилактики города Москвы"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://iuorao.ru/"} text={"ФГБНУ «Институт управления образования Российской академии образования»"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://sprc.ru/"} text={"Общественный центр «Судебно-правовая реформа»"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://www.mchs.gov.ru/document/375633"} text={"ФКУ «Центр экстренной психологической помощи МЧС России»"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://mgppu.ru/project/51"} text={"Центр экстренной психологической помощи ФГБОУ ВО МГППУ"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://xn----7sbikand4bbyfwe.xn--p1ai/championship/"} text={"Всероссийский онлайн-чемпионат «Изучи Интернет – управляй им!»"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://o-spide.ru/"} text={"Профилактика ВИЧ/СПИД в России"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://xn--80aaahjgkj8fgdb7f.xn--p1ai/"} text={"Национальный институт защиты детства"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"https://www.xn--d1abkefqip0a2f.xn--p1ai/leto"} text={"Основы цифровой грамотности на площадках летнего отдыха детей"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://mosobr.tv/"} text={"Интернет-телеканал «Московский Образовательный»"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://xn--h1ajgms.xn--p1ai/"} text={"Национальный институт защиты детства"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"https://www.xn--d1abkefqip0a2f.xn--p1ai/leto"} text={"Основы цифровой грамотности на площадках летнего отдыха детей"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://mosobr.tv/"} text={"Интернет-телеканал «Московский Образовательный»"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://xn--h1ajgms.xn--p1ai/"} text={"Национальный центр противодействия терроризма и экстремизма в образовательной среде и сети Интернет (НЦПТИ)"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://www.sirotstvo.ru/"} text={"Национальный фонд защиты детей от жестокого обращения"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://www.takzdorovo.ru/"} text={"Портал о здоровом образе жизни"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://nac.gov.ru/"} text={"интернет-портал Национального антитеррористического комитета"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"http://fcprc.ru/"} text={"ФГБНУ «Центр защиты прав и детей»"} />
                            </li>
                        </ul>
                    </section>
                    <section className={tab === 4 ? "tab__section --active" : "tab__section"}>
                        <p>
                            <b>ГППЦ ««Методическая копилка по теме "Буллинг" </b>
                            <MyLink href={"https://forum.gppc.ru/bulling/method"} text={"https://forum.gppc.ru/bulling/method"} />
                        </p>
                        <p>
                            <b>Городская служба примирения города Москвы </b> <MyLink href={"https://forum.gppc.ru/"} text={"https://forum.gppc.ru/"} />
                        </p>
                        <p>
                            <b>Школа Москва </b>
                            <MyLink href={"https://bullying.shkolamoskva.ru/pupil/"} text={"https://bullying.shkolamoskva.ru/pupil/"} />
                        </p>
                    </section>
                    <section className={tab === 5 ? "tab__section --active" : "tab__section"}>
                        <ul className="list --type-empty">
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/situation_useful_resources/Для души и поиска вдохновения.pdf"} text={"Для души и поиска вдохновения"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/situation_useful_resources/Повышение личной эффективности.pdf"} text={"Повышение личной эффективности"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/situation_useful_resources/Повышение психологической грамотности родителей.pdf"} text={"Повышение психологической грамотности родителей"} />
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )

}

export default SituationUsefulResourcesPage;