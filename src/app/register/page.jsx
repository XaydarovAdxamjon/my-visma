"use client";
import rg from "./register.module.css";
export default function Register() {
    return (
        <>
            <div className={rg.register}>
                <div className={rg.container}>
                    <h1>Запрос ставки и условий погрузочно-разгрузочных работ</h1>

                    <div className={rg.register__inputs}>
                        <div className={rg.regsiter__items}>
                            <div className={rg.register__item}>
                                <label htmlFor="input1">Наименование груза *</label>
                                <input id="input1" type="text" />
                            </div>
                            <div className={rg.register__item}>
                                <label htmlFor="input2">Размер партии *</label>
                                <input id="input2" type="text" />
                            </div>
                        </div>
                        <div className={rg.regsiter__items}>
                            <div className={rg.register__item}>
                                <label htmlFor="input3">ед. измерения *</label>
                                <input id="input3" type="text" />
                            </div>
                            <div className={rg.register__item}>
                                <label htmlFor="input4">Направление перевозки *</label>
                                <input id="input4" type="text" />
                            </div>
                        </div>
                        <div className={rg.regsiter__items}>
                            <div className={rg.register__item}>
                                <label htmlFor="input5">Пункт назначения перевозки</label>
                                <input id="input5" type="text" />
                            </div>
                            <div className={rg.register__item}>
                                <label htmlFor="input6">Период поступления груза к перевалке</label>
                                <input id="input6" type="text" />
                            </div>
                        </div>
                        <div className={rg.regsiter__items}>
                            <div className={rg.register__item}>
                                <label htmlFor="input7">Груз поступает в порт*</label>
                                <input id="input7" type="text" />
                            </div>
                            <div className={rg.register__item}>
                                <label htmlFor="input8">Груз отправляется из порта</label>
                                <input id="input8" type="text" />
                            </div>
                        </div>
                        <div className={rg.regsiter__items}>
                            <div className={rg.register__item}>
                                <label htmlFor="input9">Размер судовой партии</label>
                                <input id="input9" type="text" />
                            </div>
                            <div className={rg.register__item}>
                                <label htmlFor="input10">Опасность груза (класс)</label>
                                <input id="input10" type="text" />
                            </div>
                        </div>
                        <div className={rg.regsiter__items}>
                            <div className={rg.register__item}>
                                <label htmlFor="input11">Размер судовой партии</label>
                                <input id="input11" type="text" />
                            </div>
                            <div className={rg.register__item}>
                                <label for="file-upload">Прикрепить файл</label>
                                <input type="file" id={rg.input12} />
                            </div>
                        </div>

                    </div>

                    <div className={rg.register__options}>
                        <h2>
                            Просим сообщить:
                        </h2>

                        <form>
                            <label>
                                <input type="checkbox" /> Ставку ПРР
                            </label>
                            <label>
                                <input type="checkbox" /> Срок технологического накопления груза
                            </label>
                            <label>
                                <input type="checkbox" /> Ставку хранения груза сверх срока технологического накопления
                            </label>
                            <label>
                                <input type="checkbox" /> Возможность приёма и перевалки груза в указанные сроки
                            </label>
                        </form>

                        <div className={rg.register__info}>
                            <h2>Информация для обратной связи:</h2>
                            <div className={rg.regsiter__items}>
                                <div className={rg.register__item}>
                                    <label htmlFor="input1">Имя, фамилия</label>
                                    <input id="input1" type="text" />
                                </div>
                                <div className={rg.register__item}>
                                    <label htmlFor="input2">Название компании *</label>
                                    <input id="input2" type="text" />
                                </div>
                            </div>
                            <div className={rg.regsiter__items}>
                                <div className={rg.register__item}>
                                    <label htmlFor="input1">Номер телефона/факса</label>
                                    <input id="input1" type="text" />
                                </div>
                                <div className={rg.register__item}>
                                    <label htmlFor="input2">Адрес эл. почты *</label>
                                    <input id="input2" type="email" />
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}