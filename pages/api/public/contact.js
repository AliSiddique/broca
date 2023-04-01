const sgMail = require('@sendgrid/mail')


export default async function handler(req, res) {
    const {firstName,lastName,email,phone,message} = req.body
    sgMail.setApiKey(process.env.SENGRID_API_KEY)
    const htmlContent = `
    <h1>Hello Ali,</h1>
    <p>You have recieved an email from Broca.ai from <strong> ${firstName} ${lastName}</strong></p>
    <strong>They have said: ${message}</strong> <br/>
    <small>You can reply to them by using the email: ${email}</small>
    `
    const msg = {
        to: 'alisiddique0402@gmail.com', // Change to your recipient
        from: 'alisiddique10@hotmail.com', // Change to your verified sender
        subject: 'Message from your website',
        text: 'and easy to do anywhere, even with Node.js',
        html: htmlContent,
      }
      
    //   sgMail
    //     .send(msg)
    //     .then((response) => {
    //       console.log(response[0].statusCode)
    //       console.log(response[0].headers)
    //     })
    //     .catch((error) => {
    //       console.error(error)
    //     })
        const response = await sgMail.send(msg)
        console.log(response)

      
    res.status(200).json({ name: response })
  }
  