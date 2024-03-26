// @ts-nocheck
module.exports = {
  friendlyName: 'Delete',

  description: 'Delete addon.',

  inputs: {},

  exits: {
    success: {},
  },

  fn: async function (inputs, exits) {
    await AddOn.destroyOne({ id: this.req.params.id })
    // All done.

    return sails.inertia.location('/addon')
  },
}
