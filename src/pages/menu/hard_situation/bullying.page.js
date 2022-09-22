import React, { Component } from 'react';
import MyLink from '../../../components/link/link.component';

import imageLogo from '../../../images/STOP_Buling.png';

export default class BullyingPage extends Component {

    render() {
        return (
            <div className="content__block">
                <h2 className="content__title">Буллинг</h2>
                <img src={imageLogo} alt="Травли нет" className="image" width={"150"} />
                <p>
                    <b>Буллинг </b>
                    — это проявление постоянной агрессии, направленной на одного и того же человека. Это довольно широкое понятие, которое включает в себя разные виды насилия: физическое, эмоциональное, экономическое, а также кибербуллинг. От конфликта или ссоры отличается тем, что может длиться месяцами.
                </p>
                <p>
                    <b>Школьная травля </b>– систематическое психологическое или физическое грессивное поведение группы лиц, являющихся участниками образовательного процесса, в отношении одного или нескольких лиц.
                </p>
                <p>
                    <b>Буллинг </b>признан проблемой во всем мире, что способствует созданию <b>антибуллинговых программ</b> , эффективность которых проверяется в школах.
                </p>
                <p>
                    <MyLink href={"https://травлинет.рф/"} text={"Антибуллинговая программа ТравлиNet"} />
                </p>
                <h3 className="content__caption">Методические рекомендации для педагогов:</h3>
                <ul className="list --type-empty">
                    <li>
                        <MyLink className='link --type-pdf-icon' href={"./files/bullying/Методическое пособие ''Травли NET''.pdf"} text={"Методическое пособие “Травли NET”"} />
                    </li>
                    <li>
                        <MyLink className='link --type-pdf-icon' href={"./files/bullying/Как понять что в классе буллинг.docx"} text={"Как понять, что в классе буллинг?"} />
                    </li>
                    <li>
                        <MyLink className='link --type-pdf-icon' href={"./files/bullying/Что делать если травят учителя.docx"} text={"Что делать, если травят учителя?"} />
                    </li>
                </ul>
                <h3 className="content__caption">Полезная информация для родителей:</h3>
                <ul className="list --type-empty">
                    <li>
                        <MyLink className='link --type-pdf-icon' href={"./files/bullying/Памятка для родителей.pptx"} text={"Памятка для родителей "} />
                    </li>
                    <li>
                        <MyLink className='link --type-pdf-icon' href={"./files/bullying/Как понять что вашего ребенка травят сверстники.docx"} text={"Как понять что вашего ребенка травят сверстники?"} />
                    </li>
                    <li>
                        <MyLink className='link --type-pdf-icon' href={"./files/bullying/Алгоритм для родителей.pdf"} text={"Алгоритм для родителей "} />
                    </li>
                </ul> 
                <h3 className="content__caption">Полезная информация для обучающихся:</h3>
                <ul className="list --type-empty">
                    <li>
                        <MyLink className='link --type-pdf-icon' href={"./files/bullying/Методическое пособие для обучающихся ''Травли NET''.pdf"} text={"Методическое пособие для обучающихся «Травли NET»"} />
                    </li>
                    <li>
                        <MyLink className='link --type-pdf-icon' href={"./files/bullying/как понять что тебя травят.docx"} text={"Как понять, что тебя травят?"} />
                    </li>
                </ul>
            </div>
        )
    }

}