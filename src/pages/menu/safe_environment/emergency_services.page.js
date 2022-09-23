import React from 'react';
import MyLink from '../../../components/link/link.component';

const EmergencyServicesPage = () => {

    React.useEffect(() => {

        document.title = "Контакты экстренных служб";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">Контакты экстренных служб</h2>
            <div className="table --theme-standart">
                <div className="table__wrap">
                    <table>
                        <tbody>
                            <tr>
                                <td>ЕДИНЫЙ НОМЕР ЭКСТРЕННЫХ СЛУЖБ (со стационарных и мобильных телефонов)</td>
                                <td>
                                    <MyLink href={"tel:112"} text={"112"} />
                                </td>
                            </tr>
                            <tr>
                                <td>ПОЖАРНАЯ ОХРАНА (со стационарных и мобильных телефонов)</td>
                                <td>
                                    <MyLink href={"tel:101"} text={"101"} />
                                </td>
                            </tr>
                            <tr>
                                <td>ПОЛИЦИЯ (со стационарных и мобильных телефонов)</td>
                                <td>
                                    <MyLink href={"tel:102"} text={"102"} />
                                </td>
                            </tr>
                            <tr>
                                <td>СКОРАЯ МЕДИЦИНСКАЯ ПОМОЩЬ (со стационарных и мобильных телефонов)</td>
                                <td>
                                    <MyLink href={"tel:103"} text={"103"} />
                                </td>
                            </tr>
                            <tr>
                                <td>АВАРИЙНАЯ ГАЗОВАЯ СЛУЖБА (со стационарных и мобильных телефонов)</td>
                                <td>
                                    <MyLink href={"tel:104"} text={"104"} />
                                </td>
                            </tr>
                            <tr>
                                <td>ЕДИНАЯ СПРАВОЧНАЯ СЛУЖБА ГОРОДА МОСКВЫ</td>
                                <td>
                                    <MyLink href={"tel:84957777777"} text={"8 (495) 777-77-77"} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )

}

export default EmergencyServicesPage;