import React from 'react';
import MyLink from '../../../components/link/link.component';

const ProjectActivityPage = () => {

    const [tab, setTab] = React.useState(1);

    React.useEffect(() => {

        document.title = "Проектная деятельность";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">Проектная деятельность</h2>

            <p>
                <b>Главной  задачей </b> современной школы является воспитание профессиональной личности, способной мыслить творчески, находить нестандартные решения, быть готовой обучаться в течение всей последующей жизни.
            </p>
            <p>
                Проектная деятельность преподавателей образовательных организаций является одним из наиболее эффективных дидактических средств активизации познавательного и творческого развития обучающегося, а также формирования их личностных качеств.
            </p>
            <p>
                Учебный процесс в общеобразовательной школе должен строиться таким образом, чтобы выпускники могли самостоятельно ставить и достигать серьёзных целей, умело реагировать на различные жизненные ситуации. Таковым является социальный заказ государства общеобразовательной школе в современной России.
            </p>
            <p>
                <b>Проектная и исследовательская деятельность учащихся регламентирована в следующих нормативных документах: </b>
            </p>
            <ul className="list --type-number">
                <li>ФГОС Начального Общего Образования (НОО) </li>
                <li>ФГОС Основного Общего Образования (ООО)</li>
                <li>Примерная основная образовательная программа образовательного учреждения. Начальная школа (1-4 классы)</li>
                <li>Примерная основная образовательная программа образовательного учреждения. Основная школа (5-9 классы)</li>
            </ul>

            <div className="tab" style={{"marginTop": "1.875em"}}>
                <ul className="tab__list">
                    <li className={tab === 1 ? "tab__item --active" : "tab__item"} onClick={() => setTab(1)}>Научно-практическая конференция на тему: «Непрерывное художественное образование в системе управления процессами воспитания и социализации». Ежегодная (XXIX-я) «Мастерская Б.М. Неменского»</li>
                    <li className={tab === 2 ? "tab__item --active" : "tab__item"} onClick={() => setTab(2)}>Открытая городская научно-практическая конференция «Курчатовский проект — от знаний к практике, от практики к результату» </li>
                    <li className={tab === 3 ? "tab__item --active" : "tab__item"} onClick={() => setTab(3)}>Открытая городская научно-практическая конференция «Старт в медицину»</li>
                    <li className={tab === 4 ? "tab__item --active" : "tab__item"} onClick={() => setTab(4)}>Открытая городская научно-практическая конференция «Наука для жизни»</li>
                    <li className={tab === 5 ? "tab__item --active" : "tab__item"} onClick={() => setTab(5)}>Открытая городская научно-практическая конференция «Инженеры будущего»</li>
                </ul>
                <div className="tab__container">
                    <section className={tab === 1 ? "tab__section --active" : "tab__section"}>
                        <div className="table --theme-standart">
                            <div className="table__wrap">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>
                                            Ответственный <br /> (Управление ДОНМ, ОО)
                                        </th>
                                        <th>
                                            Курирующие ЦГУ
                                        </th>
                                        <th>
                                            Участники
                                        </th>
                                        <th>
                                            Информация
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            Управление координации воспитательной работы и профилактики правонарушений
                                        </td>
                                        <td>
                                            ГБОУ ГМЦ ДОНМ
                                        </td>
                                        <td>
                                            Педагоги образовательных организаций общего и дополнительного образования, детских художественных школ и школ искусств, преподаватели высшей школы и системы среднего профессионального образования России и зарубежных стран.
                                        </td>
                                        <td>
                                            <MyLink href={"https://cnho.ru/?page_id=17621"} text={"https://cnho.ru/?page_id=17621"} />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <section className={tab === 2 ? "tab__section --active" : "tab__section"}>
                        <div className="table --theme-standart">
                            <div className="table__wrap">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>
                                            Ответственный <br /> (Управление ДОНМ, ОО)
                                        </th>
                                        <th>
                                            Курирующие ЦГУ
                                        </th>
                                        <th>
                                            Участники
                                        </th>
                                        <th>
                                            Информация
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            Управление реализации государственной политики в сфере образования
                                        </td>
                                        <td>
                                            ГБОУ ГМЦ ДОНМ
                                        </td>
                                        <td>
                                            Обучающиеся, педагоги, руководящий состав
                                        </td>
                                        <td>
                                            <MyLink href={"https://conf.profil.mos.ru/kur/"} text={"https://conf.profil.mos.ru/kur/"} />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <section className={tab === 3 ? "tab__section --active" : "tab__section"}>
                        <div className="table --theme-standart">
                            <div className="table__wrap --theme-standart">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>
                                            Ответственный <br /> (Управление ДОНМ, ОО)
                                        </th>
                                        <th>
                                            Курирующие ЦГУ
                                        </th>
                                        <th>
                                            Участники
                                        </th>
                                        <th>
                                            Информация
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            Управление реализации государственной политики в сфере образования
                                        </td>
                                        <td>
                                            ГБОУ ГМЦ ДОНМ
                                        </td>
                                        <td>
                                            Обучающиеся 8-11 классов, педагогические работники
                                        </td>
                                        <td>
                                            <MyLink href={"https://conf.profil.mos.ru/med"} text={"https://conf.profil.mos.ru/med"} />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <section className={tab === 4 ? "tab__section --active" : "tab__section"}>
                        <div className="table --theme-standart">
                            <div className="table__wrap">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>
                                            Ответственный <br /> (Управление ДОНМ, ОО)
                                        </th>
                                        <th>
                                            Курирующие ЦГУ
                                        </th>
                                        <th>
                                            Участники
                                        </th>
                                        <th>
                                            Информация
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            Управление реализации государственной политики в сфере образования
                                        </td>
                                        <td>
                                            ГБОУ ГМЦ ДОНМ
                                        </td>
                                        <td>
                                            Обучающиеся 8-11 классов, педагогические работники
                                        </td>
                                        <td>
                                            <MyLink href={"https://conf.profil.mos.ru/academ/"} text={"https://conf.profil.mos.ru/academ/"} />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <section className={tab === 5 ? "tab__section --active" : "tab__section"}>
                        <div className="table --theme-standart">
                            <div className="table__wrap">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>
                                            Ответственный <br /> (Управление ДОНМ, ОО)
                                        </th>
                                        <th>
                                            Курирующие ЦГУ
                                        </th>
                                        <th>
                                            Участники
                                        </th>
                                        <th>
                                            Информация
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            Управление реализации государственной политики в сфере образования
                                        </td>
                                        <td>
                                            ГБОУ ГМЦ ДОНМ
                                        </td>
                                        <td>
                                            Обучающиеся 8-11 классов, педагогические работники
                                        </td>
                                        <td>
                                            <MyLink href={"https://conf.profil.mos.ru/inj"} text={"https://conf.profil.mos.ru/inj"} />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    )

}

export default ProjectActivityPage;