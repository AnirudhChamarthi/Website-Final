const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config');



const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",  // Use the correct Mailtrap SMTP server
  port: 2525,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res) => {
  const { name, email, message } = req.body;
  const content = `name: ${name} \n email: ${email} \n message: ${message}`;
  
  const mail = {
    from: email,  // Set 'from' as a valid email address
    to: 'earnzek@gmail.com',  // Change to the email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  };
  
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err); // Log the error for debugging
      res.status(500).json({
        status: 'fail',
        error: err.message
      });
    } else {
      res.status(200).json({
        status: 'success'
      });
    }
  });
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

app.get('/', (req, res) => {
  res.send('Hello, World!');
}); 

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});