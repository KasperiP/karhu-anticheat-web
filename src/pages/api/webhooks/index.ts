import mail from '@sendgrid/mail'
import { EmbedBuilder, WebhookClient } from 'discord.js'
import { buffer } from 'micro'
import Cors from 'micro-cors'
import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import dbConnect from '../../../lib/db/dbConnect'
import { generateLicense } from '../../../lib/generate-license'
import Customers from '../../../models/customerModel'

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
            console.log('💰 Payment succeeded')

            const paymentIntent = event.data.object as Stripe.PaymentIntent
            const charge = paymentIntent.charges.data[0]

            const userEmail = charge.billing_details.email

            const webhookClient = new WebhookClient({
                url: process.env.DISCORD_WEBHOOK_URL!,
            })

            if (!userEmail) {
                console.log('❌ No email found')
                return webhookClient.send({
                    content: 'Payment succeeded but no email found! @everyone',
                })
            }

            const embed = new EmbedBuilder()
                .setTitle('💰 Payment succeeded')
                .setColor('#00ff00')
                .setDescription(
                    `Payment for ${paymentIntent.amount / 100}€ was successful.`
                )
                .addFields([
                    {
                        name: 'Email',
                        value: userEmail,
                    },
                ])
                .setTimestamp()

            await webhookClient.send({
                embeds: [embed],
            })

            await dbConnect()

            mail.setApiKey(process.env.SENDGRID_API_KEY!)

            const license = await generateLicense(5, 5)

            // Check if price is 25€ === premium
            //const isPremium = paymentIntent.amount == 2500
            const isPremium = paymentIntent.name.toString().toLowerCase().includes("premium")

            // Create expiry date which is 7 days from now
            const expiryDate = new Date(
                new Date().getTime() + 7 * 24 * 60 * 60 * 1000
            )

            // Create new customer
            const customer = new Customers({
                email: userEmail,
                license: license,
                expiresAt: isPremium ? null : expiryDate,
                activated: false,
                hwid_list: [],
                ip_list: [],
            })

            await customer.save()

            // prettier-ignore
            const message = `
                Hello ${userEmail} and thank you for purchasing Karhu Anticheat!\r\n
                Here is your license key: ${license}
            `

            //TODO: Discord webhook

            const data = {
                to: userEmail,
                from: 'noreply@karhu.ac',
                subject: 'Your Karhu Anticheat license key!',
                text: message,
                html: message.replace(/\r\n/g, '<br>'),
            }

            try {
                await mail.send(data)
                return res.status(200).json({
                    message: 'License key sent to email',
                    email: userEmail,
                    license: license,
                })
            } catch (error) {
                console.log('Error while sending email: ', error)
            }
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
