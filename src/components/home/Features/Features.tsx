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
                <h2>{t.home_features.title}</h2>
                <p>{t.home_features.subtitle}</p>
                <div className={styles.gridContainer}>
                    <div className={styles.gridItem}>
                        <div>
                            <span>
                                <GiSwordInStone style={{ color: '#fff' }} />
                            </span>
                            <h2>{t.home_features.list[0].title}</h2>
                        </div>
                        <p>{t.home_features.list[0].subtitle}</p>
                    </div>
                    <div className={styles.gridItem}>
                        <div>
                            <span>
                                <BiSupport style={{ color: '#fff' }} />
                            </span>
                            <h2>{t.home_features.list[1].title}</h2>
                        </div>
                        <p>{t.home_features.list[1].subtitle}</p>
                    </div>
                    <div className={styles.gridItem}>
                        <div>
                            <span>
                                <GiFeatheredWing style={{ color: '#fff' }} />
                            </span>
                            <h2>{t.home_features.list[2].title}</h2>
                        </div>
                        <p>{t.home_features.list[2].subtitle}</p>
                    </div>
                    <div className={styles.gridItem}>
                        <div>
                            <span>
                                <FaGhost style={{ color: '#fff' }} />
                            </span>
                            <h2>{t.home_features.list[3].title}</h2>
                        </div>
                        <p>{t.home_features.list[3].subtitle}</p>
                    </div>
                    <div className={styles.gridItem}>
                        <div>
                            <span>
                                <BsFillGearFill style={{ color: '#fff' }} />
                            </span>
                            <h2>{t.home_features.list[4].title}</h2>
                        </div>
                        <p>{t.home_features.list[4].subtitle}</p>
                    </div>
                    <div className={styles.gridItem}>
                        <div>
                            <span>
                                <AiOutlineDropbox style={{ color: '#fff' }} />
                            </span>
                            <h2>{t.home_features.list[5].title}</h2>
                        </div>
                        <p>{t.home_features.list[5].subtitle}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features
