import React from 'react';
import Accordion from "../../components/accordion/accordion.component";
import MyLink from '../../components/link/link.component';

import online_dom from '../../images/link_dom_online.png';
import mos_ru from '../../images/link_mos_ru.png';

const AdditionalEducationPage = () => {

    React.useEffect(() => {

        document.title = "Дополнительное образование";

    }, []);

    return (
        <div className="content__block">
            <h2 className="content__title">Дополнительное образование</h2>
            <p>
                <b>Дополнительное образование </b>
                детей и взрослых направлено на формирование и развитие творческих способностей детей и взрослых, удовлетворение их индивидуальных потребностей в интеллектуальном, нравственном и физическом совершенствовании, формирование культуры здорового и безопасного образа жизни, укрепление здоровья, а также на организацию их свободного времени. Дополнительное образование детей обеспечивает их адаптацию к жизни в обществе, профессиональную ориентацию, а также выявление и поддержку детей, проявивших выдающиеся способности. Дополнительные общеобразовательные программы для детей должны учитывать возрастные и индивидуальные особенности детей.
            </p>
            <p>
                Программы дополнительного образования реализуются на базе образовательных учреждений города Москвы.
            </p>
            <h3 className="content__caption --place-tab">
                Учреждения дополнительного образования
            </h3>
            <Accordion title={"САО"}>
                <ul className="list">
                    <li>
                        ГБОУ ДО ЦРТДЮ «Гермес» (<MyLink href={"https://germes.mskobr.ru"} text={"https://germes.mskobr.ru"} />)
                    </li>
                    <li>
                        ГБОУ ДО ЦТР и МЭО «Радость» (<MyLink href={"https://radost.mskobr.ru"} text={"https://radost.mskobr.ru"} />)
                    </li>
                </ul>
            </Accordion>
            <Accordion title={"СВАО"}>
                <ul className="list">
                    <li>
                        ГБОУДО ЦДТ «Свиблово» (<MyLink href={"https://centrsviblovo.mskobr.ru/#/"} text={"https://centrsviblovo.mskobr.ru/#/"} />)
                    </li>
                    <li>
                        ГБОУ ДО ЦДЮТ «Бибирево» (<MyLink href={"https://bibirevo.mskobr.ru"} text={"https://bibirevo.mskobr.ru"} />)
                    </li>
                </ul>
            </Accordion>
            <Accordion title={"ВАО"}>
                <ul className="list">
                    <li>
                        ГБОУДО им. А.В. Косарева  (<MyLink href={"https://crtd.mskobr.ru/#/"} text={"https://crtd.mskobr.ru/#/"} />)
                    </li>
                    <li>
                        ГБОУДО «ДТДиМ «Преображенский» (<MyLink href={"https://dtdimvouo.mskobr.ru/#/"} text={"https://dtdimvouo.mskobr.ru/#/"} />)
                    </li>
                    <li>
                        ГБОУДО ДТДИМ «Восточный» (<MyLink href={"https://vostok.mskobr.ru"} text={"https://vostok.mskobr.ru"} />)
                    </li>
                </ul>
            </Accordion>
            <Accordion title={"ЮВАО"}>
                <ul className="list">
                    <li>
                        ГБОУДО ДТДиМ имени А.П.Гайдара (<MyLink href={"https://dpgaidar.mskobr.ru/#/"} text={"https://dpgaidar.mskobr.ru/#/"} />)
                    </li>
                </ul>
            </Accordion>
            <Accordion title={"ЮАО"}>
                <ul className="list">
                    <li>
                        ГБОУ ДО ЦВР «На Сумском» (<MyLink href={"https://na-sumscom.mskobr.ru"} text={"https://na-sumscom.mskobr.ru"} />)
                    </li>
                    <li>
                        ГБОУ ДО ДЮЦ «Виктория» (<MyLink href={"https://viktoria.mskobr.ru"} text={"https://viktoria.mskobr.ru"} />)
                    </li>
                    <li>
                        ГБОУДО МДЮЦ ЭКТ (<MyLink href={"https://mducekt.mskobr.ru"} text={"https://mducekt.mskobr.ru"} />)
                    </li>
                    <li>
                        ГБОУДО ЦДТ Замоскворечье (<MyLink href={"https://moskvorechie.mskobr.ru/#/"} text={"https://moskvorechie.mskobr.ru/#/"} />)
                    </li>
                </ul>
            </Accordion>
            <Accordion title={"ЮЗАО"}>
                <ul className="list">
                    <li>
                        ГБОУ ДО ДТДиМ «Севастополец» (<MyLink href={"https://dpish.mskobr.ru"} text={"https://dpish.mskobr.ru"} />)
                    </li>
                </ul>
            </Accordion>
            <Accordion title={"ЗАО"}>
                <ul className="list">
                    <li>
                        ГБОУ ДО ЦДТ «Ново-Переделкино» (<MyLink href={"https://cdtnp.mskobr.ru"} text={"https://cdtnp.mskobr.ru"} />)
                    </li>
                    <li>
                        ГБОУДО ДТДМ «Неоткрытые острова» (<MyLink href={"https://dtdim.mskobr.ru/#/"} text={"https://dtdim.mskobr.ru/#/"} />)
                    </li>
                    <li>
                        ГБОУДО ЦВР «Синегория» (<MyLink href={"https://sinegoriya.mskobr.ru"} text={"https://sinegoriya.mskobr.ru"} />)
                    </li>
                </ul>
            </Accordion>
            <Accordion title={"СЗАО"}>
                <ul className="list">
                    <li>
                        ГБОУ ДО ДТДМ «Хорошево» (<MyLink href={"https://dtim.mskobr.ru/#/"} text={"https://dtim.mskobr.ru/#/"} />)
                    </li>
                    <li>
                        ГАУДО «Домисолька»  (<MyLink href={"https://cdtt.mskobr.ru/#/"} text={"https://cdtt.mskobr.ru/#/"} />)
                    </li>
                    <li>
                        ГБОУ ДО ЦДТ «Строгино» (<MyLink href={"https://strogino.mskobr.ru/#/"} text={"https://strogino.mskobr.ru/#/"} />)
                    </li>
                </ul>
            </Accordion>
            <Accordion title={"ЦАО"}>
                <ul className="list">
                    <li>
                        ГБОУ ДО ЦРТДЮ «Пресня»  (<MyLink href={"https://presnia.mskobr.ru/#/"} text={"https://presnia.mskobr.ru/#/"} />)
                    </li>
                    <li>
                        ГБОУ ДО ДТДМ на Миусах (<MyLink href={"https://cdt.mskobr.ru/#/"} text={"https://cdt.mskobr.ru/#/"} />)
                    </li>
                    <li>
                        ГБОУДО «ДДТ на Таганке» (<MyLink href={"https://ddt-taganka.mskobr.ru/#/"} text={"https://ddt-taganka.mskobr.ru/#/"} />)
                    </li>
                    <li>
                        ГБОУ ДО ДТДиМ «На Стопани» (<MyLink href={"https://na-stopani.mskobr.ru/#/"} text={"https://na-stopani.mskobr.ru/#/"} />)
                    </li>
                    <li>
                        ГБОУДО ЦЭВД (<MyLink href={"https://cevdcao.mskobr.ru/#/"} text={"https://cevdcao.mskobr.ru/#/"} />)
                    </li>
                </ul>
            </Accordion>
            <Accordion title={"ЗелАО"}>
                <ul className="list">
                    <li>
                        ГБОУДО ЗДТДиМ (<MyLink href={"https://dvtdim.mskobr.ru/#/"} text={"https://dvtdim.mskobr.ru/#/"} />)
                    </li>
                </ul>
            </Accordion>
            <a className='link' href="https://dom.educom.ru/" target='_blank' rel='noreferrer noopener nofollow'>
                <img src={online_dom} alt="Дополнительное образование Москвы Онлайн" className="image" />
            </a>
            <a className='link' href="./files/additional_education/алгоритм регистрации на программу дополнительного образования мос.ру.pdf" rel='noopener nofollow noreferrer' target='_blank'>
                <img src={mos_ru} alt="Инструкция по записи на программы, реализуемые учреждениями дополнительного образования" className="image" />
            </a>
        </div>
    )

}

export default AdditionalEducationPage;