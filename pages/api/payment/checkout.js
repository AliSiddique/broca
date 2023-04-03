import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import stripeInit from 'stripe'

const stripe = stripeInit(process.env.STRIPE_SECRET_KEY)
export default withApiAuthRequired(async function handler(req, res) {
    const {user} = await getSession(req,res)
    if(!user){
        res.status(401).json({error: 'Unauthorized'})
        return
    }
    let success_url;
    let cancel_url;
    const environment = process.env.NODE_ENV 
    if(environment === 'development') {
      success_url = 'http://localhost:3000/payment/success'
      cancel_url = 'http://localhost:3000/public/pricing'
    } else {
      success_url = 'https://broca.vercel.app/payment/success'
      cancel_url = 'https://broca.vercel.app/public/pricing'
    }
    const {name,id,tokens} = req.body
    const lineItems = [{ 
        price: id,
        quantity: 1
    }
    ]
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'subscription',
        customer_email: user.email,
        success_url: success_url,
        cancel_url: cancel_url,
        subscription_data: {
            trial_settings: {end_behavior: {missing_payment_method: 'cancel'}},
            trial_period_days: 1,
          },
          payment_method_collection: 'if_required',
        metadata: {
            user: user.sub,
            name,name,
            tokens
        }

    })
   


    res.status(200).json({ session: session})
  }
)