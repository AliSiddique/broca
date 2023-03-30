import { getSession } from '@auth0/nextjs-auth0'
import stripeInit from 'stripe'

const stripe = stripeInit(process.env.STRIPE_SECRET_KEY)
export default async function handler(req, res) {
    // const {user} = await getSession(req,res)

    const {name,id} = req.body
    const lineItems = [{ 
        price: id,
        quantity: 1
    }
    ]
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'subscription',
        // customer_email: user.email,
        success_url: 'http://localhost:3000/payment/success',
        cancel_url: 'http://localhost:3000/public/pricing',
        subscription_data: {
            trial_settings: {end_behavior: {missing_payment_method: 'cancel'}},
            trial_period_days: 7,
          },
          payment_method_collection: 'if_required',
        // metadata: {
        //     user: user.sub,
        //     name,name
        // }

    })
   


    res.status(200).json({ session: session})
  }
  