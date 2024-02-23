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
    console.log(this.req.params.id, status)
    const updatedUser = await User.updateOne({ id: this.req.params.id }).set({
      status,
    })

    if (!updatedUser) {
      return this.res.notFound()
    }
    // All done.
    return sails.inertia.location('/user')
  },
}
