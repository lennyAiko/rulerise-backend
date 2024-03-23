require('dotenv').config()

module.exports = {
  friendlyName: 'Stripe',

  description: 'Stripe something.',

  inputs: {
    priceId: {
      type: 'string',
      required: true,
    },
  },

  exits: {},

  fn: async function (inputs) {
    const stripeUrl = await sails.helpers.paymentUrl(inputs.priceId)

    // All done.
    return stripeUrl
  },
}
