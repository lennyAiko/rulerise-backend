require('dotenv').config()

// @ts-ignore
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports = {
  friendlyName: 'Payment url',

  description: '',

  inputs: {
    priceId: {
      type: 'string',
      required: true,
    },
    firstName: {
      type: 'string',
      required: true,
    },
    course: {
      type: 'string',
      required: true,
    },
    email: {
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
    const customer = await stripe.customers.create({
      metadata: {
        firstName: inputs.firstName,
        course: inputs.course,
        email: inputs.email,
      },
    })
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price: inputs.priceId,
          quantity: 1,
        },
      ],
      customer: customer.id,
      success_url: process.env.SUCCESS_URL,
      cancel_url: process.env.CANCEL_URL,
    })

    return session.url
  },
}
