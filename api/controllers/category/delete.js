// @ts-nocheck
module.exports = {
  friendlyName: 'Delete',

  description: 'Delete category.',

  inputs: {},

  exits: {
    success: {},
  },

  fn: async function (inputs, exits) {
    await Category.destroyOne({ id: this.req.params.id })
    // All done.

    return sails.inertia.location('/category')
  },
}
