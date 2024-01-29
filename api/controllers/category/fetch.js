module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch category.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const categories = await Category.find({})

    // All done.
    return sails.inertia.render('category/index', {
      categories,
    })
  },
}
