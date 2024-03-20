module.exports = {
  friendlyName: 'View team',

  description: 'Display "team" page.',

  inputs: {},

  exits: {},

  fn: async function () {
    const _id = this.req.params.id
    // @ts-ignore
    const team = await Teams.findOne({ id: _id })

    if (!team) {
      return this.res.notFound()
    }

    // Respond with view.
    return sails.inertia.render('teams/view', { team })
  },
}
