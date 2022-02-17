import type { NextPage } from 'next'
import Features from '../components/Features/Features'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout/Layout'
import Pricing from '../components/Pricing/Pricing'
import Sponsor from '../components/Sponsor/Sponsor'

const Home: NextPage = () => {
    return (
        <Layout>
            <Hero />
            <Features />
            <Pricing />
            <Sponsor />
        </Layout>
    )
}

export default Home
