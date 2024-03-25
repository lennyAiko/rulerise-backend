require('dotenv').config()

// @ts-ignore
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPEENDPOINTSECRET

module.exports = {
  friendlyName: 'Webhook',

  description: 'Webhook api.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const req = this.req
    const res = this.res

    // sails.log('headers', req.headers)
    // sails.log('body', req.body)
    const rawBody = req.body.toString()

    const sig = req.headers['stripe-signature']

    let event

    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret)
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`)
      return
    }

    if (event.type === 'checkout.session.completed') {
      stripe.customers
        .retrieve(event.data.object.customer)
        .then((customer) => {
          console.log(customer)
        })
        .catch((err) => console.log(err.message))
    }

    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object
        // sails.log(paymentIntentSucceeded)
        break
      case 'payment_intent.payment_failed':
        const paymentIntentFailed = event.data.object
        // sails.log(paymentIntentFailed)
        break
      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    // All done.
    return ''
  },
}
