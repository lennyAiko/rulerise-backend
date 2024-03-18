// @ts-nocheck
module.exports = {
  friendlyName: 'Delete',

  description: 'Delete career.',

  inputs: {},

  exits: {
    success: {},
  },

  fn: async function (inputs, exits) {
    await Career.destroyOne({ id: this.req.params.id })
    // All done.

    return sails.inertia.location('/career')
  },
}
