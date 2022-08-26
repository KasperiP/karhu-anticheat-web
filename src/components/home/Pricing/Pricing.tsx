import Link from 'next/link'
import { useContext, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { IoIosCheckmark } from 'react-icons/io'
import LanguageContext from '../../../context/LanguageContext'
import { fetchPostJSON } from '../../../lib/api-helpers'
import getStripe from '../../../lib/stripe/get-stripejs'
import styles from './Pricing.module.scss'

const Pricing = () => {
    const { t } = useContext(LanguageContext)

    const [loading, setLoading] = useState<'premium' | 'trial' | null>(null)

    const handlePurchase = async (item: 'premium' | 'trial') => {
        setLoading(item)
        // Create a Checkout Session.
        const response = await fetchPostJSON('/api/payments/checkout', {
            item,
        })

        if (response.statusCode === 500) {
            console.error(response.message)
            return
        }

        // Redirect to Checkout.
        const stripe = await getStripe()
        const { error } = await stripe!.redirectToCheckout({
            // Make the id field from the Checkout Session creation API response
            // available to this file, so you can provide it as parameter here
            // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
            sessionId: response.id,
        })
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
        console.warn(error.message)
        setLoading(null)
    }

    return (
        <div className={styles.container} id="pricing">
            <h2>{t.home_pricing.card_pricing}</h2>
            <p>{t.home_pricing.card_pricing_subtitle}</p>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                    <h2>
                        {t.home_pricing.card1.desc_title_start}{' '}
                        <strong>
                            {t.home_pricing.card1.desc_title_highlight}
                        </strong>
                        ?
                    </h2>
                    <p>
                        {t.home_pricing.card1.desc_subtitle_start}
                        <br />
                        <br />
                        {t.home_pricing.card1.desc_subtitle_end}
                    </p>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.outTitle}>
                        <h2>{t.home_pricing.card2.title}</h2>
                    </div>
                    <div className={`${styles.card} ${styles.trial}`}>
                        <div className={styles.cardTitle}>
                            <h2>{t.home_pricing.card2.desc_title}</h2>
                            <span>
                                <h3>{t.home_pricing.card2.price}</h3>
                                <p>{t.home_pricing.card2.desc_duration}</p>
                            </span>
                        </div>
                        <div className={styles.cardContent}>
                            <div>
                                <p>{t.home_pricing.card_plan_includes}</p>
                                {t.home_pricing.card2.features.map(
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
                                        {t.home_pricing.card_plan_view_features}
                                    </Link>
                                    <AiOutlineArrowRight />
                                </div>
                                <button onClick={() => handlePurchase('trial')}>
                                    {loading === 'trial'
                                        ? 'Loading...'
                                        : t.home_pricing.card2.desc_purchase}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.outTitle}>
                        <p>
                            {t.home_pricing.card_looking_download_start}
                            <br />
                            {t.home_pricing.card_looking_download_end}
                            <Link href="https://discord.gg/cMY4xKRrW4" passHref>
                                <a target="_blank"> Discord-server</a>
                            </Link>
                            !
                        </p>
                    </div>
                    <div className={`${styles.card} ${styles.premium}`}>
                        <div className={styles.cardTitle}>
                            <h2>{t.home_pricing.card3.desc_title}</h2>
                            <span>
                                <h3>{t.home_pricing.card3.price}</h3>
                                <p>{t.home_pricing.card3.desc_duration}</p>
                            </span>
                        </div>
                        <div className={styles.cardContent}>
                            <div>
                                <p>{t.home_pricing.card_plan_includes}</p>
                                {t.home_pricing.card3.features.map(
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
                                        {t.home_pricing.card_plan_view_features}
                                    </Link>
                                    <AiOutlineArrowRight />
                                </div>
                                <button
                                    onClick={() => handlePurchase('premium')}
                                >
                                    {loading === 'premium'
                                        ? 'Loading...'
                                        : t.home_pricing.card3.desc_purchase}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
