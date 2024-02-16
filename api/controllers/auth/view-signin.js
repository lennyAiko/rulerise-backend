module.exports = {
  friendlyName: 'View signin',

  description: 'Display "Signin" page.',

  exits: {
    success: {},
  },

  fn: async function () {
    // Respond with view.
    return sails.inertia.render('auth/signin')
  },
}
