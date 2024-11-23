import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import LanguageContext from '../../../context/LanguageContext'
import styles from './Hero.module.scss'

const Hero = () => {
    const { t } = useContext(LanguageContext)
    const router = useRouter()

    return (
        <section className={styles.container}>
            <div>
                <h2>{t.home_hero.name}</h2>
                <h1>
                    {t.home_hero.title_start}{' '}
                    <span className="gradientText">
                        {t.home_hero.title_highlight}
                    </span>{' '}
                    {t.home_hero.title_end}
                </h1>
                <p>
                    {t.home_hero.subtitle_start}{' '}
                    <strong>{t.home_hero.subtitle_highlight}</strong>{' '}
                    {t.home_hero.subtitle_end}
                </p>
                <div className={styles.buttons}>
                    <button
                        onClick={() => router.push('/#pricing')}
                        aria-label="View pricing"
                    >
                        {t.home_hero.button_left}
                    </button>
                    <button
                        onClick={() =>
                            window.open('https://discord.gg/cMY4xKRrW4')
                        }
                        aria-label="Join Discord"
                    >
                        {t.home_hero.button_right}
                    </button>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    priority
                    src="/hero.svg"
                    alt="Hero illustration"
                    objectFit="contain"
                    layout="fill"
                />
            </div>
        </section>
    )
}

export default Hero
