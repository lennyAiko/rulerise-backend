// @ts-nocheck
module.exports = {
  friendlyName: 'Delete',

  description: 'Delete talents.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    await Talent.destroyOne({ id: this.req.params.id })

    // All done.
    return sails.inertia.location('/talent')
  },
}
