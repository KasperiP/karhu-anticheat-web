import { useContext } from 'react'
import { AiOutlineDropbox } from 'react-icons/ai'
import { BiSupport } from 'react-icons/bi'
import { BsFillGearFill } from 'react-icons/bs'
import { FaGhost } from 'react-icons/fa'
import { GiFeatheredWing, GiSwordInStone } from 'react-icons/gi'
import LanguageContext from '../../../context/LanguageContext'
import styles from './Features.module.scss'

const Features = () => {
    const { t } = useContext(LanguageContext)

    return (
        <div className={styles.wrapper}>
            <section className={styles.container}>
                <h2>{t.features.title}</h2>
                <p>{t.features.subtitle}</p>
                <div className={styles.gridContainer}>
                    <div className={styles.gridItem}>
                        <div>
                            <span>
                                <GiSwordInStone />
                            </span>
                            <h2>{t.features.list[0].title}</h2>
                        </div>
                        <p>{t.features.list[0].subtitle}</p>
                    </div>
                    <div className={styles.gridItem}>
                        <div>
                            <span>
                                <BiSupport />
                            </span>
                            <h2>{t.features.list[1].title}</h2>
                        </div>
                        <p>{t.features.list[1].subtitle}</p>
                    </div>
                    <div className={styles.gridItem}>
                        <div>
                            <span>
                                <GiFeatheredWing />
                            </span>
                            <h2>{t.features.list[2].title}</h2>
                        </div>
                        <p>{t.features.list[2].subtitle}</p>
                    </div>
                    <div className={styles.gridItem}>
                        <div>
                            <span>
                                <FaGhost />
                            </span>
                            <h2>{t.features.list[3].title}</h2>
                        </div>
                        <p>{t.features.list[3].subtitle}</p>
                    </div>
                    <div className={styles.gridItem}>
                        <div>
                            <span>
                                <BsFillGearFill />
                            </span>
                            <h2>{t.features.list[4].title}</h2>
                        </div>
                        <p>{t.features.list[4].subtitle}</p>
                    </div>
                    <div className={styles.gridItem}>
                        <div>
                            <span>
                                <AiOutlineDropbox />
                            </span>
                            <h2>{t.features.list[5].title}</h2>
                        </div>
                        <p>{t.features.list[5].subtitle}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features
