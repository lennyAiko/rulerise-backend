module.exports = {
  friendlyName: 'View signup',

  description: 'Display "Signup" page.',

  exits: {},

  fn: async function () {
    // Respond with view.
    return sails.inertia.render('auth/signup')
  },
}
