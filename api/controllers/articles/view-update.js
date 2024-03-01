module.exports = {
  friendlyName: 'View update',

  description: 'Display "Update" page.',

  exits: {
    success: {},
  },

  fn: async function () {
    const _id = this.req.params.id

    const article = await Articles.findOne({ id: _id })

    if (!article) {
      return this.res.notFound()
    }

    // Respond with view.
    return sails.inertia.render('articles/view', { article })
  },
}
