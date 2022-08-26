import Image from 'next/image'
import { useContext } from 'react'
import LanguageContext from '../../../context/LanguageContext'
import styles from './Sponsor.module.scss'

const Sponsor = () => {
    const { t } = useContext(LanguageContext)

    return (
        <section className={styles.container}>
            <div className={styles.sponsor}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/tietokettu.svg"
                        alt="Tietokettu.net logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div>
                    <h2>{t.home_sponsor.title}</h2>
                    <p>{t.home_sponsor.subtitle}</p>
                </div>
                <div className={styles.btnContainer}>
                    <button
                        onClick={() =>
                            window.open('https://www.tietokettu.net')
                        }
                    >
                        {t.home_sponsor.button}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Sponsor
