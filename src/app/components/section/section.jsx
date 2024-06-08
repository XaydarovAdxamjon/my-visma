import './section.css'

export default function Section(){
    return(
        <>
            <div className="section">
                <div className="container">
                    <div className="left__section">
                        <h1>Услуги</h1>
                        <div className="pdf">
                            <div className="pdf__text">
                                <p>Тарифы на услуги по обеспечению <br /> контроля доступа на территорию  <br /> VISMA на 2022 год</p>
                            </div>
                            <div className="pdf__button">
                                <button>
                                    PDF
                                </button>
                            </div>

                        </div>
                        <div className="pdf">
                            <div className="pdf__text">
                                <p>Условия определения <br /> цены договора и тарифы на работы</p>
                            </div>
                            <div className="pdf__button">
                                <button>
                                    PDF
                                </button>
                            </div>

                        </div>
                        <div className="pdf">
                            <div className="pdf__text">
                                <p className='texts'>Договор перевалки <br />  (типовая форма)</p>
                            </div>
                            <div className="pdf__button">
                                <button>
                                    PDF
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="right__section">
                        <div className="section__box">
                            <div className="text1">
                            услуги
                            </div>
                            <div className="text2">
                            Хранение грузов
                            </div>
                        </div>
                        <div className="section__box">
                            <div className="text1">
                            услуги
                            </div>
                            <div className="text2">
                            Швартовые операции
                            </div>
                        </div>
                        <div className="section__box">
                            <div className="text1">
                            услуги
                            </div>
                            <div className="text2">
                            Складские операции
                            </div>
                        </div>
                        <div className="section__box">
                            <div className="text1">
                            услуги
                            </div>
                            <div className="text2">
                            Агентское обслуживание судов
                            </div>
                        </div>
                        <div className="section__box">
                            <div className="text1">
                            услуги
                            </div>
                            <div className="text2">
                            Буксировка / сопровождение судов
                            </div>
                        </div>
                        <div className="section__box">
                            <div className="text1">
                            услуги
                            </div>
                            <div className="text2">
                            Погрузочно-разгрузочная деятельность
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}