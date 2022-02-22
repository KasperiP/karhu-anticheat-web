import Image from 'next/image'
import { useContext } from 'react'
import LanguageContext from '../../../context/LanguageContext'
import styles from './Hero.module.scss'

const Hero = () => {
    const { t } = useContext(LanguageContext)

    return (
        <section className={styles.container}>
            <div>
                <h2>{t.hero.name}</h2>
                <h1>
                    {t.hero.title_start} <span>{t.hero.title_highlight}</span>{' '}
                    {t.hero.title_end}
                </h1>
                <p>{t.hero.subtitle}</p>
                <div className={styles.buttons}>
                    <button>{t.hero.button_left}</button>
                    <button
                        onClick={() =>
                            window.open('https://discord.gg/cMY4xKRrW4')
                        }
                    >
                        {t.hero.button_right}
                    </button>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    priority
                    src="/hero.svg"
                    alt="Hero image"
                    objectFit="contain"
                    layout="fill"
                />
            </div>
        </section>
    )
}

export default Hero
