require('dotenv').config()

module.exports = {
  friendlyName: 'Stripe',

  description: 'Stripe something.',

  inputs: {
    priceId: {
      type: 'string',
      required: true,
    },
    firstName: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      isEmail: true,
    },
    courseTitle: {
      type: 'string',
      required: true,
    },
  },

  exits: {},

  fn: async function ({ priceId, firstName, courseTitle, email }) {
    // @ts-ignore
    const stripeUrl = await sails.helpers.paymentUrl(
      priceId,
      firstName,
      courseTitle,
      email
    )

    // All done.
    return { url: stripeUrl }
  },
}
