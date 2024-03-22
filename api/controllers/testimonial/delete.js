// @ts-nocheck
module.exports = {
  friendlyName: 'Delete',

  description: 'Delete testimonials.',

  inputs: {},

  exits: {
    success: {},
  },

  fn: async function (inputs, exits) {
    await Testimonials.destroyOne({ id: this.req.params.id })
    // All done.

    return sails.inertia.location('/testimonials')
  },
}
