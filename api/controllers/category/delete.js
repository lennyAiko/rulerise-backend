// @ts-nocheck
module.exports = {
  friendlyName: 'Delete',

  description: 'Delete category.',

  inputs: {},

  exits: {
    success: {
      responseType: 'myRedirect',
    },
  },

  fn: async function (inputs, exits) {
    await Category.destroyOne({ id: this.req.params.id })
    // All done.
    const categories = await Category.find({})
    // return exits.success('/category')
    return sails.inertia.location('/category')
  },
}
