import React, { Component } from 'react';
import MyLink from '../../../components/link/link.component';
import imageLogo from '../../../images/logo-o-left-i.png';

export default class FederalConceptionStrategyPage extends Component {

    render() {
        return (
            <div className="content__block">
                <h2 className='content__title'>Федеральные концепции и стратегии</h2>
                <div className='--align-center'>
                    <img className='image' src={imageLogo} width='150' />
                    <p className='content__caption'>Национальный проект “ОБРАЗОВАНИЕ”</p>
                </div>
                <p>
                    <MyLink text={"Национальный проект «Образование»"}
                        href={"https://edu.gov.ru/national-project/"} />
                    направлен на достижение национальной цели Российской Федерации, определенной Президентом России Владимиром Путиным, — обеспечение возможности самореализации и развития талантов.
                </p>
                <img className='image' src="" alt="Схема федеральные проекты" />
                <h3 className='content__caption'>ПЛАН РАЗВИТИЯ ПРОЕКТА </h3>
                <p>
                    Содержание мероприятий национального проекта «Образование» включает в себя работу по направлениям, обеспечивающим совершенствование образовательной инфраструктуры, повышение профессионального мастерства педагогических работников и управленческих кадров системы образования и развитие содержания образования. Ключевые перспективы национального проекта «Образование» в разрезе основных направлений его реализации включают в себя результаты, которые планируется достигнуть к концу 2024 года.
                </p>
                <MyLink className={"link --type-pdf-icon"} text={"Национальный проект «Образование»"}
                    href={"https://voenpatriot-my.sharepoint.com/personal/kovalchukeg_cpvs_moscow/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fkovalchukeg_cpvs_moscow%2FDocuments%2FВкладка%20МЭШ%20-%20Сайт%20Организация%20воспитания%2FСодержание%20пунктов%2F%212%2E%20Пункт%20бокового%20меню%20Нормативные%20документы%2FФедеральные%20концепции%20и%20стратегии%2FПлан%20нацпроекта%20Образование%2Epdf&parent=%2Fpersonal%2Fkovalchukeg_cpvs_moscow%2FDocuments%2FВкладка%20МЭШ%20-%20Сайт%20Организация%20воспитания%2FСодержание%20пунктов%2F%212%2E%20Пункт%20бокового%20меню%20Нормативные%20документы%2FФедеральные%20концепции%20и%20стратегии"} />
            </div>
        )
    }

}