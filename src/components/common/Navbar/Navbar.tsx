import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'
import LanguageContext from '../../../context/LanguageContext'
import styles from './Navbar.module.scss'

const Navbar = () => {
    const { locale, t } = useContext(LanguageContext)
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [languageMenu, setLanguageMenu] = useState(false)
    const router = useRouter()

    const supportedLanguages = [
        { locale: 'en', name: 'English' },
        { locale: 'fi', name: 'Suomi' },
    ]

    const handleLangChange = (locale: string) => {
        document.cookie = `NEXT_LOCALE=${locale}; expires=Thu, 18 Dec 9999 12:00:00 UTC`
        router.push(router.asPath, router.asPath, { locale: locale })
        setLanguageMenu(false)
    }

    const LangBtn = () => {
        return (
            <>
                <span className={styles.langBtn}>
                    <span onClick={() => setLanguageMenu(!languageMenu)}>
                        <p>{locale.toUpperCase()}</p>
                        <RiArrowDropDownLine />
                    </span>
                    <div
                        className={`${styles.langMenu} ${
                            languageMenu
                                ? styles.langMenuOpen
                                : styles.langMenuClosed
                        }`}
                    >
                        {supportedLanguages.map((lang) => (
                            <span
                                className={
                                    router.locale === lang.locale
                                        ? styles.active
                                        : ''
                                }
                                key={lang.locale}
                                onClick={() => handleLangChange(lang.locale)}
                            >
                                {lang.name}
                            </span>
                        ))}
                    </div>
                </span>
            </>
        )
    }

    return (
        <nav className={styles.wrapper}>
            <div className={styles.container}>
                <div>
                    <span
                        className={styles.imgContainer}
                        onClick={() => router.push('/')}
                    >
                        <Image
                            src="/logo.svg"
                            alt="KarhuAC-logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </span>
                </div>
                <div className={`${styles.desktop} ${styles.links}`}>
                    <Link href="/">{t.nav.home}</Link>
                    <Link href="/features">{t.nav.features}</Link>
                    <Link href="/#pricing">{t.nav.pricing}</Link>
                    <Link href="https://github.com/Karhu-Anticheat/KarhuAPI">
                        <a target={'_blank'}>{t.nav.developers}</a>
                    </Link>
                </div>
                <div className={`${styles.buttons} ${styles.desktop}`}>
                    <LangBtn />
                    <Link href="https://discord.gg/cMY4xKRrW4" passHref>
                        <a target="_blank">
                            <FaDiscord />
                            <p>Discord</p>
                        </a>
                    </Link>
                </div>
                <span className={styles.mobile}>
                    <LangBtn />
                    <span
                        onClick={() => {
                            setNavbarOpen(!navbarOpen)
                            setLanguageMenu(false)
                        }}
                    >
                        <AiOutlineMenu />
                    </span>
                </span>
            </div>
            <div
                className={`${styles.mobileNav} ${styles.links} ${
                    navbarOpen ? styles.mobileOpen : styles.mobileClosed
                }`}
            >
                <Link href="/">{t.nav.home}</Link>
                <Link href="/features">{t.nav.features}</Link>
                <Link href="/">{t.nav.pricing}</Link>
                <Link href="https://github.com/Karhu-Anticheat/KarhuAPI">
                    <a target={'_blank'}>{t.nav.developers}</a>
                </Link>
                <Link href="https://discord.gg/cMY4xKRrW4" passHref>
                    <a target="_blank">Discord</a>
                </Link>
                <button>{t.nav.purchase}</button>
            </div>
        </nav>
    )
}

export default Navbar
