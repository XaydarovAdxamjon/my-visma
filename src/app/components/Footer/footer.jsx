
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import logo from "../../rasmlar/footer__logo.png"
import Image from "next/image"
import ft from './footer.module.css'


export default function Footer() {
    return (
        <>
            <div className={ft.footer}>

                <div className={ft.footer__nav}>
                    <div className={ft.container}>


                        <div className={ft.footer__nav__adress}>
                            <FontAwesomeIcon style={{ height: '30px', marginRight: '15px' }} icon={faLocationDot} />
                            <p>123456, г. Тавима, ул. Морская, д. 21</p>
                        </div>
                        <Image src={logo} />
                        <div className={ft.footer__nav__link}>
                            <FontAwesomeIcon icon={faPhone} />
                            <p>+7 (123) 456-67-89</p>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>order@visma.ru</p>
                        </div>
                    </div>
                </div>
                <div className={ft.footer__info}>
                    <div className={ft.container}>
                        <div className={ft.footer__info__items}>
                            <div className={ft.footer__info__item}>
                                <div className={ft.item__tittle}>
                                    информация о юр. лице
                                </div>
                                <div className={ft.tittle__info}>
                                    ОГРН 11111111111111111
                                </div>
                                <div className={ft.tittle__info}>
                                    ИНН 2222222222222
                                </div>
                                <div className={ft.tittle__info}>
                                    КПП 3333333333333
                                </div>
                                <div className={ft.tittle__info}>
                                    ОКПО 44444444444 ОКВЭД 52.24
                                </div>
                                <div className={ft.tittle__info}>
                                    ОКТМО 5555555555555
                                </div>
                            </div>
                            <div className={ft.footer__info__item}>
                                <div className={ft.item__tittle}>
                                    Закупки
                                </div>
                                <div className={ft.tittle__info}>
                                    Нормативные документы
                                </div>
                                <div className={ft.tittle__info}>
                                    Закупки на VISMA Order
                                </div>
                                <div className={ft.tittle__info}>
                                    КПП 3333333333333
                                </div>
                                <div className={ft.tittle__info}>
                                    Закупки на VISMA Tender
                                </div>
                            </div>
                            <div className={ft.footer__info__item}>
                                <div className={ft.item__tittle}>
                                    акционерам
                                </div>
                                <div className={ft.tittle__info}>
                                    Устав VISMA
                                </div>
                                <div className={ft.tittle__info}>
                                    Свидетельства госрегистрации
                                </div>
                                <div className={ft.tittle__info}>
                                    Список аффилированных лиц
                                </div>
                                <div className={ft.tittle__info}>
                                    Информация
                                </div>
                                <div className={ft.tittle__info}>
                                    Отчеты
                                </div>
                            </div>
                            <div className={ft.footer__info__item}>
                                <div className={ft.item__tittle}>
                                    о компании
                                </div>
                                <div className={ft.tittle__info}>
                                    Порт сегодня
                                </div>
                                <div className={ft.tittle__info}>
                                    Характеристики порта
                                </div>
                                <div className={ft.tittle__info}>
                                    История
                                </div>
                                <div className={ft.tittle__info}>
                                    Дипломы и награды
                                </div>
                                <div className={ft.tittle__info}>
                                    Транспортная безопасность
                                </div>
                                <div className={ft.tittle__info}>
                                    Экология
                                </div>
                                <div className={ft.tittle__info}>
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