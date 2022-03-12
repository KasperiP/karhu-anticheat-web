import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/common/Layout/Layout'
import Features from '../components/home/Features/Features'
import Hero from '../components/home/Hero/Hero'
import Pricing from '../components/home/Pricing/Pricing'
import Sponsor from '../components/home/Sponsor/Sponsor'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Karhu Anticheat - Your anticheat solution for a Minecraft
                    server
                </title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Layout>
                <Hero />
                <Features />
                <Pricing />
                <Sponsor />
            </Layout>
        </>
    )
}

export default Home
