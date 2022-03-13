import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import en from '../../languages/en'
import fi from '../../languages/fi'
import LanguageContext from '../context/LanguageContext'
import '../styles/_global.scss'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const { locale } = router
    let t: typeof en
    switch (locale) {
        case 'en':
            t = en
            break
        case 'fi':
            t = fi
            break
        default:
            t = en
    }

    return (
        <LanguageContext.Provider value={{ locale: locale || 'en', t: t }}>
            <Component {...pageProps} />
        </LanguageContext.Provider>
    )
}

export default MyApp
