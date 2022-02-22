import type { NextPage } from 'next'
import Layout from '../components/common/Layout/Layout'
import Features from '../components/home/Features/Features'
import Hero from '../components/home/Hero/Hero'
import Pricing from '../components/home/Pricing/Pricing'
import Sponsor from '../components/home/Sponsor/Sponsor'

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
