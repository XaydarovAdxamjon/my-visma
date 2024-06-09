import mn from "./main.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Main() {
    return (
        <div className={mn.main}>
            <div className={mn.container}>
                <div className={mn.left__main}>
                    <h1>Тавимский морской порт VISMA</h1>
                    <p className={mn.text__info}>Vel posuere nibh odio placerat massa vel tellus tortor. Varius eget nunc scelerisque etiam felis facilisi ante viverra sem. Nunc eros elementum.</p>
                    <p className={mn.info}>о компании</p>
                    <FontAwesomeIcon className={mn.main__icon} icon={faArrowRight} />
                </div>
                <div className={mn.right__main}>
                    <div className={mn.main__box}>
                        <div className={mn.text1}>услуги</div>
                        <div className={mn.text2}>Погрузочно-разгрузочная деятельность</div>
                    </div>
                    <div className={mn.main__box}>
                        <div className={mn.text1}>услуги</div>
                        <div className={mn.text2}>Хранение <br /> грузов</div>
                    </div>
                    <div className={mn.main__box}>
                        <div className={mn.text1}>услуги</div>
                        <div className={mn.text2}>Складские <br /> операции</div>
                    </div>
                    <div className={mn.main__box}>
                        <div className={mn.text1}>услуги</div>
                        <div className={mn.text2}>Швартовые <br /> операции</div>
                        </div>
                    </div>

                </div>
            </div>
    )
}
