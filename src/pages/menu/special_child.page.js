import React from 'react';
import MyLink from '../../components/link/link.component';

const SpecialChildPage = () => {

    const [tab, setTab] = React.useState(1);

    React.useEffect(() => {

        document.title = "Особенный ребенок";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">Особенный ребенок</h2>
            <div className="tab">
                <ul className="tab__list">
                    <li className={tab === 1 ? "tab__item --active" : "tab__item"} onClick={() => setTab(1)}>Методические рекомендации по организации взаимодействия с детьми с ОВЗ и их родителями</li>
                    <li className={tab === 2 ? "tab__item --active" : "tab__item"} onClick={() => setTab(2)}>Нормативно-правовая база организации образовательного процесса для обучающихся с ОВЗ</li>
                    <li className={tab === 3 ? "tab__item --active" : "tab__item"} onClick={() => setTab(3)}>Организация работы психолого-педагогической службы</li>
                    <li className={tab === 4 ? "tab__item --active" : "tab__item"} onClick={() => setTab(4)}>Психолого-педагогические технологии в работе с обучающимися с ОВЗ</li>
                </ul>
                <div className="tab__container">
                    <section className={tab === 1 ? "tab__section --active" : "tab__section"}>
                        <ul className="list --type-empty">
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/special_child/Что нужно знать родителям о психолого-педагогическом сопровождении детей с ОВЗ в школе.pdf"} text={"Что нужно знать родителям о психолого-педагогическом сопровождении детей с ОВЗ в школе"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/special_child/Организация воспитательной работы в образовательных оргнанизациях.pdf"} text={"Организация воспитательной работы в образовательных оргнанизациях"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/special_child/УрокиДоброты.pdf"} text={"Уроки Доброты"} />
                            </li>
                        </ul>
                    </section>
                    <section className={tab === 2 ? "tab__section --active" : "tab__section"}>
                        <ul className="list --type-empty">
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/special_child/Перечень_норм_док_обновл_табица с ссылками на документы и обменник.docx"} text={"Перечень нормативных документов (обновл. табица с ссылками на документы и обменник)"} />
                            </li>
                        </ul>
                    </section>
                    <section className={tab === 3 ? "tab__section --active" : "tab__section"}>
                        <ul className="list --type-empty">
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/special_child/Конструктор рабочих программ_презентация.pdf"} text={"Конструктор рабочих программ_презентация"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/special_child/Конструктор рабочих программ_технология организации работы педагога-психолога.pdf"} text={"Конструктор рабочих программ_технология организации работы педагога-психолога"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/special_child/Организация деятельности социального педагога, опыт ресурсных школ.pdf"} text={"Организация деятельности социального педагога, опыт ресурсных школ"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/special_child/Основные мероприятия Службы сопровождения в соответствии с направлениями работы.pdf"} text={"Основные мероприятия Службы сопровождения в соответствии с направлениями работы"} />
                            </li>
                        </ul>
                    </section>
                    <section className={tab === 4 ? "tab__section --active" : "tab__section"}>
                        <ul className="list --type-empty">
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/special_child/С.О.В.А.pdf"} text={"С.О.В.А."} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/special_child/СОВА_презентация.pdf"} text={"СОВА презентация"} />
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )

}

export default SpecialChildPage;