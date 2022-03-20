// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { formatAmountForStripe } from '../../../lib/stripe/stripe-helpers'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2020-08-27',
})

const CURRENCY = 'eur'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { item } = req.body
        try {
            if (item !== 'trial' && item !== 'premium') {
                res.status(400).json({
                    error: 'Invalid item',
                })
            }

            const trial = {
                name: 'Karhu Anticheat - Trial (7 days)',
                amount: formatAmountForStripe(5, CURRENCY),
                currency: CURRENCY,
                quantity: 1,
            }

            const premium = {
                name: 'Karhu Anticheat - Premium (lifetime)',
                amount: formatAmountForStripe(25, CURRENCY),
                currency: CURRENCY,
                quantity: 1,
            }

            // Create Checkout Sessions from body params.
            const params: Stripe.Checkout.SessionCreateParams = {
                submit_type: 'pay',
                //TODO: Add correct payment methods
                payment_method_types:
                    process.env.NODE_ENV === 'development'
                        ? ['card']
                        : [
                              'card',
                              'alipay',
                              'klarna',
                              'bancontact',
                              'giropay',
                              'p24',
                              'eps',
                              'sepa_debit',
                              'ideal',
                          ],
                line_items: [item === 'trial' ? trial : premium],
                success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}`,
            }
            const checkoutSession: Stripe.Checkout.Session =
                await stripe.checkout.sessions.create(params)

            res.status(200).json(checkoutSession)
        } catch (err) {
            const errorMessage =
                err instanceof Error ? err.message : 'Internal server error'
            res.status(500).json({ statusCode: 500, message: errorMessage })
        }
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}
