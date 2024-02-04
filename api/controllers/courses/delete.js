module.exports = {
  friendlyName: 'Delete',

  description: 'Delete courses.',

  inputs: {},

  exits: {
    success: {},
  },

  fn: async function (inputs) {
    // @ts-ignore
    await Courses.destroyOne({ id: this.req.params.id })
    // All done.
    return sails.inertia.location('/courses')
  },
}
