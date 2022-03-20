import Head from 'next/head'
import Layout from '../components/common/Layout/Layout'

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
                <div
                    style={{
                        display: 'flex',
                        textAlign: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <h1 style={{ padding: '10rem 5rem' }}>
                        I dont get paid enough. Pullrequest welcome of feature
                        section :D <br />- kassq
                    </h1>
                </div>
            </Layout>
        </>
    )
}

export default features
