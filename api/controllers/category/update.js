// @ts-nocheck
module.exports = {
  friendlyName: 'Update',

  description: 'Update category.',

  inputs: {
    name: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {},
  },

  fn: async function ({ name, image }, exits) {
    const category = await Category.updateOne({ id: this.req.params.id }).set({
      name,
      image,
    })
    // All done.
    // return sails.inertia.render('category/view', { category, updated })
    return sails.inertia.location('/category')
  },
}
