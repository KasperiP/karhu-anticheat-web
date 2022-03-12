import mail from '@sendgrid/mail'
import { buffer } from 'micro'
import Cors from 'micro-cors'
import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import dbConnect from '../../../lib/db/dbConnect'
import { generateLicense } from '../../../lib/generate-license'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2020-08-27',
})

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!

// Stripe requires the raw body to construct the event.
export const config = {
    api: {
        bodyParser: false,
    },
}

const cors = Cors({
    allowMethods: ['POST', 'HEAD'],
})

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const buf = await buffer(req)
        const sig = req.headers['stripe-signature']!

        let event: Stripe.Event

        try {
            event = stripe.webhooks.constructEvent(
                buf.toString(),
                sig,
                webhookSecret
            )
        } catch (err) {
            const errorMessage =
                err instanceof Error ? err.message : 'Unknown error'
            // On error, log and return the error message.
            if (err! instanceof Error) console.log(err)
            console.log(`❌ Error message: ${errorMessage}`)
            res.status(400).send(`Webhook Error: ${errorMessage}`)
            return
        }

        // Cast event data to Stripe object.
        if (event.type === 'payment_intent.succeeded') {
            const paymentIntent = event.data.object as Stripe.PaymentIntent

            await dbConnect()

            mail.setApiKey(process.env.SENDGRID_API_KEY!)

            const license = await generateLicense(5, 5)

            // prettier-ignore
            const message = `
                Hello ${paymentIntent.metadata.name} and thank you for purchasing ${paymentIntent.metadata.item}!\r\n
                Here is your license key: ${license}
                Your order ID: ${paymentIntent.metadata.order_id}.\r\n
            `

            //TODO: Discord webhook

            const data = {
                to: paymentIntent.metadata.email,
                from: 'noreply@karhu.ac',
                subject: 'Your Karhu Anticheat license key!',
                text: message,
                html: message.replace(/\r\n/g, '<br>'),
            }

            return mail.send(data)
        } else {
            console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`)
        }

        // Return a response to acknowledge receipt of the event.
        res.json({ received: true })
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}

export default cors(webhookHandler as any)
