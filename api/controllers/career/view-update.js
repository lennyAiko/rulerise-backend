module.exports = {
  friendlyName: 'View career',

  description: 'Display "Career" page.',

  inputs: {},

  exits: {},

  fn: async function () {
    const _id = this.req.params.id
    // @ts-ignore
    const career = await Career.findOne({ id: _id })

    if (!career) {
      return this.res.notFound()
    }

    // Respond with view.
    return sails.inertia.render('career/view', { career })
  },
}
