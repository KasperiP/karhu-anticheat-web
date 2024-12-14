import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/common/Layout/Layout'
import styles from '../styles/PrivacyPolicy.module.scss'

const PrivacyPolicy: NextPage = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy - Karhu Anticheat</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Layout>
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <h1>Privacy Policy</h1>
                        <p className={styles.intro}>
                            At <strong>Karhu.ac</strong>, we are committed to
                            protecting your privacy and complying with the
                            General Data Protection Regulation (GDPR). This
                            Privacy Policy explains what personal data we
                            collect, why we collect it, how it is processed, and
                            your rights as a user under GDPR.
                        </p>

                        <section>
                            <h2>Data We Collect and Why</h2>
                            <div className={styles.subsection}>
                                <h3>1. Hardware Identifier and IP Address</h3>
                                <ul>
                                    <li>
                                        <strong>What we collect</strong>: When
                                        you start up Karhu, we collect your
                                        hardware identifier and IP address.
                                    </li>
                                    <li>
                                        <strong>Purpose</strong>: These details
                                        are used to ensure security, monitor for
                                        unauthorized use, and detect potential
                                        misuse of our services.
                                    </li>
                                    <li>
                                        <strong>Retention</strong>: This data is
                                        securely stored for{' '}
                                        <strong>90 days</strong> after startup
                                        and automatically deleted thereafter
                                        unless required for resolving disputes
                                        or investigating misuse.
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.subsection}>
                                <h3>2. Payment Information</h3>
                                <ul>
                                    <li>
                                        <strong>What we collect</strong>:
                                        Payment information is processed through
                                        our payment provider,{' '}
                                        <strong>Stripe</strong>.
                                    </li>
                                    <li>
                                        <strong>Purpose</strong>: To process
                                        payments securely and fulfill your
                                        purchase agreement.
                                    </li>
                                    <li>
                                        <strong>Data Controller</strong>: Stripe
                                        acts as an independent data controller
                                        for payment data. Please refer to their{' '}
                                        <a
                                            href="https://stripe.com/privacy"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Privacy Policy
                                        </a>{' '}
                                        for details.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2>Lawful Basis for Processing</h2>
                            <p>
                                We process your personal data under the
                                following lawful bases:
                            </p>
                            <ul>
                                <li>
                                    <strong>Legitimate Interests</strong>: To
                                    ensure the security and proper functioning
                                    of our services by processing hardware
                                    identifiers and IP addresses.
                                </li>
                                <li>
                                    <strong>Contractual Necessity</strong>: To
                                    fulfill your purchase agreement through the
                                    processing of payment data by Stripe.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>Your GDPR Rights</h2>
                            <p>
                                As a user under GDPR, you have the following
                                rights regarding your personal data:
                            </p>
                            <ul>
                                <li>
                                    <strong>Right of Access</strong>: You can
                                    request access to the personal data we hold
                                    about you.
                                </li>
                                <li>
                                    <strong>Right to Rectification</strong>: You
                                    can request corrections to any inaccurate or
                                    incomplete data we hold.
                                </li>
                                <li>
                                    <strong>Right to Erasure</strong>: You can
                                    request the deletion of your data.
                                </li>
                                <li>
                                    <strong>
                                        Right to Restrict Processing
                                    </strong>
                                    : You can request restrictions on the
                                    processing of your data.
                                </li>
                                <li>
                                    <strong>Right to Data Portability</strong>:
                                    You can request a copy of your data in a
                                    structured format.
                                </li>
                                <li>
                                    <strong>Right to Object</strong>: You can
                                    object to the processing of your data.
                                </li>
                                <li>
                                    <strong>Right to Lodge a Complaint</strong>:
                                    You can file a complaint with your local
                                    data protection authority.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>Contact Us</h2>
                            <p>
                                For any questions, concerns, or requests related
                                to this Privacy Policy, please contact us at:
                            </p>
                            <p>
                                <strong>Email</strong>: support@karhu.ac
                            </p>
                        </section>

                        <footer className={styles.policyFooter}>
                            <p>
                                Last updated: {new Date().toLocaleDateString()}
                            </p>
                        </footer>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default PrivacyPolicy
