import verifyStripe from '@webdeveducation/next-verify-stripe'
import Cors from 'micro-cors'
import Stripe from 'stripe'
import { getSession } from '@auth0/nextjs-auth0'
import clientPromise from '../../../lib/mongodb'
const sgMail = require('@sendgrid/mail')

// created subscription 
// renew subscription
// cancel subscription
// trial end
// invoice created
// payment failed
// payment succeeded
// payment action required

      
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
    const {user} = await getSession(req,res)
    sgMail.setApiKey(process.env.SENGRID_API_KEY)
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
            break;
            case 'customer.subscription.trial_will_end' : {
                const htmlContent = `
                <h1>Hi there ${user.name}</h1>
                <p>Your trial is about to expire</p>
                <small>The names ali</small>
                <strong>and easy to do anywhere, even with Node.js</strong>
                <p>Cheers - Ali</p>
                `
                const msg = {
                    to: `${user.email}`, // Change to your recipient
                    from: 'alisiddique10@hotmail.com', // Change to your verified sender
                    subject: 'Trial about to expire',
                    text: 'Trial about to expire',
                    html: htmlContent,
                  }
            }
            break;
            case 'invoice.created' : {
                const invoice = event.data.object
                const client  = await clientPromise
                const db = await client.db("brack")
                const userProfile = await db.collection('user').updateOne({
                    auth0Id: invoice.metadata.user
                },{
                    $set: {subscription: 'free'}
                })
            }
            break;
            case 'invoice.payment_action_required' : {
                const invoice = event.data.object
                const client  = await clientPromise
                const db = await client.db("brack")
                const userProfile = await db.collection('user').updateOne({
                    auth0Id: invoice.metadata.user
                },{
                    $set: {subscription: 'free'}
                })
            }
            break;
         
            default:
                console.log(`Unhandled event type ${event.type}`);
      }
      res.status(200).json({received: true})
        }
    }

    export default cors(handler)