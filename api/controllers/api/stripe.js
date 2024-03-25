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
    courseTitle: {
      type: 'string',
      required: true,
    },
  },

  exits: {},

  fn: async function ({ priceId, firstName, courseTitle }) {
    // @ts-ignore
    const stripeUrl = await sails.helpers.paymentUrl(
      priceId,
      firstName,
      courseTitle
    )

    // All done.
    return { url: stripeUrl }
  },
}
