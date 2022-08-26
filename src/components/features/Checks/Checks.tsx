import { useContext } from 'react'
import {
    AiFillFastForward,
    AiOutlineAim,
    AiOutlineRadarChart,
} from 'react-icons/ai'
import { BiAnalyse, BiGhost, BiMoveHorizontal, BiWater } from 'react-icons/bi'
import {
    BsArrowsMove,
    BsBarChartSteps,
    BsMouse2,
    BsQuestionDiamond,
    BsSpeedometer2,
} from 'react-icons/bs'
import {
    GiFly,
    GiGroundbreaker,
    GiSailboat,
    GiSprint,
    GiStoneBlock,
} from 'react-icons/gi'
import { HiTrendingDown } from 'react-icons/hi'
import { ImConnection } from 'react-icons/im'
import { IoMdTimer } from 'react-icons/io'
import {
    MdLooks,
    MdMotionPhotosPaused,
    MdOutlineInventory2,
} from 'react-icons/md'
import { RiRedPacketLine } from 'react-icons/ri'
import { SiPyscaffold } from 'react-icons/si'
import LanguageContext from '../../../context/LanguageContext'
import styles from './Checks.module.scss'

const Checks = () => {
    const { t } = useContext(LanguageContext)

    const checkIcons = [
        {
            name: 'Autoclicker',
            icon: <BsMouse2 />,
        },
        {
            name: 'Velocity',
            icon: <BsArrowsMove />,
        },
        {
            name: 'Reach',
            icon: <BiMoveHorizontal />,
        },
        {
            name: 'AimAssist',
            icon: <AiOutlineAim />,
        },
        {
            name: 'Killaura',
            icon: <AiOutlineRadarChart />,
        },
        {
            name: 'Hitbox',
            icon: <HiTrendingDown />,
        },
        {
            name: 'Analysis',
            icon: <BiAnalyse />,
        },
        {
            name: 'Fly',
            icon: <GiFly />,
        },
        {
            name: 'Motion',
            icon: <MdMotionPhotosPaused />,
        },
        {
            name: 'Speed',
            icon: <BsSpeedometer2 />,
        },
        {
            name: 'Omnisprint',
            icon: <GiSprint />,
        },
        {
            name: 'Inventory',
            icon: <MdOutlineInventory2 />,
        },
        {
            name: 'VehicleFly',
            icon: <GiSailboat />,
        },
        {
            name: 'Jesus',
            icon: <BiWater />,
        },
        {
            name: 'Step',
            icon: <BsBarChartSteps />,
        },
        {
            name: 'BadPackets',
            icon: <RiRedPacketLine />,
        },
        {
            name: 'Timer',
            icon: <IoMdTimer />,
        },
        {
            name: 'Ping',
            icon: <ImConnection />,
        },
        {
            name: 'Ground',
            icon: <GiGroundbreaker />,
        },
        {
            name: 'Scaffold',
            icon: <SiPyscaffold />,
        },
        {
            name: 'NoLookBreak',
            icon: <MdLooks />,
        },
        {
            name: 'BlockReach',
            icon: <GiStoneBlock />,
        },
        {
            name: 'FastBreak',
            icon: <AiFillFastForward />,
        },
        {
            name: 'GhostBreak',
            icon: <BiGhost />,
        },
    ]

    return (
        <div className={styles.wrapper}>
            <section className={styles.container}>
                <h2>{t.features_checks.name}</h2>
                <p>{t.features_checks.subtitle}</p>
                {t.features_checks.checks.map((category) => (
                    <>
                        <h2
                            key={category.category}
                            style={{ marginTop: '2rem' }}
                        >
                            {category.category}
                        </h2>
                        <div className={styles.gridContainer}>
                            {category.checks.map((check) => (
                                <div
                                    className={styles.gridItem}
                                    key={check.title}
                                >
                                    <div>
                                        <span>
                                            {checkIcons.filter(
                                                (checkIcon) =>
                                                    checkIcon.name ===
                                                    check.title
                                            )?.[0]?.icon || (
                                                <BsQuestionDiamond />
                                            )}
                                        </span>
                                        <h2>
                                            {check.title} (x{check.count})
                                        </h2>
                                    </div>
                                    <p>{check.description}</p>
                                </div>
                            ))}
                        </div>
                    </>
                ))}
            </section>
        </div>
    )
}

export default Checks
