import verifyStripe from '@webdeveducation/next-verify-stripe'
import Cors from 'micro-cors'
import Stripe from 'stripe'
import { getSession } from '@auth0/nextjs-auth0'
import clientPromise from '../../../lib/mongodb'


const cors = Cors({
    allowMethods: ['POST', 'HEAD'],
})

export const config = {
    api: {
        bodyParser: false,
    },
}

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET
const handler = async (req, res) => {
    if(req.method == 'POST'){
        let event;
        try {
             event  =  await verifyStripe({
                req,
                stripe,
                endpointSecret,
            })
            console.log(event);
        } catch (err) {
            return res.status(400).send(`Webhook Error: ${err.message}`)
        }
      switch(event.type){
            case 'checkout.session.completed': {
                const session = event.data.object
                const client  = await clientPromise
                console.log(session);
                const db = await client.db("brack")
                const paymentIntent = event.data.object
                const auth0Id = paymentIntent.metadata.user
                const name = paymentIntent.metadata.name
                const userProfile = await db.collection('user').updateOne({
                        auth0Id
                },{ 
                    $inc: {tokens: 1},
                    $set:{subscription:name}
                    ,$setOnInsert: {auth0Id}
                },{upsert: true}
                )
            }
         
            default:
                console.log(`Unhandled event type ${event.type}`);
      }
      res.status(200).json({received: true})
        }
    }

    export default cors(handler)