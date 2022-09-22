import React from 'react';
import MyLink from '../../../components/link/link.component';

import imageLogo from '../../../images/logo/logo-o-left-i.png';
import imageStructure from '../../../images/190922.png';

const FederalConceptionStrategyPage = () => {

    React.useEffect(() => {

        document.title = "Федеральные концепции и стратегии";

    }, []);

    return (
        <div className="content__block">
            <h2 className='content__title'>Федеральные концепции и стратегии</h2>
            <img className='image' src={imageLogo} width='150' alt={"Национальный проект “ОБРАЗОВАНИЕ”"}/>
            <p className='content__caption'>Национальный проект “ОБРАЗОВАНИЕ”</p>
            <p>
                <MyLink
                    text={"Национальный проект «Образование»"}
                    href={"https://edu.gov.ru/national-project/"}
                />
                направлен на достижение национальной цели Российской Федерации, определенной Президентом России Владимиром Путиным, — обеспечение возможности самореализации и развития талантов.
            </p>
            <img className='image' src={imageStructure} alt="Схема федеральные проекты" />
            <h3 className='content__caption'>ПЛАН РАЗВИТИЯ ПРОЕКТА </h3>
            <p>
                Содержание мероприятий национального проекта «Образование» включает в себя работу по направлениям, обеспечивающим совершенствование образовательной инфраструктуры, повышение профессионального мастерства педагогических работников и управленческих кадров системы образования и развитие содержания образования. Ключевые перспективы национального проекта «Образование» в разрезе основных направлений его реализации включают в себя результаты, которые планируется достигнуть к концу 2024 года.
            </p>
            <MyLink
                className={"link --type-pdf-icon"}
                text={"Национальный проект «Образование»"}
                href={"/files/normativ_documents/План нацпроекта Образование.pdf"} />
        </div>
    )

}

export default FederalConceptionStrategyPage;