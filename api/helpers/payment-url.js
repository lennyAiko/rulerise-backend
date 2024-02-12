require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports = {
  friendlyName: 'Payment url',

  description: '',

  inputs: {
    priceId: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {
      description: 'All done.',
    },
  },

  fn: async function (inputs) {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price: inputs.priceId,
          quantity: 1,
        },
      ],
      success_url: process.env.SUCCESS_URL,
      cancel_url: process.env.CANCEL_URL,
    })

    console.log(session)

    return session.url
  },
}
