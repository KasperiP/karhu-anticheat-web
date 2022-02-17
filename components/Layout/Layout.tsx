import { ReactNode } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
