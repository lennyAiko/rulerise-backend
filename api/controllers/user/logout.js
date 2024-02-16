module.exports = {
  friendlyName: 'Logout',

  description: 'Logout auth.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    sails.inertia.flushShared('loggedInUser')
    delete this.req.session.userId
    // All done.
    return sails.inertia.location('/signin')
  },
}
