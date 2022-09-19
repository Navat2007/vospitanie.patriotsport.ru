import React, {Component} from 'react';

import imageVK from '../images/icons/vk.png';
import imageOK from '../images/icons/ok.svg';
import imageTelegram from '../images/icons/tme.png';
import imageYoutube from '../images/icons/youtube.png';
import imageLogo from '../images/logo/logo-patriot-sport.svg';

export default class ContactsPage extends Component {

    render() {
        return (
            <div className="content__block">
                <h2 className="content__title">Контактная информация</h2>

                <div className="contact__card">
                    <div className="contact__info">
                        <p className="contact__caption">Единый номер телефона Центра</p>
                        <a className="contact__link" href="tel:84953692523" rel="noopener noreferrer nofollow">
                            <span className="mdi mdi-phone"/> +7 495 369 25 23
                        </a>
                        <a className="contact__link" href="mailto:PatriotSport@edu.mos.ru">
                            <span className="mdi mdi-email-outline"/> PatriotSport@edu.mos.ru
                        </a>
                        <a className="contact__link" href="https://patriotsport.moscow/">
                            <span className="mdi mdi-web"/> patriotsport.moscow
                        </a>
                        <ul className="social --place-contact">
                            <li>
                                <a className="social__icon-link" href="https://vk.com/patriotrsport" target="_blank"
                                   rel="noopener noreferrer nofollow" aria-label="ВКонтакте">
                                    <img src={imageVK} alt="ВКонтакте"/>
                                </a>
                            </li>
                            <li>
                                <a className="social__icon-link" href="https://ok.ru/patriotsport" target="_blank"
                                   rel="noopener noreferrer nofollow"
                                   aria-label="Одноклассники"><img src={imageOK} alt="Одноклассники"/>
                                </a>
                            </li>
                            <li>
                                <a className="social__icon-link" href="https://t.me/patriotsport" target="_blank"
                                   rel="noopener noreferrer nofollow"
                                   aria-label="Телеграмм"><img src={imageTelegram} alt="Телеграмм"/>
                                </a>
                            </li>
                            <li>
                                <a className="social__icon-link"
                                   href="https://www.youtube.com/c/МосковскийцентрПатриотСпорт"
                                   target="_blank" rel="noopener noreferrer nofollow" aria-label="YouTube"><img
                                    src={imageYoutube} alt="YouTube"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a className="contact__link --logo" href="https://patriotsport.moscow/" target="_blank"
                       rel="noopener noreferrer nofollow">
                        <img className="logo" src={imageLogo} alt="Логотип Патриот.Спорт"/>
                    </a>
                </div>
            </div>
        )
    }

}