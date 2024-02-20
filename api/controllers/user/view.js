module.exports = {
  friendlyName: 'View',

  description: 'View user.',

  inputs: {},

  exits: {
    success: {
      responseType: 'redirect',
    },
  },

  fn: async function (inputs, exits) {
    const users = await User.find({})

    // All done.
    return sails.inertia.render('user/view', { users })
  },
}
