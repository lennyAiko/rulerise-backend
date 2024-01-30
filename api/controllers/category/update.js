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
    success: {
      responseType: 'redirect',
    },
  },

  fn: async function ({ name, image }) {
    const category = await Category.updateOne({ id: this.req.params.id }).set({
      name,
      image,
    })
    const updated = true
    // All done.
    return sails.inertia.render('category/view', { category, updated })
    // return '/category'
  },
}
