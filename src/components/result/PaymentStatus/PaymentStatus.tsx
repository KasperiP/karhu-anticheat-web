import { AiFillCheckCircle } from 'react-icons/ai'
import styles from './PaymentStatus.module.scss'

//TODO: Add type
const PaymentStatus = ({ data }: any) => {
    const paymentStatus = data?.payment_intent?.status === 'succeeded'
    return (
        <div className={styles.container}>
            <h1>Payment complete</h1>
            <AiFillCheckCircle className={styles.icon} />
            <h2>Status: {paymentStatus ? 'Success' : 'loading...'}</h2>
            {paymentStatus && (
                <>
                    <p>
                        Thank you for purchasing Karhu Anticheat! Your license
                        key has been delivered to{' '}
                        <strong>{data.customer_details.email}</strong>! To
                        download Karhu you need to join our Discord and verify
                        yourself with the license key!
                    </p>
                </>
            )}
        </div>
    )
}

export default PaymentStatus
