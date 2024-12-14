import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/common/Layout/Layout'
import styles from '../styles/PrivacyPolicy.module.scss'

const TermsOfService: NextPage = () => {
    return (
        <>
            <Head>
                <title>Terms of Service - Karhu Anticheat</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Layout>
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <h1>Terms of Service</h1>

                        <section>
                            <h2>Refund Policy</h2>
                            <ul>
                                <li>Refunds are not self-initiated.</li>
                                <li>
                                    Refund requests are valid only within 48
                                    hours of purchase and must include a
                                    legitimate reason.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>General Guidelines</h2>
                            <ul>
                                <li>
                                    Buyers must not initiate a chargeback
                                    without first contacting support.
                                </li>
                                <li>
                                    Sharing or leaking the loader is strictly
                                    prohibited.
                                </li>
                                <li>
                                    Buyers are accountable for any misuse of the
                                    loader, including misuse by their staff.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>License Restrictions</h2>
                            <ul>
                                <li>
                                    Reselling the license is strictly forbidden.
                                </li>
                                <li>
                                    Modifying loader files is not permitted,
                                    except for configuration files.
                                </li>
                                <li>
                                    All licenses are tied to a specific Discord
                                    account.
                                </li>
                                <li>
                                    Buyers are responsible for any misuse linked
                                    to their Discord account.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>Additional Terms</h2>
                            <p>
                                The software is provided &quot;as is,&quot;
                                without any express or implied warranties,
                                including but not limited to:
                            </p>
                            <ul>
                                <li>
                                    Warranties of merchantability, fitness for a
                                    particular purpose, or non-infringement.
                                </li>
                                <li>
                                    We assume no liability for damages or
                                    claims, including but not limited to:
                                    <ul>
                                        <li>Lost profits</li>
                                        <li>Lost data</li>
                                        <li>Business interruptions</li>
                                    </ul>
                                </li>
                            </ul>

                            <div className={styles.subsection}>
                                <h3>Software Updates and Modifications</h3>
                                <ul>
                                    <li>
                                        We reserve the right to update or modify
                                        the software at any time to improve
                                        performance, security, or features.
                                    </li>
                                    <li>
                                        Updates may affect compatibility; it is
                                        the user&apos;s responsibility to ensure
                                        compatibility.
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.subsection}>
                                <h3>Detection Disclaimer</h3>
                                <ul>
                                    <li>
                                        The software&apos;s detection mechanisms
                                        are not guaranteed to identify all
                                        cheats.
                                    </li>
                                    <li>
                                        We assume no responsibility for damages
                                        caused by undetected cheats.
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.subsection}>
                                <h3>Agreement</h3>
                                <ul>
                                    <li>
                                        Purchasing or using the software
                                        constitutes agreement to these terms,
                                        even if the terms are not explicitly
                                        read.
                                    </li>
                                    <li>
                                        Buyers also agree to comply with our
                                        Discord rules as outlined in the #rules
                                        channel.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2>Violations</h2>
                            <p>
                                Violations of these terms may result in the
                                following penalties:
                            </p>
                            <ul>
                                <li>Permanent ban from our Discord server.</li>
                                <li>Permanent removal of the license.</li>
                            </ul>
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

export default TermsOfService
