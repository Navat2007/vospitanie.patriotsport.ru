import React, {Component} from 'react';

import imageQR from '../../images/qr-codes/kod-sportivnye-subboty.jpg';

export default class SportsSaturdaysPage extends Component {

    render() {
        return (
            <div className="content__block">
                <h2 className="content__title">Спортивные субботы</h2>
                <p>
                    «Спортивные субботы» — это проект Департамента образования и науки города Москвы, который стартовал
                    в
                    2016-2017 учебном году.
                </p>
                <p>
                    Физическая активность, увлекательные путешествия в мир спорта и логических игр, встречи с известными
                    спортсменами, посещение общегородских физкультурно-спортивных фестивалей и праздников – все это
                    «Спортивные
                    субботы».
                </p>
                <p>
                    Участники «Спортивных суббот» смогут проявить себя в конкурсах и общедоступных соревнованиях,
                    поближе
                    познакомиться с самыми разными видами спорта, а также узнать об их правилах и особенностях.
                </p>
                <p>
                    Применить полученные знания на практике можно будет на специальных семинарах и мастер-классах,
                    которые
                    проведут известные тренеры и спортсмены.
                </p>
                <p>
                    Помимо занятий, участников ожидают увлекательные экскурсии на значимые спортивные объекты города и
                    соревнования, где можно будет в полной мере продемонстрировать культуру болельщика и активно
                    поддержать
                    любимую команду.
                </p>
                <p>
                    Стать участником мероприятий может любой желающий, достаточно пройти электронную регистрацию на
                    сайте <a
                    className="link" rel="noopener noreferrer nofollow" target="_blank" href="http://sport.educom.ru/">Субботы
                    московского
                    школьника.</a>
                </p>
                <p>
                    Проект ориентирован на школьников разных возрастов и их родителей, предусмотрены разные формы
                    посещения:
                    индивидуальные, семейные. Занятия бесплатные.
                </p>
                <p>Информация о мероприятиях Проекта размещена на сайте Департамента образования и науки города Москвы в
                    разделе <a className="link" rel="noopener noreferrer nofollow" target="_blank" href="http://sport.educom.ru/">Субботы
                        московского школьника.</a></p>
                <p>Следите за расписанием. Ждем вас на проекте «Спортивные субботы»!</p>
                <p>
                    Куратор проекта «Спортивные субботы» — Филюшкина Екатерина Игоревна FilyushkinaEI@)edu.mos.ru
                    <a className="link" rel="noopener noreferrer nofollow" target="_blank"
                       href="mailto:FilyushkinaEI@)edu.mos.ru">FilyushkinaEI@)edu.mos.ru</a>
                    <img className="image" src={imageQR} alt="qrcode"/>
                </p>
            </div>
        )
    }

}