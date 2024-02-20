module.exports = {
  friendlyName: 'Logout',

  description: 'Logout auth.',

  inputs: {},

  exits: {
    success: {
      responseType: 'redirect',
    },
  },

  fn: async function (inputs, exits) {
    sails.inertia.flushShared('loggedInUser')
    delete this.req.session.userId
    // All done.
    return exits.success('/signin')
  },
}
