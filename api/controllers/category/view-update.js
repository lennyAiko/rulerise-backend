module.exports = {
  friendlyName: 'View category',

  description: 'Display "Category" page.',

  inputs: {},

  exits: {},

  fn: async function () {
    const _id = this.req.params.id
    // @ts-ignore
    const category = await Category.findOne({ id: _id })

    if (!category) {
      return this.res.notFound()
    }

    // Respond with view.
    return sails.inertia.render('category/view', { category })
  },
}
