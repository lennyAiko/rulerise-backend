module.exports = {
  friendlyName: 'View',

  description: 'View user.',

  inputs: {},

  exits: {
    success: {},
  },

  fn: async function (inputs) {
    const users = await User.find({})
    // All done.
    return sails.inertia.render('user/view', { users })
  },
}
