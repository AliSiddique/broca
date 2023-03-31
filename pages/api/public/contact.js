const sgMail = require('@sendgrid/mail')


export default async function handler(req, res) {
    const {firstName,lastName,email,phone,message} = req.body
    sgMail.setApiKey(process.env.SENGRID_API_KEY)
    const htmlContent = `
    <h1 style='color:"white"'>From ${firstName} ${lastName}</h1>
    <p>from ${email}</p>
    <small>${phone}</small>
    <strong>${message}/strong>
    <p>Cheers - Ali</p>
    `
    const msg = {
        to: 'alisiddique0402@gmail.com', // Change to your recipient
        from: 'alisiddique10@hotmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
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
  