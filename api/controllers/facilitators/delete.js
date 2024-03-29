// @ts-nocheck
module.exports = {
  friendlyName: 'Delete',

  description: 'Delete facilitators.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    await Facilitators.destroyOne({ id: this.req.params.id })

    // All done.
    return sails.inertia.location('/facilitators')
  },
}
