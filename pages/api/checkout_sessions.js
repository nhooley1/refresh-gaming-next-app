const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1MOL9wEnY8it0nYFfNgr4Fad',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
        automatic_tax: { enabled: true },
      });

      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else if (req.url.startsWith('/?success')) {
    //Retrieve session from the session_id passed in query param
    const session = await stripe.checkout.sessions.retrieve(
      req.query.session_id
    );
    //you can get the customer email and name from the session.
    const { email, name } = session.customer;
    await sendConfirmationEmail({ email, name });
    res.status(200).json({ message: 'Order created and email sent' });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
