import Head from 'next/head'
import Layout from '../components/common/Layout/Layout'
import Checks from '../components/features/Checks/Checks'
import Hero from '../components/features/Hero/Hero'

const features = () => {
    return (
        <>
            <Head>
                <title>Features - Karhu Anticheat</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Layout>
                <Hero />
                <Checks />
            </Layout>
        </>
    )
}

export default features
