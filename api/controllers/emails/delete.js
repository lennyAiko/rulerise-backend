module.exports = {
  friendlyName: 'Delete',

  description: 'Delete emails.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    await Emails.destroyOne({ id: this.req.params.id })

    // All done.
    return sails.inertia.location('/emails')
  },
}
