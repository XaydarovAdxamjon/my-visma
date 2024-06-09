
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import logo from "../../rasmlar/footer__logo.png"
import Image from "next/image"
import "./footer.css"


export default function Footer() {
    return (
        <>
            <div className="footer">

                <div className="footer__nav">
                    <div className="container">


                        <div className="footer__nav__adress">
                            <FontAwesomeIcon style={{ height: '30px', marginRight: '15px' }} icon={faLocationDot} />
                            <p>123456, г. Тавима, ул. Морская, д. 21</p>
                        </div>
                        <Image src={logo} />
                        <div className="footer__nav__link">
                            <FontAwesomeIcon icon={faPhone} />
                            <p>+7 (123) 456-67-89</p>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>order@visma.ru</p>
                        </div>
                    </div>
                </div>
                <div className="footer__info">
                    <div className="container">
                        <div className="footer__info__items">
                            <div className="footer__info__item">
                                <div className="item__tittle">
                                    информация о юр. лице
                                </div>
                                <div className="tittle__info">
                                    ОГРН 11111111111111111
                                </div>
                                <div className="tittle__info">
                                    ИНН 2222222222222
                                </div>
                                <div className="tittle__info">
                                    КПП 3333333333333
                                </div>
                                <div className="tittle__info">
                                    ОКПО 44444444444 ОКВЭД 52.24
                                </div>
                                <div className="tittle__info">
                                    ОКТМО 5555555555555
                                </div>
                            </div>
                            <div className="footer__info__item">
                                <div className="item__tittle">
                                    Закупки
                                </div>
                                <div className="tittle__info">
                                    Нормативные документы
                                </div>
                                <div className="tittle__info">
                                    Закупки на VISMA Order
                                </div>
                                <div className="tittle__info">
                                    КПП 3333333333333
                                </div>
                                <div className="tittle__info">
                                    Закупки на VISMA Tender
                                </div>
                            </div>
                            <div className="footer__info__item">
                                <div className="item__tittle">
                                    акционерам
                                </div>
                                <div className="tittle__info">
                                    Устав VISMA
                                </div>
                                <div className="tittle__info">
                                    Свидетельства госрегистрации
                                </div>
                                <div className="tittle__info">
                                    Список аффилированных лиц
                                </div>
                                <div className="tittle__info">
                                    Информация
                                </div>
                                <div className="tittle__info">
                                    Отчеты
                                </div>
                            </div>
                            <div className="footer__info__item">
                                <div className="item__tittle">
                                    о компании
                                </div>
                                <div className="tittle__info">
                                    Порт сегодня
                                </div>
                                <div className="tittle__info">
                                    Характеристики порта
                                </div>
                                <div className="tittle__info">
                                    История
                                </div>
                                <div className="tittle__info">
                                    Дипломы и награды
                                </div>
                                <div className="tittle__info">
                                    Транспортная безопасность
                                </div>
                                <div className="tittle__info">
                                    Экология
                                </div>
                                <div className="tittle__info">
                                    Правовая информация
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}