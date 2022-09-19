import React, { Component } from 'react';
import logo_1 from '../../../images/logo/useful-resourses-01.png';
import logo_2 from '../../../images/logo/useful-resourses-02.png';
import logo_3 from '../../../images/logo/useful-resourses-03.png';
import logo_4 from '../../../images/logo/useful-resourses-04.png';

export default class DocumentsUsefulResourcesPage extends Component {

    render() {
        return (
            <div className="content__block">
                <h2 className='content__title'>Полезные ресурсы</h2>
                <ul className='resourses'>
                    <li>
                        <a href="https://edu.gov.ru/">
                            <img className='image' src={logo_1} alt="Министерство просвещения РФ" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.mos.ru/donm/">
                            <img className='image' src={logo_2} alt="Департамент образования и науки города Москвы" />
                        </a>
                    </li>
                    <li>
                        <a href="https://patriotsport.moscow/">
                            <img className='image' src={logo_3} alt="Московский центр Патриот.Спорт" />
                        </a>
                    </li>
                    <li>
                        <a href="https://gppc.ru/">
                            <img className='image' src={logo_4} alt="Городской Психолого-Педагогический центр" />
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

}