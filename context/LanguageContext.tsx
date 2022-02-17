import { createContext } from 'react'
import en from '../languages/en'

type LanguageContextType = {
    locale: string
    t: typeof en
}

const LanguageContext = createContext<LanguageContextType>({
    locale: 'en',
    t: en,
})

export default LanguageContext
