'use client'
import cm from './company.module.css'
import { useRouter } from 'next/navigation';

export default function Company() {
    const router =useRouter()
    return (
        <>
            <div className={cm.company}>
                <div className={cm.container}>
                    <div className={cm.Comapany__info}>
                        <h2>О компании</h2>
                        <div className={cm.info__text}>
                            <p>Tristique orci consectetur sit felis. Sed ac auctor tellus lobortis. Enim non turpis nulla nec a sapien sit amet molestie. Et id malesuada gravida sit volutpat. Volutpat sed lectus elementum diam neque facilisis in. Convallis nibh sem in viverra quis. Interdum pharetra.</p>
                            <p>
                                Libero nunc porttitor id mi convallis ultricies convallis erat. At sagittis nisi at in diam sit.
                            </p>
                            <ul>
                                <li>Vivamus tincidunt non lectus odio magna semper odio risus.  . </li>
                                <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                                <li>Vivamus tincidunt non lectus odio magna semper odio risus. Vivamus tincidunt non lectus odio magna semper odio risus</li>
                                <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                                <li>Vivamus tincidunt non lectus odio magna semper odio risus. Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                            </ul>
                            <p>
                                Quam accumsan mauris enim quam. A commodo ultrices urna vitae nibh rhoncus at nisl. Duis nibh libero ut enim. Metus aliquam cursus molestie sapien risus. Suspendisse volutpat.
                            </p>
                            <ul>
                                <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                                <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                                <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                                <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={cm.Company__video}>
                        <iframe width="526" height="350" src="https://www.youtube.com/embed/rglFR-E0aco?si=h4EDNwlkIiY4-hXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div onClick={()=> router.push('./register')} className={cm.company__info__box}>
                            <div className={cm.box__text1}>Запрос ставки и условий погрузочно-разгрузочных работ</div>
                            <div className={cm.box__text2}>Рассчитайте моментально стоимость полных портовых услуг в порту VISMA</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}