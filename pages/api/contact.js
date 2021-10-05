
export default function (req, res) {
    require('dotenv').config();

    let nodemailer = require('nodemailer');
    const PASSWORD = process.env.password

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'seetheworld.tosend@gmail.com',
          pass: PASSWORD,
        },
        secure: true,
    });

    const mailData = {
        from: 'seetheworld.tosend@gmail.com',
        to: 'stw2021.ceo@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: "You have received a new message!" + "Name: " + req.body.name + "E-mail: " + req.body.email + "Message: " + req.body.message,
        html: `<h1>You have received a new message!</h1>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>E-mail:</strong> ${req.body.email}</p>
        <p><strong>Message:</strong></p><p>${req.body.message}</p>`
       }

       transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })

      res.status(200).end()
  }