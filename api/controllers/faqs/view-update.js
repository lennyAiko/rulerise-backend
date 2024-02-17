module.exports = {
  friendlyName: 'View update',

  description: 'Display "Update" page.',

  exits: {
    success: {},
  },

  fn: async function () {
    const _id = this.req.params.id

    // @ts-ignore
    const faq = await Faqs.findOne({ id: _id })

    if (!faq) {
      return this.res.notFound()
    }

    // Respond with view.
    return sails.inertia.render('faqs/view', { faq })
  },
}
