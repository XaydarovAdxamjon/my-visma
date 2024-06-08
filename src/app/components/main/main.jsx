import './main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Main() {
    return (
        <div className="main">
            <div className="container">
                <div className="left__main">
                    <h1>Тавимский морской порт VISMA</h1>
                    <p className='text__info'>Vel posuere nibh odio placerat massa vel tellus tortor. Varius eget nunc scelerisque etiam felis facilisi ante viverra sem. Nunc eros elementum.</p>
                    <p className='info'>о компании</p>
                    <FontAwesomeIcon className='main__icon' icon={faArrowRight} />
                </div>
                <div className="right__main">
                    <div className="main__box">
                        <div className="text1">услуги</div>
                        <div className="text2">Погрузочно-разгрузочная деятельность</div>
                    </div>
                    <div className="main__box">
                        <div className="text1">услуги</div>
                        <div className="text2">Хранение <br /> грузов</div>
                    </div>
                    <div className="main__box">
                        <div className="text1">услуги</div>
                        <div className="text2">Складские <br /> операции</div>
                    </div>
                    <div className="main__box">
                        <div className="text1">услуги</div>
                        <div className="text2">Швартовые <br /> операции</div>
                        </div>
                    </div>

                </div>
            </div>
    )
}
