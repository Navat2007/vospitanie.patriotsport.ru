import React from 'react';
import MyLink from '../../../components/link/link.component';

import imageLogo from '../../../images/logo/logo-DOMN.png';

const OrderDonmPage = () => {

    React.useEffect(() => {

        document.title = "Приказы ДОНМ";

    }, []);

    return (
        <div className="content__block">
            <h2 className='content__title'>Приказы ДОНМ</h2>
            <div className='--align-center'>
                <img className='image' src={imageLogo} width='100' alt={"Департамент образования и науки города Москвы"} />
                <p className='content__caption'>Департамент образования и науки города Москвы</p>
            </div>
            <p>
                Департамент осуществляет государственное управление и проводит государственную политику в сфере образования с учетом региональных особенностей города Москвы и в интересах жителей города Москвы, отвечает за реализацию конституционного права граждан на образование. Ведомство организует и предоставляет услуги в области дошкольного, начального, основного, среднего, дополнительного, среднего профессионального и высшего образования.
            </p>
            <ul className='list --type-empty'>
                <li>
                    <MyLink
                        className={"link --type-pdf-icon"}
                        href={"/files/normativ_documents/Постановление Правительства Москвы от 27 сентября 2011.pdf"}
                        text={"Постановление Правительства Москвы от 27 сентября 2011 г. № 447-ПП «Об утверждении Положения о Департаменте образования и науки города Москвы» (с изменениями на 07.09.2021)»"}
                    />
                </li>
                <li>
                    <MyLink
                        className={"link --type-pdf-icon"}
                        href={"/files/normativ_documents/Приказ Департамента образования и науки города Москвы от 26 июля 2022.pdf"}
                        text={"Приказ Департамента образования и науки города Москвы от 26 июля 2022 г. № 625 «О Регламенте Департамента образования и науки города Москвы» "}
                    />
                </li>
            </ul>
            <p>
                Все нормативные правовые акты на <MyLink href={"https://www.mos.ru/donm/documents/normativnye-pravovye-akty/"} text={"официальном сайте Мэра Москвы."} />
            </p>
        </div>
    )

}

export default OrderDonmPage;