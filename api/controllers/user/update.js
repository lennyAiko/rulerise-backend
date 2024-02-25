module.exports = {
  friendlyName: 'Update',

  description: 'Update user.',

  inputs: {
    status: {
      type: 'string',
      required: true,
    },
  },

  exits: {},

  fn: async function ({ status }) {
    const updatedUser = await User.updateOne({ id: this.req.params.id }).set({
      status,
    })

    if (!updatedUser) {
      return this.res.notFound()
    }

    this.req.session.userStatus = updatedUser.status
    // All done.
    return sails.inertia.location('/user')
  },
}
