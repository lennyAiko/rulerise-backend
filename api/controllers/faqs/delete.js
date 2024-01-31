// @ts-nocheck
module.exports = {
  friendlyName: 'Delete',

  description: 'Delete faqs.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    await Faqs.destroyOne({ id: this.req.params.id })

    // All done.
    return sails.inertia.location('/faqs')
  },
}
