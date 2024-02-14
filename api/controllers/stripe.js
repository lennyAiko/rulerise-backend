require('dotenv').config()

module.exports = {
  friendlyName: 'Stripe',

  description: 'Stripe something.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const stripeUrl = await sails.helpers.paymentUrl(process.env.AGILE_SCRUM_ID)

    // All done.
    return 'ok'
  },
}
