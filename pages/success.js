// import { useEffect } from 'react';
// import stripe from 'stripe';
// import { sendConfirmationEmail } from './api/email';

// const Success = (props) => {
//   useEffect(() => {
//     handleSuccess(props.session_id);
//   }, []);

//   const handleSuccess = async (session_id) => {
//     try {
//       const session = await stripe.checkout.sessions.retrieve(session_id);
//       const { email, name } = session.customer;
//       await sendConfirmationEmail({ email, name });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return <div>Thank you for your purchase!</div>;
// };

// Success.getInitialProps = async (ctx) => {
//   const { session_id } = ctx.query;
//   return { session_id };
// };

// export default Success;

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import sendConfirmationEmail from './api/email';

// const { sendConfirmationEmail } = require('./api/email');

const Success = () => {
  return <div>Thank you for your purchase!</div>;
};

export const getServerSideProps = async (ctx) => {
  try {
    const session_id = ctx.query.session_id;
    const session = await stripe.checkout.sessions.retrieve(session_id);
    console.log('this is SESSION!!!!!!!!!!!!!!');
    console.log(session);
    const { email, name } = session.customer_details;
    await sendConfirmationEmail({ email, name });
  } catch (error) {
    console.log(error);
  }
  return { props: {} };
};

export default Success;
