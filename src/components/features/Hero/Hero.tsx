import { useRouter } from 'next/router'
import { useContext } from 'react'
import LanguageContext from '../../../context/LanguageContext'
import styles from './Hero.module.scss'

const Hero = () => {
    const { t } = useContext(LanguageContext)
    const router = useRouter()

    return (
        <section className={styles.container}>
            <h2>{t.features_hero.name}</h2>
            <h1>
                {t.features_hero.title_start}{' '}
                <span className="gradientText">
                    {t.features_hero.title_highlight}
                </span>{' '}
                {t.features_hero.title_end}
            </h1>
            <p>
                {t.features_hero.subtitle_start}
                <strong> {t.features_hero.subtitle_highlight} </strong>
                {t.features_hero.subtitle_end}
            </p>
            <div className={styles.buttons}>
                <button onClick={() => router.push('/configs/checks.yml')}>
                    {t.features_hero.button_left}
                </button>
                <button onClick={() => window.open('/configs/config.yml')}>
                    {t.features_hero.button_right}
                </button>
            </div>
        </section>
    )
}

export default Hero
