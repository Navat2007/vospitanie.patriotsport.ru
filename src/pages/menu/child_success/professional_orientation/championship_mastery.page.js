import React from "react";
import MyLink from "../../../../components/link/link.component";

import image_06 from "../../../../images/logo/professional-orientation/world-skills-russia.png";
import image_06_qr from "../../../../images/qr-codes/professional-orientation/qr-code-world-skills-russia.gif";
import image_07 from "../../../../images/logo/professional-orientation/masteryata.png";
import image_07_qr from "../../../../images/qr-codes/professional-orientation/qr-code-masteryata.gif";
import image_08 from "../../../../images/logo/professional-orientation/abilimpix.png";
import image_08_qr from "../../../../images/qr-codes/professional-orientation/qr-code-abilimpix.gif";

const ChampionshipMasteryPage = () => {

    const [tab, setTab] = React.useState(1);

    return (
        <div className="content__block">
            <h2 className="content__title">Чемпионаты профессионального мастерства</h2>
            <div className="tab">
                <ul className="tab__list">
                    <li className={tab === 1 ? "tab__item --active" : "tab__item"} onClick={() => setTab(1)}>WorldSkills Russia</li>
                    <li className={tab === 2 ? "tab__item --active" : "tab__item"} onClick={() => setTab(2)}>Московский детский чемпионат Мастерята</li>
                    <li className={tab === 3 ? "tab__item --active" : "tab__item"} onClick={() => setTab(3)}>Абилимпикс</li>
                </ul>
                <div className="tab__container">
                    <section className={tab === 1 ? "tab__section --active" : "tab__section"}>
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
                    <section className={tab === 2 ? "tab__section --active" : "tab__section"}>
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
                    <section className={tab === 3 ? "tab__section --active" : "tab__section"}>
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
    );
};

export default ChampionshipMasteryPage;
