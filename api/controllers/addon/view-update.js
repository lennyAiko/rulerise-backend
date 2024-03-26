module.exports = {
  friendlyName: 'View addon',

  description: 'Display "addon" page.',

  inputs: {},

  exits: {},

  fn: async function () {
    const _id = this.req.params.id
    // @ts-ignore
    const addon = await AddOn.findOne({ id: _id })

    if (!addon) {
      return this.res.notFound()
    }

    // Respond with view.
    return sails.inertia.render('addon/view', { addon })
  },
}
