import React from 'react';
import Accordion from "../../../components/accordion/accordion.component";
import MyLink from '../../../components/link/link.component';

const InjuryPreventionPage = () => {

    const [tab, setTab] = React.useState(1);

    React.useEffect(() => {

        document.title = "Профилактика травматизма";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">Профилактика травматизма</h2>
            <div className="tab">
                <ul className="tab__list">
                    <li className={tab === 1 ? "tab__item --active" : "tab__item"} onClick={() => setTab(1)}>Методические материалы</li>
                    <li className={tab === 2 ? "tab__item --active" : "tab__item"} onClick={() => setTab(2)}>Типовая документация</li>
                </ul>
                <div className="tab__container">
                    <section className={tab === 1 ? "tab__section --active" : "tab__section"}>
                        <p>
                            <b>Профилактика детского травматизма </b>
                            – система сохранения жизни и здоровья обучающихся, включающая в себя комплекс мероприятий, направленных на устранение факторов риска, воздействующих на детей. Основная задача профилактики детского травматизма – предотвращение травматизма обучающихся. Несчастный случай – событие, в результате которого получено увечье или иное повреждение здоровья.
                        </p>
                        <ul className="list --type-empty">
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/Методические рекомендации по предупреждению детского травматизма.pdf"} text={"Методические рекомендации по предупреждению детского травматизма"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/Отвественность педагогических работников за обеспечение безопасности обучающихся.pdf"} text={"Ответственность педагогических работников за безопасность обучающихся"} />
                            </li>
                        </ul>
                    </section>
                    <section className={tab === 2 ? "tab__section --active" : "tab__section"}>
                        <ul className="list --type-empty">
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/Типовое положение по предупреждению и профилактике травматизма обучающихся.docx"} text={"«Типовое положение по предупреждению и профилактике травматизма обучающихся»"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/Типовой план мероприятий по профилактика_травматизма_2021-2022.docx"} text={"«План мероприятий по предупреждению и профилактике травматизма обучающихся»."} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/Проект приказ о разделение потоков.docx"} text={"Приказ об организации раздельных потоков учащихся при движении по лестничным маршам здания."} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/Проект приказа об организации дежурств на переменах .docx"} text={"Приказ об организации дежурства учителей на переменах в зданиях"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/Проект приказ об утверждении инструкций.docx"} text={"Приказ об утверждении инструкций по комплексной безопасности обучающихся"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/Листок регистрации инструктажей обучающихся по технике безопасности 1-е полугодие.docx"} text={"Листок регистрации инструктажей обучающихся по технике безопасности 1-е полугодие"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/Листок регистрации инструктажей обучающихся по технике безопасности 2-е полугодие.docx"} text={" Листок регистрации инструктажей обучающихся по технике безопасности 2-е полугодие"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/Журнал регистрации инструктажей по технике безопасности в спортивном залезале .docx"} text={"Журнал регистрации инструктажей по технике безопасности в спортивном зале"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/Журнал регитсрации инстурктажей по тб .docx"} text={"Журнал регитсрации инстурктажей по тб"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/Бланк вызова скорой помощи.docx"} text={"Бланк вызова скорой помощи"} />
                            </li>
                        </ul>
                        <Accordion title={"Инструкции"}>
                        <ul className="list --type-empty">
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция №1.1.docx"} text={"Инструкция № 1.1"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция №1.2.docx"} text={"Инструкция № 1.2"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция №1.3.docx"} text={"Инструкция № 1.3"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция №2.docx"} text={"Инструкция № 2"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция №3.docx"} text={"Инструкция № 3"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция 4.1.docx"} text={"Инструкция № 4.1"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция 4.2.docx"} text={"Инструкция № 4.2"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция 4.3.docx"} text={"Инструкция № 4.3"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция №5.docx"} text={"Инструкция № 5"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция 6.1.docx"} text={"Инструкция № 6.1"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция 6.2.docx"} text={"Инструкция № 6.2"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция №7.docx"} text={"Инструкция № 7"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция №8.docx"} text={"Инструкция № 8"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция №9.docx"} text={"Инструкция № 9"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция №10.docx"} text={"Инструкция № 10"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция №11.1.docx"} text={"Инструкция № 11.1"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция 11.2.docx"} text={"Инструкция № 11.2"} />
                            </li>
                            <li>
                                <MyLink className='link --type-pdf-icon' href={"./files/safe_environment/injury_prevention/instuctions/Инструкция №12.docx"} text={"Инструкция № 12"} />
                            </li>
                        </ul>
                        </Accordion>
                    </section>
                </div>
            </div>
        </div>
    )

}

export default InjuryPreventionPage;