// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// export default async function sendConfirmationEmail({ email, name }) {
//   console.log('----------------------------');
//   console.log(email, name);
//   console.log('----------------------------');

//   sgMail.sendConfirmationEmail;

//   const msg = {
//     to: email,
//     from: 'nicholashooley27@yahoo.co.uk',
//     subject: 'Order Confirmation',
//     text: `Dear ${name}, Thanks for shopping with us. Your order has been placed successfully.`,
//   };
//   const response = await sgMail.send(msg);

//   console.log(response);

//   if (response[0].statusCode === 202) {
//     console.log('email sent successfully!');
//   } else {
//     console.log('email not sent!');
//   }
// }

const AWS = require('aws-sdk');
import memoryCache from 'memory-cache';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

const ses = new AWS.SES();

export default async function sendConfirmationEmail({ email, name }) {
  const key = `email_sent_to_${email}`;
  if (memoryCache.get(key)) {
    console.log('Email has been sent before, not sending again.');
    return;
  }
  memoryCache.put(key, true, 60 * 60 * 1000); // expire after 1 hour

  const params = {
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Text: {
          Data: `Dear ${name}, Thanks for shopping with us. Your order has been placed successfully.`,
        },
      },
      Subject: {
        Data: 'Order Confirmation',
      },
    },
    Source: 'orders@refreshgaming.co.uk',
  };

  const response = await ses.sendEmail(params).promise();

  console.log(response);

  if (response.MessageId) {
    console.log('email sent successfully!');
  } else {
    console.log('email not sent!');
  }
}
