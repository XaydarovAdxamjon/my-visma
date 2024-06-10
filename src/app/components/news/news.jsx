import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import news1 from "../../rasmlar/news1.svg"
import news2 from "../../rasmlar/news2.png"
import news3 from "../../rasmlar/news3.png"
import news4 from "../../rasmlar/news4.png"
import Image from "next/image";
import st from './news.module.css'


export default function News() {
    return (
        <>
            <div className={st.news}>
                <div className={st.container}>
                    <div className={st.news__navbar}>
                        <h3>Новости</h3>
                        <div className={st.news__navbar__text}>
                            <h3>все новости</h3>
                            <FontAwesomeIcon className={st.news__icon} icon={faArrowRight} />
                        </div>
                    </div>

                    <div className={st.news__items}>
                        <div className={st.news__item}>
                            <div className={st.news__item__img}>
                                <Image src={news1} />
                            </div>
                            <div className={st.news__item__time}>
                                20/05/22
                            </div>
                            <div className={st.news__item__title}>
                                Semper eu pulvinar eget integer
                            </div>
                            <div className={st.news__item__text}>
                                Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.
                            </div>
                        </div>
                        <div className={st.news__item}>
                            <div className={st.news__item__img}>
                                <Image src={news2} />
                            </div>
                            <div className={st.news__item__time}>
                                20/02/22
                            </div>
                            <div className={st.news__item__title}>
                                Vitae id nec nulla sit nunc cursus curabitur tempus vel enim.
                            </div>
                            <div className={st.news__item__text}>
                                Cras arcu ac commodo suspendisse commodo ipsum turpis dui. Quis pharetra malesuada eget sit egestas et integer. Suspendisse a.
                            </div>
                        </div>
                        <div className={st.news__item}>
                            <div className={st.news__item__img}>
                                <Image src={news3} />
                            </div>
                            <div className={st.news__item__time}>
                                30/12/21
                            </div>
                            <div className={st.news__item__title}>
                                Integer nisi sagittis in aliquet. Enim eget varius lacinia est a.
                            </div>
                            <div className={st.news__item__text}>
                                Lectus tempus felis pretium vitae. Tempor massa vestibulum condimentum cursus diam quam. Mattis facilisi dignissim donec eget vel.
                            </div>
                        </div>
                        <div className={st.news__item}>
                            <div className={st.news__item__img}>
                                <Image src={news4} />
                            </div>
                            <div className={st.news__item__time}>
                                29/06/21
                            </div>
                            <div className={st.news__item__title}>
                                Facilisis vitae proin quis
                            </div>
                            <div className={st.news__item__text}>
                                Iaculis diam quam velit sit nunc turpis ultricies elementum. Vitae lacinia tristique rutrum faucibus nulla quis ultricies. Risus.
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}