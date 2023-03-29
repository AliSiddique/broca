const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'test@example.com', // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode)
    console.log(response[0].headers)
  })
  .catch((error) => {
    console.error(error)
  })



const accountSid = 'ACeb0ed1563fc23141dc75167b759cb037';
const authToken = 'b357e8c64327cfc13cc6ca975822683c';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
                to: '+447479865538'
    })
    .then(message => console.log(message.sid))
    .done();