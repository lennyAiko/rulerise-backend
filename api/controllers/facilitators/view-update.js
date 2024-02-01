module.exports = {
  friendlyName: 'View update',

  description: 'Display "Update" page.',

  exits: {
    notFound: {
      responseType: 'notFound',
    },
  },

  fn: async function (exits) {
    const _id = this.req.params.id

    // @ts-ignore
    const facilitator = await Facilitators.findOne({ id: _id })

    if (!facilitator) {
      throw exits.notFound('Could not find facilitator')
    }

    // Respond with view.
    return sails.inertia.render('facilitators/view', { facilitator })
  },
}
