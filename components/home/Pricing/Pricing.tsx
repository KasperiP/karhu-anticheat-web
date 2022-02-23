import Link from 'next/link'
import { useContext } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { IoIosCheckmark } from 'react-icons/io'
import LanguageContext from '../../../context/LanguageContext'
import styles from './Pricing.module.scss'

const Pricing = () => {
    const { t } = useContext(LanguageContext)

    return (
        <div className={styles.container} id="pricing">
            <h2>{t.pricing.card_pricing}</h2>
            <p>{t.pricing.card_pricing_subtitle}</p>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                    <h2>
                        {t.pricing.card1.desc_title_start}{' '}
                        <strong>{t.pricing.card1.desc_title_highlight}</strong>?
                    </h2>
                    <p>
                        {t.pricing.card1.desc_subtitle_start}
                        <br />
                        <br />
                        {t.pricing.card1.desc_subtitle_end}
                    </p>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.outTitle}>
                        <h2>{t.pricing.card2.title}</h2>
                    </div>
                    <div className={`${styles.card} ${styles.trial}`}>
                        <div className={styles.cardTitle}>
                            <h2>{t.pricing.card2.desc_title}</h2>
                            <span>
                                <h3>{t.pricing.card2.price}</h3>
                                <p>{t.pricing.card2.desc_duration}</p>
                            </span>
                        </div>
                        <div className={styles.cardContent}>
                            <div>
                                <p>{t.pricing.card_plan_includes}</p>
                                {t.pricing.card2.features.map(
                                    (feature, index) => {
                                        return (
                                            <div
                                                className={styles.feature}
                                                key={index}
                                            >
                                                <span>
                                                    <IoIosCheckmark />
                                                    <p>{feature}</p>
                                                </span>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                            <div className={styles.btnContainer}>
                                <div>
                                    <Link href="/features">
                                        {t.pricing.card_plan_view_features}
                                    </Link>
                                    <AiOutlineArrowRight />
                                </div>
                                <button>{t.pricing.card2.desc_purchase}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.outTitle}>
                        <p>
                            {t.pricing.card_looking_download_start}
                            <br />
                            {t.pricing.card_looking_download_end}
                            <Link href="https://discord.gg/cMY4xKRrW4" passHref>
                                <a target="_blank"> Discord-server</a>
                            </Link>
                            !
                        </p>
                    </div>
                    <div className={`${styles.card} ${styles.premium}`}>
                        <div className={styles.cardTitle}>
                            <h2>{t.pricing.card3.desc_title}</h2>
                            <span>
                                <h3>{t.pricing.card3.price}</h3>
                                <p>{t.pricing.card3.desc_duration}</p>
                            </span>
                        </div>
                        <div className={styles.cardContent}>
                            <div>
                                <p>{t.pricing.card_plan_includes}</p>
                                {t.pricing.card3.features.map(
                                    (feature, index) => {
                                        return (
                                            <div
                                                className={styles.feature}
                                                key={index}
                                            >
                                                <span>
                                                    <IoIosCheckmark />
                                                    <p>{feature}</p>
                                                </span>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                            <div className={styles.btnContainer}>
                                <div>
                                    <Link href="/features">
                                        {t.pricing.card_plan_view_features}
                                    </Link>
                                    <AiOutlineArrowRight />
                                </div>
                                <button>{t.pricing.card3.desc_purchase}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
