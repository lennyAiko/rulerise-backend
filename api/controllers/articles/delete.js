module.exports = {
  friendlyName: 'Delete',

  description: 'Delete blog.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    await Articles.destroyOne({ id: this.req.params.id })

    // All done.
    return sails.inertia.location('/category')
  },
}
