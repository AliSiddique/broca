const sgMail = require('@sendgrid/mail')


export default async function handler(req, res) {
    sgMail.setApiKey(process.env.SENGRID_API_KEY)
    const htmlContent = `
    <h1 style='color:"white"'>Hi there</h1>
    <p>How are you?</p>
    <small>The names ali</small>
    <strong>and easy to do anywhere, even with Node.js</strong>
    <p>Cheers - Ali</p>
    `
    const msg = {
        to: 'alisiddique0402@gmail.com', // Change to your recipient
        from: 'alisiddique10@hotmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: htmlContent,
        templateId:'d-5f27873c7c22461bacc30f8bb9a8c041',
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
  