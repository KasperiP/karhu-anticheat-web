import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Layout from '../components/common/Layout/Layout'
import PaymentStatus from '../components/result/PaymentStatus/PaymentStatus'
import { fetchGetJSON } from '../lib/api-helpers'

const ResultPage: NextPage = () => {
    const router = useRouter()

    // Fetch CheckoutSession from static page via
    // https://nextjs.org/docs/basic-features/data-fetching#static-generation
    const { data, error } = useSWR(
        router.query.session_id
            ? `/api/payments/${router.query.session_id}`
            : null,
        fetchGetJSON
    )

    if (error) router.push('/')

    const paymentStatus = data?.payment_intent?.status === 'succeeded'

    return (
        <>
            <Head>
                <title>Payment complete - Karhu Anticheat</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Layout>
                <PaymentStatus data={data} />
            </Layout>
        </>
    )
}

export default ResultPage
