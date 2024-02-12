require('dotenv').config()

module.exports = {
  friendlyName: 'Stripe',

  description: 'Stripe something.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const stripeUrl = await sails.helpers.paymentUrl(process.env.PROD_PRICE)

    console.log(stripeUrl)

    // All done.
    return 'ok'
  },
}
