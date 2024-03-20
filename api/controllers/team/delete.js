// @ts-nocheck
module.exports = {
  friendlyName: 'Delete',

  description: 'Delete teams.',

  inputs: {},

  exits: {
    success: {},
  },

  fn: async function (inputs, exits) {
    await Teams.destroyOne({ id: this.req.params.id })
    // All done.

    return sails.inertia.location('/teams')
  },
}
