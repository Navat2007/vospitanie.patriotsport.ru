import React, { Component } from 'react';
import MyLink from '../../../components/link/link.component';

import imageLogo from '../../../images/deviant_behavior_img.jpg';
import image_01 from '../../../images/deviant_behavior/Раннее проблемное поведение. Памятка для педагогов Стр. 1.jpg';
import image_02 from '../../../images/deviant_behavior/Раннее проблемное поведение. Памятка для педагогов Стр. 2.jpg';
import image_03 from '../../../images/deviant_behavior/Агрессивное поведение. Памятка для педагогов Стр. 1.jpg';
import image_04 from '../../../images/deviant_behavior/Агрессивное поведение. Памятка для педагогов Стр. 2.jpg';
import image_05 from '../../../images/deviant_behavior/Делинквентное поведение. Памятка для педагогов Стр. 1.jpg';
import image_06 from '../../../images/deviant_behavior/Делинквентное поведение. Памятка для педагогов Стр. 2.jpg';
import image_07 from '../../../images/deviant_behavior/Аддиктивное (зависимое) поведение. Памятка для педагогов Стр. 1.jpg';
import image_08 from '../../../images/deviant_behavior/Аддиктивное (зависимое) поведение. Памятка для педагогов Стр. 2.jpg';
import image_09 from '../../../images/deviant_behavior/Рискованное поведение. Памятка для педагогов стр. 1.jpg';
import image_10 from '../../../images/deviant_behavior/Рискованное поведение. Памятка для педагогов стр.2.jpg';
import image_11 from '../../../images/deviant_behavior/Социально-психологическая дезадаптация. Памятка для педагогов Стр. 1.jpg';
import image_12 from '../../../images/deviant_behavior/Социально-психологическая дезадаптация. Памятка для педагогов Стр. 2.jpg';

export default class DeviantBehaviorPage extends Component {

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
                <img src={imageLogo} alt="Инфографика девиантное поведение" className="image" />
                <p>
                    <b>Девиантность </b>
                    – это отклонение от нормы. Когда данный термин используется в характеристике поведения ребенка, это означает, что его поступки не вписываются в общепринятые рамки, выходят за пределы установленных норм. В психологии девиантное поведение у детей определяется <b>ошибочным антиобщественным образцом решений</b> конфликтных ситуаций и <b>полным игнорированием</b>  истинной реальности, что приводит к <b>нарушению принятых норм</b> или нанесению ущерба окружающим и себе.
                </p>
                <p>
                    <MyLink className='link --type-pdf-icon' href={"Памятка для классного руководителя по факторам и группам риска.pdf"} text={"Памятка для классного руководителя по факторам и группам риска "} />
                </p>
                <div className="tab">
                    <ul className="tab__list">
                        <li className={this.state.tab === 1 ? "tab__item --active" : "tab__item"} onClick={() => this.setTab(1)}>Раннее проблемное поведение</li>
                        <li className={this.state.tab === 2 ? "tab__item --active" : "tab__item"} onClick={() => this.setTab(2)}>Агрессивное поведение</li>
                        <li className={this.state.tab === 3 ? "tab__item --active" : "tab__item"} onClick={() => this.setTab(3)}>Делинквентное поведение</li>
                        <li className={this.state.tab === 4 ? "tab__item --active" : "tab__item"} onClick={() => this.setTab(4)}>Зависимое поведение</li>
                        <li className={this.state.tab === 5 ? "tab__item --active" : "tab__item"} onClick={() => this.setTab(5)}>Рискованное поведение</li>
                        <li className={this.state.tab === 6 ? "tab__item --active" : "tab__item"} onClick={() => this.setTab(6)}>Социально-психологическая дезадаптация</li>
                    </ul>
                    <div className="tab__container">
                        <section className={this.state.tab === 1 ? "tab__section --active" : "tab__section"}>
                            <img src={image_01} alt="Памятка для педагогов: Раннее проблемное поведение, стр.1" className="image" />
                            <img src={image_02} alt="Памятка для педагогов: Раннее проблемное поведение, стр.2" className="image" />
                        </section>
                        <section className={this.state.tab === 2 ? "tab__section --active" : "tab__section"}>
                            <img src={image_03} alt="Памятка для педагогов: Агрессивное поведение, стр.1" className="image" />
                            <img src={image_04} alt="Памятка для педагогов: Агрессивное поведение, стр.2" className="image" />
                        </section>
                        <section className={this.state.tab === 3 ? "tab__section --active" : "tab__section"}>
                            <img src={image_05} alt="Памятка для педагогов: Делинквентное поведение, стр.1" className="image" />
                            <img src={image_06} alt="Памятка для педагогов: Делинквентное поведение, стр.2" className="image" />
                        </section>
                        <section className={this.state.tab === 4 ? "tab__section --active" : "tab__section"}>
                            <img src={image_07} alt="Памятка для педагогов: Аддиктивное (зависимое) поведение, стр.1" className="image" />
                            <img src={image_08} alt="Памятка для педагогов: Аддиктивное (зависимое) поведение, стр.2" className="image" />
                        </section>
                        <section className={this.state.tab === 5 ? "tab__section --active" : "tab__section"}>
                            <img src={image_09} alt="Памятка для педагогов: Рискованное поведение, стр.1" className="image" />
                            <img src={image_10} alt="Памятка для педагогов: Рискованное поведение, стр.2" className="image" />
                        </section>
                        <section className={this.state.tab === 6 ? "tab__section --active" : "tab__section"}>
                            <img src={image_11} alt="Памятка для педагогов: Социально-психологическая дезадаптация, стр.1" className="image" />
                            <img src={image_12} alt="Памятка для педагогов: Социально-психологическая дезадаптация, стр.2" className="image" />
                        </section>
                    </div>
                </div>

            </div>
        )
    }

}