module.exports = {
  friendlyName: 'View create',

  description: 'Display "Create" page.',

  exits: {
    success: {},
  },

  fn: async function () {
    // Respond with view.
    return sails.inertia.render('teams/create')
  },
}
