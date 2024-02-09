module.exports = {
  friendlyName: 'Stripe',

  description: 'Stripe something.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const stripeUrl = await sails.helpers.paymentUrl()

    console.log(stripeUrl)

    // All done.
    return 'ok'
  },
}
