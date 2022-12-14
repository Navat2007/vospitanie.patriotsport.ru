import React from 'react';
import MyLink from '../../../components/link/link.component';

import imageLogo from '../../../images/logo/Emblem_of_Ministry_of_Education_and_Science_of_Russia.png';

const FederalLawPage = () => {

    React.useEffect(() => {

        document.title = "Федеральные законы";

    }, []);

    return (
        <div className="content__block">
            <h2 className='content__title'>Федеральные законы</h2>
            <div className='--align-center'>
                <img className='image' src={imageLogo} width='100' alt={"Министерство просвещения Российской Федерации"}/>
                <p className='content__caption'>Министерство просвещения Российской Федерации</p>
            </div>
            <p>
                Министерство просвещения Российской Федерации (Минпросвещения России) является федеральным органом исполнительной власти, образованным в соответствии с Указом Президента Российской Федерации от 15 мая 2018 г. № 215 «О структуре федеральных органов исполнительной власти».
            </p>
            <p>
                Минпросвещения России реализует функции по выработке и реализации государственной политики и нормативно-правовому регулированию в сфере общего образования, среднего профессионального образования и соответствующего дополнительного профессионального образования, профессионального обучения, дополнительного образования детей и взрослых, воспитания, опеки и попечительства в отношении несовершеннолетних граждан, социальной поддержки и социальной защиты обучающихся, а также функции по оказанию государственных услуг и управлению государственным имуществом в сфере общего образования, среднего профессионального образования и соответствующего дополнительного профессионального образования, профессионального обучения, дополнительного образования детей и взрослых, воспитания.
            </p>
            <p>
                Минпросвещения России не имеет в своей структуре как представительств за рубежом, так и территориальных органов в субъектах Российской Федерации.
            </p>
            <MyLink
                className={"link --type-pdf-icon"}
                href={"/files/normativ_documents/Об образовании в Российской Федерации.pdf"}
                text={"Федеральный закон от 29.12.2012 N 273-ФЗ (ред. от 14.07.2022) \"Об образовании в Российской Федерации\" (с изм. и доп., вступ. в силу с 25.07.2022)"}
            />
            <p>
                Все нормативные правовые акты на <MyLink href={"https://docs.edu.gov.ru"} text={"официальном сайте Министерства просвещения Российской Федерации."} />
            </p>

        </div>
    )

}

export default FederalLawPage;