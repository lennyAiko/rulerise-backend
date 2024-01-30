// @ts-nocheck
module.exports = {
  friendlyName: 'Delete',

  description: 'Delete category.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    await Category.destroyOne({ id: this.req.params.id })
    // All done.
    const categories = await Category.find({})
    const deleted = true
    return sails.inertia.render('category', { categories, deleted })
  },
}
