import React from 'react';
import Accordion from "../../components/accordion/accordion.component";
import MyLink from '../../components/link/link.component';

const TeacherOnlinePage = () => {

    const [tab, setTab] = React.useState(1);

    React.useEffect(() => {

        document.title = "Классный руководитель";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">Классный руководитель</h2>
            <div className="tab">
                <ul className="tab__list">
                    <li className={tab === 1 ? "tab__item --active" : "tab__item"} onClick={() => setTab(1)}>Классные часы (методические разработки)</li>
                    <li className={tab === 2 ? "tab__item --active" : "tab__item"} onClick={() => setTab(2)}>Встреча с родителями</li>
                    <li className={tab === 3 ? "tab__item --active" : "tab__item"} onClick={() => setTab(3)}>Совместный досуг</li>
                    <li className={tab === 4 ? "tab__item --active" : "tab__item"} onClick={() => setTab(4)}>Банк идей</li>
                    <li className={tab === 5 ? "tab__item --active" : "tab__item"} onClick={() => setTab(5)}>Вопрос – ответ</li>
                </ul>
                <div className="tab__container">
                    <section className={tab === 1 ? "tab__section --active" : "tab__section"}>
                        <Accordion opened={true} className='--theme-primary' title={"1 - 4 класс"}>
                            <Accordion title={"Безопасность. Здоровый образ жизни"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/EUWwIPs5_hlVTg"} text={"Правила безопасного поведения на железной дороге"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/cHcyDlhP0ZtroA"} text={"Правила безопасного поведения при входе в метро и на эскалаторе"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/63s09ewDg-JZPA"} text={"Физическая культура на старт…"} /></li>
                                    <li><MyLink href={"https://patriotsport.moscow/wp-content/uploads/2021/09/3-sentjabrja.pdf"} text={"3 сентября — День памяти жертв терроризма"} /></li>
                                    <li><MyLink href={"https://patriotsport.moscow/wp-content/uploads/2022/02/otkrytyj-urok-po-go.pdf"} text={"Открытый урок по гражданской обороне"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Великая Победа в единстве народа"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/ESAKCStgtWHOKw"} text={"Великая Победа в единстве народа"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Культура. Народные промыслы. Музеи"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/xSiwzamiqf5xTA"} text={"Вперёд, за Синей птицей"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/iaDytudMgtg8DA"} text={"Дружба – великая сила"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/nQ2SWTBFMqbgug"} text={"Мы идём на экскурсию"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/qeEC37smHRqZvw"} text={"Народные промыслы Подмосковья. Гжель"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/Ww1JRSs0VlckRA"} text={"Народные промыслы Подмосковья. Жостово"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/G49JiCq7CKhtHg"} text={"Народные промыслы России. Городецкая роспись"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/Hn8-iLWSg8na7g"} text={"Народные промыслы России. Павловопосадские платки"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/a9s8uNl_H9388Q"} text={"Народные промыслы России. Русская матрёшка"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/qwK0PyPL25umUQ"} text={"Уроки доброты"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/veBCBEJphsdwrw"} text={"Я поведу тебя в музей"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Профессия. Трудоустройство"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/_yJzQiz1u3NWJQ"} text={"Профессия. Трудоустройство"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Россия. Москва"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/9dIEWKDw1xk9Mw"} text={"О праздниках города Москвы"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/kyfJWQjEryCGJA0"} text={"Я живу в России: права ребёнка"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Семья. Ценности"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/Qe78vi1KXiGVzQ"} text={"Об уважении к пожилым людям"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/PbyDyRQmzlmrSg"} text={"Секреты семейной мудрости"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/gtAl8sGZu5qrCQ"} text={"Семейные ценности народов России"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/vGhymu91mbVt0Q"} text={"Семь правил семьи"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/ICjNQxfK5pJegA"} text={"Семь+Я"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/ok9IHYlGHWJDJQF"} text={"Уважение, забота и ответственность – слагаемые семейного счастья"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/q_sEOOkiK5Gihg"} text={"Что такое семейный этикет"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Волонтерство"}>
                                <ul className="list">
                                    <li><MyLink href={"https://patriotsport.moscow/patriotizm/volontery/"} text={"Подробнее"} /></li>
                                </ul>
                            </Accordion>
                        </Accordion>
                        <Accordion opened={true} className='--theme-primary' title={"5 - 9 класс"}>
                            <Accordion title={"Великая Победа в единстве народа"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/Li0i-w7ZTrl3tg"} text={"Великая Победа в единстве народа"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Культура. Народные промыслы. Музеи"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/i-q7Cjt2JmG6nQ"} text={"Животные – братья наши меньшие"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/nzGseKURgQMlPA"} text={"Зачем и почему люди ходят в музеи, или Что я тут забыл"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/Mt06OaHV2xu4Rg"} text={"Камнерезное искусство Урала"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/2NajyCdIGEVskg"} text={"Каслинское литье – народный промысел Урала"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/qE5vTODJwpQRAQ"} text={"Международный день родного языка"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/wUTeM79rJC4KMg"} text={"О родном языке"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/cO4mRLiv3iODxA"} text={"Палехская лаковая миниатюра"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/HTDWJpBjzStBPA"} text={"Поговорим о дружбе"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/jsMeiocedpOg8g"} text={"Поделитесь ДОБРОтой"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/em05idW9IebWMg"} text={"Уроки доброты"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/fCvq3EOGBz7X-A"} text={"Учимся мечтать"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/yAAXX25AxvZpaA"} text={"Школьный двор"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Памятные даты. ЖЗЛ"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/_wG3a98_-AkfGg"} text={"Д.И. Менделеев интервью для современников"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/EFGwwbsBz26NOQ"} text={"Легенда мирового футбола"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/ayuoNaErL22hmQ"} text={"Международный день родного языка"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/x4pxhcAw8To7xw"} text={"Покорение космоса"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/9SXdY8lCGoHP5A"} text={"Российская гвардия – гордость Отечества"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/JZChTNddCC8fFw"} text={"Формула Света"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Профессия. Трудоустройство. Финансовая грамотность"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/evO3FQjSlUNLqw"} text={"Личный финансовый план"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/nVWcvWTuGRgS4g"} text={"Налоги"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/YNBNSqknjGNOqA"} text={"Твои помощники − мобильные сервисы"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/1ozivgWeOmh3uw0"} text={"Школьное самоуправление. Мой класс – мой выбор"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Россия. Москва"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/n77Ed18jl4fNEw"} text={"В единстве народа вся сила России"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/MAUTxZIgniWuIg"} text={"Москва – пространство добрых дел"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/xlmb8Yw5AAhH3A"} text={"Московское лето"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/iH-NhE-xUDOW-A"} text={"Не словом, а делом…"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Семья. Ценности"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/2B36mnwFH7VK1Q"} text={"Единство народов — единство своеобразий культур"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/3NoIgYTmjWu_nw"} text={"Жизнь – отражение ценностей"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/hXGNHbzSYcMbPQ"} text={"Мой дом — моя крепость"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/PSFPciF-mOf7pw"} text={"Права ребёнка"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/cYtgvtW2Jfnkcg"} text={"Семейные традиции"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/433m36QhO9A1VQ"} text={"Что значит быть подростком"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Волонтерство"}>
                                <ul className="list">
                                    <li><MyLink href={"https://patriotsport.moscow/patriotizm/volontery/"} text={"Подробнее"} /></li>
                                </ul>
                            </Accordion>
                        </Accordion>
                        <Accordion opened={true} className='--theme-primary' title={"10 - 11 класс"}>
                            <Accordion title={"Безопасность. Здоровый образ жизни"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/2Vf_Ln5kfULN3A"} text={"«ЗНАНИЕ – ОТВЕТСТВЕННОСТЬ – ЗДОРОВЬЕ»"} /></li>
                                    <li><MyLink href={"https://patriotsport.moscow/wp-content/uploads/2021/09/3-sentjabrja.pdf"} text={"3 сентября — День памяти жертв терроризма"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/TCNKYLDbp81uuA"} text={"Безопасность на водном транспорте маломерные суда"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/LN5afqBy6erAJw"} text={"ГТО – путь к здоровью"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/2JaWpuUsn4PGmA"} text={"Здоровый образ жизни и физическая культура"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/NKQXUEm6V4ibSA"} text={"История интернета в России"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/GAj4sFdUECCXaw"} text={"Морское путешествие. Безопасный отдых"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/FgDRk6rC4Ek4pA"} text={"МЧС. Предотвращение, спасение, помощь"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/6XKgV46iHo-NyQ"} text={"Опасности массовых мероприятий"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/TqUC_MTF8Hur1g"} text={"Правила безопасного поведения на железной дороге"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/PAslWAfH340ijw"} text={"Правила безопасного поведения при входе в метро и на эскалаторе"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/sPbo1DD8y1SbvA"} text={"Спорт Равных"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/5b5g_kli6ATXnw"} text={"Урок медиабезопасности"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/SS5HsCSNLFANAA"} text={"Электричество в нашей жизни"} /></li>
                                    <li><MyLink href={"https://patriotsport.moscow/wp-content/uploads/2022/02/otkrytyj-urok-po-go.pdf"} text={"Открытый урок по гражданской обороне"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Великая Победа в единстве народа"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/4GHDfLl_WF06RQ"} text={"Великая Победа в единстве народа"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Культура. Народные промыслы. Музеи"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/2KcOyoN5-s5kEA"} text={"Аптекарский огород история и современность"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/O-q9_Gc74X71FQ"} text={"Музеи и их создатели"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/8jGzT3HqabN_Og"} text={"Урок Мира"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/1J23S-tTyp-hsA"} text={"Уроки доброты"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/jdiUAd44hXHSKQ"} text={"Этнография. Прошлое. Настоящее. Будущее"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Памятные даты. ЖЗЛ"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/UpgOCPjopzNcMQ"} text={"Андрей Дмитриевич Сахаров – выдающийся гуманист XX века"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/4vAeXReTgfui4g"} text={"Антарктида открытие материка"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/jakWjkuRGfknHA"} text={"Виток вокруг Земли – путь в бессмертие"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/C5nTfh0HSY8FWA"} text={"Гениальный теоретик русской авиации"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/O8mH9UNXIrIdXg"} text={"Георгиевская лента – Георгиевская ленточка"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/O8mH9UNXIrIdXg"} text={"Герой на все времена"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/-uCxuCGKQVxygg"} text={"День астрономии"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/zNrbHbyZanBjqg"} text={"День Героев Отечества"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/0PgWy5UvBFe3EA"} text={"Легендарные женщины отечественной авиации"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/r8GflE8MofsNeg"} text={"Он победил весь мир"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/Xt7dx_QMHA6r0Q"} text={"Там, где зародилась авиация"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/naDp3eiEGTSFOw"} text={"Теоретик отечественной космонавтики К. Э. Циолковский (1857–1935)"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/JHvytxy-3wSBKA"} text={"Холокост – трагическая страница истории"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/tcmnu4AuS615UA"} text={"Чернобыль – память и уроки"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/KheGtNmw91T3lQ"} text={"Чудесный доктор"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/ALObfUlDGh_C3g"} text={"Шагнувший к звёздам"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Профессия. Трудоустройство. Финансовая граммотность"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/xQ3C3kyxkmEMsA"} text={"«Твоя будущая пенсия зависит от тебя!»"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/AotZgVmzx3h1CA"} text={"Будущая профессия – профессия будущего"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/gSRI36ukYKCbFg"} text={"Все работы хороши, выбирай на вкус!"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/7BiEeNVg6KgHew"} text={"Личный финансовый план"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/rtRa0_h85QU__g"} text={"Моя будущая профессия"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/QAITio1fNDTn8w"} text={"Налоги"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/2OiGsn9ykDDNhQ"} text={"Пластмассовый век"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/hA-SC9b38ZrMZQ"} text={"Почему мир сходит с ума от нефти"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/yGIe7Xy2s17nrQ"} text={"Просто о предпринимательстве"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/CGYWYozh9Zq8pQ"} text={"Просто о финансистах"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/G1iM9yfD08DoFg"} text={"Путешествие в мир профессий"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/jTH5i_dJbPYpEg"} text={"Резюме – первый шаг навстречу трудоустройству"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/APYCrp9pr4OjRg"} text={"Сдать ЕГЭ. Цель достижима"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/mdLbDDxlePd8EA"} text={"Сколько нужно электроэнергии для комфортной жизни"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/qBbct2V_jPUtmg"} text={"Строим планы на следующий год"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/sONe8G7OfEoWFw"} text={"Хороший человек – не профессия"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Россия. Москва"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/ORVP0mykP3oZNw"} text={"История герба России"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/YQ9gj523_7t93g"} text={"Коррупция. Нельзя оправдать"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/Y7gdIk-xPMaeKg"} text={"Московская городская Дума история и современность"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/Mj676CMzIPLOCg"} text={"Московский транспорт – доступный, комфортный, безопасный"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/hHtGCRTct03zLQ"} text={"На страже интересов России"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/NoHdn6Q3bak39g"} text={"Часть жизни города – Московский метрополитен"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Семья. Ценности"}>
                                <ul className="list">
                                    <li><MyLink href={"https://disk.yandex.ru/d/yq1qE3Qee2q1Nw"} text={"Быть толерантным!"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/-FYjGWm8eHxgbw"} text={"Личное или общественное Выбор за нами!"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/yrEH7rfJz_GDrQ"} text={"Путь к успеху"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/WpLwuypv62VRqA"} text={"Семья и Отечество в моей жизни"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/f3mmnvKdZqW84w"} text={"Синоним слова «любовь»"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/TgK9UjOyI2zDVQ"} text={"Человек − это звучит гордо!"} /></li>
                                    <li><MyLink href={"https://disk.yandex.ru/d/TRl_IgLvHZFgLQ"} text={"Что значит быть подростком"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Волонтерство"}>
                                <ul className="list">
                                    <li><MyLink href={"https://patriotsport.moscow/patriotizm/volontery/"} text={"Подробнее"} /></li>
                                </ul>
                            </Accordion>
                        </Accordion>
                        <h3 className='content__caption --place-tab'>Библиотека МЭШ</h3>
                        <Accordion opened={true} className='--theme-primary' title={"1 - 4 класс"}>
                            <Accordion title={"Безопасность"}>
                                <ul className="list">
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/484706"} text={"О спорт, ты – мир!"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1244496"} text={"Газ в нашем доме"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Великая Победа"}>
                                <ul className="list">
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1829986"} text={"Великая Победа в единстве народов"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Выбор профессии"}>
                                <ul className="list">
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/906753"} text={"Все профессии важны"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Год памяти и славы"}>
                                <ul className="list">
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1280431"} text={"Урок Победы"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1247710"} text={"Верные помощники"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1101315"} text={"Дети ВОВ"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1419248"} text={"Маленькие солдаты"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1437045"} text={"Военная Москва"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Мы живем в Москве"}>
                                <ul className="list">
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1160528"} text={"Моя Москва"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/439922"} text={"Мой город Москва"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/564088"} text={"Что мы знаем о Москве?"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1308128"} text={"Всемирное наследие"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/484706"} text={"Урок России о Москве"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"О воспитании"}>
                                <ul className="list">
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1087292"} text={"Когда учиться интересно?"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/946830"} text={"Вежливые слова"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/946830"} text={"Следовать нравственной установке"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Памятные даты"}>
                                <ul className="list">
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1439183"} text={"Алексей Леонов"} /></li>
                                </ul>
                            </Accordion>
                        </Accordion>
                        <Accordion opened={true} className='--theme-primary' title={"5 - 9 класс"}>
                            <Accordion title={"Безопасность"}>
                                <ul className="list">
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1446983"} text={"Безопасная экскурсия"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1160456"} text={"Новомодные средства передвижения"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/936155"} text={"Я и мой здоровый выбор"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1057889"} text={"Электричество"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Великая Победа"}>
                                <ul className="list">
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1829985"} text={"Всероссийский урок «Великая Победа»"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Выбор профессии"}>
                                <ul className="list">
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1493230"} text={"Профессиональный маршрут школьника"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Год памяти"}>
                                <ul className="list">
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1543618https:/uchebnik.mos.ru/catalogue/material_view/lesson_templates/1543618"} text={"Операция «Уран». Сражение века"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1479979https:/uchebnik.mos.ru/catalogue/material_view/lesson_templates/1479979"} text={"Ялтинская конференция. 75 лет дипломатии Великой Победы"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/929228https:/uchebnik.mos.ru/catalogue/material_view/lesson_templates/929228"} text={"Блокада Ленинграда глазами ленинградцев"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1062669https:/uchebnik.mos.ru/catalogue/material_view/lesson_templates/1062669"} text={"Сталинград. Стоявший насмерть"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1079805https:/uchebnik.mos.ru/catalogue/material_view/lesson_templates/1079805"} text={"Москва — город-герой"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1198287"} text={"Город-герой Киев"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1113519"} text={"Город-герой Одесса"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1504985"} text={"Город-герой Смоленск"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1134826"} text={"Город-герой Керчь"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1475861"} text={"Город-герой Мурманск"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1491927"} text={"Город-герой Ленинград"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1494492"} text={"Город-герой Минск"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1095944"} text={"Город-герой Тула"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1247710"} text={"Верные помощники. Роль собак в Великой Отечественной войне"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Мы живем в Москве"}>
                                <ul className="list">
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/497335"} text={"Моя – Умный город"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/897333"} text={"Часть жизни города — Московский метрополитен"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/484706"} text={"Урок России о Москве"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"О воспитании"}>
                                <ul className="list">
                                    <li><MyLink href={"Уникальность и ценность моей жизни"} text={"Уникальность и ценность моей жизни"} /></li>
                                    <li><MyLink href={"Слово – не воробей"} text={"Слово – не воробей"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Памятные даты"}>
                                <ul className="list">
                                    <li><MyLink href={"Тульский кремль"} text={"Тульский кремль"} /></li>
                                    <li><MyLink href={"Всемирный день авиации"} text={"Всемирный день авиации"} /></li>
                                </ul>
                            </Accordion>
                        </Accordion>
                        <Accordion opened={true} className='--theme-primary' title={"10 - 11 класс"}>
                            <Accordion title={"Безопасность"}>
                                <ul className="list">
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1533547"} text={"Безопасность на маломерных судах"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Великая Победа в единстве народа"}>
                                <ul className="list">
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1829980"} text={"Всероссийский урок «Великая победа»"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Выбор профессии"}>
                                <ul className="list">
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/657120"} text={"Профориентация"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Год памяти и славы"}>
                                <ul className="list">
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1543618https:/uchebnik.mos.ru/catalogue/material_view/lesson_templates/1543618"} text={"Операция «Уран». Сражение века"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1479979https:/uchebnik.mos.ru/catalogue/material_view/lesson_templates/1479979"} text={"Ялтинская конференция. 75 лет дипломатии Великой Победы"} /></li>
                                </ul>
                            </Accordion>
                            <Accordion title={"Мы живем в Москве"}>
                                <ul className="list">
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1032505https:/uchebnik.mos.ru/catalogue/material_view/lesson_templates/1032505"} text={"Московские огни"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/928487https:/uchebnik.mos.ru/catalogue/material_view/lesson_templates/928487"} text={"Правила поведения пассажиров в московском транспорте"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1036719https:/uchebnik.mos.ru/catalogue/material_view/lesson_templates/1036719"} text={"Московское Центральное Кольцо – история, становление, безопасность"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1075035https:/uchebnik.mos.ru/catalogue/material_view/lesson_templates/1075035"} text={"Московский транспорт — доступный, комфортный, безопасный транспорт"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/1308128https:/uchebnik.mos.ru/catalogue/material_view/lesson_templates/1308128"} text={"Всемирное наследие. Московский Кремль"} /></li>
                                    <li><MyLink href={"https://uchebnik.mos.ru/catalogue/material_view/lesson_templates/484706https:/uchebnik.mos.ru/catalogue/material_view/lesson_templates/484706"} text={"Урок России, о Москве — городе, где рождается завтра!"} /></li>
                                </ul>
                            </Accordion>
                        </Accordion>
                    </section>
                    <section className={tab === 2 ? "tab__section --active" : "tab__section"}>
                        <h3 className="content__caption --place-tab">Подготовка и структура</h3>
                        <Accordion title={"Примерный алгоритм подготовки онлайн-встречи с родителями"}>
                            <ul className="list">
                                <li>Выбрать тему встречи с учетом часто задаваемых родителями вопросов и текущей обстановки, а также определить цель и задачи встречи.</li>
                                <li>Для более эффективной подготовки материалов онлайн-встречи предварительно направить тему и определить сроки сбора вопросов по заданной теме от родителей, используя удобные и привычные каналы связи.</li>
                                <li>Составить план-сценарий онлайн-встречи, в том числе с учётом заданных родителями вопросов.</li>
                                <li>При подготовке и проведении онлайн-встречи использовать презентации, полезные ссылки, фото (изображения), видеоролики.</li>
                                <li>По возможности и при необходимости пригласить специалистов, интересных людей, в том числе из числа родителей, для участия в онлайн-встрече (например, в качестве эксперта для высказывания мнения и/или ответа на вопросы, актуальные для онлайн-встречи).</li>
                                <li>Предварительно напомнить родителям о дате и времени проведения онлайн-встречи, используя удобные и привычные каналы связи.</li>
                            </ul>
                        </Accordion>
                        <Accordion title={"Примерные подходы к структуре онлайн-встречи"}>
                            Регламент проведения: классный руководитель проводит еженедельные онлайн-встречи в формате видеоконференций для обсуждения важной информации и ответов на вопросы, заданных также в чате. Время проведения: еженедельно, в установленное классным руководителем время. Рекомендуемая продолжительность: до 30 минут. Структура и вариативность: — информация от классного руководителя (презентация, видеоролик) — до 15 минут; — дискуссия/ ответы на вопросы — 10−15 минут.
                        </Accordion>
                        <h3 className="content__caption --place-tab">Тематика</h3>
                        <h3>Примерная тематика онлайн-встреч с родителями</h3>
                        <ul className="list">
                            <li>Какие обучающие платформы и интернет-ресурсы можно и нужно использовать для дистанционного обучения</li>
                            <li>Как сохранить здоровье ребёнка в условиях самоизоляции</li>
                            <li>Как организовать режим дня ребёнка в условиях дистанционного обучения</li>
                            <li>Активные формы отдыха в период самоизоляции</li>
                            <li>Проводим самоизоляцию вместе с детьми с интересом и пользой</li>
                            <li>Отцы и дети: конфликты и пути их разрешения</li>
                            <li>Конкурс для школьников «Большая перемена»</li>
                            <li>Как подготовить ребёнка к экзаменам в условиях дистанционного обучения (самоизоляции)</li>
                            <li>Возможности подготовки ребёнка к олимпиадам и конкурсам проектов в условиях дистанционного обучения</li>
                            <li>Как развивать учебную мотивацию ребёнка в условиях дистанционного обучения</li>
                            <li>Виртуальное путешествие вокруг света</li>
                            <li>Как Интернет и социальные сети могут быть полезными для детей</li>
                            <li>Безопасность ребёнка в Интернете — превыше всего</li>
                            <li>Быть дома в период самоизоляции — право или обязанность?</li>
                            <li>Профессии, которые выбирают наши дети</li>
                            <li>Субботы московского школьника онлайн</li>
                        </ul>
                        <h3 className="content__caption --place-tab">Профориентация</h3>
                        <div className="iframe">
                            <iframe title={"Flag"} className="iframe__item"
                                src="https://www.youtube.com/embed/l446DrZCJsM" />
                        </div>
                    </section>
                    <section className={tab === 3 ? "tab__section --active" : "tab__section"}>
                        <h3 className="content__caption --place-tab">
                            Перечень произведений и мероприятий для всестороннего развития обучающихся в формате Единого календаря школьника на 2022/2023 учебный год <MyLink href={"./files/teacher_online/edinyj-kalendar-shkolnika.pdf"} text={"Скачать"} />
                        </h3>
                        <Accordion opened={true} className='--theme-primary' title={"1 - 4 класс"}>
                            <Accordion title={"Кинематография"}>
                                <h3 className="content__caption --place-tab">
                                    Регламент организации совместных просмотров кинофильмов
                                </h3>
                                <h3>
                                    Запуск совместного просмотра кино с учениками в сервисе Zoom
                                </h3>
                                <h3>
                                    Организовать совместный просмотр
                                </h3>
                                <p>
                                    Можно организовать совместный просмотр в двух вариантах:
                                </p>
                                <ol className="list --type-number">
                                    <li>Предварительное и итоговое обсуждение организовать в режиме видеоконференции, а фильм ученики смотрят самостоятельно по разосланной ссылке.</li>
                                    <li>Просмотр с последующим обсуждением можно провести с использованием сервиса Zoom.</li>
                                </ol>
                                <br />
                                <Accordion className='--theme-g100 --icon-caption-plus' title={"Просмотру фильма предшествует целенаправленная работа"}>
                                    <ol className="list --type-number">
                                        <li>
                                            Классным руководителем проводится предварительная беседа о фильме и его создателях. Обучающимся даются конкретные советы о том, на что следует обратить внимание при просмотре кинокартины. Целесообразно объяснить при этом незнакомые термины киноискусства (сюжет, титры, сценарий, режиссёр и др.). Необходимо сориентировать обучающихся на предстоящее обсуждение, дать им конкретные задания к будущей киноконференции: какие события изображаются в фильме; какими средствами киноискусства актёры раскрывают образы главных героев; как используются пейзажные съёмки; как музыка передаёт и эмоционально усиливает отдельные эпизоды фильма.
                                        </li>
                                        <li>
                                            Задания-вопросы помогают обучающимся подобрать материал для выступлений, нацеливают их на написание тематических отзывов. При распределении заданий необходимо учитывать склонности и интересы ребят, уровень их развития.
                                        </li>
                                        <li>
                                            Целенаправленному просмотру кинофильма и его последующему обсуждению содействует также разработка общего плана обсуждения и заблаговременное ознакомление с ним обучающихся. Например, можно предложить следующий план: Кто автор сценария фильма? Какие факты его творческой биографии вам известны? Кто режиссёр-постановщик фильма? Какова его творческая биография? Идейно-тематическое содержание фильма, решение в фильме актуальных проблем. Образы главных героев и искусство игры актёров. Художественно-эстетические достоинства фильма. Жанр кинокартины. В чём проявляются его особенности в этом фильме? Общее впечатление о фильме. Различают два варианта обсуждения: экспромт, специально подготовленное обсуждение. Чаще практикуется второй вариант – специально подготовленное обсуждение. Возможно использование разных приёмов, которые активизируют обучающихся и нацеливают их на восприятие фильма.
                                        </li>
                                        <li>
                                            До просмотра фильма классный руководитель распределяет поручения: один из членов коллектива должен анализировать работу режиссёра (лучше начинать с обсуждения фильма-экранизации, где его работа наиболее «ощутима»), другой – оператора, третий – сценариста. Несколько обучающихся получают задание оценить оформление фильма – художественное и музыкальное. Два-три ребенка (по желанию) просматривают периодическую печать с целью поиска отзывов и рецензий на кинофильм.
                                        </li>
                                        <li>
                                            Можно рекомендовать после просмотра кинофильма провести анкетирование обучающихся. В анкету включаются 2-3 вопроса (Что тебе больше всего понравилось в фильме? Что не понравилось? Если бы ты был режиссёром, как бы закончил этот фильм? Иногда целесообразно предложить детям дать краткий письменный отзыв о просмотренном фильме).
                                        </li>
                                        <li>
                                            Если фильм представляет экранизацию какого-либо литературного произведения, то можно посоветовать обучающимся предварительно прочитать его. Если это школьники младших классов, то педагогу следует доступно рассказать о произведении и его авторе, прочесть подходящие отрывки из книги или пьесы, заботясь о сохранении у них интереса к фильму.
                                        </li>
                                    </ol>
                                </Accordion>
                                <Accordion className='--theme-g100 --icon-caption-plus' title={"Возможные варианты вопросов для обсуждения фильма"}>
                                    <p>
                                        — Понравился ли вам фильм? Почему? <br />
                                        — Это фильм – экранизация литературного произведения. Кто читал повесть? Как вы считаете, что интереснее – фильм или повесть? Почему? <br />
                                        — Какова идея фильма? <br />
                                        — Какие главные проблемы решаются в фильме? <br />
                                        — Какие сюжетные линии вы считаете самыми сильными? Почему? <br />
                                        — Дайте краткую характеристику положительных и отрицательных черт (главных и второстепенных героев). <br />
                                        — Какие нравственные проблемы поднимаются в фильме? <br />
                                        — Чем вы объясните поступки героев? <br />
                                        — Что вы считаете наиболее удачным в работе оператора и художника? — Какие сцены производят наиболее сильное впечатление? <br />
                                        — Удачно ли музыкальное сопровождение фильма? Соответствует ли оно настроению героев, действиям, происходящим на экране? <br />
                                        — Какие вы заметили недостатки фильма? — Можно ли считать этот фильм событием в киноискусстве? <br />
                                        В ходе обсуждения фильма желательно, чтобы каждый обучающийся высказал своё мнение, обосновав его материалами фильма. Полезно поднять спорные вопросы и обсудить их вместе с детьми, для того чтобы понимание ими достоинств и недостатков фильма стало ещё более глубоким. Желательно, если это возможно, связать увиденные на экране события с материалом учебного курса истории, литературы и других предметов. Учителю следует повести обсуждение так, чтобы ответы обучающихся подкреплялись ссылками на конкретные эпизоды фильма, выводами из увиденного. <br />
                                        Обсуждение завершает классный руководитель, высказывает своё отношение к отдельным моментам фильма и делает логические акценты на его художественных достоинствах и воспитательном значении. Более результативным и активным будет обсуждение фильма, если в нём участвуют на равных обучающиеся и педагоги, воспитатели и родители.
                                    </p>
                                </Accordion>
                                <Accordion className='--theme-g100 --icon-caption-plus' title={"Ресурсы для просмотра кинематографа онлайн"}>
                                    <ul className="list">
                                        <li>
                                            <MyLink href={"https://cinema.mosfilm.ru/"} text={"Онлайн-кинотеатра киностудии «Мосфильм»"} />
                                        </li>
                                        <li>
                                            <MyLink href={"https://www.odesafilmstudio.com.ua/ru"} text={"Онлайн-кинотеатр Одесской киностудии"} />
                                        </li>
                                        <li>
                                            <MyLink href={"https://www.culture.ru/themes/254989/filmy-o-shkole-i-uchitelyakh"} text={"Сайт «Культура.РФ»: Подборка фильмов о школе и учителях"} />
                                        </li>
                                        <li>
                                            <MyLink href={"https://www.culture.ru/materials/253300/multfilmy-ne-tolko-dlya-detei"} text={"Сайт «Культура.РФ»: Мультфильмы не только для детей"} />
                                        </li>
                                        <li>
                                            <MyLink href={"https://www.culture.ru/themes/255171/sovetskie-multfilmy-po-motivam-skazok"} text={"Сайт «Культура.РФ»: Советские мультфильмы по мотивам сказок"} />
                                        </li>
                                        <li>
                                            <MyLink href={"https://kinouroki.ru/"} text={"Всероссийский народный проект «Киноуроки в школах России»"} />
                                        </li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--theme-g100 --icon-caption-plus' title={"Рекомендуемый перечень фильмов для детей"}>
                                    <ul className="list">
                                        <li>Белеет парус одинокий (Союздетфильм, 1937 год, реж. В. Легошин, 6+)</li>
                                        <li>Алые паруса (Мосфильм, 1961 год, реж. А. Птушко, 88 мин., 6+)</li>
                                        <li>Большое космическое путешествие (Ст. Горького, 1974 год, реж. В.Селиванов, 0+)</li>
                                        <li>Слон и верёвочка (Союздетфильм, 1945 год, реж. И. Фрэз, 0+)</li>
                                        <li>Сломанная подкова (Ленфильм, 1973 год, реж. С. Аранович, 80 мин., 0+)</li>
                                        <li>Белый флюгер (Ленфильм, 1969 год, реж. Д. Кочарян, 6+)</li>
                                        <li>Большой аттракцион (Мосфильм, 1974 год, реж. В. Георгиев. 0+)</li>
                                        <li>Огонь, вода и… медные трубы (Ст. Горького, 1968 год, реж. А. Роу, 0+)</li>
                                        <li>Где это видано, где это слыхано (Ленфильм, 1973 год, реж. Б.Горлов, 0+)</li>
                                        <li>Витя Глушаков – друг апачей (Мосфильм, 1983 год, реж. Г. Бежанов, 0+)</li>
                                        <li>Дикая собака Динго (Ленфильм, 1962 год, реж. Ю. Карасик, 6+)</li>
                                        <li>Каменный цветок (Мосфильм, 1946 год, реж. А. Птушко, 0+)</li>
                                        <li>Макар-следопыт (Ленфильм, 1984 год, реж. Н. Ковальский, 6+)</li>
                                        <li>Мама (Мосфильм, 1976 год, реж. Э. Бостан, 0+)</li>
                                        <li>Марка страны Гонделупы (Ст. Горького, 1977 год, реж. Ю. Файт, 6+)</li>
                                        <li>Егорка (Ст. Горького, 1984 год, реж. А.Яновский, 69 мин., 0+)</li>
                                        <li>Есть идея! (Ст. Горького, 1977 год, реж. В.Бычков, 77 мин., 0+)</li>
                                        <li>Живая радуга (Ст. Горького, 1982 год, реж. Н. Бондарчук, 67 мин., 0+)</li>
                                        <li>Зимнее утро (Ленфильм, 1966 год, реж. Н. Лебедев, 83 мин., 0+)</li>
                                        <li>Зеленые цепочки (Ленфильм, 1970 год, реж. Г. Аронов, 98 мин., 0+)</li>
                                        <li>Новогодние приключения Маши и Вити (Ленфильм, 1975 год, реж. И. Усов, 0+)</li>
                                        <li>Новые похождения Кота в сапогах (Ст. Горького, 1957 год, реж. А. Роу, 0+)</li>
                                        <li>Необыкновенное путешествие Мишки Стрекачева (Ст. Горького, 1959 год, реж. И. Фрэз, 0+)</li>
                                        <li>Пока бьют часы (Ст. Горького, 1976 год, реж. Г. Васильев, 6+)</li>
                                        <li>После дождичка в четверг (Ст. Горького, 1985 год, реж. М. Юзовский, 0+)</li>
                                        <li>Приключения жёлтого чемоданчика (Ст. Горького, 1970 год, реж. И. Фрэз, 0+)</li>
                                        <li>Приключения маленького папы (Ст. Горького, 1979 год, реж. Д. Крупко, 0+)</li>
                                        <li>Приключения Травки (Мосфильм, 1976 год, реж. А. Кордон, 6+)</li>
                                        <li>Принцесса на горошине (Ст. Горького, 1976 год, реж. Б. Рыцарев, 0+)</li>
                                        <li>Сережа (Мосфильм, 1960 год, реж. Г.Данелия, И. Таланкин, 77 мин., 0+)</li>
                                        <li>Синяя птица (Ленфильм, 1976 год, реж. Джордж Кьюкор, 0+)</li>
                                        <li>Сказка о царе Салтане (Мосфильм, 1966 год, реж. А. Птушко, 0+)</li>
                                        <li>Сказка про влюблённого маляра (Ленфильм, 1987 год, реж. Н. Кошеверова, 0+)</li>
                                        <li>Сказка о потерянном времени (Мосфильм, 1964 год, реж. А. Птушко, 6+)</li>
                                        <li>Сказка, рассказанная ночью (Ст. Горького, 1981 год, реж. И. Тарковская, 76 мин., 0+)</li>
                                        <li>Снежная королева (Ленфильм, 1966 год, реж. Г. Казанский, 0+)</li>
                                        <li>Совсем пропащий (Мосфильм, 1973 год, реж. Г. Данелия, 6+)</li>
                                        <li>Соловей (Ленфильм, 1979 год, реж. Н. Кошеверова, 0+)</li>
                                        <li>Старая, старая, сказка (Ленфильм, 1968 год, реж. Н. Кошеверова, 0+)</li>
                                        <li>Старик Хоттабыч (Ленфильм, 1956 год, реж. Г. Казанский, 0+)</li>
                                        <li>Точка, точка, запятая… (Мосфильм, 1972 год, реж. А. Митта, 0+)</li>
                                        <li>Три толстяка (Ленфильм, 1966 год, реж. А. Баталов, 0+)</li>
                                        <li>Фантазёры (Ст. Горького, 1965 год, реж. А. Магитон, 0+)</li>
                                        <li>Финист – Ясный сокол (Ст. Горького, 1975 год, реж. Г. Васильев, 0+)</li>
                                        <li>Царевич Проша (Ленфильм, 1974 год, реж. Н. Кошеверова, 0+)</li>
                                        <li>Усатый нянь (Ст. Горького. 1977 год, реж. В. Грамматиков, 0+)</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--theme-g100 --icon-caption-plus' title={"Мультфильмы на музыку известных композиторов"}>
                                    <ul className="list">
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=t1vNrzM6EK4&feature"} text={"«Времена года», "} /> музыка П.И. Чайковского, Союзмультфильм, 1969г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?time_continue=8&v=tsvJdWc1Sus&feature"} text={"«Детский альбом», "} /> музыка П.И. Чайковского, Союзмультфильм, 1968г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=xKozhQNYCLI&feature"} text={"«Щелкунчик», "} /> музыка П.И. Чайковского, Союзмультфильм, 1969г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=JIGxDpQPYsc&feature"} text={"«Зимняя сказка», "} /> музыка П.И. Чайковского, Союзмультфильм, 1945г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=whI_rC9PrhU&feature"} text={"«Весенние мелодии», "} /> музыка П.И. Чайковского, Союзмультфильм, 1946г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=mymv25H5TY4&feature"} text={"«Лебединое озеро», "} /> музыка П.И. Чайковского, компания Toei Animation (Япония), 1981г.,</li>
                                        <li>Мультфильм-мюзикл <MyLink href={"http://mults.info/mults/?id=3094"} text={"«Гадкий утёнок», "} /> музыка П.И. Чайковского, киностудия «Стайлер», 2010г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=M_2naJAAPb4&feature"} text={"«Рондо в турецком стиле», "} /> музыка В.А. Моцарта, «Волшебная флейта» — сборник мультфильмов по произведениям классической музыки, 2008г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=9WIrODIUG4M&feature"} text={"«Волшебная флейта», "} /> музыка В.А. Моцарта, «Волшебная флейта» — сборник мультфильмов по произведениям классической музыки, 2008г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=_kmNAgr-LzQ&feature"} text={"«Маленький Моцарт», "} /> музыка В.А. Моцарта, «Волшебная флейта» — сборник мультфильмов по произведениям классической музыки, 2008г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=REjjvSz2jzY&feature"} text={"«Верное средство», "} /> музыка В.А. Моцарта, Союзмультфильм, 1982г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=vTowzpTwv4s&feature"} text={"«Сказка сказок», "} /> музыка В.А. Моцарта, Союзмультфильм, 1979г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=IOBwMwOHlHY&feature"} text={"«Снегурочка», "} /> музыка Н.А. Римского-Корсакова, Союзмультфильм, 1952г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=4ZVm8pnTj_4&feature"} text={"«Сказка о золотом петушке», "} /> музыка Н.А. Римского-Корсакова, Союзмультфильм, 1952г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=WfjXEesZ0NA&feature"} text={"«Ночь перед Рождеством», "} /> музыка Н.А. Римского-Корсакова, Союзмультфильм, 1951г.,</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--theme-g100 --icon-caption-plus' title={"Google-чтения «От мала до велика»"}>
                                    <p>
                                        <MyLink href={"https://skazki.withgoogle.com/"} text={"«От мала до велика» "} />
                                        — литературный марафон, организованный <b>Google</b> при поддержке <b>«Союзмультфильм»</b> и <b>Билайн</b>. Около 300 чтецов — как звезд, так и обычных пользователей — читают любимые русские сказки на протяжении восьми часов. Среди них российские знаменитости, общественные и политические деятели: Дмитрий Песков, Тутта Ларсен, Тимур Родригес и др. <b>Смотрите чтения и открывайте русские сказки по-новому!</b>
                                    </p>
                                </Accordion>
                            </Accordion>
                            <Accordion title={"Исполнительское искусство"}>
                                <h3 className="content__caption --place-tab">
                                    Регламент организации совместных просмотров театральных постановок
                                </h3>
                                <h3>
                                    Запуск совместного просмотра спектакля
                                </h3>
                                <h3>
                                    Организовать совместный просмотр
                                </h3>
                                <p>
                                    Совместный просмотр можно организовать в двух вариантах: 1. Предварительное и итоговое обсуждение организовать в режиме видеоконференции, а спектакль ученики смотрят самостоятельно по разосланной ссылке. 2. Просмотр и обсуждение можно провести онлайн с использованием онлайн-сервиса Zoom.
                                </p>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Просмотру театральной постановки предшествует целенаправленная работа:"}>
                                    <ol className="list --type-number">
                                        <li>
                                            Классный руководитель с классом выбирает постановку пьесы и театр, учитывая школьную программу и возрастной ценз, который указан в афише спектакля.
                                        </li>
                                        <li>
                                            Обучающиеся заранее знакомятся с произведением, по которому поставлен спектакль, выполняют задания по подбору информации о театре, об актерах, о спектакле, о драматурге, об исторической эпохе, к которой относится пьеса, о костюмах.
                                        </li>
                                        <li>
                                            Классным руководителем обычно проводится предварительная беседа о спектакле, авторе, действующих лицах. Даются конкретные советы о том, на что следует обратить внимание при просмотре театральной постановки. В беседе необходимо сориентировать обучающихся на предстоящее обсуждение и дать им конкретные задания: какие события изображаются в спектакле; какими средствами актёры раскрывают образы главных героев; как музыка передаёт и эмоционально усиливает отдельные сцены спектакля.
                                        </li>
                                        <li>
                                            Задания-вопросы помогают обучающимся подобрать материал для выступлений, нацеливают их на написание тематических отзывов. При распределении заданий необходимо учитывать склонности и интересы ребят, уровень их развития.
                                        </li>
                                        <li>
                                            Целенаправленному просмотру спектакля и его последующему обсуждению содействует также разработка общего плана обсуждения и заблаговременное ознакомление с ним обучающихся. Например, можно предложить следующий план:

                                            <ul className='list'>
                                                <li>Кто автор пьесы? Какие факты его творческой биографии вам известны?</li>
                                                <li>Историческая эпоха, показанная на сцене.</li>
                                                <li>Жанр постановки. В чём проявляются жанровые особенности в пьесе?</li>
                                                <li>Идейно-тематическое содержание спектакля, его актуальность?</li>
                                                <li>Кто режиссёр постановки? Какова его творческая биография?</li>
                                                <li>Образы главных героев и искусство игры актёров.</li>
                                                <li>Художественно-эстетические достоинства.</li>
                                                <li>Общее впечатление о спектакле.</li>
                                            </ul>

                                            Различают два варианта обсуждения: экспромт, специально подготовленное обсуждение. В тех случаях, когда обучающиеся знают основные критерии оценок театральной постановки, обсуждение может пройти сразу после просмотра в форме свободной беседы, направляемой педагогом, воспитателем. Но чаще практикуется второй вариант – специально подготовленное обсуждение. Как его готовить? Возможно использование разных приёмов, которые активизируют обучающихся и нацеливают их на восприятие постановки. До просмотра спектакля классный руководитель распределяет поручения: один из членов коллектива должен анализировать работу режиссёра, другой – актёров. Несколько обучающихся получают задание оценить оформление спектакля – художественное и музыкальное, а другие (по желанию) просматривают периодическую печать с целью поиска отзывов и рецензий на постановку.
                                        </li>
                                        <li>
                                            Можно рекомендовать после просмотра спектакля провести анкетирование обучающихся. В анкету включаются 3-4 вопроса (Кто из героев больше понравился и почему? Что тебе больше всего понравилось в пьесе? Что не понравилось? Если бы ты был режиссёром, как бы закончил этот спектакль?). Иногда целесообразно предложить обучающимся дать краткий письменный отзыв о просмотренной постановке, нарисовать афишу. Обсуждение спектакля – сложная форма воспитательной работы. Обучающиеся по-разному реагируют на то, что видели, часто высказывают неожиданные суждения, задают вопросы. Поэтому лучше всего вести обсуждение самому классному руководителю, педагогу, воспитателю. После краткого вступления он сразу переходит к обсуждению.
                                        </li>
                                    </ol>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Возможные варианты вопросов:"}>
                                    <ul className="list">
                                        <li>Понравилась ли вам театральная постановка? Почему?</li>
                                        <li>Как вы считаете, что интереснее – произведение, которое вы прочитали, или спектакль, поставленный по этому произведению? Почему?</li>
                                        <li>Есть ли фильм-экранизация по этому произведению? Смотрели вы его? Чем отличается театральная постановка от показа той же пьесы на экране?</li>
                                        <li>Какова идея пьесы?</li>
                                        <li>Какие главные проблемы в ней решаются? Назовите их.</li>
                                        <li>Кто из героев показался вам самым привлекательным? Чем именно вас привлекает этот персонаж?</li>
                                        <li>Какие сюжетные линии вы считаете самыми сильными? Что этим хотели сказать автор и режиссёр?</li>
                                        <li>Дайте краткую характеристику положительных и отрицательных черт главных и второстепенных героев.</li>
                                        <li>Какие нравственные проблемы поднимаются в спектакле?</li>
                                        <li>Какие сцены производят наиболее сильное впечатление?</li>
                                        <li>Что вы считаете наиболее удачным в работе декоратора и костюмера?</li>
                                        <li>Удачно ли музыкальное сопровождение спектакля? Соответствует ли оно настроению героев, действиям, происходящим на сцене?</li>
                                        <li>Какие вы заметили недостатки в постановке?</li>
                                        <li>Можно ли считать этот спектакль событием в театральной жизни?</li>
                                        <li>Кого из персонажей вам хотелось бы сыграть, если будем ставить спектакль в классе по данному произведению?</li>
                                    </ul>
                                </Accordion>
                                <h3 className="content__caption --place-tab">
                                    Материалы
                                </h3>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Сказки с оркестром"}>
                                    <ul className="list">
                                        <li><MyLink href={"https://www.culture.ru/movies/4102/a-lindgren-peppi-dlinnyichulok-voskresnye-dnevnye-simfonicheskie-koncerty-dlya-detei"} text={"«Пеппи Длинныйчулок» "} /> (Академический симфонический оркестр Московской филармонии, 2017 г., 9+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3470/gans-khristian-andersen-dikie-lebedi"} text={"«Дикие лебеди» "} /> (Академический симфонический оркестр Московской филармонии, 2016 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3655/pamela-trevers-meri-poppins"} text={"«Мэри Поппинс» "} /> (Академический симфонический оркестр Московской филармонии, 2015 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/4069/skazki-s-orkestrom-aleksandr-dyuma-belosnezhka-olga-budina-khudozhestvennoe-slovo"} text={"«Белоснежка» "} /> (Академический симфонический оркестр Московской филармонии, 2015 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3661/skazki-sharlya-perro-kot-v-sapogakh-krasnaya-shapochka"} text={"«Кот в сапогах», "} /> «Красная шапочка» (Академический симфонический оркестр Московской филармонии, 2015 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3652/dzheims-barri-piter-pen-skazku-chitaet-anna-bolshova"} text={"«Питер Пэн» "} /> (Академический симфонический оркестр Московской филармонии, 2015 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3900/skazki-s-orkestrom-e-porter-pollianna-voskresnye-dnevnye-simfonicheskie-koncerty-dlya-detei"} text={"«Поллианна» "} /> (Академический симфонический оркестр Московской филармонии, 2017 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3901/r-l-stivenson-ostrov-sokrovish"} text={"«Остров сокровищ» "} /> (Академический симфонический оркестр Московской филармонии, 2017 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3960/literaturno-muzykalnaya-kompoziciya-po-romanu-princ-i-nishii-mikhail-trukhin"} text={"«Принц и нищий» "} /> (Академический симфонический оркестр Московской филармонии, 2014 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/4148/sindbad-morekhod-dnevnye-simfonicheskie-koncerty-dlya-detei"} text={"«Синдбад-Мореход» "} /> (Академический симфонический оркестр Московской филармонии, 2018 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?time_continue=21&v=bW8IZPELObE&feature=emb_logo"} text={"«Золушка» "} /> (Академический симфонический оркестр Московской филармонии, 2019 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=BkqhaAwi1JA"} text={"«Калиф — аист» "} /> (Академический симфонический оркестр Московской филармонии, 2020 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=twD8sw4KzIQ"} text={"«Аленький цветочек» "} /> (Академический симфонический оркестр Московской филармонии, 2009 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=wIUp-JQJF44"} text={"«Алиса в стране чудес» "} /> (Академический симфонический оркестр Московской филармонии, 2014 г., 12 +)</li>
                                        <li><MyLink href={"https://tvkultura.ru/video/show/brand_id/20%E2%80%89953/episode_id/698%E2%80%89871/video_id/698%E2%80%89871/"} text={"«Щелкунчик» "} /> (Российский Национальный оркестр, 2008 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=YFnMkth-2yc"} text={"«Огниво» "} /> (Академический симфонический оркестр Московской филармонии, 2009 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=2mzB5IB8_MM"} text={"«Приключения Пиноккио» "} /> (Академический симфонический оркестр Московской филармонии, 2008 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=_3i48EjRwUs"} text={"«Маленький принц» "} /> (Академический симфонический оркестр Московской филармонии, 2009 г., 12 +)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=H-l6ZD9QJ7U"} text={"«Спящая красавица» "} /> (Академический симфонический оркестр Московской филармонии, 2007 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=7jsR0LpXHj4"} text={"«Старик Хоттабыч» "} /> (Донецкая государственная академическая филармония, 2020 г. 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=ol7eRjpkItA"} text={"«Король-олень» "} /> (Российский государственный оркестр кинематографии, 2013, 10+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=tH--w20NkYY"} text={"«12 месяцев» "} /> (Академический симфонический оркестр Московской филармонии, 2014 г., 7+)</li>
                                        <li><MyLink href={"https://ok.ru/video/921%E2%80%89590%E2%80%89434%E2%80%89334"} text={"«Соловей» "} /> (Академический симфонический оркестр Московской филармонии, 2013 г., 10 +)</li>
                                        <li><MyLink href={"https://ok.ru/video/985%E2%80%89527%E2%80%89683%E2%80%89614"} text={"«Русалочка» "} /> (Академический симфонический оркестр Московской филармонии, 2018 г., 7+)</li>
                                        <li><MyLink href={"https://ok.ru/video/325%E2%80%89621%E2%80%89123%E2%80%89614"} text={"«Волшебное кольцо» "} /> (Академический симфонический оркестр Московской филармонии, 2018 г., 7+)</li>
                                        <li><MyLink href={"https://ok.ru/video/2%E2%80%89404%E2%80%89780%E2%80%89607"} text={"«Малыш и Карлсон» "} /> (Академический симфонический оркестр Московской филармонии, 2010 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=lqjrc9pIcq0"} text={"«Петя и волк» "} /> (Академический симфонический оркестр Самарской государственной филармонии, 2020 г., 7+)</li>
                                        <li><MyLink href={"https://ok.ru/video/348%E2%80%89728%E2%80%89330%E2%80%89782"} text={"«Гадкий утёнок» "} /> (Академический симфонический оркестр Московской филармонии, 2017 г., 6+)</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Театральные постановки с сайта Культура.РФ"}>
                                    <ul className='list'>
                                        <li><MyLink href={"http://culture.ru/movies/4570/kot-v-sapogakh"} text={"«Кот в сапогах» "} /> (Московский Губернский театр, 2019 год 6+)</li>
                                        <li><MyLink href={"http://culture.ru/movies/4568/ruslan-i-lyudmila"} text={"«Руслан и Людмила» "} /> (Московский театр «Трикстер», 2019 год 6+)</li>
                                        <li><MyLink href={"http://culture.ru/movies/2866/deniskiny-rasskazy"} text={"«Денискины рассказы» "} /> (Российский государственный академический молодежный театр 2015год 6+)</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Театральные постановки с сайтов театров"}>
                                    <ul className="list">
                                        <li><MyLink href={"https://youtube.com/watch?v=g3S036Zrhas"} text={"«Мама-кот» "} /> (Московский академический театр им. В. Маяковского, 6+)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=-347MEaSDCA"} text={"«Остров сокровищ» "} /> (Московский драматический театр им. А.С. Пушкина, 7+)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=6agp_rGkWgw"} text={"«Аленький цветочек» "} /> (Московский драматический театр им. А.С. Пушкина, 6+)</li>
                                        <li>«Алиса в Зазеркалье» (Мастерская П. Фоменко, 7+) <br />
                                            <MyLink href={"https://youtube.com/watch?v=gZgVj7OTmwY"} text={"Часть 1 "} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=79hQh2bvTQM"} text={"Часть 2"} />
                                        </li>
                                        <li><MyLink href={"https://youtube.com/watch?v=hBmyC7uxwew"} text={"«Маугли» "} /> (Детский музыкальный театр им. Н.И. Сац, 8+)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=dfJtkfrWVJo"} text={"«Малыш и К.» "} /> (Театр «Около дома Станиславского», 10+)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=b9szJ7_anQ4"} text={"«Золотой Петушок» "} /> (Московский театр Юного зрителя, 5+)</li>
                                        <li>«Оловянные кольца» (Московский театр Юного зрителя, 6+) <br />
                                            <MyLink href={"https://youtube.com/watch?v=-zmpiD_w66g"} text={"Часть 1"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=RO8FDdYvRjs"} text={"Часть 2"} /></li>
                                        <li>«Сказки ученого кота» (Московский драматический театр п/р Армена Джигарханяна, 6+)<br />
                                            <MyLink href={"https://youtube.com/watch?v=Q6G8dWpxE6g"} text={"Часть 1"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=hcdr4ikb4rs"} text={"Часть 2"} /></li>
                                        <li><MyLink href={"https://youtube.com/watch?v=4VwR8M9fLFY"} text={"«Золушка» "} /> (театр «Новая Опера», 7+)</li>
                                        <li>«Конек-Горбунок» (МХАТ им. Чехова, 7+) <br />
                                            <MyLink href={"https://youtube.com/watch?v=nX5_MlpXyM0&t=8s"} text={"Часть 1"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=D7_wbxQ4050"} text={"Часть 2"} /></li>
                                        <li><MyLink href={"http://culture.ru/movies/4527/skazki-na-vsyakii-sluchai"} text={"«Сказки на всякий случай» "} /> (РАМТ, 10+)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=zxAlh2doWXo"} text={"«Аленький цветочек», "} /> мюзикл (Театриум на Серпуховке п/р Терезы Дуровой. 6+)</li>
                                        <li>«Бай-бай, Храпелкин!», мюзикл (Театриум на Серпуховке п/р Терезы Дуровой. 4+). <br />
                                            <MyLink href={"https://youtube.com/watch?v=nPLtxM-ZXMk"} text={"Отделение 1"} /> <br />
                                            <MyLink href={"https://www.youtube.com/watch?v=H4UI9GqExz0"} text={"Отделение 2"} /></li>
                                        <li><MyLink href={"https://youtube.com/watch?v=PIvCNz8ykKc"} text={"«Летучий корабль» "} /> (Театриум на Серпуховке п/р Терезы Дуровой. 4+)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=WfY5a6_hMxI"} text={"«Огниво» "} /> (Театриум на Серпуховке п/р Терезы Дуровой. 6+)</li>
                                        <li><MyLink href={"http://culture.ru/movies/4436/priklyucheniya-ryzhika"} text={"«Приключения Рыжика» "} /> (Московский театр «У Никитских ворот». 10+)</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Мюзиклы и музыкальные спектакли сайта Культура.РФ"}>
                                    <ul className="list">
                                        <li>«Принц и нищий», Московский Художественный Академический Театр имени М. Горького, 1985 год,</li>
                                        <li><MyLink href={"http://ulture.ru/movies/1719/dorozhe-zhemchuga-i-zlata"} text={"«Дороже жемчуга и злата», "} /> театр «Современник», 1984 год, c</li>
                                        <li><MyLink href={"http://culture.ru/movies/4697/bremenskie-muzykanty-myuzikl-dlya-vsei-semi"} text={"«Бременские музыканты» Мюзикл для всей семьи», "} /> Государственный театр оперы и балета Удмуртской республики имени П. И. Чайковского,</li>
                                        <li>«Принц и нищий», Театриум на Серпуховской п/р Терезы Дуровой. 2013 год. <br />
                                            <MyLink href={"https://youtube.com/watch?v=T5787Ybhnlc&feature"} text={"1 отделение"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=Vi9YQWY49Jo&feature"} text={"2 отделение"} /></li>
                                        <li>«Бай-бай, Храпелкин!», Театриум на Серпуховской п/р Терезы Дуровой. 2006 год. <br />
                                            <MyLink href={"https://youtube.com/watch?v=nPLtxM-ZXMk&feature"} text={"1 отделение"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=H4UI9GqExz0&feature"} text={"2 отделение"} />
                                        </li>
                                        <li>«Летучий корабль», Театриум на Серпуховской п/р Терезы Дуровой. 2010 год.<br />
                                            <MyLink href={"https://youtube.com/watch?v=R1sBxvAB9bs&feature"} text={"1 отделение"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=_9OC9Up0faE&feature"} text={"2 отделение"} /></li>
                                        <li>Музыкальный спектакль «Клоунцерт. Приключение в городе Я», Театриум на Серпуховской п/р Терезы Дуровой.<br />
                                            <MyLink href={"https://youtube.com/watch?v=ibUJHBLcYhk&feature"} text={"1 отделение"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=CL6MHS23IiA&feature"} text={"2 отделение"} /></li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Опера"}>
                                    <ul className="list">
                                        <li><MyLink href={"http://culture.ru/movies/1511/zolotoi-petushok"} text={"«Золотой петушок» "} /> (Государственный академический Большой театр России, 1988 год)</li>
                                        <li><MyLink href={"http://culture.ru/movies/4519/maugli"} text={"«Маугли» "} /> (Московский государственный академический детский музыкальный театр имени Н. И. Сац, 2012 год)</li>
                                        <li><MyLink href={"http://culture.ru/movies/894/sadko"} text={"«Садко» "} /> (Государственный академический Большой театр России, 1980 год)</li>
                                        <li><MyLink href={"http://culture.ru/movies/4524/lyubov-k-trem-apelsinam"} text={"«Любовь к трем апельсинам» "} /> (Московский государственный академический детский музыкальный театр имени Н. И. Сац, 2012 год)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=QCan1eZeHlM"} text={"«Красная шапочка» "} /> (Московский государственный академический детский музыкальный театр имени Н. И. Сац, 1982 год) youtube.com/watch?v=QCan1eZeHlM</li>
                                        <li><MyLink href={"http://culture.ru/movies/4412/zolushka"} text={"«Золушка» "} /> (Театр «Новая опера» им. Е. В. Колобова, 2013 год)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=QJ2FMwzgtWE"} text={"«Руслан и Людмила» "} /> (Мариинский театр, 1995 год)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=7NdqHygEVGA"} text={"«Золотой петушок» "} /> (Мариинский театр, 2012 год)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=URAvOfNJvC0"} text={"«Сказка о царе Салтане» "} /> (Мариинский театр)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=AJnAkpqVDcc"} text={"«Золотой петушок» "} /> (Государственный академический Большой театр России, 1989 год)</li>
                                        <li>«Сказка о мёртвой царевне и семи богатырях» (Театр СПб государственной консерватории, 2012 год) <br />
                                            <MyLink href={"https://youtube.com/watch?v=G6nWJNiJSak"} text={"часть 1"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=gOoDg_YFLCc"} text={"часть 2"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=Q1nmdCu4Xq4"} text={"часть 3"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=vzAs4SsE90M"} text={"часть 4"} /></li>
                                        <li><MyLink href={"https://youtube.com/watch?v=LgRPBXtrzoE"} text={"«Снегурочка» "} /> (Государственный академический Большой театр России, 1981 год)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=duekV_gI140"} text={"«Садко» "} /> (Государственный академический Большой театр России, 1980 год)</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Балет сайта Культура.РФ"}>
                                    <ul className="list">
                                        <li><MyLink href={"http://culture.ru/movies/1858/sinyaya-ptica"} text={"«Синяя птица» "} /> (Московский государственный академический детский музыкальный театр имени Н.И. Сац, 1983 год)</li>
                                        <li><MyLink href={"http://culture.ru/movies/1487/shelkunchik"} text={"«Щелкунчик» "} /> (Государственный академический Большой театр России, 1977 год)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=oA_KFouhgdI"} text={"«Щелкунчик» "} /> (Мариинский театр, 2007 год)</li>
                                        <li><MyLink href={"http://culture.ru/movies/1833/shelkunchik"} text={"«Щелкунчик» "} /> (Государственный академический Большой театр России,1966 год)</li>
                                        <li><MyLink href={"http://culture.ru/movies/1905/petrushka"} text={"«Петрушка» "} /> (Государственный академический Большой театр России, 1964 год)</li>
                                        <li><MyLink href={"http://culture.ru/movies/1761/kamennyi-cvetok"} text={"«Каменный цветок» "} /> (Государственный академический Большой театр России, 1990 год)</li>
                                        <li><MyLink href={"http://culture.ru/movies/1934/spyashaya-krasavica"} text={"«Спящая красавица» "} /> (Государственный академический Большой театр России, 1973 год)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=mfzkf7QbaBo"} text={"«Спящая красавица» "} /> (Парижская национальная опера, 2000 год)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=r4x3peKhXfg"} text={"«Конёк-Горбунок» "} /> (Ленинградский театр им. Кирова, 1991 год, 6+)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=XFTahfTXUo0"} text={"«Конёк-Горбунок» "} /> (Московский академический музыкальный театр им. Станиславского и Немировича-Данченко)</li>
                                        <li><MyLink href={"http://culture.ru/movies/1496/alye-parusa"} text={"«Алые паруса» "} /> (Московский государственный академический детский музыкальный театр имени Н. И. Сац, 1985 год)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=EszSXgodINI"} text={"«Петрушка» "} /> (Государственный академический Большой театр, 1990 год)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=fzCe7EozFJI"} text={"«Жар-птица», "} /> Государственный академический Большой театр, 2003 год)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=K-Tf2QLhjfo"} text={"«Чиполлино» "} /> (Киевский театр оперы и балета, 1976 год)</li>
                                    </ul>
                                </Accordion>
                                <h3 className="content__caption --place-tab">
                                    Тематические подборки театральных постановок
                                </h3>
                                <Accordion className='--type-outline --icon-caption-plus' title={"К 75-летию Победы"}>
                                    <ul className="list">
                                        <li>«Вечно живые» (театр Современник 1976 год). <br />
                                            <MyLink href={"https://youtube.com/watch?v=hV9DcGoeZ_A"} text={"Часть 1"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=6fanDCOEud"} text={"Часть 2"} /> </li>
                                        <li><MyLink href={"http://culture.ru/movies/1567/vasilii-terkin"} text={"«Василий Теркин» "} /> (моно спектакль Олег Табаков, 1979 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/927/vasilii-tyorkin"} text={"«Василий Тёркин» "} /> (Государственный академический театр им. Моссовета 1973),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1032/u-voiny-ne-zhenskoe-lic"} text={"«У войны не женское лицо» "} /> (Омский государственный академический театр драмы 1988 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1513/zhivi-i-pomni"} text={"«Живи и помни» "} /> (Московский драматический театр «СФЕРА» 1987 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1774/zori-zdes-tikhie"} text={"«Зори здесь тихие…» "} /> (Государственный академический Большой театр России 1981 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/944/iz-zapisok-lopatina"} text={"«Из записок Лопатина» "} /> (театр «Современник» 1975 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1010/my-ne-uvidimsya-s-toboi"} text={"«Мы не увидимся с тобой» "} /> (театр «Современник» 1981 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1485/1945"} text={"1945 "} /> (театр «Современник» 1988 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1795/volokolamskoe-shosse"} text={"«Волоколамское шоссе» "} /> (Московский художественный академический театр имени М. Горького 1984 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1826/sashka"} text={"«Сашка» "} /> (государственный академический театр им. Моссовета 1983 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1911/otpusk-po-raneniyu"} text={"«Отпуск по ранению» "} /> (театр НА Малой Бронной 1983 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1528/belaya-palatka"} text={"«Белая палатка» "} /> (театр Российской Армии 1985 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/4405/solovinaya-noch"} text={"«Соловьиная ночь» "} /> (театр Российской Армии 2015 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1524/bereg"} text={"«Берег» "} /> (государственный академический Малый театр России 1980 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1720/dorogoi-bessmertiya"} text={"«Дорогой бессмертия» "} /> (театр-фестиваль «БАЛТИЙСКИЙ ДОМ» 1957 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1693/barabanshica"} text={"«Барабанщица» "} /> (театр Российской Армии 1975 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/892/zavtra-byla-voina"} text={"«Завтра была война» "} /> (театр Маяковского 1990 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/4607/veselyi-soldat"} text={"«Веселый солдат» "} /> (Московский губернский театр 2019 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/3380/bud-zdorov-shkolyar"} text={"«Будь здоров, школяр!» "} /> (Московский театр «У НИКИТСКИХ ВОРОТ» 2010 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1023/vozvrashenie"} text={"«Возвращение» "} /> (Новосибирский академический молодежный театр «ГЛОБУС» 2010 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1036/poslednee-pismo"} text={"«Последнее письмо» "} /> (Московский театр «ЭРМИТАЖ» 2011 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1003/marino-pole"} text={"«Марьино поле» "} /> (театр для детей и молодежи «Свободное пространство» 2010 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/3446/nash-klass"} text={"«Наш класс» "} /> (Кемеровский областной театр драмы имени А. В. Луначарского 2015 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/969/usvyatskie-shlemonoscy"} text={"«Усвятские шлемоносцы» "} /> (Самарский академический театр драмы им. М. Горького 1982 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/951/i-v-sibiri-sakura-cvetet"} text={"«И в Сибири сакура цветет…» "} /> (Минусинский драматический театр 2011 год)</li>
                                    </ul>
                                </Accordion>
                            </Accordion>
                            <Accordion title={"Экскурсии"}>
                                <h3 className="content__caption --place-tab">
                                    Экскурсии в музеи
                                </h3>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №1"}>
                                    <ol className="list --type-number">
                                        <li>
                                            <p><b>Государственный центральный музей современной истории России</b></p>
                                            <MyLink href={"http://www.sovrhistory.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://vm.sovrhistory.ru/sovremennoy-istorii-rossii"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/11143/gosudarstvennyi-centralnyi-muzei-sovremennoi-istorii-rossii"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Музеи Московского Кремля</b></p>
                                            <MyLink href={"http://kreml.ru/"} text={"Основной сайт музея-заповедника"} /> <br />
                                            <MyLink href={"http://kreml.ru/exhibitions/virtual-exhibitions/"} text={"Виртуальные экскурсии"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/4200/muzei-moskovskogo-kremlya"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный исторический музей</b></p>
                                            <MyLink href={"https://shm.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://catalog.shm.ru/"} text={"Электронный каталог, включающий 65 виртуальных экскурсий"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/10124/gosudarstvennyi-istoricheskii-muzei"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственная Третьяковская галерея</b></p>
                                            <MyLink href={"http://tretyakovgallery.ru/"} text={"Основной сайт галереи"} /> <br />
                                            <MyLink href={"http://tretyakovgallery.ru/exhibitions/?type=virtualnye-vystavki"} text={"Виртуальные выставки"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/10078/gosudarstvennaya-tretyakovskaya-galereya"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный музей изобразительных искусств им. А. С. Пушкина</b></p>
                                            <MyLink href={"http://pushkinmuseum.art/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://virtual.arts-museum.ru/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/12241/gosudarstvennyi-muzei-a-s-pushkina"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный музей архитектуры имени А. В. Щусева</b></p>
                                            <MyLink href={"http://muar.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://vma.muar.ru/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/7985/gosudarstvennyi-nauchno-issledovatelskii-muzei-arkhitektury-imeni-a-v-shuseva"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p>
                                                <b>Государственный музей нового западного искусства</b> <br />
                                                Виртуальная реконструкция Государственного музея нового западного искусства – первого в мире музея современного искусства, существующего исключительно в интернет-пространстве. Главной гордостью коллекции стали более 800 оцифрованных картин Моне, Сезанна, Гогена, Дега, Ренуара, Ван Гога, Матисса, Пикассо и других живописцев, тысяча объектов графики и 106 скульптур. Все экспонаты представлены в интернете в высоком качестве без ограничений просмотра и доступа. Это совместный проект Министерства культуры Российской Федерации, Государственного Эрмитажа и Государственного музея изобразительных искусств имени А. С. Пушкина.
                                            </p>
                                            <MyLink href={"http://newestmuseum.ru/history/virtual/index.php"} text={"Виртуальные реконструкции"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/19927/gosudarstvennyi-muzei-novogo-zapadnogo-iskusstva-gmnzi"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный музей искусства народов Востока</b></p>
                                            <MyLink href={"http://orientmuseum.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://my.matterport.com/show/?m=2GCapTFigVU"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/6596/gosudarstvennyi-muzei-iskusstva-narodov-vostoka"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Музей Победы</b></p>
                                            <MyLink href={"https://victorymuseum.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://victorymuseum.ru/projects/onlayn-programma-dlya-shkolnikov/"} text={"Онлайн-программа для школьников"} /> <br />
                                            <MyLink href={"https://victorymuseum.ru/newvtour/GLAV.html"} text={"Виртуальный тур"} /> <br />
                                            <MyLink href={"https://victorymuseum.ru/excursions/online"} text={"Онлайн-экскурсия по музею"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/10126/muzei-pobedy"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Всероссийский художественный научно-реставрационный центр им. академика И. Э. Грабаря</b></p>
                                            <MyLink href={"http://www.grabar.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://grb.vm.culture.ru/main/"} text={"Виртуальный тур"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/13890/vserossiiskii-khudozhestvennyi-nauchno-restavracionnyi-centr-im-akademika-i-e-grabarya"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный центральный музей кино</b></p>
                                            <MyLink href={"http://www.museikino.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://www.museikino.ru/exposition/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/10337/gosudarstvennyi-centralnyi-muzei-kino"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Музей-панорама «Бородинская битва»</b></p>
                                            <MyLink href={"http://1812panorama.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://new.newpaintart.ru/#intro"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/2776/muzei-panorama-borodinskaya-bitva"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный биологический музей им. К. А. Тимирязева</b></p>
                                            <MyLink href={"http://gbmt.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://gbmt.ru/ru/exhibition/?arFilter_ff%5BNAME%5D=&arFilter_pf%5BTYPE%5D=523&set_filter=Показать&set_filter=Y"} text={"Виртуальные выставки"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/11454/gosudarstvennyi-biologicheskii-muzei-im-k-a-timiryazeva"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Исторический парк «Россия – Моя история» (павильон 57 на ВДНХ)</b></p>
                                            <MyLink href={"https://myhistorypark.ru/?city=msk"} text={"Основной сайт исторического парка"} /> <br />
                                            <MyLink href={"https://myhistorypark.ru/poster/edinoe-raspisanie-nashikh-aktivnostey-online/Виртуальная%20экскурсия"} text={"Программа онлайн-мероприятий"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/33945/istoricheskii-park-rossiya-moya-istoriya"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный Русский музей (Санкт-Петербург)</b></p>
                                            <MyLink href={"https://www.hermitagemuseum.org/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://www.hermitagemuseum.org/wps/portal/hermitage/panorama/virtual_visit/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/1485/gosudarstvennyi-ermitazh"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный Эрмитаж (Санкт-Петербург)</b></p>
                                            <MyLink href={"http://www.gmir.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://www.gmir.ru/virtual/gmirpano/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/1485/gosudarstvennyi-ermitazh"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный музей истории религии (Санкт-Петербург)</b></p>
                                            <MyLink href={"http://www.gmir.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://www.gmir.ru/virtual/gmirpano/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/10348/gosudarstvennyi-muzei-istorii-religii"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Российский этнографический музей (Санкт-Петербург)</b></p>
                                            <MyLink href={"https://ethnomuseum.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://ethnomuseum.ru/posetitelyu/virtualnye-tury"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/741/rossiiskii-etnograficheskii-muzei"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный музей-заповедник «Царское село» (Санкт-Петербург)</b></p>
                                            <MyLink href={"https://tzar.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://tzar.ru/news/1584700924"} text={"Онлайн-трансляции экскурсий"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/10130/muzei-zapovednik-carskoe-selo"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Центральный музей связи имени А.С. Попова (Санкт-Петербург)</b></p>
                                            <MyLink href={"https://www.rustelecom-museum.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://www.rustelecom-museum.ru/visit/plan/virtualnyy-muzey"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/5380/centralnyi-muzei-svyazi-imeni-a-s-popova"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                    </ol>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №2"}>
                                    Музеи Ярославля, Екатеринбурга, Великого Новгорода, Тулы, Петрозаводска, Ставрополя, Нижнего Тагила, Красноярска и других городов России <MyLink href={"https://www.culture.ru/museums/institutes/hasVirtualTours-true/location-russia"} text={"приглашают на виртуальные экскурсии "} /> по своим экспозициям.
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №3"}>
                                    Проект #Москвастобой Комитета по туризму города Москвы представляет подборку <MyLink href={"https://www.youtube.com/channel/UC-By8osIJoeasNbRBBqF6Jg/videos"} text={"видеоэкскурсий "} /> по музеям, заповедникам, паркам, усадьбам и улицам столицы.
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №4"}>
                                    <p>
                                        С помощью портала Google Art & Culture можно совершить онлайн-экскурсии по следующим московским музеям:
                                    </p>
                                    <ul className="list">
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/мемориальный-музей-космонавтики/rgHMfWhWLKyUNw?hl=ru&sv_lng=37.63976914353529&sv_lat=55.82239811936253&sv_h=192.58004711048775&sv_p=-0.7862201737231516&sv_pid=ofYJCdeLk-vDFw_aDwsRyQ&sv_z=2.634174518797277"} text={"Музей космонавтики"} /></li>
                                        <li><MyLink href={"http://www.mgomz.ru/posetitelyam/virtualnyiy-muzey"} text={"Музей-заповедник «Коломенское»"} /></li>
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/государственный-дарвиновский-музей/cgHHzqu9QCKRHA?sv_lng=37.56147879162037&sv_lat=55.69070324557899&sv_h=0&sv_p=0&sv_pid=0qT83UdxM5bqXNk3ar0Eig&sv_z=1.0000000000000002"} text={"Государственный Дарвиновский музей"} /></li>
                                        <li><MyLink href={"https://amshilov.ru/3d-tur/"} text={"Галерея Александра Шилова"} /></li>
                                        <li><MyLink href={"http://domgogolya.ru/museum/"} text={"Дом Н. В. Гоголя"} /></li>
                                        <li><MyLink href={"http://mpbb.ru/data/vtours/borodino/index.html?lp=p2&lang=ru"} text={"Музей-панорама «Бородинская битва»"} /></li>
                                        <li><MyLink href={"http://www.dommuseum.ru/museum/memorial"} text={"Дом-музей Марины Цветаевой"} /></li>
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/московский-государственный-музей-с-а-есенина/YQFB9eNOEvGG4g?sv_lng=37.63073835218731&sv_lat=55.7265990683157&sv_h=150&sv_p=0&sv_pid=eaIbD68tW4hh5JvVjEdTEQ&sv_z=1"} text={"Московский государственный музей С. А. Есенина"} /></li>
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/музей-михаила-булгакова/sQFMSXyjKlbWHQ?sv_lng=37.59398726302314&sv_lat=55.76704358118165&sv_h=240.24711884855654&sv_p=-14.743692418285761&sv_pid=zBjjOo37cpcwqI4N4rMyzg&sv_z=1.0000000000000002"} text={"Музей Михаила Булгакова"} /></li>
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/музей-центр-преодоление-им-н-а-островского/GAGKwRug7NtHpA?sv_lng=37.60675791547601&sv_lat=55.76419364437781&sv_h=264.2662093082808&sv_p=-17.686462830135838&sv_pid=JIQAVDyJW1kDSjZMmTvT5g&sv_z=1.0000000000000002"} text={"Государственный музей – культурный центр «Интеграция» имени Н. А. Островского"} /></li>
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/государственный-музей-а-с-пушкина/iwHnd_IQrs-80g?sv_lng=37.59765120937985&sv_lat=55.74355785445232&sv_h=150&sv_p=0&sv_pid=mUEeSNVtPCW6sshf2KXskw&sv_z=1.0000000000000002"} text={"Государственный музей А. С. Пушкина"} /></li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №5"}>
                                    Ознакомиться с музейными экспозициями можно на портале <MyLink href={"https://union.catalog.mos.ru/"} text={"«Музейная Москва онлайн». "} /> Здесь для пользователей доступны почти 40 тысяч экспонатов и 148 виртуальных выставок.
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №6"}>
                                    <p>
                                        Школьные музеи образовательных организаций города Москвы приглашают на виртуальные экскурсии:
                                    </p>
                                    <ol className="list --type-number">
                                        <li>
                                            <p>ГБПОУ «Первый Московский Образовательный Комплекс»</p>
                                            <MyLink href={"https://virtual-tours.1-mok.ru/muzey_kostyuma/"} text={"Музей истории костюма"} /> <br />
                                            <MyLink href={"https://virtual-tours.1-mok.ru/muzey_iskusstv/"} text={"Музей искусств"} />
                                        </li>
                                        <li>
                                            <p>
                                                ГБОУ Школа № 1476
                                            </p>
                                            <MyLink href={"https://gym1476.mskobr.ru/nashi_muzei/virtual_naya_e_kskursiya_po_istoriko-kraevedcheskomu_muzeyu_voshozhdenie_k_istokam/"} text={"Историко-краеведческий музей «Восхождение к истокам»"} />
                                        </li>
                                        <li>
                                            <p>
                                                ГБОУ Школа № 587
                                            </p>
                                            <MyLink href={"https://sch587.mskobr.ru/main_galleries/virtual_nyj_muzej_hleba"} text={"Музей хлеба"} />
                                        </li>
                                        <li>
                                            <p>
                                                ГБОУ Школа № 1394 «На набережной»
                                            </p>
                                            <MyLink href={"https://izi.travel/ru/browse/4cbb9f95-a306-4b95-a574-605e3617c55c?lang=ru"} text={"Школьный палеонтологический музей"} />
                                        </li>
                                        <li>
                                            <p>
                                                ГБОУ Школа № 1530 «Школа Ломоносова»
                                            </p>
                                            <MyLink href={"https://gym1530.mskobr.ru/nashi_muzei/muzej_istorii_vychislitel_noj_tehniki"} text={"Музей истории вычислительной техники"} /> <br />
                                            <MyLink href={"http://p919768q.beget.tech/"} text={"Виртуальная экскурсия"} />
                                        </li>
                                        <li>
                                            <p>
                                                ГБОУ ДО «Центр творческого развития и музыкально-эстетического образования детей и юношества «Радость»
                                            </p>
                                            <MyLink href={"https://radost.mskobr.ru/add_edu/muzej_russkogo_narodnogo_tvorchestva_tradicij_i_byta_centra_radost/obwie_svedeniya/"} text={"Музей русского народного творчества, традиций и быта"} /> <br />
                                            <MyLink href={"https://radost.mskobr.ru/add_edu/muzej_istorii_centra_radost_i_muzykal_noj_kul_tury/obwie_svedeniya/"} text={"Музей музыкальной культуры и истории Центра «Радость»"} />
                                        </li>
                                    </ol>
                                </Accordion>
                                <h3 className="content__caption --place-tab">
                                    Google: виртуальные выставки и интерактивные туры
                                </h3>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Google Arts & Culture"}>
                                    <p>
                                        <MyLink href={"https://artsandculture.google.com/"} text={"Глобальный интерактивный образовательный проект,"} />
                                        который объединяет в одном месте оцифрованное культурное и историческое наследие планеты и дает к нему доступ интернет-пользователям во всем мире. Google Arts & Culture также доступно в мобильной версии для iOS и Android.
                                    </p>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Экскурсии по ведущим музеям мира на платформе Google Arts & Culture"}>
                                    <p>
                                        На <MyLink href={"https://artsandculture.google.com/partner?hl=en"} text={"платформе "} /> доступны коллекции крупнейших международных и российских музеев: <br />
                                        - <MyLink href={"https://artsandculture.google.com/streetview/государственный-музей-а-с-пушкина/iwHnd_IQrs-80g?sv_lng=37.59765120937985&sv_lat=55.74355785445232&sv_h=146.2330932617188&sv_p=-0.37322235107421875&sv_pid=mUEeSNVtPCW6sshf2KXskw&sv_z=0.14802264361870265"} text={"Государственный музей изобразительных искусств имени А.С. Пушкина, "} /> <br />
                                        - <MyLink href={"https://artsandculture.google.com/partner/the-state-tretyakov-gallery"} text={"Третьяковская галерея, "} /> <br />
                                        - <MyLink href={"https://artsandculture.google.com/streetview/the-state-russian-museum-st-petersburg/dAGBydNbKO5HZg?sv_lng=30.3315453&sv_lat=59.9386266&sv_h=322.7726375401773&sv_p=8.866305992446726&sv_pid=aIVeVQE00A4nQ__wYJpWdg&sv_z=1.0000000000000004&fbclid=IwAR3nuG2oU8OeVJ-Ld7m4AYyg4UjBzyoNi8XGcH5kUaZ_PtvdibAlgjNSTOE"} text={"Русский музей в Санкт-Петербурге, "} /> <br />
                                        - <MyLink href={"https://artsandculture.google.com/partner/the-state-hermitage-museum"} text={"Государственный Эрмитаж, "} /> <br />
                                        - <MyLink href={"https://artsandculture.google.com/partner/memorial-museum-of-cosmonautics?hl=en"} text={"Государственный музей истории космонавтики, "} /> <br />
                                        - <MyLink href={"https://artsandculture.google.com/partner/state-darwin-museum?hl=en"} text={"Государственный Дарвиновский музей "} /> и многие другие. <br />
                                        Возможен просмотр культурных учреждений как по странам, так и по отдельным <MyLink href={"https://artsandculture.google.com/partner?hl=en"} text={"коллекциям."} />
                                    </p>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Виртуальная экскурсия по Международной космической станции на платформе Google Arts & Culture"}>
                                    <p>
                                        <MyLink href={"https://artsandculture.google.com/streetview/international-space-station/WgFE9b04h8A0ww?sv_lng=-95.08533878466375&sv_lat=29.56040149436038&sv_h=66.24&sv_p=-13.299999999999997&sv_pid=2Lx7fxjE5hcAAAQvxgbyLQ&sv_z=1"} text={"Виртуальная экскурсия "} />в формате 3D на борту МКС
                                    </p>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Экскурсии по знаковым достопримечательностям мира на Google картах"}>
                                    <p>
                                        <MyLink href={"https://www.google.com/maps/about/treks/#/grid"} text={"Виртуальные экскурсии "} />в формате 3D по мировым достопримечательностям, доступны на разных языках
                                    </p>
                                </Accordion>
                            </Accordion>
                        </Accordion>
                        <Accordion opened={true} className='--theme-primary' title={"5 - 9 класс"}>
                            <Accordion title={"Кинематография"}>
                                <h3 className="content__caption --place-tab">
                                    Регламент организации совместных просмотров кинофильмов
                                </h3>
                                <h3>
                                    Запуск совместного просмотра кино с учениками в сервисе Zoom
                                </h3>
                                <h3>
                                    Организовать совместный просмотр
                                </h3>
                                <p>
                                    Можно организовать совместный просмотр в двух вариантах:
                                </p>
                                <ol className="list --type-number">
                                    <li>Предварительное и итоговое обсуждение организовать в режиме видеоконференции, а фильм ученики смотрят самостоятельно по разосланной ссылке.</li>
                                    <li>Просмотр с последующим обсуждением можно провести с использованием сервиса Zoom.</li>
                                </ol>
                                <br />
                                <Accordion className='--theme-g100 --icon-caption-plus' title={"Просмотру фильма предшествует целенаправленная работа"}>
                                    <ol className="list --type-number">
                                        <li>
                                            Классным руководителем проводится предварительная беседа о фильме и его создателях. Обучающимся даются конкретные советы о том, на что следует обратить внимание при просмотре кинокартины. Целесообразно объяснить при этом незнакомые термины киноискусства (сюжет, титры, сценарий, режиссёр и др.). Необходимо сориентировать обучающихся на предстоящее обсуждение, дать им конкретные задания к будущей <b>киноконференции</b>: какие события изображаются в фильме; какими средствами киноискусства актёры раскрывают образы главных героев; как используются пейзажные съёмки; как музыка передаёт и эмоционально усиливает отдельные эпизоды фильма.
                                        </li>
                                        <li>
                                            Задания-вопросы помогают обучающимся подобрать материал для выступлений, нацеливают их на написание тематических отзывов. При распределении заданий необходимо учитывать склонности и интересы ребят, уровень их развития.
                                        </li>
                                        <li>
                                            Целенаправленному просмотру кинофильма и его последующему обсуждению содействует также разработка общего плана обсуждения и заблаговременное ознакомление с ним обучающихся. Например, <b>можно предложить следующий план:</b>
                                            <ul className="list">
                                                <li>Кто автор сценария фильма? Какие факты его творческой биографии вам известны?</li>
                                                <li>Кто режиссёр-постановщик фильма? Какова его творческая биография?</li>
                                                <li>Идейно-тематическое содержание фильма, решение в фильме актуальных проблем.</li>
                                                <li>Образы главных героев и искусство игры актёров.</li>
                                                <li>Художественно-эстетические достоинства фильма.</li>
                                                <li>Жанр кинокартины. В чём проявляются его особенности в этом фильме?</li>
                                                <li>Общее впечатление о фильме.</li>
                                            </ul>
                                            Различают <b>два варианта обсуждения</b>: экспромт, специально подготовленное обсуждение. <br />
                                            Чаще практикуется второй вариант — <b>специально подготовленное обсуждение</b>. Возможно использование разных приёмов, которые активизируют обучающихся и нацеливают их на восприятие фильма. <br />
                                        </li>
                                        <li>
                                            До просмотра фильма классный руководитель распределяет поручения: один из членов коллектива должен анализировать работу режиссёра (лучше начинать с обсуждения фильма-экранизации, где его работа наиболее «ощутима»), другой – оператора, третий — сценариста. Несколько обучающихся получают задание оценить оформление фильма — художественное и музыкальное. Два-три ребенка (по желанию) просматривают периодическую печать с целью поиска отзывов и рецензий на кинофильм.
                                        </li>
                                        <li>
                                            Можно рекомендовать после просмотра кинофильма провести анкетирование обучающихся. В анкету включаются 2–3 вопроса (Что тебе больше всего понравилось в фильме? Что не понравилось? Если бы ты был режиссёром, как бы закончил этот фильм? Иногда целесообразно предложить детям дать краткий письменный отзыв о просмотренном фильме).
                                        </li>
                                        <li>
                                            Если фильм представляет экранизацию какого-либо литературного произведения, то можно посоветовать обучающимся предварительно прочитать его. Если это школьники младших классов, то педагогу следует доступно рассказать о произведении и его авторе, прочесть подходящие отрывки из книги или пьесы, заботясь о сохранении у них интереса к фильму.
                                        </li>
                                    </ol>
                                </Accordion>
                                <Accordion className='--theme-g100 --icon-caption-plus' title={"Возможные варианты вопросов для обсуждения фильма"}>
                                    <ul className="list">
                                        <li>Понравился ли вам фильм? Почему?</li>
                                        <li>Это фильм — экранизация литературного произведения. Кто читал повесть? Как вы считаете, что интереснее — фильм или повесть? Почему?</li>
                                        <li>Какова идея фильма?</li>
                                        <li>Какие главные проблемы решаются в фильме?</li>
                                        <li>Какие сюжетные линии вы считаете самыми сильными? Почему?</li>
                                        <li>Дайте краткую характеристику положительных и отрицательных черт (главных и второстепенных героев).</li>
                                        <li>Какие нравственные проблемы поднимаются в фильме?</li>
                                        <li>Чем вы объясните поступки героев?</li>
                                        <li>Что вы считаете наиболее удачным в работе оператора и художника?</li>
                                        <li>Какие сцены производят наиболее сильное впечатление?</li>
                                        <li>Удачно ли музыкальное сопровождение фильма? Соответствует ли оно настроению героев, действиям, происходящим на экране?</li>
                                        <li>Какие вы заметили недостатки фильма?</li>
                                        <li>Можно ли считать этот фильм событием в киноискусстве?</li>
                                    </ul>
                                    <p>
                                        В ходе обсуждения фильма желательно, чтобы каждый обучающийся высказал своё мнение, обосновав его материалами фильма. Полезно поднять спорные вопросы и обсудить их вместе с детьми, для того чтобы понимание ими достоинств и недостатков фильма стало ещё более глубоким. Желательно, если это возможно, связать увиденные на экране события с материалом учебного курса истории, литературы и других предметов. Учителю следует повести обсуждение так, чтобы ответы обучающихся подкреплялись ссылками на конкретные эпизоды фильма, выводами из увиденного.
                                    </p>
                                    <p>
                                        Обсуждение завершает классный руководитель, высказывает своё отношение к отдельным моментам фильма и делает логические акценты на его художественных достоинствах и воспитательном значении. Более результативным и активным будет обсуждение фильма, если в нём участвуют на равных обучающиеся и педагоги, воспитатели и родители.
                                    </p>
                                </Accordion>
                                <Accordion className='--theme-g100 --icon-caption-plus' title={"Ресурсы для просмотра кинематографа онлайн"}>
                                    <ul className="list">
                                        <li><MyLink href={"https://cinema.mosfilm.ru/"} text={"Онлайн-кинотеатра киностудии «Мосфильм»"} /></li>
                                        <li><MyLink href={"https://www.odesafilmstudio.com.ua/ru"} text={"Онлайн-кинотеатр Одесской киностудии"} /></li>
                                        <li><MyLink href={"https://www.culture.ru/themes/254989/filmy-o-shkole-i-uchitelyakh"} text={"Сайт «Культура.РФ»: Подборка фильмов о школе и учителях"} /></li>
                                        <li><MyLink href={"https://www.culture.ru/materials/253300/multfilmy-ne-tolko-dlya-detei"} text={"Сайт «Культура.РФ»: Мультфильмы не только для детей"} /></li>
                                        <li><MyLink href={"https://www.culture.ru/themes/255171/sovetskie-multfilmy-po-motivam-skazok"} text={"Сайт «Культура.РФ»: Советские мультфильмы по мотивам сказок"} /></li>
                                        <li><MyLink href={"https://kinouroki.ru/"} text={"Всероссийский народный проект «Киноуроки в школах России»"} /></li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--theme-g100 --icon-caption-plus' title={"Рекомендуемый перечень фильмов для детей"}>
                                    <ul className="list">
                                        <li>Ох уж эта Настя! (Ст. Горького, 1971 год, реж. Ю. Победоносцев, 0+)</li>
                                        <li>Васёк Трубачёв и его товарищи (Ст. Горького, 1955 год, реж. И. Фрэз, 0+)</li>
                                        <li>Вечера на хуторе близ Диканьки (Ст. Горького, 1961 год, реж. А. Роу, 6+)</li>
                                        <li>Кыш и Двапортфеля (Мосфильм, 1974 год, реж. Э. Гаврилов, 0+)</li>
                                        <li>Дети капитана Гранта (Мосфильм, 1936 год, реж. В. Вайншток, 0+)</li>
                                        <li>Друг мой, Колька (Мосфильм, 1961 год, реж. А. Салтыков, А. Митта, 6+)</li>
                                        <li>Соленый пес (Ленфильм, 1973 год, реж. Н. Кошелев, 68 мин., 0+)</li>
                                        <li>Тропой бескорыстной любви (Центрнаучфильм, 1971 год, реж. А. Бабаян, 6+)</li>
                                        <li>Доживем до понедельника (Ст. Горького, 1968 год, реж. С. Ростоцкий, 106 мин., 0+)</li>
                                        <li>Земля Санникова (Мосфильм, 1973 год, реж. А. Мкртчян, Л. Попов, 95 мин., 6+)</li>
                                        <li>Добро пожаловать, или Посторонним вход воспрещён (Мосфильм, 1964 год, реж. Э. Климов, 6+)</li>
                                        <li>Девочка, хочешь сниматься в кино? (Ленфильм, 1977 год, реж. А. Бергункер, 0+)</li>
                                        <li>Клетка для канареек (Мосфильм, 1983 год, реж. П. Чухрай, 12+)</li>
                                        <li>Ключ без права передачи (Ленфильм, 1976 год, реж. Д. Асанова, 94 мин., 0+)</li>
                                        <li>Когда я стану великаном (Ст. Горького, 1978 год, реж. И. Туманян, 87 мин., 0+)</li>
                                        <li>Кольца Альманзора (Ст. Горького, 1977 год, реж. И. Вознесенский, 0+)</li>
                                        <li>Москва — Кассиопея (Ст. Горького, 1973 год, реж. Р. Викторов, 6+)</li>
                                        <li>На графских развалинах (Мосфильм, 1957 год, реж. В. Скуйбин, 69 мин., 0+)</li>
                                        <li>На златом крыльце сидели (Ст. Горького, 1986 год, реж. Б. Рыцарев, 0+)</li>
                                        <li>Отроки во Вселенной (Ст. Горького, 1974 год, реж. Р. Викторов, 6+)</li>
                                        <li>Раз, два — горе не беда! (Ст. Горького, 1988 год, реж. М. Юзовский, 82 мин, 0+)</li>
                                        <li>Человек-амфибия (Ленфильм, 1962 год, реж. Г. Казанский, В. Чеботарев, 97 мин., 0+)</li>
                                        <li>Человек-невидимка (Мосфильм, 1984 год, реж. А. Захаров, 89 мин., 6+)</li>
                                        <li>Чудак из пятого «Б» (Ст. Горького, 1972 год, реж. И. Фрэз, 0+)</li>
                                        <li>Чук и Гек (Ст. Горького, 1953 год, реж. И. Лукинский, 0+)</li>
                                        <li>Школа мужества (Мосфильм, 1954 год, реж. В. Басов, М. Корчагин, 99 мин., 0+)</li>
                                        <li>Шла собака по роялю (Ст. Горького, 1978 год, реж. В. Грамматиков, 68 мин., 0+)</li>
                                        <li>Это было в разведке (Ст. Горького, 1969 год, реж. Л. Мирский, 93 мин., 0+)</li>
                                        <li>Это мы не проходили (Ст. Горького, 1975 год, реж. И. Фрэз, 99 мин., 0+)</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--theme-g100 --icon-caption-plus' title={"Мультфильмы на музыку известных композиторов"}>
                                    <ul className="list">
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=t1vNrzM6EK4&feature"} text={"«Времена года», "} /> музыка П.И. Чайковского, Союзмультфильм 1969г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?time_continue=8&v=tsvJdWc1Sus&feature"} text={"«Детский альбом», "} /> музыка П.И. Чайковского, Союзмультфильм, 1968г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=xKozhQNYCLI&feature"} text={"«Щелкунчик», "} /> музыка П.И. Чайковского, Союзмультфильм, 1969г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=JIGxDpQPYsc&feature"} text={"«Зимняя сказка», "} /> музыка П.И. Чайковского, Союзмультфильм, 1945г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=whI_rC9PrhU&feature"} text={"«Весенние мелодии», "} /> музыка П.И. Чайковского, Союзмультфильм, 1946г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=mymv25H5TY4&feature"} text={"«Лебединое озеро», "} /> музыка П.И. Чайковского, компания Toei Animation (Япония), 1981г.,</li>
                                        <li>Мультфильм-мюзикл <MyLink href={"https://mults.info/mults/?id=3094"} text={"«Гадкий утёнок», "} /> музыка П.И. Чайковского, киностудия «Стайлер», 2010г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=M_2naJAAPb4&feature"} text={"«Рондо в турецком стиле», "} /> музыка В.А. Моцарта, «Волшебная флейта» — сборник мультфильмов по произведениям классической музыки, 2008г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=9WIrODIUG4M&feature"} text={"«Волшебная флейта», "} /> музыка В.А. Моцарта, «Волшебная флейта» — сборник мультфильмов по произведениям классической музыки, 2008г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=_kmNAgr-LzQ&feature"} text={"«Маленький Моцарт», "} /> музыка В.А. Моцарта, «Волшебная флейта» — сборник мультфильмов по произведениям классической музыки, 2008г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=REjjvSz2jzY&feature"} text={"«Верное средство», "} /> музыка В.А. Моцарта, Союзмультфильм, 1982г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=vTowzpTwv4s&feature"} text={"«Сказка сказок», "} /> музыка В.А. Моцарта, Союзмультфильм, 1979г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=IOBwMwOHlHY&feature"} text={"«Снегурочка», "} /> музыка Н.А. Римского-Корсакова, Союзмультфильм, 1952г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=4ZVm8pnTj_4&feature"} text={"«Сказка о золотом петушке», "} /> музыка Н.А. Римского-Корсакова, Союзмультфильм, 1952г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=WfjXEesZ0NA&feature"} text={"«Ночь перед Рождеством», "} /> музыка Н.А. Римского-Корсакова, Союзмультфильм, 1951г.</li>
                                    </ul>
                                </Accordion>
                            </Accordion>
                            <Accordion title={"Исполнительское искусство"}>
                                <h3 className="content__caption --place-tab">
                                    Регламент организации совместных просмотров театральных постановок
                                </h3>
                                <h3>
                                    Запуск совместного просмотра спектакля
                                </h3>
                                <h3>
                                    Организовать совместный просмотр
                                </h3>
                                <p>
                                    Совместный просмотр можно организовать в двух вариантах:
                                </p>
                                <ol className="list --type-number">
                                    <li>Предварительное и итоговое обсуждение организовать в режиме видеоконференции, а спектакль ученики смотрят самостоятельно по разосланной ссылке.</li>
                                    <li>Просмотр и обсуждение можно провести онлайн с использованием онлайн-сервиса Zoom.</li>
                                </ol>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Просмотру театральной постановки предшествует целенаправленная работа:"}>
                                    <ol className="list --type-number">
                                        <li>
                                            Классный руководитель с классом выбирает постановку пьесы и театр, учитывая школьную программу и возрастной ценз, который указан в афише спектакля.
                                        </li>
                                        <li>
                                            Обучающиеся заранее знакомятся с произведением, по которому поставлен спектакль, выполняют задания по подбору информации о театре, об актерах, о спектакле, о драматурге, об исторической эпохе, к которой относится пьеса, о костюмах.
                                        </li>
                                        <li>
                                            Классным руководителем обычно проводится предварительная беседа о спектакле, авторе, действующих лицах. Даются конкретные советы о том, на что следует обратить внимание при просмотре театральной постановки. В беседе необходимо сориентировать обучающихся на предстоящее обсуждение и дать им конкретные задания: какие события изображаются в спектакле; какими средствами актёры раскрывают образы главных героев; как музыка передаёт и эмоционально усиливает отдельные сцены спектакля.
                                        </li>
                                        <li>
                                            Задания-вопросы помогают обучающимся подобрать материал для выступлений, нацеливают их на написание тематических отзывов. При распределении заданий необходимо учитывать склонности и интересы ребят, уровень их развития.
                                        </li>
                                        <li>
                                            Целенаправленному просмотру спектакля и его последующему обсуждению содействует также разработка общего плана обсуждения и заблаговременное ознакомление с ним обучающихся. Например, можно предложить <b>следующий план:</b>

                                            <ul className='list'>
                                                <li>Кто автор пьесы? Какие факты его творческой биографии вам известны?</li>
                                                <li>Историческая эпоха, показанная на сцене.</li>
                                                <li>Жанр постановки. В чём проявляются жанровые особенности в пьесе?</li>
                                                <li>Идейно-тематическое содержание спектакля, его актуальность?</li>
                                                <li>Кто режиссёр постановки? Какова его творческая биография?</li>
                                                <li>Образы главных героев и искусство игры актёров.</li>
                                                <li>Художественно-эстетические достоинства.</li>
                                                <li>Общее впечатление о спектакле.</li>
                                            </ul>

                                            Различают <b>два варианта обсуждения:</b> экспромт, специально подготовленное обсуждение. <br />
                                            В тех случаях, когда обучающиеся знают основные критерии оценок театральной постановки, обсуждение может пройти сразу после просмотра в форме свободной беседы, направляемой педагогом, воспитателем. <br />
                                            Но чаще практикуется второй вариант – <b>специально подготовленное обсуждение.</b> Как его готовить? Возможно использование разных приёмов, которые активизируют обучающихся и нацеливают их на восприятие постановки. <br />
                                            До просмотра спектакля классный руководитель распределяет поручения: один из членов коллектива должен анализировать работу режиссёра, другой – актёров. Несколько обучающихся получают задание оценить оформление спектакля – художественное и музыкальное, а другие (по желанию) просматривают периодическую печать с целью поиска отзывов и рецензий на постановку.
                                        </li>
                                        <li>
                                            Можно рекомендовать после просмотра спектакля провести анкетирование обучающихся. В анкету включаются 3-4 вопроса (Кто из героев больше понравился и почему? Что тебе больше всего понравилось в пьесе? Что не понравилось? Если бы ты был режиссёром, как бы закончил этот спектакль?). <br />
                                            Иногда целесообразно предложить обучающимся дать краткий письменный отзыв о просмотренной постановке, нарисовать афишу. <br />
                                            Обсуждение спектакля – сложная форма воспитательной работы. Обучающиеся по-разному реагируют на то, что видели, часто высказывают неожиданные суждения, задают вопросы. Поэтому лучше всего вести обсуждение самому классному руководителю, педагогу, воспитателю. После краткого вступления он сразу переходит к обсуждению.
                                        </li>
                                    </ol>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Возможные варианты вопросов:"}>
                                    <ul className="list">
                                        <li>Понравилась ли вам театральная постановка? Почему?</li>
                                        <li>Как вы считаете, что интереснее – произведение, которое вы прочитали, или спектакль, поставленный по этому произведению? Почему?</li>
                                        <li>Есть ли фильм-экранизация по этому произведению? Смотрели вы его? Чем отличается театральная постановка от показа той же пьесы на экране?</li>
                                        <li>Какова идея пьесы?</li>
                                        <li>Какие главные проблемы в ней решаются? Назовите их.</li>
                                        <li>Кто из героев показался вам самым привлекательным? Чем именно вас привлекает этот персонаж?</li>
                                        <li>Какие сюжетные линии вы считаете самыми сильными? Что этим хотели сказать автор и режиссёр?</li>
                                        <li>Дайте краткую характеристику положительных и отрицательных черт главных и второстепенных героев.</li>
                                        <li>Какие нравственные проблемы поднимаются в спектакле?</li>
                                        <li>Какие сцены производят наиболее сильное впечатление?</li>
                                        <li>Что вы считаете наиболее удачным в работе декоратора и костюмера?</li>
                                        <li>Удачно ли музыкальное сопровождение спектакля? Соответствует ли оно настроению героев, действиям, происходящим на сцене?</li>
                                        <li>Какие вы заметили недостатки в постановке?</li>
                                        <li>Можно ли считать этот спектакль событием в театральной жизни?</li>
                                        <li>Кого из персонажей вам хотелось бы сыграть, если будем ставить спектакль в классе по данному произведению?</li>
                                    </ul>
                                </Accordion>
                                <h3 className="content__caption --place-tab">
                                    Материалы
                                </h3>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Сказки с оркестром"}>
                                    <ul className="list">
                                        <li><MyLink href={"https://www.culture.ru/movies/4102/a-lindgren-peppi-dlinnyichulok-voskresnye-dnevnye-simfonicheskie-koncerty-dlya-detei"} text={"«Пеппи Длинныйчулок» "} /> (Академический симфонический оркестр Московской филармонии, 2017 г., 9+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3470/gans-khristian-andersen-dikie-lebedi"} text={"«Дикие лебеди» "} /> (Академический симфонический оркестр Московской филармонии, 2016 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3655/pamela-trevers-meri-poppins"} text={"«Мэри Поппинс» "} /> (Академический симфонический оркестр Московской филармонии, 2015 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/4069/skazki-s-orkestrom-aleksandr-dyuma-belosnezhka-olga-budina-khudozhestvennoe-slovo"} text={"«Белоснежка» "} /> (Академический симфонический оркестр Московской филармонии, 2015 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3661/skazki-sharlya-perro-kot-v-sapogakh-krasnaya-shapochka"} text={"«Кот в сапогах», "} /> «Красная шапочка» (Академический симфонический оркестр Московской филармонии, 2015 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3652/dzheims-barri-piter-pen-skazku-chitaet-anna-bolshova"} text={"«Питер Пэн» "} /> (Академический симфонический оркестр Московской филармонии, 2015 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3900/skazki-s-orkestrom-e-porter-pollianna-voskresnye-dnevnye-simfonicheskie-koncerty-dlya-detei"} text={"«Поллианна» "} /> (Академический симфонический оркестр Московской филармонии, 2017 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3901/r-l-stivenson-ostrov-sokrovish"} text={"«Остров сокровищ» "} /> (Академический симфонический оркестр Московской филармонии, 2017 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3960/literaturno-muzykalnaya-kompoziciya-po-romanu-princ-i-nishii-mikhail-trukhin"} text={"«Принц и нищий» "} /> (Академический симфонический оркестр Московской филармонии, 2014 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/4148/sindbad-morekhod-dnevnye-simfonicheskie-koncerty-dlya-detei"} text={"«Синдбад-Мореход» "} /> (Академический симфонический оркестр Московской филармонии, 2018 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?time_continue=21&v=bW8IZPELObE&feature=emb_logo"} text={"«Золушка» "} /> (Академический симфонический оркестр Московской филармонии, 2019 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=BkqhaAwi1JA"} text={"«Калиф — аист» "} /> (Академический симфонический оркестр Московской филармонии, 2020 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=twD8sw4KzIQ"} text={"«Аленький цветочек» "} /> (Академический симфонический оркестр Московской филармонии, 2009 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=wIUp-JQJF44"} text={"«Алиса в стране чудес» "} /> (Академический симфонический оркестр Московской филармонии, 2014 г., 12 +)</li>
                                        <li><MyLink href={"https://tvkultura.ru/video/show/brand_id/20%E2%80%89953/episode_id/698%E2%80%89871/video_id/698%E2%80%89871/"} text={"«Щелкунчик» "} /> (Российский Национальный оркестр, 2008 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=YFnMkth-2yc"} text={"«Огниво» "} /> (Академический симфонический оркестр Московской филармонии, 2009 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=2mzB5IB8_MM"} text={"«Приключения Пиноккио» "} /> (Академический симфонический оркестр Московской филармонии, 2008 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=_3i48EjRwUs"} text={"«Маленький принц» "} /> (Академический симфонический оркестр Московской филармонии, 2009 г., 12 +)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=H-l6ZD9QJ7U"} text={"«Спящая красавица» "} /> (Академический симфонический оркестр Московской филармонии, 2007 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=7jsR0LpXHj4"} text={"«Старик Хоттабыч» "} /> (<MyLink href={"https://www.youtube.com/channel/UCxv_4Z-rFmleqQXOhAvM_Tg"} text={"Донецкая государственная академическая филармония, "} /> 2020 г. 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=ol7eRjpkItA"} text={"«Король-олень» "} /> (Российский государственный оркестр кинематографии, 2013, 10+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=tH--w20NkYY"} text={"«12 месяцев» "} /> (Академический симфонический оркестр Московской филармонии, 2014 г., 7+)</li>
                                        <li><MyLink href={"https://ok.ru/video/921%E2%80%89590%E2%80%89434%E2%80%89334"} text={"«Соловей» "} /> (Академический симфонический оркестр Московской филармонии, 2013 г., 10 +)</li>
                                        <li><MyLink href={"https://ok.ru/video/985%E2%80%89527%E2%80%89683%E2%80%89614"} text={"«Русалочка» "} /> (Академический симфонический оркестр Московской филармонии, 2018 г., 7+)</li>
                                        <li><MyLink href={"https://ok.ru/video/325%E2%80%89621%E2%80%89123%E2%80%89614"} text={"«Волшебное кольцо» "} /> (Академический симфонический оркестр Московской филармонии, 2018 г., 7+)</li>
                                        <li><MyLink href={"https://ok.ru/video/2%E2%80%89404%E2%80%89780%E2%80%89607"} text={"«Малыш и Карлсон» "} /> (Академический симфонический оркестр Московской филармонии, 2010 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=lqjrc9pIcq0"} text={"«Петя и волк» "} /> (Академический симфонический оркестр Самарской государственной филармонии, 2020 г., 7+)</li>
                                        <li><MyLink href={"https://ok.ru/video/348%E2%80%89728%E2%80%89330%E2%80%89782"} text={"«Гадкий утёнок» "} /> (Академический симфонический оркестр Московской филармонии, 2017 г., 6+)</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Театральные постановки с сайта Культура.РФ"}>
                                    <ul className='list'>
                                        <li><MyLink href={"https://www.culture.ru/movies/4409/bednost-ne-porok"} text={"«Бедность не порок» "} />(Государственный академический Малый театр, 2011 год 12+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/4467/mertvye-dushi"} text={"«Мёртвые души» "} />(Московский академический театр имени Вл.Маяковского, 2009 год 12+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1918/nedorosl"} text={"«Недоросль» "} />(Государственный академический Малый театр России, 1987год 12+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/901/revizor"} text={"«Ревизор» "} /> (<MyLink href={"https://www.culture.ru/institutes/10187/moskovskii-akademicheskii-teatr-satiry"} text={"Московский академический театр Сатиры, "} /> 1982 год 12+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3441/revizor"} text={"«Ревизор» "} />(Государственный академический Малый театр России, 2013 год, 12+)</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Театральные постановки с сайтов театров"}>
                                    <ul className="list">
                                        <li><MyLink href={"https://www.youtube.com/watch?v=DAnXdSuQCrc"} text={"«Мушкетеры» "} />(РАМТ, 12+)</li>
                                        <li><MyLink href={"https://mariinsky.tv/"} text={"«Ромео и Джульетта» "} />(Мариинский театр, 12+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?time_continue=16&v=aRbRroz_ae4&feature=emb_logo"} text={"«Про Федота-стрельца» "} />(Театр одного актера 1988г.)</li>
                                        <li>«Пушкин. Дуэль. Смерть» (Московский театр юного зрителя (МТЮЗ), 2005 год, 16+). <br />
                                            <MyLink href={"https://alltheater.ru/watch.php?vid=0905a5f6a"} text={"Часть 1"} /> <br />
                                            <MyLink href={"https://alltheater.ru/watch.php?vid=188899dab"} text={"Часть 2"} /></li>
                                        <li>«Таланты и поклонники» (Московский Академический театр Сатиры, 2019 год 1 и 2 часть, реж. Н. Фекленко, 12+). <br />
                                            <MyLink href={"https://alltheater.ru/watch.php?vid=47f43067c"} text={"Часть 1"} /> <br />
                                            <MyLink href={"https://alltheater.ru/watch.php?vid=0138b4515"} text={"Часть 2"} /></li>
                                        <li>«Нашла коса на камень» (Московский Губернский театр, 2019г, 1 и 2 часть, реж. С. Безруков, 12+). <br />
                                            <MyLink href={"https://alltheater.ru/watch.php?vid=7663c806c"} text={"Часть 1"} /> <br />
                                            <MyLink href={"https://alltheater.ru/watch.php?vid=66572a8ee"} text={"Часть 2"} /></li>
                                        <li><MyLink href={"https://alltheater.ru/watch.php?vid=737e3d8c2"} />(театр Сфера, 2019 г., реж. А. Коршунов, 12+)</li>
                                        <li>«Ромео и Джульетта» (Театриум на Серпуховке, 2019 г., реж. О. Ильин, 12+). <br />
                                            <MyLink href={"https://alltheater.ru/watch.php?vid=0e181c592"} text={"Часть 1"} /> <br />
                                            <MyLink href={"https://alltheater.ru/watch.php?vid=d593e88fe"} text={"Часть 2"} /></li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Мюзиклы и музыкальные спектакли сайта Культура.РФ"}>
                                    <ul className="list">
                                        <li><MyLink href={"https://www.culture.ru/movies/4472/chelovek-iz-lamanchi"} text={"«Человек из Ламанчи», "} />Центральный академический театр Российской армии, 2013 год</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1815/svadba-krechinskogo"} text={"«Свадьба Кречинского», "} />Государственный академический Малый театр России, 2002 год</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Опера"}>
                                    <ul className="list">
                                        <li><MyLink href={"https://www.culture.ru/movies/1515/evgenii%20-onegin"} text={"«Евгений Онегин» "} />(Мариинский театр, 1984 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1764/iolanta"} text={"«Иоланта» "} />(Государственный академический Большой театр России, 1982 год)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=PyAmPrl5J7g"} text={"«Черевички» "} />(Ростовский государственный музыкальный театр, 2005год)</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Оперетта сайта Культура.РФ"}>
                                    <ul className="list">
                                        <li><MyLink href={"https://www.culture.ru/movies/1518/devichii-perepolokh"} text={"«Девичий переполох», "} />Московский государственный академический театр оперетты, 1975 год,</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1504/letuchaya-mysh"} text={"«Летучая мышь», "} />Московский государственный академический театр оперетты, 1984 год,</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1885/prekrasnaya-galateya"} text={"«Прекрасная Галатея», "} />Московский государственный академический театр оперетты, 1986 год,</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1706/ganna-glavari"} text={"«Ганна Главари», "} />телеспектакль, 1979,</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1781/zvanyi-vecher-s-italyancami"} text={"«Званый вечер с итальянцами», "} />Свердловский государственный академический театр музыкальной комедии, телеспектакль, 1970 год,</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Балет сайта Культура.РФ"}>
                                    <ul className="list">
                                        <li><MyLink href={"https://www.culture.ru/movies/1517/don-kikhot"} text={"«Дон Кихот» "} />(Государственный академический Большой театр России, 1978 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/922/romeo-i-dzhuletta"} text={"«Ромео и Джульетта» "} />(Государственный академический Большой театр России, 1976 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1495/revizor"} text={"«Ревизор» "} />(Мариинский театр, 1984 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1494/romeo-i-dzhuletta"} text={"«Ромео и Джульетта» "} />(Государственный академический театр классического балета под руководством Н. Касаткиной и В. Васильева, 1992 год)</li>
                                    </ul>
                                </Accordion>
                                <h3 className="content__caption --place-tab">
                                    Тематические подборки театральных постановок
                                </h3>
                                <Accordion className='--type-outline --icon-caption-plus' title={"К 75-летию Победы"}>
                                    <ul className="list">
                                        <li>«Вечно живые» (театр Современник 1976 год). <br />
                                            <MyLink href={"https://youtube.com/watch?v=hV9DcGoeZ_A"} text={"Часть 1"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=6fanDCOEud"} text={"Часть 2"} /> </li>
                                        <li><MyLink href={"http://culture.ru/movies/1567/vasilii-terkin"} text={"«Василий Теркин» "} /> (моно спектакль Олег Табаков, 1979 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/927/vasilii-tyorkin"} text={"«Василий Тёркин» "} /> (Государственный академический театр им. Моссовета 1973),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1032/u-voiny-ne-zhenskoe-lic"} text={"«У войны не женское лицо» "} /> (Омский государственный академический театр драмы 1988 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1513/zhivi-i-pomni"} text={"«Живи и помни» "} /> (Московский драматический театр «СФЕРА» 1987 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1774/zori-zdes-tikhie"} text={"«Зори здесь тихие…» "} /> (Государственный академический Большой театр России 1981 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/944/iz-zapisok-lopatina"} text={"«Из записок Лопатина» "} /> (театр «Современник» 1975 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1010/my-ne-uvidimsya-s-toboi"} text={"«Мы не увидимся с тобой» "} /> (театр «Современник» 1981 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1485/1945"} text={"1945 "} /> (театр «Современник» 1988 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1795/volokolamskoe-shosse"} text={"«Волоколамское шоссе» "} /> (Московский художественный академический театр имени М. Горького 1984 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1826/sashka"} text={"«Сашка» "} /> (государственный академический театр им. Моссовета 1983 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1911/otpusk-po-raneniyu"} text={"«Отпуск по ранению» "} /> (театр НА Малой Бронной 1983 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1528/belaya-palatka"} text={"«Белая палатка» "} /> (театр Российской Армии 1985 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/4405/solovinaya-noch"} text={"«Соловьиная ночь» "} /> (театр Российской Армии 2015 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1524/bereg"} text={"«Берег» "} /> (государственный академический Малый театр России 1980 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1720/dorogoi-bessmertiya"} text={"«Дорогой бессмертия» "} /> (театр-фестиваль «БАЛТИЙСКИЙ ДОМ» 1957 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1693/barabanshica"} text={"«Барабанщица» "} /> (театр Российской Армии 1975 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/892/zavtra-byla-voina"} text={"«Завтра была война» "} /> (театр Маяковского 1990 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/4607/veselyi-soldat"} text={"«Веселый солдат» "} /> (Московский губернский театр 2019 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/3380/bud-zdorov-shkolyar"} text={"«Будь здоров, школяр!» "} /> (Московский театр «У НИКИТСКИХ ВОРОТ» 2010 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1023/vozvrashenie"} text={"«Возвращение» "} /> (Новосибирский академический молодежный театр «ГЛОБУС» 2010 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1036/poslednee-pismo"} text={"«Последнее письмо» "} /> (Московский театр «ЭРМИТАЖ» 2011 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1003/marino-pole"} text={"«Марьино поле» "} /> (театр для детей и молодежи «Свободное пространство» 2010 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/3446/nash-klass"} text={"«Наш класс» "} /> (Кемеровский областной театр драмы имени А. В. Луначарского 2015 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/969/usvyatskie-shlemonoscy"} text={"«Усвятские шлемоносцы» "} /> (Самарский академический театр драмы им. М. Горького 1982 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/951/i-v-sibiri-sakura-cvetet"} text={"«И в Сибири сакура цветет…» "} /> (Минусинский драматический театр 2011 год)</li>
                                    </ul>
                                </Accordion>
                            </Accordion>
                            <Accordion title={"Экскурсии"}>
                                <h3 className="content__caption --place-tab">
                                    Экскурсии в музеи
                                </h3>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №1"}>
                                    <ol className="list --type-number">
                                        <li>
                                            <p><b>Государственный центральный музей современной истории России</b></p>
                                            <MyLink href={"http://www.sovrhistory.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://vm.sovrhistory.ru/sovremennoy-istorii-rossii"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/11143/gosudarstvennyi-centralnyi-muzei-sovremennoi-istorii-rossii"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Музеи Московского Кремля</b></p>
                                            <MyLink href={"http://kreml.ru/"} text={"Основной сайт музея-заповедника"} /> <br />
                                            <MyLink href={"http://kreml.ru/exhibitions/virtual-exhibitions/"} text={"Виртуальные экскурсии"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/4200/muzei-moskovskogo-kremlya"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный исторический музей</b></p>
                                            <MyLink href={"https://shm.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://catalog.shm.ru/"} text={"Электронный каталог, включающий 65 виртуальных экскурсий"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/10124/gosudarstvennyi-istoricheskii-muzei"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственная Третьяковская галерея</b></p>
                                            <MyLink href={"http://tretyakovgallery.ru/"} text={"Основной сайт галереи"} /> <br />
                                            <MyLink href={"http://tretyakovgallery.ru/exhibitions/?type=virtualnye-vystavki"} text={"Виртуальные выставки"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/10078/gosudarstvennaya-tretyakovskaya-galereya"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный музей изобразительных искусств им. А. С. Пушкина</b></p>
                                            <MyLink href={"http://pushkinmuseum.art/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://virtual.arts-museum.ru/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/12241/gosudarstvennyi-muzei-a-s-pushkina"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный музей архитектуры имени А. В. Щусева</b></p>
                                            <MyLink href={"http://muar.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://vma.muar.ru/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/7985/gosudarstvennyi-nauchno-issledovatelskii-muzei-arkhitektury-imeni-a-v-shuseva"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p>
                                                <b>Государственный музей нового западного искусства</b> <br />
                                                Виртуальная реконструкция Государственного музея нового западного искусства – первого в мире музея современного искусства, существующего исключительно в интернет-пространстве. Главной гордостью коллекции стали более 800 оцифрованных картин Моне, Сезанна, Гогена, Дега, Ренуара, Ван Гога, Матисса, Пикассо и других живописцев, тысяча объектов графики и 106 скульптур. Все экспонаты представлены в интернете в высоком качестве без ограничений просмотра и доступа. Это совместный проект Министерства культуры Российской Федерации, Государственного Эрмитажа и Государственного музея изобразительных искусств имени А. С. Пушкина.
                                            </p>
                                            <MyLink href={"http://newestmuseum.ru/history/virtual/index.php"} text={"Виртуальные реконструкции"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/19927/gosudarstvennyi-muzei-novogo-zapadnogo-iskusstva-gmnzi"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный музей искусства народов Востока</b></p>
                                            <MyLink href={"http://orientmuseum.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://my.matterport.com/show/?m=2GCapTFigVU"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/6596/gosudarstvennyi-muzei-iskusstva-narodov-vostoka"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Музей Победы</b></p>
                                            <MyLink href={"https://victorymuseum.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://victorymuseum.ru/projects/onlayn-programma-dlya-shkolnikov/"} text={"Онлайн-программа для школьников"} /> <br />
                                            <MyLink href={"https://victorymuseum.ru/newvtour/GLAV.html"} text={"Виртуальный тур"} /> <br />
                                            <MyLink href={"https://victorymuseum.ru/excursions/online"} text={"Онлайн-экскурсия по музею"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/10126/muzei-pobedy"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Всероссийский художественный научно-реставрационный центр им. академика И. Э. Грабаря</b></p>
                                            <MyLink href={"http://www.grabar.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://grb.vm.culture.ru/main/"} text={"Виртуальный тур"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/13890/vserossiiskii-khudozhestvennyi-nauchno-restavracionnyi-centr-im-akademika-i-e-grabarya"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный центральный музей кино</b></p>
                                            <MyLink href={"http://www.museikino.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://www.museikino.ru/exposition/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/10337/gosudarstvennyi-centralnyi-muzei-kino"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Музей-панорама «Бородинская битва»</b></p>
                                            <MyLink href={"http://1812panorama.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://new.newpaintart.ru/#intro"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/2776/muzei-panorama-borodinskaya-bitva"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный биологический музей им. К. А. Тимирязева</b></p>
                                            <MyLink href={"http://gbmt.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://gbmt.ru/ru/exhibition/?arFilter_ff%5BNAME%5D=&arFilter_pf%5BTYPE%5D=523&set_filter=Показать&set_filter=Y"} text={"Виртуальные выставки"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/11454/gosudarstvennyi-biologicheskii-muzei-im-k-a-timiryazeva"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Исторический парк «Россия – Моя история» (павильон 57 на ВДНХ)</b></p>
                                            <MyLink href={"https://myhistorypark.ru/?city=msk"} text={"Основной сайт исторического парка"} /> <br />
                                            <MyLink href={"https://myhistorypark.ru/poster/edinoe-raspisanie-nashikh-aktivnostey-online/Виртуальная%20экскурсия"} text={"Программа онлайн-мероприятий"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/33945/istoricheskii-park-rossiya-moya-istoriya"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный Русский музей (Санкт-Петербург)</b></p>
                                            <MyLink href={"https://www.hermitagemuseum.org/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://www.hermitagemuseum.org/wps/portal/hermitage/panorama/virtual_visit/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/1485/gosudarstvennyi-ermitazh"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный Эрмитаж (Санкт-Петербург)</b></p>
                                            <MyLink href={"http://www.gmir.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://www.gmir.ru/virtual/gmirpano/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/1485/gosudarstvennyi-ermitazh"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный музей истории религии (Санкт-Петербург)</b></p>
                                            <MyLink href={"http://www.gmir.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://www.gmir.ru/virtual/gmirpano/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/10348/gosudarstvennyi-muzei-istorii-religii"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Российский этнографический музей (Санкт-Петербург)</b></p>
                                            <MyLink href={"https://ethnomuseum.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://ethnomuseum.ru/posetitelyu/virtualnye-tury"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/741/rossiiskii-etnograficheskii-muzei"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный музей-заповедник «Царское село» (Санкт-Петербург)</b></p>
                                            <MyLink href={"https://tzar.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://tzar.ru/news/1584700924"} text={"Онлайн-трансляции экскурсий"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/10130/muzei-zapovednik-carskoe-selo"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Центральный музей связи имени А.С. Попова (Санкт-Петербург)</b></p>
                                            <MyLink href={"https://www.rustelecom-museum.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://www.rustelecom-museum.ru/visit/plan/virtualnyy-muzey"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/5380/centralnyi-muzei-svyazi-imeni-a-s-popova"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                    </ol>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №2"}>
                                    Музеи Ярославля, Екатеринбурга, Великого Новгорода, Тулы, Петрозаводска, Ставрополя, Нижнего Тагила, Красноярска и других городов России <MyLink href={"https://www.culture.ru/museums/institutes/hasVirtualTours-true/location-russia"} text={"приглашают на виртуальные экскурсии "} /> по своим экспозициям.
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №3"}>
                                    Проект #Москвастобой Комитета по туризму города Москвы представляет подборку <MyLink href={"https://www.youtube.com/channel/UC-By8osIJoeasNbRBBqF6Jg/videos"} text={"видеоэкскурсий "} /> по музеям, заповедникам, паркам, усадьбам и улицам столицы.
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №4"}>
                                    <p>
                                        С помощью портала Google Art & Culture можно совершить онлайн-экскурсии по следующим московским музеям:
                                    </p>
                                    <ul className="list">
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/мемориальный-музей-космонавтики/rgHMfWhWLKyUNw?hl=ru&sv_lng=37.63976914353529&sv_lat=55.82239811936253&sv_h=192.58004711048775&sv_p=-0.7862201737231516&sv_pid=ofYJCdeLk-vDFw_aDwsRyQ&sv_z=2.634174518797277"} text={"Музей космонавтики"} /></li>
                                        <li><MyLink href={"http://www.mgomz.ru/posetitelyam/virtualnyiy-muzey"} text={"Музей-заповедник «Коломенское»"} /></li>
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/государственный-дарвиновский-музей/cgHHzqu9QCKRHA?sv_lng=37.56147879162037&sv_lat=55.69070324557899&sv_h=0&sv_p=0&sv_pid=0qT83UdxM5bqXNk3ar0Eig&sv_z=1.0000000000000002"} text={"Государственный Дарвиновский музей"} /></li>
                                        <li><MyLink href={"https://amshilov.ru/3d-tur/"} text={"Галерея Александра Шилова"} /></li>
                                        <li><MyLink href={"http://domgogolya.ru/museum/"} text={"Дом Н. В. Гоголя"} /></li>
                                        <li><MyLink href={"http://mpbb.ru/data/vtours/borodino/index.html?lp=p2&lang=ru"} text={"Музей-панорама «Бородинская битва»"} /></li>
                                        <li><MyLink href={"http://www.dommuseum.ru/museum/memorial"} text={"Дом-музей Марины Цветаевой"} /></li>
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/московский-государственный-музей-с-а-есенина/YQFB9eNOEvGG4g?sv_lng=37.63073835218731&sv_lat=55.7265990683157&sv_h=150&sv_p=0&sv_pid=eaIbD68tW4hh5JvVjEdTEQ&sv_z=1"} text={"Московский государственный музей С. А. Есенина"} /></li>
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/музей-михаила-булгакова/sQFMSXyjKlbWHQ?sv_lng=37.59398726302314&sv_lat=55.76704358118165&sv_h=240.24711884855654&sv_p=-14.743692418285761&sv_pid=zBjjOo37cpcwqI4N4rMyzg&sv_z=1.0000000000000002"} text={"Музей Михаила Булгакова"} /></li>
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/музей-центр-преодоление-им-н-а-островского/GAGKwRug7NtHpA?sv_lng=37.60675791547601&sv_lat=55.76419364437781&sv_h=264.2662093082808&sv_p=-17.686462830135838&sv_pid=JIQAVDyJW1kDSjZMmTvT5g&sv_z=1.0000000000000002"} text={"Государственный музей – культурный центр «Интеграция» имени Н. А. Островского"} /></li>
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/государственный-музей-а-с-пушкина/iwHnd_IQrs-80g?sv_lng=37.59765120937985&sv_lat=55.74355785445232&sv_h=150&sv_p=0&sv_pid=mUEeSNVtPCW6sshf2KXskw&sv_z=1.0000000000000002"} text={"Государственный музей А. С. Пушкина"} /></li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №5"}>
                                    Ознакомиться с музейными экспозициями можно на портале <MyLink href={"https://union.catalog.mos.ru/"} text={"«Музейная Москва онлайн». "} /> Здесь для пользователей доступны почти 40 тысяч экспонатов и 148 виртуальных выставок.
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №6"}>
                                    <p>
                                        Школьные музеи образовательных организаций города Москвы приглашают на виртуальные экскурсии:
                                    </p>
                                    <ol className="list --type-number">
                                        <li>
                                            <p>ГБПОУ «Первый Московский Образовательный Комплекс»</p>
                                            <MyLink href={"https://virtual-tours.1-mok.ru/muzey_kostyuma/"} text={"Музей истории костюма"} /> <br />
                                            <MyLink href={"https://virtual-tours.1-mok.ru/muzey_iskusstv/"} text={"Музей искусств"} />
                                        </li>
                                        <li>
                                            <p>
                                                ГБОУ Школа № 1476
                                            </p>
                                            <MyLink href={"https://gym1476.mskobr.ru/nashi_muzei/virtual_naya_e_kskursiya_po_istoriko-kraevedcheskomu_muzeyu_voshozhdenie_k_istokam/"} text={"Историко-краеведческий музей «Восхождение к истокам»"} />
                                        </li>
                                        <li>
                                            <p>
                                                ГБОУ Школа № 587
                                            </p>
                                            <MyLink href={"https://sch587.mskobr.ru/main_galleries/virtual_nyj_muzej_hleba"} text={"Музей хлеба"} />
                                        </li>
                                        <li>
                                            <p>
                                                ГБОУ Школа № 1394 «На набережной»
                                            </p>
                                            <MyLink href={"https://izi.travel/ru/browse/4cbb9f95-a306-4b95-a574-605e3617c55c?lang=ru"} text={"Школьный палеонтологический музей"} />
                                        </li>
                                        <li>
                                            <p>
                                                ГБОУ Школа № 1530 «Школа Ломоносова»
                                            </p>
                                            <MyLink href={"https://gym1530.mskobr.ru/nashi_muzei/muzej_istorii_vychislitel_noj_tehniki"} text={"Музей истории вычислительной техники"} /> <br />
                                            <MyLink href={"http://p919768q.beget.tech/"} text={"Виртуальная экскурсия"} />
                                        </li>
                                        <li>
                                            <p>
                                                ГБОУ ДО «Центр творческого развития и музыкально-эстетического образования детей и юношества «Радость»
                                            </p>
                                            <MyLink href={"https://radost.mskobr.ru/add_edu/muzej_russkogo_narodnogo_tvorchestva_tradicij_i_byta_centra_radost/obwie_svedeniya/"} text={"Музей русского народного творчества, традиций и быта"} /> <br />
                                            <MyLink href={"https://radost.mskobr.ru/add_edu/muzej_istorii_centra_radost_i_muzykal_noj_kul_tury/obwie_svedeniya/"} text={"Музей музыкальной культуры и истории Центра «Радость»"} />
                                        </li>
                                    </ol>
                                </Accordion>
                                <h3 className="content__caption --place-tab">
                                    Google: виртуальные выставки и интерактивные туры
                                </h3>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Google Arts & Culture"}>
                                    <p>
                                        <MyLink href={"https://artsandculture.google.com/"} text={"Глобальный интерактивный образовательный проект,"} />
                                        который объединяет в одном месте оцифрованное культурное и историческое наследие планеты и дает к нему доступ интернет-пользователям во всем мире. Google Arts & Culture также доступно в мобильной версии для iOS и Android.
                                    </p>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Экскурсии по ведущим музеям мира на платформе Google Arts & Culture"}>
                                    <p>
                                        На <MyLink href={"https://artsandculture.google.com/partner?hl=en"} text={"платформе "} /> доступны коллекции крупнейших международных и российских музеев: <br />
                                        - <MyLink href={"https://artsandculture.google.com/streetview/государственный-музей-а-с-пушкина/iwHnd_IQrs-80g?sv_lng=37.59765120937985&sv_lat=55.74355785445232&sv_h=146.2330932617188&sv_p=-0.37322235107421875&sv_pid=mUEeSNVtPCW6sshf2KXskw&sv_z=0.14802264361870265"} text={"Государственный музей изобразительных искусств имени А.С. Пушкина, "} /> <br />
                                        - <MyLink href={"https://artsandculture.google.com/partner/the-state-tretyakov-gallery"} text={"Третьяковская галерея, "} /> <br />
                                        - <MyLink href={"https://artsandculture.google.com/streetview/the-state-russian-museum-st-petersburg/dAGBydNbKO5HZg?sv_lng=30.3315453&sv_lat=59.9386266&sv_h=322.7726375401773&sv_p=8.866305992446726&sv_pid=aIVeVQE00A4nQ__wYJpWdg&sv_z=1.0000000000000004&fbclid=IwAR3nuG2oU8OeVJ-Ld7m4AYyg4UjBzyoNi8XGcH5kUaZ_PtvdibAlgjNSTOE"} text={"Русский музей в Санкт-Петербурге, "} /> <br />
                                        - <MyLink href={"https://artsandculture.google.com/partner/the-state-hermitage-museum"} text={"Государственный Эрмитаж, "} /> <br />
                                        - <MyLink href={"https://artsandculture.google.com/partner/memorial-museum-of-cosmonautics?hl=en"} text={"Государственный музей истории космонавтики, "} /> <br />
                                        - <MyLink href={"https://artsandculture.google.com/partner/state-darwin-museum?hl=en"} text={"Государственный Дарвиновский музей "} /> и многие другие. <br />
                                        Возможен просмотр культурных учреждений как по странам, так и по отдельным <MyLink href={"https://artsandculture.google.com/partner?hl=en"} text={"коллекциям."} />
                                    </p>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Виртуальная экскурсия по Международной космической станции на платформе Google Arts & Culture"}>
                                    <p>
                                        <MyLink href={"https://artsandculture.google.com/streetview/international-space-station/WgFE9b04h8A0ww?sv_lng=-95.08533878466375&sv_lat=29.56040149436038&sv_h=66.24&sv_p=-13.299999999999997&sv_pid=2Lx7fxjE5hcAAAQvxgbyLQ&sv_z=1"} text={"Виртуальная экскурсия "} />в формате 3D на борту МКС
                                    </p>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Экскурсии по знаковым достопримечательностям мира на Google картах"}>
                                    <p>
                                        <MyLink href={"https://www.google.com/maps/about/treks/#/grid"} text={"Виртуальные экскурсии "} />в формате 3D по мировым достопримечательностям, доступны на разных языках
                                    </p>
                                </Accordion>
                            </Accordion>
                        </Accordion>
                        <Accordion opened={true} className='--theme-primary' title={"10 - 11 класс"}>
                            <Accordion title={"Кинематография"}>
                                <h3 className="content__caption --place-tab">
                                    Регламент организации совместных просмотров кинофильмов
                                </h3>
                                <h3>
                                    Запуск совместного просмотра кино с учениками в сервисе Zoom
                                </h3>
                                <h3>
                                    Организовать совместный просмотр
                                </h3>
                                <p>
                                    Можно организовать совместный просмотр в двух вариантах:
                                </p>
                                <ol className="list --type-number">
                                    <li>Предварительное и итоговое обсуждение организовать в режиме видеоконференции, а фильм ученики смотрят самостоятельно по разосланной ссылке.</li>
                                    <li>Просмотр с последующим обсуждением можно провести с использованием сервиса Zoom.</li>
                                </ol>
                                <br />
                                <Accordion className='--theme-g100 --icon-caption-plus' title={"Просмотру фильма предшествует целенаправленная работа"}>
                                    <ol className="list --type-number">
                                        <li>
                                            Классным руководителем проводится предварительная беседа о фильме и его создателях. Обучающимся даются конкретные советы о том, на что следует обратить внимание при просмотре кинокартины. Целесообразно объяснить при этом незнакомые термины киноискусства (сюжет, титры, сценарий, режиссёр и др.). Необходимо сориентировать обучающихся на предстоящее обсуждение, дать им конкретные задания к будущей <b>киноконференции</b>: какие события изображаются в фильме; какими средствами киноискусства актёры раскрывают образы главных героев; как используются пейзажные съёмки; как музыка передаёт и эмоционально усиливает отдельные эпизоды фильма.
                                        </li>
                                        <li>
                                            Задания-вопросы помогают обучающимся подобрать материал для выступлений, нацеливают их на написание тематических отзывов. При распределении заданий необходимо учитывать склонности и интересы ребят, уровень их развития.
                                        </li>
                                        <li>
                                            Целенаправленному просмотру кинофильма и его последующему обсуждению содействует также разработка общего плана обсуждения и заблаговременное ознакомление с ним обучающихся. Например, <b>можно предложить следующий план:</b>
                                            <ul className="list">
                                                <li>Кто автор сценария фильма? Какие факты его творческой биографии вам известны?</li>
                                                <li>Кто режиссёр-постановщик фильма? Какова его творческая биография?</li>
                                                <li>Идейно-тематическое содержание фильма, решение в фильме актуальных проблем.</li>
                                                <li>Образы главных героев и искусство игры актёров.</li>
                                                <li>Художественно-эстетические достоинства фильма.</li>
                                                <li>Жанр кинокартины. В чём проявляются его особенности в этом фильме?</li>
                                                <li>Общее впечатление о фильме.</li>
                                            </ul>
                                            Различают <b>два варианта обсуждения</b>: экспромт, специально подготовленное обсуждение. <br />
                                            Чаще практикуется второй вариант — <b>специально подготовленное обсуждение</b>. Возможно использование разных приёмов, которые активизируют обучающихся и нацеливают их на восприятие фильма. <br />
                                        </li>
                                        <li>
                                            До просмотра фильма классный руководитель распределяет поручения: один из членов коллектива должен анализировать работу режиссёра (лучше начинать с обсуждения фильма-экранизации, где его работа наиболее «ощутима»), другой – оператора, третий — сценариста. Несколько обучающихся получают задание оценить оформление фильма — художественное и музыкальное. Два-три ребенка (по желанию) просматривают периодическую печать с целью поиска отзывов и рецензий на кинофильм.
                                        </li>
                                        <li>
                                            Можно рекомендовать после просмотра кинофильма провести анкетирование обучающихся. В анкету включаются 2–3 вопроса (Что тебе больше всего понравилось в фильме? Что не понравилось? Если бы ты был режиссёром, как бы закончил этот фильм? Иногда целесообразно предложить детям дать краткий письменный отзыв о просмотренном фильме).
                                        </li>
                                        <li>
                                            Если фильм представляет экранизацию какого-либо литературного произведения, то можно посоветовать обучающимся предварительно прочитать его. Если это школьники младших классов, то педагогу следует доступно рассказать о произведении и его авторе, прочесть подходящие отрывки из книги или пьесы, заботясь о сохранении у них интереса к фильму.
                                        </li>
                                    </ol>
                                </Accordion>
                                <Accordion className='--theme-g100 --icon-caption-plus' title={"Возможные варианты вопросов для обсуждения фильма"}>
                                    <ul className="list">
                                        <li>Понравился ли вам фильм? Почему?</li>
                                        <li>Это фильм — экранизация литературного произведения. Кто читал повесть? Как вы считаете, что интереснее — фильм или повесть? Почему?</li>
                                        <li>Какова идея фильма?</li>
                                        <li>Какие главные проблемы решаются в фильме?</li>
                                        <li>Какие сюжетные линии вы считаете самыми сильными? Почему?</li>
                                        <li>Дайте краткую характеристику положительных и отрицательных черт (главных и второстепенных героев).</li>
                                        <li>Какие нравственные проблемы поднимаются в фильме?</li>
                                        <li>Чем вы объясните поступки героев?</li>
                                        <li>Что вы считаете наиболее удачным в работе оператора и художника?</li>
                                        <li>Какие сцены производят наиболее сильное впечатление?</li>
                                        <li>Удачно ли музыкальное сопровождение фильма? Соответствует ли оно настроению героев, действиям, происходящим на экране?</li>
                                        <li>Какие вы заметили недостатки фильма?</li>
                                        <li>Можно ли считать этот фильм событием в киноискусстве?</li>
                                    </ul>
                                    <p>
                                        В ходе обсуждения фильма желательно, чтобы каждый обучающийся высказал своё мнение, обосновав его материалами фильма. Полезно поднять спорные вопросы и обсудить их вместе с детьми, для того чтобы понимание ими достоинств и недостатков фильма стало ещё более глубоким. Желательно, если это возможно, связать увиденные на экране события с материалом учебного курса истории, литературы и других предметов. Учителю следует повести обсуждение так, чтобы ответы обучающихся подкреплялись ссылками на конкретные эпизоды фильма, выводами из увиденного.
                                    </p>
                                    <p>
                                        Обсуждение завершает классный руководитель, высказывает своё отношение к отдельным моментам фильма и делает логические акценты на его художественных достоинствах и воспитательном значении. Более результативным и активным будет обсуждение фильма, если в нём участвуют на равных обучающиеся и педагоги, воспитатели и родители.
                                    </p>
                                </Accordion>
                                <Accordion className='--theme-g100 --icon-caption-plus' title={"Ресурсы для просмотра кинематографа онлайн"}>
                                    <ul className="list">
                                        <li><MyLink href={"https://cinema.mosfilm.ru/"} text={"Онлайн-кинотеатра киностудии «Мосфильм»"} /></li>
                                        <li><MyLink href={"https://www.odesafilmstudio.com.ua/ru"} text={"Онлайн-кинотеатр Одесской киностудии"} /></li>
                                        <li><MyLink href={"https://www.culture.ru/themes/254989/filmy-o-shkole-i-uchitelyakh"} text={"Сайт «Культура.РФ»: Подборка фильмов о школе и учителях"} /></li>
                                        <li><MyLink href={"https://www.culture.ru/materials/253300/multfilmy-ne-tolko-dlya-detei"} text={"Сайт «Культура.РФ»: Мультфильмы не только для детей"} /></li>
                                        <li><MyLink href={"https://www.culture.ru/themes/255171/sovetskie-multfilmy-po-motivam-skazok"} text={"Сайт «Культура.РФ»: Советские мультфильмы по мотивам сказок"} /></li>
                                        <li><MyLink href={"https://kinouroki.ru/"} text={"Всероссийский народный проект «Киноуроки в школах России»"} /></li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--theme-g100 --icon-caption-plus' title={"Рекомендуемый перечень фильмов для детей"}>
                                    <ul className="list">
                                        <li>Розыгрыш (Мосфильм, 1976 год, реж. В. Меньшов, 97 мин., 12+)</li>
                                        <li>А если это любовь? (Мосфильм, 1961 год, реж. Ю. Райзман, 12+)</li>
                                        <li>Вам и не снилось (Ст. Горького, 1980 год, реж. И. Фрэз, 12+)</li>
                                        <li>Левша (Ленфильм, 1986 год, реж. С. Овчаров, 12+)</li>
                                        <li>В моей смерти прошу винить Клаву К. (Ленфильм, 1979 год, реж. Н. Лебедев, Э. Ясан, 76 мин., 0+)</li>
                                        <li>Звонят, откройте дверь (Мосфильм, 1965 год, реж. А. Митта, 6+)</li>
                                        <li>Наследница по прямой (Мосфильм, 1982 год, реж. С. Соловьев, 95 мин., 12+)</li>
                                        <li>Мой добрый папа (Ленфильм, 1970 год, реж. И. Усов, 12+)</li>
                                        <li>А вы любили когда-нибудь? (Ленфильм, 1973 год, реж. И. Усов, 12+)</li>
                                        <li>Не болит голова у дятла (Ленфильм, 1974 год, реж. Д. Асанова, 12+)</li>
                                        <li>Сказка странствий (Мосфильм, 1982 год, реж. А. Митта, 12+)</li>
                                        <li>Пацаны (Ленфильм, 1983 год, реж. Д.Асанова, 97 мин., 12+)</li>
                                        <li>Подранки (Мосфильм, 1977 год, реж. Н.Губенко, 93 мин., 12+)</li>
                                        <li>Сто дней после детства (Мосфильм, 1975 год, реж. С. Соловьев, 94 мин., 12+)</li>
                                        <li>Уроки французского (Мосфильм, 1978 год, Е. Ташков, 6+)</li>
                                        <li>Чучело (Мосфильм, 1983 год, реж. Р. Быков, 12+)</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--theme-g100 --icon-caption-plus' title={"Мультфильмы на музыку известных композиторов"}>
                                    <ul className="list">
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=t1vNrzM6EK4&feature"} text={"«Времена года», "} /> музыка П.И. Чайковского, Союзмультфильм 1969г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?time_continue=8&v=tsvJdWc1Sus&feature"} text={"«Детский альбом», "} /> музыка П.И. Чайковского, Союзмультфильм, 1968г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=xKozhQNYCLI&feature"} text={"«Щелкунчик», "} /> музыка П.И. Чайковского, Союзмультфильм, 1969г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=JIGxDpQPYsc&feature"} text={"«Зимняя сказка», "} /> музыка П.И. Чайковского, Союзмультфильм, 1945г.,</li>
                                        <li>Мультфильм <MyLink href={"https://youtube.com/watch?v=whI_rC9PrhU&feature"} text={"«Весенние мелодии», "} /> музыка П.И. Чайковского, Союзмультфильм, 1946г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=mymv25H5TY4&feature"} text={"«Лебединое озеро», "} /> музыка П.И. Чайковского, компания Toei Animation (Япония), 1981г.,</li>
                                        <li>Мультфильм-мюзикл <MyLink href={"https://mults.info/mults/?id=3094"} text={"«Гадкий утёнок», "} /> музыка П.И. Чайковского, киностудия «Стайлер», 2010г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=M_2naJAAPb4&feature"} text={"«Рондо в турецком стиле», "} /> музыка В.А. Моцарта, «Волшебная флейта» — сборник мультфильмов по произведениям классической музыки, 2008г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=9WIrODIUG4M&feature"} text={"«Волшебная флейта», "} /> музыка В.А. Моцарта, «Волшебная флейта» — сборник мультфильмов по произведениям классической музыки, 2008г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=_kmNAgr-LzQ&feature"} text={"«Маленький Моцарт», "} /> музыка В.А. Моцарта, «Волшебная флейта» — сборник мультфильмов по произведениям классической музыки, 2008г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=REjjvSz2jzY&feature"} text={"«Верное средство», "} /> музыка В.А. Моцарта, Союзмультфильм, 1982г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=vTowzpTwv4s&feature"} text={"«Сказка сказок», "} /> музыка В.А. Моцарта, Союзмультфильм, 1979г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=IOBwMwOHlHY&feature"} text={"«Снегурочка», "} /> музыка Н.А. Римского-Корсакова, Союзмультфильм, 1952г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=4ZVm8pnTj_4&feature"} text={"«Сказка о золотом петушке», "} /> музыка Н.А. Римского-Корсакова, Союзмультфильм, 1952г.,</li>
                                        <li>Мультфильм <MyLink href={"https://www.youtube.com/watch?v=WfjXEesZ0NA&feature"} text={"«Ночь перед Рождеством», "} /> музыка Н.А. Римского-Корсакова, Союзмультфильм, 1951г.</li>
                                    </ul>
                                </Accordion>
                            </Accordion>
                            <Accordion title={"Исполнительское искусство"}>
                                <h3 className="content__caption --place-tab">
                                    Регламент организации совместных просмотров театральных постановок
                                </h3>
                                <h3>
                                    Запуск совместного просмотра спектакля
                                </h3>
                                <h3>
                                    Организовать совместный просмотр
                                </h3>
                                <p>
                                    Совместный просмотр можно организовать в двух вариантах:
                                </p>
                                <ol className="list --type-number">
                                    <li>Предварительное и итоговое обсуждение организовать в режиме видеоконференции, а спектакль ученики смотрят самостоятельно по разосланной ссылке.</li>
                                    <li>Просмотр и обсуждение можно провести онлайн с использованием онлайн-сервиса Zoom.</li>
                                </ol>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Просмотру театральной постановки предшествует целенаправленная работа:"}>
                                    <ol className="list --type-number">
                                        <li>
                                            Классный руководитель с классом выбирает постановку пьесы и театр, учитывая школьную программу и возрастной ценз, который указан в афише спектакля.
                                        </li>
                                        <li>
                                            Обучающиеся заранее знакомятся с произведением, по которому поставлен спектакль, выполняют задания по подбору информации о театре, об актерах, о спектакле, о драматурге, об исторической эпохе, к которой относится пьеса, о костюмах.
                                        </li>
                                        <li>
                                            Классным руководителем обычно проводится предварительная беседа о спектакле, авторе, действующих лицах. Даются конкретные советы о том, на что следует обратить внимание при просмотре театральной постановки. В беседе необходимо сориентировать обучающихся на предстоящее обсуждение и дать им конкретные задания: какие события изображаются в спектакле; какими средствами актёры раскрывают образы главных героев; как музыка передаёт и эмоционально усиливает отдельные сцены спектакля.
                                        </li>
                                        <li>
                                            Задания-вопросы помогают обучающимся подобрать материал для выступлений, нацеливают их на написание тематических отзывов. При распределении заданий необходимо учитывать склонности и интересы ребят, уровень их развития.
                                        </li>
                                        <li>
                                            Целенаправленному просмотру спектакля и его последующему обсуждению содействует также разработка общего плана обсуждения и заблаговременное ознакомление с ним обучающихся. Например, можно предложить <b>следующий план:</b>

                                            <ul className='list'>
                                                <li>Кто автор пьесы? Какие факты его творческой биографии вам известны?</li>
                                                <li>Историческая эпоха, показанная на сцене.</li>
                                                <li>Жанр постановки. В чём проявляются жанровые особенности в пьесе?</li>
                                                <li>Идейно-тематическое содержание спектакля, его актуальность?</li>
                                                <li>Кто режиссёр постановки? Какова его творческая биография?</li>
                                                <li>Образы главных героев и искусство игры актёров.</li>
                                                <li>Художественно-эстетические достоинства.</li>
                                                <li>Общее впечатление о спектакле.</li>
                                            </ul>

                                            Различают <b>два варианта обсуждения:</b> экспромт, специально подготовленное обсуждение. <br />
                                            В тех случаях, когда обучающиеся знают основные критерии оценок театральной постановки, обсуждение может пройти сразу после просмотра в форме свободной беседы, направляемой педагогом, воспитателем. <br />
                                            Но чаще практикуется второй вариант – <b>специально подготовленное обсуждение.</b> Как его готовить? Возможно использование разных приёмов, которые активизируют обучающихся и нацеливают их на восприятие постановки. <br />
                                            До просмотра спектакля классный руководитель распределяет поручения: один из членов коллектива должен анализировать работу режиссёра, другой – актёров. Несколько обучающихся получают задание оценить оформление спектакля – художественное и музыкальное, а другие (по желанию) просматривают периодическую печать с целью поиска отзывов и рецензий на постановку.
                                        </li>
                                        <li>
                                            Можно рекомендовать после просмотра спектакля провести анкетирование обучающихся. В анкету включаются 3-4 вопроса (Кто из героев больше понравился и почему? Что тебе больше всего понравилось в пьесе? Что не понравилось? Если бы ты был режиссёром, как бы закончил этот спектакль?). <br />
                                            Иногда целесообразно предложить обучающимся дать краткий письменный отзыв о просмотренной постановке, нарисовать афишу. <br />
                                            Обсуждение спектакля – сложная форма воспитательной работы. Обучающиеся по-разному реагируют на то, что видели, часто высказывают неожиданные суждения, задают вопросы. Поэтому лучше всего вести обсуждение самому классному руководителю, педагогу, воспитателю. После краткого вступления он сразу переходит к обсуждению.
                                        </li>
                                    </ol>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Возможные варианты вопросов:"}>
                                    <ul className="list">
                                        <li>Понравилась ли вам театральная постановка? Почему?</li>
                                        <li>Как вы считаете, что интереснее – произведение, которое вы прочитали, или спектакль, поставленный по этому произведению? Почему?</li>
                                        <li>Есть ли фильм-экранизация по этому произведению? Смотрели вы его? Чем отличается театральная постановка от показа той же пьесы на экране?</li>
                                        <li>Какова идея пьесы?</li>
                                        <li>Какие главные проблемы в ней решаются? Назовите их.</li>
                                        <li>Кто из героев показался вам самым привлекательным? Чем именно вас привлекает этот персонаж?</li>
                                        <li>Какие сюжетные линии вы считаете самыми сильными? Что этим хотели сказать автор и режиссёр?</li>
                                        <li>Дайте краткую характеристику положительных и отрицательных черт главных и второстепенных героев.</li>
                                        <li>Какие нравственные проблемы поднимаются в спектакле?</li>
                                        <li>Какие сцены производят наиболее сильное впечатление?</li>
                                        <li>Что вы считаете наиболее удачным в работе декоратора и костюмера?</li>
                                        <li>Удачно ли музыкальное сопровождение спектакля? Соответствует ли оно настроению героев, действиям, происходящим на сцене?</li>
                                        <li>Какие вы заметили недостатки в постановке?</li>
                                        <li>Можно ли считать этот спектакль событием в театральной жизни?</li>
                                        <li>Кого из персонажей вам хотелось бы сыграть, если будем ставить спектакль в классе по данному произведению?</li>
                                    </ul>
                                </Accordion>
                                <h3 className="content__caption --place-tab">
                                    Материалы
                                </h3>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Сказки с оркестром"}>
                                    <ul className="list">
                                        <li><MyLink href={"https://www.culture.ru/movies/4102/a-lindgren-peppi-dlinnyichulok-voskresnye-dnevnye-simfonicheskie-koncerty-dlya-detei"} text={"«Пеппи Длинныйчулок» "} /> (Академический симфонический оркестр Московской филармонии, 2017 г., 9+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3470/gans-khristian-andersen-dikie-lebedi"} text={"«Дикие лебеди» "} /> (Академический симфонический оркестр Московской филармонии, 2016 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3655/pamela-trevers-meri-poppins"} text={"«Мэри Поппинс» "} /> (Академический симфонический оркестр Московской филармонии, 2015 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/4069/skazki-s-orkestrom-aleksandr-dyuma-belosnezhka-olga-budina-khudozhestvennoe-slovo"} text={"«Белоснежка» "} /> (Академический симфонический оркестр Московской филармонии, 2015 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3661/skazki-sharlya-perro-kot-v-sapogakh-krasnaya-shapochka"} text={"«Кот в сапогах», "} /> «Красная шапочка» (Академический симфонический оркестр Московской филармонии, 2015 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3652/dzheims-barri-piter-pen-skazku-chitaet-anna-bolshova"} text={"«Питер Пэн» "} /> (Академический симфонический оркестр Московской филармонии, 2015 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3900/skazki-s-orkestrom-e-porter-pollianna-voskresnye-dnevnye-simfonicheskie-koncerty-dlya-detei"} text={"«Поллианна» "} /> (Академический симфонический оркестр Московской филармонии, 2017 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3901/r-l-stivenson-ostrov-sokrovish"} text={"«Остров сокровищ» "} /> (Академический симфонический оркестр Московской филармонии, 2017 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3960/literaturno-muzykalnaya-kompoziciya-po-romanu-princ-i-nishii-mikhail-trukhin"} text={"«Принц и нищий» "} /> (Академический симфонический оркестр Московской филармонии, 2014 г., 7+)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/4148/sindbad-morekhod-dnevnye-simfonicheskie-koncerty-dlya-detei"} text={"«Синдбад-Мореход» "} /> (Академический симфонический оркестр Московской филармонии, 2018 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?time_continue=21&v=bW8IZPELObE&feature=emb_logo"} text={"«Золушка» "} /> (Академический симфонический оркестр Московской филармонии, 2019 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=BkqhaAwi1JA"} text={"«Калиф — аист» "} /> (Академический симфонический оркестр Московской филармонии, 2020 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=twD8sw4KzIQ"} text={"«Аленький цветочек» "} /> (Академический симфонический оркестр Московской филармонии, 2009 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=wIUp-JQJF44"} text={"«Алиса в стране чудес» "} /> (Академический симфонический оркестр Московской филармонии, 2014 г., 12 +)</li>
                                        <li><MyLink href={"https://tvkultura.ru/video/show/brand_id/20%E2%80%89953/episode_id/698%E2%80%89871/video_id/698%E2%80%89871/"} text={"«Щелкунчик» "} /> (Российский Национальный оркестр, 2008 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=YFnMkth-2yc"} text={"«Огниво» "} /> (Академический симфонический оркестр Московской филармонии, 2009 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=2mzB5IB8_MM"} text={"«Приключения Пиноккио» "} /> (Академический симфонический оркестр Московской филармонии, 2008 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=_3i48EjRwUs"} text={"«Маленький принц» "} /> (Академический симфонический оркестр Московской филармонии, 2009 г., 12 +)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=H-l6ZD9QJ7U"} text={"«Спящая красавица» "} /> (Академический симфонический оркестр Московской филармонии, 2007 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=7jsR0LpXHj4"} text={"«Старик Хоттабыч» "} /> (<MyLink href={"https://www.youtube.com/channel/UCxv_4Z-rFmleqQXOhAvM_Tg"} text={"Донецкая государственная академическая филармония, "} /> 2020 г. 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=ol7eRjpkItA"} text={"«Король-олень» "} /> (Российский государственный оркестр кинематографии, 2013, 10+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=tH--w20NkYY"} text={"«12 месяцев» "} /> (Академический симфонический оркестр Московской филармонии, 2014 г., 7+)</li>
                                        <li><MyLink href={"https://ok.ru/video/921%E2%80%89590%E2%80%89434%E2%80%89334"} text={"«Соловей» "} /> (Академический симфонический оркестр Московской филармонии, 2013 г., 10 +)</li>
                                        <li><MyLink href={"https://ok.ru/video/985%E2%80%89527%E2%80%89683%E2%80%89614"} text={"«Русалочка» "} /> (Академический симфонический оркестр Московской филармонии, 2018 г., 7+)</li>
                                        <li><MyLink href={"https://ok.ru/video/325%E2%80%89621%E2%80%89123%E2%80%89614"} text={"«Волшебное кольцо» "} /> (Академический симфонический оркестр Московской филармонии, 2018 г., 7+)</li>
                                        <li><MyLink href={"https://ok.ru/video/2%E2%80%89404%E2%80%89780%E2%80%89607"} text={"«Малыш и Карлсон» "} /> (Академический симфонический оркестр Московской филармонии, 2010 г., 7+)</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=lqjrc9pIcq0"} text={"«Петя и волк» "} /> (Академический симфонический оркестр Самарской государственной филармонии, 2020 г., 7+)</li>
                                        <li><MyLink href={"https://ok.ru/video/348%E2%80%89728%E2%80%89330%E2%80%89782"} text={"«Гадкий утёнок» "} /> (Академический симфонический оркестр Московской филармонии, 2017 г., 6+)</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Театральные постановки с сайта Культура.РФ"}>
                                    <ul className='list'>
                                        <li>«451 по Фаренгейту» (Московский театр Et Cetera, 2012 год). <br />
                                            <MyLink href={"https://youtube.com/watch?v=08Iut_GNXsQ&t"} text={"Часть 1"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=Wm0Mv9ly-WI&t"} text={"Часть 2"} /></li>
                                        <li><MyLink href={"https://youtube.com/watch?v=p_0W0XTeYts&t"} text={"«Игроки» "} />(Театральное товарищество 814, 2005 год).</li>
                                        <li>«Три сестры» (Московский театр «Мастерская П. Н. Фоменко», 2006 год). <br />
                                            <MyLink href={"https://youtube.com/watch?v=YapV2y3h3sE&t"} text={"Часть 1"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=aAkxakhh5ys&"} text={"Часть 2"} /></li>
                                        <li><MyLink href={"http://culture.ru/movies/1696/tri-sestry"} text={"«Три сестры» "} />(Московский Художественный театр имени А. П. Чехова, 1984 год)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=S31UIRoXYWY"} text={"«Вишнёвый сад» "} />(Московский театр «Современник», 2006 год)</li>
                                        <li>«Господа Головлёвы» (МХТ имени А. П. Чехова, 2006 год). <br />
                                            <MyLink href={"https://youtube.com/watch?v=ufRmEv_cfdU"} text={"Часть 1"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=Q1k33zLXsaw"} text={"Часть 2"} /></li>
                                        <li><MyLink href={"https://youtube.com/watch?v=V7RenSKgP6Q"} text={"«Добрый человек из Сезуана» "} />(Московский театр на Таганке, 2010 год, 12+)</li>
                                        <li><MyLink href={"http://culture.ru/movies/1054/groza"} text={"«Гроза» "} />(Государственный академический Малый театр России, 1977 год, 16+)</li>
                                        <li><MyLink href={"http://culture.ru/movies/1718/dokhodnoe-mesto"} text={"«Доходное место» "} />(Государственный академический Малый театр России, 1981 год, 12+)</li>
                                        <li><MyLink href={"http://culture.ru/movies/1013/volki-i-ovcy"} text={"«Волки и овцы» "} />(Государственный академический Малый театр России, 1973 год, 12+)</li>
                                        <li><MyLink href={"http://culture.ru/movies/1526/beshenye-dengi"} text={"«Бешеные деньги» "} />(Государственный академический Малый театр России, 1978 год, 12+)</li>
                                        <li><MyLink href={"http://culture.ru/movies/1856/yunona-i-avos"} text={"«Юнона и Авось» "} />(Московский государственный театр «Ленком», 1983 год, 16+)</li>
                                        <li><MyLink href={"http://culture.ru/movies/857/bozhestvennaya-komediya"} text={"«Божественная комедия» "} />(Государственный академический Центральный театр кукол имени С. В. Образцова, 1973 год, 12+)</li>
                                        <li><MyLink href={"http://culture.ru/movies/1855/yarmarka-tsheslaviya"} text={"«Ярмарка тщеславия» "} />(Государственный академический Малый театр России, 1976 год, 16+)</li>
                                        <li><MyLink href={"http://culture.ru/movies/1769/idiot"} text={"«Идиот» "} />(Театр имени Евгения Вахтангова 1979 год, 16+)</li>
                                        <li><MyLink href={"http://culture.ru/movies/4467/mertvye-dushi"} text={"«Мертвые души» "} />(Театр Маяковского, 2012 год, 12+)</li>
                                        <li><MyLink href={"http://culture.ru/movies/876/korol-lir"} text={"«Король Лир» "} />(Государственный академический Малый театр России, 1982 год, 16+)</li>
                                        <li><MyLink href={"http://culture.ru/movies/1910/otcy-i-deti"} text={"«Отцы и дети» "} />(Государственный академический Малый театр России. 1974 год, 12+)</li>
                                        <li><MyLink href={"http://culture.ru/movies/1924/na-vsyakogo-mudreca-dovolno-prostoty"} text={"«На всякого мудреца довольно простоты» "} />(Государственный академический Малый театр России. Основная сцена, 1985 год, 12+)</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=t04wb4SYPio"} text={"«Лес» "} />(Государственный академический Малый театр России, 1975 год),</li>
                                        <li>«Правда — хорошо, а счастье лучше», (Государственный академический Малый театр России. Основная сцена, 2005 год). <br />
                                            <MyLink href={"https://tvkultura.ru/video/show/brand_id/31%E2%80%89523/episode_id/1%E2%80%89006%E2%80%89889/video_id/1%E2%80%89026%E2%80%89051/"} text={"Часть 1"} /> <br />
                                            <MyLink href={"https://tvkultura.ru/video/show/brand_id/31%E2%80%89523/episode_id/1%E2%80%89006%E2%80%89891/video_id/1%E2%80%89026%E2%80%89054/viewtype/picture/"} text={"Часть 2"} /></li>
                                        <li><MyLink href={"http://culture.ru/movies/1872/na-boikom-meste"} text={"«На бойком месте», "} />(Государственный академический Малый театр России, 1986 год),</li>
                                        <li>«Без вины виноватые», (Государственный академический Малый театр России, 1985 год). <br />
                                            <MyLink href={"https://youtube.com/watch?v=CZsGU-9Ttbw"} text={"1-я серия"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=7s_fwKWv6yg"} text={"2-я серия"} /></li>
                                        <li><MyLink href={"http://culture.ru/movies/1824/svetit-da-ne-greet"} text={"«Светит, да не греет» "} />(Государственный академический Малый театр России, 1972 год),</li>
                                        <li><MyLink href={"http://culture.ru/live/7370/talanty-i-poklonniki"} text={"«Таланты и поклонники» "} />(Государственный академический Малый театр России, 2019 год),</li>
                                        <li>«Бедность не порок» (Государственный академический Малый театр России, 2011 год). <br />
                                            <MyLink href={"https://youtube.com/watch?v=dnLBN3wRpOk"} text={"1-я серия"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=bd9IWINSB34"} text={"2-я серия"} /></li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Театральные постановки с сайтов театров"}>
                                    <ul className="list">
                                        <li>«Горе от ума» (Московский театр Современник, 2019 г., 1 и 2 часть, реж. Римас Туминас, 16+).<br />
                                            <MyLink href={"http://alltheater.ru/watch.php?vid=3e6031dc8"} text={"Часть 1"} /> <br />
                                            <MyLink href={"http://alltheater.ru/watch.php?vid=94e95616e"} text={"Часть 2"} /></li>
                                        <li>«Горе от ума» фильм-спектакль, (Государственный академический Малый театр, 1977, год 12+),<br />
                                            <MyLink href={"https://youtube.com/watch?v=ACPQjjarZa0"} text={"Часть 1"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=5IlDpQBrRLo"} text={"Часть 2"} /></li>
                                        <li><MyLink href={"https://youtube.com/watch?v=ZKVkn5Xzv_w"} text={"«Горе от ума» "} />(Государственный академический Малый театр, реж. С. Жерович, 12+),</li>
                                        <li>«Люди как люди» (Государственный Академический театр им. Е. Вахтангова, 2015 г, 1 и 2 часть, реж. В. Иванов, 16+).<br />
                                            <MyLink href={"http://alltheater.ru/watch.php?vid=60b55f6c6"} text={"Часть 1"} /> <br />
                                            <MyLink href={"http://alltheater.ru/watch.php?vid=638c5ad62"} text={"Часть 2"} /></li>
                                        <li><MyLink href={"https://youtube.com/watch?v=EPK0KolmQ8g"} text={"«Гамлет» "} />(Государственный академический Малый театр, 2016 год, 16+),</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=30YU8zeHARs"} text={"«Дон Жуан» "} />(Государственный академический Малый театр, 2016 год, 16+),</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=RvPiprqHNdM"} text={"«Не было и гроша, да вдруг алтын» "} />(Государственный академический Малый театр, 2012 год, 12+),</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=r4yYvB9hZag"} text={"«Последняя жертва» "} />(Государственный академический Малый театр, 12+),</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=TJqiKnGJfko"} text={"«На бойком месте» "} />(Государственный академический Малый театр, 2015 год),</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=ljYBgJaPwsI&t=69s"} text={"«Делец» "} />(Государственный академический Малый театр, 2005 год),</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=pzOXFNttDHY"} text={"«Ревизор» "} />(Государственный академический Малый театр, 12+),</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=yxMMSSM_X3M"} text={"«Дядя Ваня» "} />(Государственный академический Малый театр, 16+),</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=uIZoXohYa84"} text={"«Дядюшкин сон» "} />(Государственный академический Малый театр, 16+),</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=__iGPjsmXPI"} text={"«Чудаки» "} />(Государственный академический Малый театр, 16+),</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=ztK8Mv17BK4"} text={"«Волки и овцы» "} />(Государственный академический Малый театр, 12+),</li>
                                        <li>«Бедность не порок» (Государственный академический Малый театр, 2011 год, 12+).<br />
                                            <MyLink href={"https://youtube.com/watch?v=dnLBN3wRpOk"} text={"Действие 1"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=bd9IWINSB34&list=PLC94281965FBC7F22&index=2"} text={"Действие 2"} /></li>
                                        <li><MyLink href={"https://youtube.com/watch?v=jDdlbj8iGrk"} text={"«Близкие люди», "} />1 и 2 акты (Московский академический театр Сатиры, 2018 год, 16+),</li>
                                        <li><MyLink href={"https://youtube.com/watch?time_continue=2&v=wEXEId5Mvxc&feature=emb_logo"} text={"«Вишневый сад» "} />(МХАТ, 2012 год, 16+),</li>
                                        <li><MyLink href={"https://youtube.com/watch?time_continue=36&v=CtvfQsDuh9E&feature=emb_logo"} text={"«На всякого мудреца довольно простоты» "} />(Московский театр-студия под руководством Олега Табакова, 2007 год, 12+),</li>
                                        <li><MyLink href={"https://www.youtube.com/watch?v=0_4SMzfxqmU"} text={"«youtube.com/watch?v=0_4SMzfxqmU» "} />(Государственный академический Центральный театр кукол С.В. Образцова, 1973 год),</li>
                                        <li><MyLink href={"https://youtube.com/watch?v=7YknGxOkVYE"} text={"«Необыкновенный концерт» "} />(Государственный академический Центральный театр кукол С.В. Образцова),</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Мюзиклы и музыкальные спектакли сайта Культура.РФ"}>
                                    <ul className="list">
                                        <li><MyLink href={"https://www.culture.ru/movies/1856/yunona-i-avos"} text={"«Юнона и Авось», "} />Московский государственный театр «Ленком Марка Захарова», 1983 год,</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/4034/o-milyi-drug"} text={"«О, милый друг!..», "} />Московский театр «У Никитских ворот», 2017 год,</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3878/shinel-palto"} text={"«Шинель-пальто», "} />Московский театр «Школа современной пьесы», 2016 год,</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1851/moi-ostrov-sinii"} text={"«Мой остров синий…», "} />Московский музыкально-драматический цыганский театр «Ромэн», 1972 год,</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/3877/mademauzel-nitush"} text={"«Мадемаузель Нитуш», "} />Государственный академический театр имени Евгения Вахтангова, 2016 год,</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Опера"}>
                                    <ul className="list">
                                        <li><MyLink href={"https://www.culture.ru/movies/1508/karmen"} text={"«Кармен» "} />(Государственный академический Большой театр России, 1982 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1521/boris-godunov"} text={"«Борис Годунов» "} />(Государственный академический Большой театр России) 1978 год</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1843/sevilskii-ciryulnik"} text={"«Севильский цирюльник» "} />(Государственный академический Большой театр России, 1964 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1510/ivan-susanin"} text={"«Иван Сусанин» "} />(Государственный академический Большой театр России, 1979 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1507/knyaz-igor"} text={"«Князь Игорь» "} />(Государственный академический Большой театр России, 1992 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1950/kamennyi-gost"} text={"«Каменный гость "} />«(Государственный академический Большой театр России, 1979 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1912/otello"} text={"«Отелло» "} />(Государственный академический Большой театр России, 1979 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1907/payacy"} text={"«Паяцы» "} />(Государственный академический Большой театр России, 1985 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1774/zori-zdes-tikhie"} text={"«Зори здесь тихие…» "} />(Государственный академический Большой театр России, 1981 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1817/khovanshina"} text={"«Хованщина» "} />(Мариинский театр, 1992 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/4464/knyaz-igor"} text={"«Князь Игорь» "} />(Театр «Новая опера» им. Е. В. Колобова, 2012 год)</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Оперетта сайта Культура.РФ"}>
                                    <ul className="list">
                                        <li><MyLink href={"https://www.culture.ru/movies/1741/melodii-lyubvi"} text={"«Мелодии любви», "} />Свердловский государственный академический театр музыкальной комедии, телеспектакль, 1974 год</li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Балет сайта Культура.РФ"}>
                                    <ul className="list">
                                        <li><MyLink href={"https://www.culture.ru/movies/948/karmen-syuita"} text={"«Кармен-сюита» "} />(Государственный академический Большой театр России, 1978 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1506/lebedinoe-ozero"} text={"«Лебединое озеро» "} />(Государственный академический Большой театр России, 1983 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1187/zhizel"} text={"«Жизель» "} />(Государственный академический Большой театр России, 1984 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1543/anna-karenina"} text={"«Анна Каренина» "} />(Государственный академический Большой театр России, 1974 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1491/anyuta"} text={"«Анюта» "} />(Государственный академический Большой театр России, 1994 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1724/don-kikhot"} text={"«Дон Кихот "} />(Государственный академический Большой театр России, 1994 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/873/spartak"} text={"«Спартак» "} />(Государственный академический Большой театр России, 1984 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1954/ivan-groznyi"} text={"«Иван Грозный» "} />(Государственный академический Большой театр России, 1990 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1529/bayaderka"} text={"«Баядерка» "} />(Мариинский театр, 1977 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1707/vityaz-v-tigrovoi-shkure"} text={"«Витязь в тигровой шкуре» "} />(Мариинский театр, 1985 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1933/sobor-parizhskoi-bogomateri"} text={"«Собор Парижской Богоматери» "} />(Мариинский театр, 1978 год)</li>
                                        <li><MyLink href={"https://www.culture.ru/movies/1744/makbet"} text={"«Макбет» "} />(Театр «Кремлёвский балет, 1994 год)</li>
                                    </ul>
                                </Accordion>
                                <h3 className="content__caption --place-tab">
                                    Тематические подборки театральных постановок
                                </h3>
                                <Accordion className='--type-outline --icon-caption-plus' title={"К 75-летию Победы"}>
                                    <ul className="list">
                                        <li>«Вечно живые» (театр Современник 1976 год). <br />
                                            <MyLink href={"https://youtube.com/watch?v=hV9DcGoeZ_A"} text={"Часть 1"} /> <br />
                                            <MyLink href={"https://youtube.com/watch?v=6fanDCOEud"} text={"Часть 2"} /> </li>
                                        <li><MyLink href={"http://culture.ru/movies/1567/vasilii-terkin"} text={"«Василий Теркин» "} /> (моно спектакль Олег Табаков, 1979 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/927/vasilii-tyorkin"} text={"«Василий Тёркин» "} /> (Государственный академический театр им. Моссовета 1973),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1032/u-voiny-ne-zhenskoe-lic"} text={"«У войны не женское лицо» "} /> (Омский государственный академический театр драмы 1988 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1513/zhivi-i-pomni"} text={"«Живи и помни» "} /> (Московский драматический театр «СФЕРА» 1987 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1774/zori-zdes-tikhie"} text={"«Зори здесь тихие…» "} /> (Государственный академический Большой театр России 1981 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/944/iz-zapisok-lopatina"} text={"«Из записок Лопатина» "} /> (театр «Современник» 1975 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1010/my-ne-uvidimsya-s-toboi"} text={"«Мы не увидимся с тобой» "} /> (театр «Современник» 1981 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1485/1945"} text={"1945 "} /> (театр «Современник» 1988 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1795/volokolamskoe-shosse"} text={"«Волоколамское шоссе» "} /> (Московский художественный академический театр имени М. Горького 1984 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1826/sashka"} text={"«Сашка» "} /> (государственный академический театр им. Моссовета 1983 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1911/otpusk-po-raneniyu"} text={"«Отпуск по ранению» "} /> (театр НА Малой Бронной 1983 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1528/belaya-palatka"} text={"«Белая палатка» "} /> (театр Российской Армии 1985 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/4405/solovinaya-noch"} text={"«Соловьиная ночь» "} /> (театр Российской Армии 2015 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1524/bereg"} text={"«Берег» "} /> (государственный академический Малый театр России 1980 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1720/dorogoi-bessmertiya"} text={"«Дорогой бессмертия» "} /> (театр-фестиваль «БАЛТИЙСКИЙ ДОМ» 1957 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1693/barabanshica"} text={"«Барабанщица» "} /> (театр Российской Армии 1975 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/892/zavtra-byla-voina"} text={"«Завтра была война» "} /> (театр Маяковского 1990 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/4607/veselyi-soldat"} text={"«Веселый солдат» "} /> (Московский губернский театр 2019 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/3380/bud-zdorov-shkolyar"} text={"«Будь здоров, школяр!» "} /> (Московский театр «У НИКИТСКИХ ВОРОТ» 2010 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1023/vozvrashenie"} text={"«Возвращение» "} /> (Новосибирский академический молодежный театр «ГЛОБУС» 2010 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1036/poslednee-pismo"} text={"«Последнее письмо» "} /> (Московский театр «ЭРМИТАЖ» 2011 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/1003/marino-pole"} text={"«Марьино поле» "} /> (театр для детей и молодежи «Свободное пространство» 2010 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/3446/nash-klass"} text={"«Наш класс» "} /> (Кемеровский областной театр драмы имени А. В. Луначарского 2015 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/969/usvyatskie-shlemonoscy"} text={"«Усвятские шлемоносцы» "} /> (Самарский академический театр драмы им. М. Горького 1982 год),</li>
                                        <li><MyLink href={"http://culture.ru/movies/951/i-v-sibiri-sakura-cvetet"} text={"«И в Сибири сакура цветет…» "} /> (Минусинский драматический театр 2011 год)</li>
                                    </ul>
                                </Accordion>
                            </Accordion>
                            <Accordion title={"Экскурсии"}>
                                <h3 className="content__caption --place-tab">
                                    Экскурсии в музеи
                                </h3>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №1"}>
                                    <ol className="list --type-number">
                                        <li>
                                            <p><b>Государственный центральный музей современной истории России</b></p>
                                            <MyLink href={"http://www.sovrhistory.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://vm.sovrhistory.ru/sovremennoy-istorii-rossii"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/11143/gosudarstvennyi-centralnyi-muzei-sovremennoi-istorii-rossii"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Музеи Московского Кремля</b></p>
                                            <MyLink href={"http://kreml.ru/"} text={"Основной сайт музея-заповедника"} /> <br />
                                            <MyLink href={"http://kreml.ru/exhibitions/virtual-exhibitions/"} text={"Виртуальные экскурсии"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/4200/muzei-moskovskogo-kremlya"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный исторический музей</b></p>
                                            <MyLink href={"https://shm.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://catalog.shm.ru/"} text={"Электронный каталог, включающий 65 виртуальных экскурсий"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/10124/gosudarstvennyi-istoricheskii-muzei"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственная Третьяковская галерея</b></p>
                                            <MyLink href={"http://tretyakovgallery.ru/"} text={"Основной сайт галереи"} /> <br />
                                            <MyLink href={"http://tretyakovgallery.ru/exhibitions/?type=virtualnye-vystavki"} text={"Виртуальные выставки"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/10078/gosudarstvennaya-tretyakovskaya-galereya"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный музей изобразительных искусств им. А. С. Пушкина</b></p>
                                            <MyLink href={"http://pushkinmuseum.art/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://virtual.arts-museum.ru/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/12241/gosudarstvennyi-muzei-a-s-pushkina"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный музей архитектуры имени А. В. Щусева</b></p>
                                            <MyLink href={"http://muar.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://vma.muar.ru/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/7985/gosudarstvennyi-nauchno-issledovatelskii-muzei-arkhitektury-imeni-a-v-shuseva"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p>
                                                <b>Государственный музей нового западного искусства</b> <br />
                                                Виртуальная реконструкция Государственного музея нового западного искусства – первого в мире музея современного искусства, существующего исключительно в интернет-пространстве. Главной гордостью коллекции стали более 800 оцифрованных картин Моне, Сезанна, Гогена, Дега, Ренуара, Ван Гога, Матисса, Пикассо и других живописцев, тысяча объектов графики и 106 скульптур. Все экспонаты представлены в интернете в высоком качестве без ограничений просмотра и доступа. Это совместный проект Министерства культуры Российской Федерации, Государственного Эрмитажа и Государственного музея изобразительных искусств имени А. С. Пушкина.
                                            </p>
                                            <MyLink href={"http://newestmuseum.ru/history/virtual/index.php"} text={"Виртуальные реконструкции"} /> <br />
                                            <MyLink href={"http://culture.ru/institutes/19927/gosudarstvennyi-muzei-novogo-zapadnogo-iskusstva-gmnzi"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный музей искусства народов Востока</b></p>
                                            <MyLink href={"http://orientmuseum.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://my.matterport.com/show/?m=2GCapTFigVU"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/6596/gosudarstvennyi-muzei-iskusstva-narodov-vostoka"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Музей Победы</b></p>
                                            <MyLink href={"https://victorymuseum.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://victorymuseum.ru/projects/onlayn-programma-dlya-shkolnikov/"} text={"Онлайн-программа для школьников"} /> <br />
                                            <MyLink href={"https://victorymuseum.ru/newvtour/GLAV.html"} text={"Виртуальный тур"} /> <br />
                                            <MyLink href={"https://victorymuseum.ru/excursions/online"} text={"Онлайн-экскурсия по музею"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/10126/muzei-pobedy"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Всероссийский художественный научно-реставрационный центр им. академика И. Э. Грабаря</b></p>
                                            <MyLink href={"http://www.grabar.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://grb.vm.culture.ru/main/"} text={"Виртуальный тур"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/13890/vserossiiskii-khudozhestvennyi-nauchno-restavracionnyi-centr-im-akademika-i-e-grabarya"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный центральный музей кино</b></p>
                                            <MyLink href={"http://www.museikino.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://www.museikino.ru/exposition/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/10337/gosudarstvennyi-centralnyi-muzei-kino"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Музей-панорама «Бородинская битва»</b></p>
                                            <MyLink href={"http://1812panorama.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://new.newpaintart.ru/#intro"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/2776/muzei-panorama-borodinskaya-bitva"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный биологический музей им. К. А. Тимирязева</b></p>
                                            <MyLink href={"http://gbmt.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://gbmt.ru/ru/exhibition/?arFilter_ff%5BNAME%5D=&arFilter_pf%5BTYPE%5D=523&set_filter=Показать&set_filter=Y"} text={"Виртуальные выставки"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/11454/gosudarstvennyi-biologicheskii-muzei-im-k-a-timiryazeva"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Исторический парк «Россия – Моя история» (павильон 57 на ВДНХ)</b></p>
                                            <MyLink href={"https://myhistorypark.ru/?city=msk"} text={"Основной сайт исторического парка"} /> <br />
                                            <MyLink href={"https://myhistorypark.ru/poster/edinoe-raspisanie-nashikh-aktivnostey-online/Виртуальная%20экскурсия"} text={"Программа онлайн-мероприятий"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/33945/istoricheskii-park-rossiya-moya-istoriya"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный Русский музей (Санкт-Петербург)</b></p>
                                            <MyLink href={"https://www.hermitagemuseum.org/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://www.hermitagemuseum.org/wps/portal/hermitage/panorama/virtual_visit/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/1485/gosudarstvennyi-ermitazh"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный Эрмитаж (Санкт-Петербург)</b></p>
                                            <MyLink href={"http://www.gmir.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://www.gmir.ru/virtual/gmirpano/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/1485/gosudarstvennyi-ermitazh"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный музей истории религии (Санкт-Петербург)</b></p>
                                            <MyLink href={"http://www.gmir.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"http://www.gmir.ru/virtual/gmirpano/"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/10348/gosudarstvennyi-muzei-istorii-religii"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Российский этнографический музей (Санкт-Петербург)</b></p>
                                            <MyLink href={"https://ethnomuseum.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://ethnomuseum.ru/posetitelyu/virtualnye-tury"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/741/rossiiskii-etnograficheskii-muzei"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Государственный музей-заповедник «Царское село» (Санкт-Петербург)</b></p>
                                            <MyLink href={"https://tzar.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://tzar.ru/news/1584700924"} text={"Онлайн-трансляции экскурсий"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/10130/muzei-zapovednik-carskoe-selo"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                        <li>
                                            <p><b>Центральный музей связи имени А.С. Попова (Санкт-Петербург)</b></p>
                                            <MyLink href={"https://www.rustelecom-museum.ru/"} text={"Основной сайт музея"} /> <br />
                                            <MyLink href={"https://www.rustelecom-museum.ru/visit/plan/virtualnyy-muzey"} text={"Виртуальный музей"} /> <br />
                                            <MyLink href={"https://www.culture.ru/institutes/5380/centralnyi-muzei-svyazi-imeni-a-s-popova"} text={"Дополнительная информация на портале КУЛЬТУРА.РФ"} />
                                        </li>
                                    </ol>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №2"}>
                                    Музеи Ярославля, Екатеринбурга, Великого Новгорода, Тулы, Петрозаводска, Ставрополя, Нижнего Тагила, Красноярска и других городов России <MyLink href={"https://www.culture.ru/museums/institutes/hasVirtualTours-true/location-russia"} text={"приглашают на виртуальные экскурсии "} /> по своим экспозициям.
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №3"}>
                                    Проект #Москвастобой Комитета по туризму города Москвы представляет подборку <MyLink href={"https://www.youtube.com/channel/UC-By8osIJoeasNbRBBqF6Jg/videos"} text={"видеоэкскурсий "} /> по музеям, заповедникам, паркам, усадьбам и улицам столицы.
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №4"}>
                                    <p>
                                        С помощью портала Google Art & Culture можно совершить онлайн-экскурсии по следующим московским музеям:
                                    </p>
                                    <ul className="list">
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/мемориальный-музей-космонавтики/rgHMfWhWLKyUNw?hl=ru&sv_lng=37.63976914353529&sv_lat=55.82239811936253&sv_h=192.58004711048775&sv_p=-0.7862201737231516&sv_pid=ofYJCdeLk-vDFw_aDwsRyQ&sv_z=2.634174518797277"} text={"Музей космонавтики"} /></li>
                                        <li><MyLink href={"http://www.mgomz.ru/posetitelyam/virtualnyiy-muzey"} text={"Музей-заповедник «Коломенское»"} /></li>
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/государственный-дарвиновский-музей/cgHHzqu9QCKRHA?sv_lng=37.56147879162037&sv_lat=55.69070324557899&sv_h=0&sv_p=0&sv_pid=0qT83UdxM5bqXNk3ar0Eig&sv_z=1.0000000000000002"} text={"Государственный Дарвиновский музей"} /></li>
                                        <li><MyLink href={"https://amshilov.ru/3d-tur/"} text={"Галерея Александра Шилова"} /></li>
                                        <li><MyLink href={"http://domgogolya.ru/museum/"} text={"Дом Н. В. Гоголя"} /></li>
                                        <li><MyLink href={"http://mpbb.ru/data/vtours/borodino/index.html?lp=p2&lang=ru"} text={"Музей-панорама «Бородинская битва»"} /></li>
                                        <li><MyLink href={"http://www.dommuseum.ru/museum/memorial"} text={"Дом-музей Марины Цветаевой"} /></li>
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/московский-государственный-музей-с-а-есенина/YQFB9eNOEvGG4g?sv_lng=37.63073835218731&sv_lat=55.7265990683157&sv_h=150&sv_p=0&sv_pid=eaIbD68tW4hh5JvVjEdTEQ&sv_z=1"} text={"Московский государственный музей С. А. Есенина"} /></li>
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/музей-михаила-булгакова/sQFMSXyjKlbWHQ?sv_lng=37.59398726302314&sv_lat=55.76704358118165&sv_h=240.24711884855654&sv_p=-14.743692418285761&sv_pid=zBjjOo37cpcwqI4N4rMyzg&sv_z=1.0000000000000002"} text={"Музей Михаила Булгакова"} /></li>
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/музей-центр-преодоление-им-н-а-островского/GAGKwRug7NtHpA?sv_lng=37.60675791547601&sv_lat=55.76419364437781&sv_h=264.2662093082808&sv_p=-17.686462830135838&sv_pid=JIQAVDyJW1kDSjZMmTvT5g&sv_z=1.0000000000000002"} text={"Государственный музей – культурный центр «Интеграция» имени Н. А. Островского"} /></li>
                                        <li><MyLink href={"https://artsandculture.google.com/streetview/государственный-музей-а-с-пушкина/iwHnd_IQrs-80g?sv_lng=37.59765120937985&sv_lat=55.74355785445232&sv_h=150&sv_p=0&sv_pid=mUEeSNVtPCW6sshf2KXskw&sv_z=1.0000000000000002"} text={"Государственный музей А. С. Пушкина"} /></li>
                                    </ul>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №5"}>
                                    Ознакомиться с музейными экспозициями можно на портале <MyLink href={"https://union.catalog.mos.ru/"} text={"«Музейная Москва онлайн». "} /> Здесь для пользователей доступны почти 40 тысяч экспонатов и 148 виртуальных выставок.
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Вариант №6"}>
                                    <p>
                                        Школьные музеи образовательных организаций города Москвы приглашают на виртуальные экскурсии:
                                    </p>
                                    <ol className="list --type-number">
                                        <li>
                                            <p>ГБПОУ «Первый Московский Образовательный Комплекс»</p>
                                            <MyLink href={"https://virtual-tours.1-mok.ru/muzey_kostyuma/"} text={"Музей истории костюма"} /> <br />
                                            <MyLink href={"https://virtual-tours.1-mok.ru/muzey_iskusstv/"} text={"Музей искусств"} />
                                        </li>
                                        <li>
                                            <p>
                                                ГБОУ Школа № 1476
                                            </p>
                                            <MyLink href={"https://gym1476.mskobr.ru/nashi_muzei/virtual_naya_e_kskursiya_po_istoriko-kraevedcheskomu_muzeyu_voshozhdenie_k_istokam/"} text={"Историко-краеведческий музей «Восхождение к истокам»"} />
                                        </li>
                                        <li>
                                            <p>
                                                ГБОУ Школа № 587
                                            </p>
                                            <MyLink href={"https://sch587.mskobr.ru/main_galleries/virtual_nyj_muzej_hleba"} text={"Музей хлеба"} />
                                        </li>
                                        <li>
                                            <p>
                                                ГБОУ Школа № 1394 «На набережной»
                                            </p>
                                            <MyLink href={"https://izi.travel/ru/browse/4cbb9f95-a306-4b95-a574-605e3617c55c?lang=ru"} text={"Школьный палеонтологический музей"} />
                                        </li>
                                        <li>
                                            <p>
                                                ГБОУ Школа № 1530 «Школа Ломоносова»
                                            </p>
                                            <MyLink href={"https://gym1530.mskobr.ru/nashi_muzei/muzej_istorii_vychislitel_noj_tehniki"} text={"Музей истории вычислительной техники"} /> <br />
                                            <MyLink href={"http://p919768q.beget.tech/"} text={"Виртуальная экскурсия"} />
                                        </li>
                                        <li>
                                            <p>
                                                ГБОУ ДО «Центр творческого развития и музыкально-эстетического образования детей и юношества «Радость»
                                            </p>
                                            <MyLink href={"https://radost.mskobr.ru/add_edu/muzej_russkogo_narodnogo_tvorchestva_tradicij_i_byta_centra_radost/obwie_svedeniya/"} text={"Музей русского народного творчества, традиций и быта"} /> <br />
                                            <MyLink href={"https://radost.mskobr.ru/add_edu/muzej_istorii_centra_radost_i_muzykal_noj_kul_tury/obwie_svedeniya/"} text={"Музей музыкальной культуры и истории Центра «Радость»"} />
                                        </li>
                                    </ol>
                                </Accordion>
                                <h3 className="content__caption --place-tab">
                                    Google: виртуальные выставки и интерактивные туры
                                </h3>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Google Arts & Culture"}>
                                    <p>
                                        <MyLink href={"https://artsandculture.google.com/"} text={"Глобальный интерактивный образовательный проект,"} />
                                        который объединяет в одном месте оцифрованное культурное и историческое наследие планеты и дает к нему доступ интернет-пользователям во всем мире. Google Arts & Culture также доступно в мобильной версии для iOS и Android.
                                    </p>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Экскурсии по ведущим музеям мира на платформе Google Arts & Culture"}>
                                    <p>
                                        На <MyLink href={"https://artsandculture.google.com/partner?hl=en"} text={"платформе "} /> доступны коллекции крупнейших международных и российских музеев: <br />
                                        - <MyLink href={"https://artsandculture.google.com/streetview/государственный-музей-а-с-пушкина/iwHnd_IQrs-80g?sv_lng=37.59765120937985&sv_lat=55.74355785445232&sv_h=146.2330932617188&sv_p=-0.37322235107421875&sv_pid=mUEeSNVtPCW6sshf2KXskw&sv_z=0.14802264361870265"} text={"Государственный музей изобразительных искусств имени А.С. Пушкина, "} /> <br />
                                        - <MyLink href={"https://artsandculture.google.com/partner/the-state-tretyakov-gallery"} text={"Третьяковская галерея, "} /> <br />
                                        - <MyLink href={"https://artsandculture.google.com/streetview/the-state-russian-museum-st-petersburg/dAGBydNbKO5HZg?sv_lng=30.3315453&sv_lat=59.9386266&sv_h=322.7726375401773&sv_p=8.866305992446726&sv_pid=aIVeVQE00A4nQ__wYJpWdg&sv_z=1.0000000000000004&fbclid=IwAR3nuG2oU8OeVJ-Ld7m4AYyg4UjBzyoNi8XGcH5kUaZ_PtvdibAlgjNSTOE"} text={"Русский музей в Санкт-Петербурге, "} /> <br />
                                        - <MyLink href={"https://artsandculture.google.com/partner/the-state-hermitage-museum"} text={"Государственный Эрмитаж, "} /> <br />
                                        - <MyLink href={"https://artsandculture.google.com/partner/memorial-museum-of-cosmonautics?hl=en"} text={"Государственный музей истории космонавтики, "} /> <br />
                                        - <MyLink href={"https://artsandculture.google.com/partner/state-darwin-museum?hl=en"} text={"Государственный Дарвиновский музей "} /> и многие другие. <br />
                                        Возможен просмотр культурных учреждений как по странам, так и по отдельным <MyLink href={"https://artsandculture.google.com/partner?hl=en"} text={"коллекциям."} />
                                    </p>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Виртуальная экскурсия по Международной космической станции на платформе Google Arts & Culture"}>
                                    <p>
                                        <MyLink href={"https://artsandculture.google.com/streetview/international-space-station/WgFE9b04h8A0ww?sv_lng=-95.08533878466375&sv_lat=29.56040149436038&sv_h=66.24&sv_p=-13.299999999999997&sv_pid=2Lx7fxjE5hcAAAQvxgbyLQ&sv_z=1"} text={"Виртуальная экскурсия "} />в формате 3D на борту МКС
                                    </p>
                                </Accordion>
                                <Accordion className='--type-outline --icon-caption-plus' title={"Экскурсии по знаковым достопримечательностям мира на Google картах"}>
                                    <p>
                                        <MyLink href={"https://www.google.com/maps/about/treks/#/grid"} text={"Виртуальные экскурсии "} />в формате 3D по мировым достопримечательностям, доступны на разных языках
                                    </p>
                                </Accordion>
                            </Accordion>
                        </Accordion>
                    </section>
                    <section className={tab === 4 ? "tab__section --active" : "tab__section"}>
                        <div className="iframe">
                            <iframe title={"Flag"} className="iframe__item"
                                src="https://www.youtube.com/embed/PH_fwcvwsOM" />
                        </div>
                    </section>
                    <section className={tab === 5 ? "tab__section --active" : "tab__section"}>
                        <h3 className='content__caption --place-tab'>Как завоевать доверие ученика и установить с ним эмоциональный контакт?</h3>
                        <p>
                            <b>Во-первых, </b>
                            быть готовым отвечать на неудобные вопросы, не бояться признать, что не знаете ответ и взять паузу на подготовку.
                        </p>
                        <p>
                            <b>Во-вторых, </b>
                            создать пространство для диалога — обрисовать разные мнения на вопрос и обязательно озвучить свою точку зрения, основанную на личном опыте.
                        </p>
                        <p>
                            <b>В-третьих, </b>
                            благодарите ребёнка за вопрос! Ведь каждый вопрос — это всегда возможность узнать больше друг о друге.
                        </p>
                        <Accordion title={"Образование / профориентация"}>
                            <ol className="list --type-number">
                                <li>
                                    <h4>Говорят, искусственный интеллект в ближайшие годы заменит множество профессий. Как выбрать специальность, которая будет востребована и в будущем?</h4>
                                    <p>
                                        При любом развитии человеческой цивилизации человек должен выбирать специальность, к которой у него есть призвание. Специалисты прогнозируют, что в будущем человеку в течение жизни придется неоднократно менять профиль своей деятельности. Для начала можно порекомендовать ребятам познакомиться с <MyLink href={"https://new.atlas100.ru/"} text={"Атласом новых профессий."} />
                                    </p>
                                </li>
                                <li>
                                    <h4>Как выбрать хороший университет, чтобы потом не жалеть о своем выборе?</h4>
                                    <p>
                                        Для начала – посещать мероприятия проекта <MyLink href={"https://events.educom.ru/"} text={"«Субботы московского школьника»,"} /> события в рамках <MyLink href={"http://profil.mos.ru/"} text={"предпрофессионального образования,"} /> мероприятия вузов, о которых можно узнать из анонсов на их официальных сайтах. После того, как общее направление дальнейшего образования выбрано, следует серьёзно исследовать, куда поступать.
                                    </p>
                                </li>
                                <li>
                                    <h4>Можно ли построить карьеру без высшего образования?</h4>
                                    <p>
                                        В некоторых областях можно быть успешным и без высшего образования. Но следует понимать, что во многих сферах наличие даже самых совершенных навыков без высшего образования не даёт возможности развиваться, подниматься по карьерной лестнице или претендовать на руководящую должность.
                                    </p>
                                </li>
                                <li>
                                    <h4>Колледж — это такая замена университету для тех, кто боится сдавать ЕГЭ?</h4>
                                    <p>
                                        Нет, это не замена вуза для тех, кто боится сдавать ЕГЭ. Более того, если студент колледжа решит продолжить обучение в вузе, ему также необходимо будет сдать ЕГЭ. Однако современный колледж – это образовательная организация, ориентированная на запросы рынка труда по конкретным компетенциям. Получив среднее профессиональное образование, ты получаешь возможность быть востребованным на рынке труда.
                                    </p>
                                </li>
                                <li>
                                    <h4>Зачем ходить на «Субботы московского школьника»?</h4>
                                    <p>
                                        Посещение мероприятий проекта «Субботы московского школьника» может помочь определиться с будущей профессией, выбрать вуз, приобрести первичные профессиональные знания и навыки или весело и с пользой провести выходные, посетив интерактивные лекции, побывав на мастер-классах, поучаствовав в квестах и других увлекательных активностях на разных площадках города (в музеях, парках, выставках, воинских частях, ТВ-студии, арт-площадках и других объектах проекта). Важно отметить, что посещение проекта «Субботы московского школьника» – дело сугубо добровольное! Но если захочешь попробовать, то познакомиться с календарем мероприятий и зарегистрироваться можно на <MyLink href={"https://events.educom.ru/"} text={"сайте."} />  Кстати, в период дистанционного обучения все мероприятия в рамках проекта проходят в онлайн формате.
                                    </p>
                                </li>
                                <li>
                                    <h4>Есть ли разница в образовании в государственных и негосударственных вузах?</h4>
                                    <p>
                                        Разницы между образованием в государственных и негосударственных ВУЗах нет. Любой ВУЗ, который гарантирует получение диплома государственного образца, реализует образовательные программы в соответствии с установленными государством требованиями. Поэтому с точки зрения содержания – образование в государственном и негосударственном ВУЗе схожи.
                                    </p>
                                </li>
                                <li>
                                    <h4>Можно ли получить хорошее школьное образование, не посещая кружки и секции?</h4>
                                    <p>
                                        Да, это возможно. Освоение программ дополнительного образования дело сугубо добровольное. Однако посещение кружков даёт возможность попробовать себя в разных сферах, приобрести необходимые для жизни умения, познакомиться с современными профессиями, расширить знания в различных областях или научиться проводить исследования. Занятия в кружках позволяют проявить себя в спорте, науке, а победы в различных соревнованиях, олимпиадах и конкурсах помогают получить дополнительные баллы при поступлении в вузы.
                                    </p>
                                </li>
                                <li>
                                    <h4>Родители не поддерживают мой выбор специальности. Как их переубедить?</h4>
                                    <p>
                                        Выбор будущей профессии и специальности – очень важный и ответственный этап в жизни. <br />
                                        Определи перечень учебных заведений, которые готовят специалистов выбранной тобой и смежных областей. Все московские вузы и колледжи проводят дни открытых дверей, а также мастер-классы, открытые интерактивные лекции, тренинги в рамках проекта <MyLink href={"https://school.moscow/projects/events"} text={"«Субботы московского школьника»."} /> <br />
                                        Предложи родителям сходить вместе на мероприятия, чтобы больше узнать о специфике подготовки и будущей профессиональной деятельности. <br />
                                        Расскажи родителям, почему тебя привлекает именно эта специальность, какими профессиональными навыками тебе предстоит овладеть и какие навыки, необходимые для овладения выбранной профессией, у тебя уже есть. Почему тебе интересна выбранная специальность. Как ты видишь своё профессиональное будущее.
                                    </p>
                                </li>
                                <li>
                                    <h4>Хочу завести свой блог, но мама против. Говорит, что это глупости и не стоит тратить время. Она права? Как мне её переубедить?</h4>
                                    <p>
                                        Работа над созданием собственного блога может стать фундаментом для формирования востребованных и необходимых для жизни умений: <br />
                                        — сбор информации и системное мышление; <br />
                                        — умение мыслить «результатами» и «процессами»; <br />
                                        — цифровая грамотность, которая включает в себя знания и умения, необходимые для безопасного и эффективного использования цифровых технологий и ресурсов интернета. <br />
                                        В масштабном исследовании «Форсайт компетенций 2030» эксперты Сколково отмечают, что владение данными навыками позволяет повысить эффективность деятельности, в том числе учебной.
                                    </p>
                                </li>
                                <li>
                                    <h4>Очень переживаю перед ЕГЭ. Действительно ли так страшно его сдавать? Что будет, если я все завалю?</h4>
                                    <p>
                                        Способность предъявить результаты своего труда и обучения является важным качеством современного человека, и именно оно выходит на первый план во время экзамена. Поэтому мы много тренируемся, пишем пробные работы, участвуем в олимпиадах. Кроме знаний успех на экзамене зависит от грамотного распределения своего времени и планирования. Чтобы снизить тревожность, составь список того, что тебе необходимо сделать перед экзаменом. Обязательно учти необходимость соблюдать режим дня. Во время экзамена сконцентрируйся на заданиях и не забывай следить за временем. <br />
                                        Помни, что экзамен оценивает только уровень знаний по конкретному предмету, его можно пересдать. Какими бы ни были результаты экзамена, ты всегда сможешь выбрать путь для достижения своей цели.
                                    </p>
                                </li>
                                <li>
                                    <h4>Я не хочу поступать в вуз сразу после 11 класса. Могу ли я взять год «на подумать»?</h4>
                                    <p>
                                        Почему ты не хочешь поступать в вуз сразу после школы? Может быть, еще не выбрал будущую специальность? Может быть, хочется немного отдохнуть после тяжелой подготовки к экзаменам? Не устраивают результаты экзаменов, и хочешь сдать их еще раз? Ты выбрал специальность, получить которую можно в колледже? Это далеко не исчерпывающий перечень причин не поступать в вуз сразу после школы. Год «на подумать» пройдет очень быстро, чтобы через год не столкнуться с теми же вопросами, нужно решить, чем ты будешь этот год заниматься. Можно устроиться на работу, пойти учиться в колледж и овладеть рабочей специальностью, запланировать посещение мастер-классов и тренингов, чтобы овладеть навыками, полезными для будущей учебной и профессиональной деятельности. Данное решение необходимо принимать вместе с родителями.
                                    </p>
                                </li>
                                <li>
                                    <h4>Как определиться с профессией, если пока я себя не вижу ни в какой специальности?</h4>
                                    <p>
                                        Выбор будущей профессии — очень важный и ответственный шаг в жизни. Далеко не каждый сразу знает, кем хочет стать в будущем. И это нормально. Подумай, какие предметы тебе больше всего нравятся, какие дополнительные занятия ты посещаешь или хотел бы посещать, что тебе интересно, чем тебе больше всего нравится заниматься в свободное от уроков время. Посещение мероприятий проекта «Субботы московского школьника» может помочь определиться с выбором не только будущей профессии, но и высшего учебного заведения. В рамках данного проекта ты сможешь побывать в разных вузах и на предприятиях, посетить интерактивные лекции, побывать на мастер-классах и тренингах, поучаствовать в квестах и других увлекательных активностях на разных площадках города (в музеях, парках, выставках, воинских частях, ТВ-студии, арт-площадках и других объектах проекта). Согласись, это не только познавательно и полезно, но и достаточно увлекательно и весело. Более того, провести интересно свой выходной ты можешь в компании друзей или родителей. <br />
                                        Важно отметить, что посещение проекта «Субботы московского школьника» — дело сугубо добровольное! Но если захочешь попробовать, то познакомиться с календарем мероприятий и зарегистрироваться можно на сайте «Школа большого города».
                                        Кроме того, с профессиональным определением могут помочь всевозможные профориентационные диагностики, которые ты можешь пройти самостоятельно на специализированных профориентационных онлайн-ресурсах, а можешь посетить психолога и пройти диагностику вместе с ним.
                                    </p>
                                </li>
                                <li>
                                    <h4>Кто определяет количество бюджетных мест в заведениях высшего профессионального образования? Как повысить свои шансы на бесплатное обучение? Какие существуют способы получить дополнительные баллы для поступления вуз?</h4>
                                    <p>
                                        Количество бюджетных мест в высших учебных заведениях ежегодно утверждается Министерством науки и высшего образования Российской Федерации — это определено Законом об образовании. Количество бюджетных мест всегда пропорционально количеству всех выпускников школ страны. Равно оно приблизительно половине одиннадцатиклассников, которые выходят из стен Школы именно в этот год. Однако это совсем не значит, что каждый второй выпускник школы в итоге поступит на бюджетное место в вуз, потому что кроме выпускников школ есть еще выпускники колледжей, а также выпускники прошлых лет. В итоге по всей стране конкурс на бюджетные места приблизительно составляет в среднем 4−5 человек на одно бюджетное место. На какие-то специальности конкурс может быть меньше, а на другие он в разы больше и может доходить до 20−30 человек на одно бюджетное место. Все зависит от востребованности или престижа той или иной специальности. <br />
                                        Для того чтобы повысить свои шансы при поступлении на бюджет, нужно собрать как можно больше полезной для себя информации. Например, уже весной известно точное количество бюджетных мест в каждом вузе. У всех вузов есть свои официальные сайты, где всегда можно найти раздел, полностью посвященный абитуриентам. В данном разделе публикуется план и правила приема, количество бюджетных мест по специальностям, проходные баллы ЕГЭ, а также информация о дополнительных вступительных экзаменах или льготах при поступлении. Более того, в течение года каждый вуз проводит день открытых дверей, а многие из них являются участниками проекта «Субботы московского школьника», в рамках которого каждую субботу вуз проводит обучающие и информационно-просветительские мероприятия и активности. На данных мероприятиях можно общаться с преподавателями вузов, кураторами курсов и реальными студентами, благодаря чему узнать особенности и тонкости поступления на бюджет и возможности получения дополнительных баллов для этого. Например, Министерство просвещения РФ или сам вуз в течение года проводит бесплатные профильные конкурсы и олимпиады (ВсОШ), в которых призом за победу часто становится право поступления на бюджетное место в высшее учебное заведение. А некоторые вузы в качестве дополнительных баллов при поступлении могут учитывать наличие волонтерской книжки или значка ГТО. В любом случае многое зависит от высшего учебного заведения и выбранной специальности. <br />
                                        Есть ещё один способ увеличить шансы поступления в вуз на бюджетной основе. Для этого нужно закончить колледж и только потом поступать в вуз. Кстати, выпускники колледжей сегодня имеют возможность, которой нет у выпускников школ — они могут поступать в вузы без ЕГЭ, сдавая только внутренние вступительные экзамены. Но это только в том случае, если они выбрали ту же или смежную специальность. Практика показывает, что выпускники колледжей, как правило, очень ценятся приемными комиссиями вузов, так как уже имеют практические знания и на вступительных экзаменах получают баллы выше, чем выпускники школ. Поэтому у них больше шансов получить бюджетное место, чем у выпускника школы.
                                    </p>
                                </li>
                                <li>
                                    <h4>Обязательно ли брать дополнительные занятия?</h4>
                                    <p>
                                        Нет, не обязательно. Выбор дополнительных занятий и их посещение дело сугубо добровольное. <br />
                                        Однако дополнительные занятия, во-первых, дают возможность попробовать себя в различных направлениях и понять твое это или нет, а заодно приобрести полезные знания, умения и навыки, которые обязательно пригодятся в жизни и сделают тебя разносторонним и интересным человеком. <br />
                                        А во-вторых, в случае дефицита знаний по какому-либо предмету, дополнительные занятия могут помочь лучше понять предмет и восполнить имеющиеся дефициты.
                                        Так что выбор за тобой!
                                    </p>
                                </li>
                                <li>
                                    <h4>Зачем изучать предметы, которые мне никогда не пригодятся?</h4>
                                    <p>
                                        Для того, чтобы выстраивать фундамент твоего будущего профессионального успеха. Смотри, многие востребованные профессии находятся сегодня на стыке различных областей. Данный феномен хорошо объясняет понятие конвергентность – это сближение, слияние научных дисциплин и технологий.
                                        Именно поэтому, для того чтобы быть успешным и востребованным специалистом в будущем, уже сейчас необходимо осваивать различные способы действия, получения, обработки и анализа информации и иметь представления о возможных точках, которые объединяют разные дисциплины.
                                        Изучение сегодня разных учебных дисциплин, основных фундаментальных понятий, которые раскрываются в них, и формирование современных и востребованных навыков и умений – это одна из составляющих твоего профессионального успеха завтра.
                                    </p>
                                </li>
                            </ol>
                        </Accordion>
                        <Accordion title={"Цифровая безопасность"}>
                            <ol className="list --type-number">
                                <li>
                                    <h4>Что такое «цифровые следы»?</h4>
                                    <p>
                                        Цифровой след – это информация о человеке, которая остаётся в Сети после просмотра им веб-страниц. Она хранится в виде cookies – небольших фрагментов данных, отправленных сервером на устройство, откуда был совершён вход в Интернет. Cookies помогают в аутентификации (проверке подлинности) пользователя, сохранении его настроек и персональных предпочтений. <br />
                                        Цифровой след бывает активным и пассивным. Первый пользователь оставляет сознательно – это посты в блоге, комментарии к обсуждениям, переписка, лайки и так далее. Из всего этого складывается виртуальный образ пользователя.
                                        Пассивным цифровым следом считаются данные, оставленные непредумышленно (например ip-адрес устройства или история посещений).
                                    </p>
                                </li>
                                <li>
                                    <h4>Как безопасно пользоваться банковской картой?</h4>
                                    <p>
                                        Есть огромное количество рекомендаций по вопросу безопасного использования банковской карты, например: <br />

                                        1. Никому не передавайте свою банковскую карту. <br />
                                        2. Храните карту в месте, недоступном для посторонних. <br />
                                        3. Никому не говорите и не записывайте свой ПИН-код. <br />
                                        4. Не вводите ПИН-код на интернет-страницах. <br />
                                        Интерактивные рекомендации Вы также можете найти на официальном сайте Сбербанка России.
                                    </p>
                                </li>
                                <li>
                                    <h4>Что такое фишинг?</h4>
                                    <p>
                                        Фи́шинг (англ. fishing — «рыбная ловля, выуживание») — вид интернет-мошенничества, целью которого является получение доступа к конфиденциальным данным пользователей (логинам и паролям). Это достигается путём проведения массовых рассылок электронных писем от имени популярных брендов, а также личных сообщений внутри различных сервисов, например, от имени банков или внутри социальных сетей. В письме часто содержится прямая ссылка на сайт, внешне неотличимый от настоящего. После того как пользователь попадает на поддельную страницу, мошенники пытаются различными психологическими приёмами побудить пользователя ввести на поддельной странице свои логин и пароль, которые он использует для доступа к определённому сайту, что позволяет мошенникам получить доступ к аккаунтам и банковским счетам.
                                    </p>
                                </li>
                                <li>
                                    <h4>Как понять, что в СМИ пишут правду?</h4>
                                    <p>
                                        Для того чтобы оценить правдивость СМИ предлагаем использовать следующие советы: <br />

                                        - старайтесь найти первоисточник новости, чтобы снизить риск искажения информации; <br />
                                        - постоянно обновляйте и дополняйте свой список источников новостей; <br />
                                        - анализируйте информацию по обе стороны «медийных баррикад»; <br />
                                        - старайтесь подавлять эмоции при просмотре новостей и оценивайте только сухие факты; <br />
                                        - проверяйте авторитетность экспертов и достоверность цифр исследований.
                                    </p>
                                </li>
                                <li>
                                    <h4>Как обезопасить себя в социальных сетях?</h4>
                                    <p>
                                        Во-первых, придумай <b>сложный пароль.</b> Не стоит устанавливать пароли из разряда: 123456 или свою дату рождения. Также, не используй для входа на страницу свое имя, имена родителей, братьев, сестер или прочие очевидные комбинации. Такие пароли может легко угадать каждый, кто изучит информацию на твоей страничке. Более того, простые комбинации паролей легко подобрать с помощью специальных программ. Лучше используй пароли, которые состоят из нескольких букв, цифр и символов. <br />
                                        Во-вторых, <b>закрой свою страницу</b> в социальных сетях «настройками приватности». Если все, с кем ты общаешься и хочешь делиться фото и видео, уже есть у тебя в друзьях или подписчиках, ограничь доступ к своему аккаунту для чужих людей. Тогда недоброжелатели не смогут завладеть информацией и файлами, которые есть в открытом доступе на твоей странице, а злоумышленникам будет сложно взломать аккаунт. <br />
                                        В-третьих, <b>не добавляй «в друзья» всех подряд.</b> Убедись, что заявка «в друзья» поступила от знакомого тебе человека. <br />
                                        В-четвертых, <b>не нужно публиковать в социальных сетях всю информацию о себе.</b> Не стоит указывать свои персональные данные, писать номер своего телефона или домашний адрес, делиться слишком личными фотографиями и видео, а также не желательно рассказывать о ваших с родителями ближайших планах на выходные или отпуск. Такая подробная информация, указанная у тебя на страничке, может быть использована злоумышленниками и способна привести к неприятным последствиям не только для тебя, но и для твоих родителей. <br />
                                        В-пятых, <b>не поддавайся на провокации и игнорируй недоброжелателей.</b>
                                        В последнее время социальные сети нередко становятся пространством для преследования с угрозами, оскорблениями, агрессией. Такое явление называется <b>кибербуллингом.</b> Если вдруг подобное случилось с тобой, ни в коем случае не отвечай агрессией или оскорблениями, а сразу же сообщи об этом родителям, затем заблокируй страницу, с которой тебе пишут, и сообщи о случившемся администрации сервиса
                                    </p>
                                </li>
                                <li>
                                    <h4>Что такое персональные данные?</h4>
                                    <p>
                                        Персональные данные − это любая информация, прямо или косвенно относящаяся к человеку (физическому лицу), с помощью которой его можно идентифицировать. К персональным данным можно отнести такие сведения как: фамилия, имя, отчество, паспортные данные, СНИЛС, ИНН, место учебы или работы, адрес проживания, номер телефона, сведения об образовании, имуществе и здоровье, семейное положение. Фотографии, изображения или видео человека вкупе с другими данными, также будут является персональными данными. Кстати, cookie в браузере пользователя, также являются носителями персональных данных. Чтобы тебя не обманули, и злоумышленники не смогли воспользоваться твоими персональными данными, важно знать, кто, как и где хранит или использует информацию о тебе и твоих родителях. С 2006 года в нашей стране вступил в силу Федеральный закон «О персональных данных» №152-ФЗ. Ссылку на него можно найти в интернете на официальных правовых ресурсах.
                                    </p>
                                </li>
                                <li>
                                    <h4>Кому в интернете можно доверять?</h4>
                                    <p>
                                        В первую очередь, это сайты государственных органов, правительственные ресурсы, официальные сайты государственных организаций и предприятий, а также главные официальные сайты компаний, корпораций и банков. К примеру, Правительство Москвы постоянно поддерживает работу своего сайта, на котором имеется вся необходимая и актуальная информация, а все публикации защищены и проходят обязательную проверку. Доверять можно блогам крупных компаний. Примером такого сайта, на котором можно получить достоверную информацию, может служить блог Яндекса. <br />
                                        Сайты средств массовой информации также могут служить надежным источником проверенных данных, особенно в случаях, когда внизу сайта указывается номер свидетельства регистрации ресурса как СМИ. Информация на таких ресурсах проверяется целым штатом редакторов, ведь данные организации несут ответственность за размещаемые информации. Что касается социальных сетей, то здесь также следует доверять только официальным аккаунтам и их публикациям, в том числе аккаунтам групп, интернет-сообществ, крупных компаний и интернет-магазинов.
                                    </p>
                                </li>
                                <li>
                                    <h4>Что такое сквозное шифрование и зачем оно нужно?</h4>
                                    <p>
                                        Сквозное шифрование – это способ передачи данных, в котором доступ к сообщениям имеют только те пользователи, которые участвуют в общении. <br />
                                        Сквозное шифрование необходимо для того, чтобы твои звонки, сообщения, фото, видео, документы и иная информация были защищены от попадания в «чужие руки». Такое шифрование гарантирует, что доступ к исходному тексту сообщения имеется только у отправителя и получателя. Для защиты каждое сообщение, которое ты отправляешь, имеет уникальный «замок» и «ключ». Всё это происходит автоматически. Для того чтобы обеспечить защиту своих сообщений, не нужно включать специальные настройки или создавать секретные чаты, так как сквозное шифрование всегда активировано и отключить его невозможно.
                                    </p>
                                </li>
                                <li>
                                    <h4>Как защитить информацию на своём смартфоне? Как злоумышленники могут ею воспользоваться?</h4>
                                    <p>
                                        Для защиты личной информации разумно соблюдать следующие правила: <br />
                                        1. включить блокировку на своем смартфоне и использовать для этого сложный пароль или отпечаток пальца; <br />
                                        2. с осторожностью использовать публичные Wi-Fi сети; <br />
                                        3. не пренебрегать встроенной защитой своего смартфона и использовать антивирусное приложение; <br />
                                        4. не распространять слишком много информации о себе в социальных сетях; <br />
                                        5. не переходить по сомнительным ссылкам и не открывать непонятные файлы в мессенджерах и почте; <br />
                                        6. устанавливать мобильные приложения только из официальных источников; <br />
                                        7. не подтверждай платные услуги, которые ты не заказывал; <br />
                                        8. обновляй операционную систему своего смартфона. <br />
                                        Если не соблюдать правила безопасности, злоумышленники могут получить через твое мобильное устройство доступ к твоей личной переписке, передаваемым файлам и данным, паролям и даже деньгам, а также смогут следить за твоими действиями в сети. В результате по анализу твоих действий и собранной информации смогут списывать имеющиеся у тебя денежные средства, а также совершать действия от твоего имени, в том числе противозаконные.
                                    </p>
                                </li>
                            </ol>
                        </Accordion>
                        <Accordion title={"Армия"}>
                            <ol className="list --type-number">
                                <li>
                                    <h4>Я хочу служить в армии. Смогу ли я выбрать род и вид войск, место службы?</h4>
                                    <p>
                                        Будущее место службы зависит от нескольких критериев: здоровья, физической формы, образования, приобретенной профессии, умений и навыков. Сведения, собранные военным комиссариатом в процессе формирования личного дела, будут использованы при распределении в конкретный род войск. Например, имея водительское удостоверение и разбираясь в ремонте автомобильной техники, можно рассчитывать на место водителя. На основе этих и других данных, а также желания призывника, могут распределить в различные рода войск, но право их выбора призывником не предусмотрено.
                                    </p>
                                </li>
                                <li>
                                    <h4>Существует ли отсрочка от армии при поступлении в университет?</h4>
                                    <p>
                                        В соответствии действующим законодательством нашей страны, призыву на военную службу в армию подлежат молодые люди мужского пола в возрасте от 18 до 27 лет. Отсрочка от призыва на военную службу в армии предоставляется молодым людям, которые обучаются в организациях высшего профессионального образования только по очной форме обучения. Поэтому решение поступить в университет после окончания школы или призваться на военную службу в армию молодой человек призывного возраста принимает самостоятельно. Подробнее написано в Федеральном законе «О воинской обязанности и военной службе» от 28 марта 1998 года № 53-ФЗ. Найти его можно в интернете на официальных правовых ресурсах.
                                    </p>
                                </li>
                            </ol>
                        </Accordion>
                        <Accordion title={"Экология / волонтерство"}>
                            <ol className="list --type-number">
                                <li>
                                    <h4>Сдавать кровь – полезно? Где я могу это сделать?</h4>
                                    <p>
                                        Медицинская статистика говорит, что люди, которые регулярно сдают кровь, реже страдают от различных заболеваний сердечно-сосудистой системы и в среднем живут на 5 лет дольше, так как после каждой процедуры сдачи крови у них улучшается обмен веществ в организме и активируется система кроветворения. Однако сдача крови в рамках донорства – это достаточно серьёзная процедура и для того, чтобы она прошла безопасно, человек должен заранее к ней подготовиться и выполнить ряд мероприятий. К примеру, за несколько дней перед процедурой необходимо придерживаться определённой диеты.
                                        Если ты принимаешь для себя решение стать донором – тебе нужно знать, что донором в нашей стране может стать практически любой здоровый человек, достигший возраста 18 лет, с весом более 50 кг, который не имеет медицинских противопоказаний к донорству крови и ее компонентов.
                                        Подробнее узнать о донорстве ты можешь на официальном <MyLink href={"https://yadonor.ru/"} text={"сайте"} /> Службы крови.
                                    </p>
                                </li>
                                <li>
                                    <h4>Почему люди становятся волонтёрами?</h4>
                                    <p>
                                        Волонтёрство – это дело сугубо добровольное. Только тебе решать, хочешь ли ты на добровольных началах помогать людям или нет. К слову говоря, у каждого человека, который стал волонтёром, есть своя, сугубо личная причина на это.
                                        Но всем без исключения волонтёрство дарит огромный спектр возможностей: стать по-настоящему нужным людям, нуждающимся в помощи и участии, завести новые знакомства, попробовать себя в различных направлениях, приобрести полезный опыт и сделать мир лучше. В любом случае, чем бы ты ни увлекался, в волонтёрском движении для тебя всегда найдется ниша, в которой ты сможешь проявить себя и раскрыть новые способности, в том числе организаторские и творческие.
                                    </p>
                                </li>
                                <li>
                                    <h4>Как я лично могу помочь планете?</h4>
                                    <p>
                                        Предлагаю начать соблюдать следующие экологические привычки: — экономь воду, электричество и тепло не только дома, но и в школе; — сократи использование бытовой химии и химикатов; — откажись от использования полиэтиленовых пакетов и пластиковых упаковок; — правильно выбрасывай мусор (сортируй его); — сдавай на переработку бумагу, металл и пластик; — чаще передвигайся пешком или на велосипеде/самокате/роликах, чтобы сократить количество вредных выбросов в атмосферу; — сажай на даче цветы, кусты и деревья; — поделись со своими друзьями и родными информацией о том, как мы можем помочь нашей планете.
                                    </p>
                                </li>
                            </ol>
                        </Accordion>
                        <Accordion title={"Права несовершеннолетних"}>
                            <ol className="list --type-number">
                                <li>
                                    <h4>Не хватает денег на карманные расходы, хочу подрабатывать. Это законно? А могу ли я устроиться на работу официально?</h4>
                                    <p>
                                        Да, устроиться официально на работу можно с 16 лет согласно действующему законодательству. И это будет законно. Также официально подписать трудовой договор с работодателем можно, если тебе исполнилось 14 лет, но только при наличии письменного согласия одного из родителей. При этом работа для подростков до 18-ти лет должна соответствовать таким требованиям: <br />
                                        — осуществляться в свободное от учёбы время; <br />
                                        — не приносить ущерб освоению школьной программы; <br />
                                        — не причинять вред здоровью. <br />
                                        Подробнее данный вопрос освещён в статье 63 Трудовой кодекса РФ. Найти ссылку на данную статью можно в интернете на официальных правовых ресурсах.
                                    </p>
                                </li>
                                <li>
                                    <h4>Могу ли я гулять по центру города ночью, если мне нет 18?</h4>
                                    <p>
                                        В России комендантский час для несовершеннолетних действует следующим образом: если ребёнку от 7 до 16 лет, он может свободно перемещаться по городу с 6 утра до 10 вечера зимой и с 7 утра до 11 вечера — летом; если же речь идёт о старшей возрастной группе от 16 до 18 лет, то для таких ребят «Час Х» наступает в 23:00 вне зависимости от времени года. «Недетский час» для несовершеннолетних накладывает вето на нахождение юных граждан не только на улицах и в подворотнях города, но и на стадионах, вокзалах, в парках и скверах, на остановках и в общественном транспорте, в торговых точках и в точках общественного питания, особенно имеющих лицензию на продажу алкоголя. Обнаружив ребёнка в одном из перечисленных мест в неурочное время без сопровождения родителей, сотрудники полиции имеют право задержать его, установить личность юного нарушителя и членов его семьи, а затем передать подростка на руки родителям или их законным представителям. При этом просто прийти в отделение полиции с подтверждающими личность документами и увести своё чадо домой родителям не удастся. Прежде им придётся заплатить штраф за нарушение несовершеннолетним комендантского часа и — со своей стороны — ненадлежащее исполнение родительских обязанностей. Это требование прописано в статье 5.35. Кодекса об административных правонарушениях РФ. Размеры штрафа варьируются от 600 до 3 000 рублей и зависят от того, является ли это правонарушение первым или ребёнок регулярно попадается стражам порядка в недопустимое время. А в случае если совершить передачу задержанного ребенка ответственным лицам немедленно не удаётся, ребёнка могут оставить в здании полицейского участка в течение 3 часов, после чего его отправят в соответствующее учреждение для несовершеннолетних. Таким образом, несовершеннолетний ребенок имеет право «гулять» после 23:00 только в сопровождении законного представителя, которыми являются родители или опекуны, несущие гражданско-правовую и уголовную ответственность за несовершеннолетнего ребенка. Подробнее узнать о правилах «недетского часа» ты сможешь, заглянув в Конституцию Р Ф и Семейный кодекс. В частности, правила регулируются и законом «Об основных гарантиях прав ребёнка» № 124-ФЗ от 24.07.1998 г. Ссылки на данные документы ты сможешь найти на любом официальном правовом онлайн-ресурсе.
                                    </p>
                                </li>
                            </ol>
                        </Accordion>
                        <Accordion title={"Расскажите обо мне"}>
                            <ol className="list --type-number">
                                <li>
                                    <h4>Родители пытаются меня контролировать каждую секунду. Они мне не доверяют?</h4>
                                    <p>
                                        Родители всегда сильно переживают о благополучии своих детей. Ежесекундный контроль дает родителям ощущение безопасности их ребенка. Составь совместно с родителями своё расписание на неделю и договорись о том, в какой момент ты сообщаешь им о своем местонахождении, о чем обязательно надо сообщить в течение дня, в какое время возвращаешься домой и т.д. Поверь, такая договоренность позволит немного успокоить родителей и выстроить комфортные для всей семьи отношения и границы контроля.
                                    </p>
                                </li>
                                <li>
                                    <h4>Как справиться с фобией?</h4>
                                    <p>
                                        Едва ли можно найти человека, лишенного чувства тревоги. Бывает, что тревога мешает нам жить, создает существенные помехи для общения, учебы, творчества, путешествий. В этом случае речь идет о тревожном расстройстве, одним из типов которого являются фобии. Это страх определенной ситуации, стимула (например, ответ на уроке, экзамен, лифт, паук и т.п.). Существуют различные упражнения, которые позволяют справиться с тревогой, но их эффективность индивидуальна. Кому-то подходят дыхательные упражнения и техника управления пульсом, кому-то помогает выполнение в уме нескольких арифметических действий. Например, возьми число 108 и последовательно вычитай из него 9, пока не дойдешь до нуля. Однако если ты испытываешь сильную, парализующую тревогу и не можешь с ней справиться, то стоит обратиться за помощью к психологу.
                                    </p>
                                </li>
                                <li>
                                    <h4>Времени совсем не хватает ни на что. Есть ли какой-то лёгкий способ оптимизировать свой график?</h4>
                                    <p>
                                        Укротить время – одно самых острых желаний практически каждого человека. Правда в том, что большинство из нас не может «втиснуть» в 24 часа все свои планы. Распространённая ошибка большинства людей – попытка найти свободное время, вместо того чтобы «создавать» время. Предлагаем создать «свое время», соблюдая несколько простых правил: <br />
                                        — составь список важных дел на день, но не больше семи, и постоянно держи этот список на виду; <br />
                                        — определи время, которое понадобится на выполнение каждой задачи; <br />
                                        — расставь приоритеты – это очень важно при планировании дня; <br />
                                        — установи значимость дел, в соответствии со значимостью определи временные затраты. <br />
                                        Помни, чтобы правильно распланировать свой день и всё успеть – очень важно соблюдать режим. Чтобы чувствовать себя бодро, нужно вовремя ложиться спать, продолжительность сна должна составлять 7-8 часов в сутки. Для того чтобы всё успеть, нужно: <br />
                                        — не тратить время на просмотр телевизора; <br />
                                        — ограничить время пребывания в социальных сетях и время, которое ты тратишь на компьютерные игры; <br />
                                        — научиться одолевать лень, несобранность и непунктуальность; <br />
                                        — не накапливать невыполненные дела и обязательно планировать отдых в течение дня и недели.
                                    </p>
                                </li>
                                <li>
                                    <h4>Не могу сосредоточиться на учебе. Что делать? Мне помогут витамины?</h4>
                                    <p>
                                        Давай вместе определим, что тебя отвлекает и не дает сосредоточиться и в какие моменты у тебя нет проблем с концентрацией внимания. Только тогда мы сможем скорректировать процесс обучения таким образом, чтобы он был эффективен для тебя. Возможно, витамины помогут улучшить концентрацию внимания, но прежде необходимо проконсультироваться с врачом и сдать анализы.
                                    </p>
                                </li>
                            </ol>
                        </Accordion>
                    </section>
                </div>
            </div>
        </div>
    )

}

export default TeacherOnlinePage;