// @ts-nocheck
module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch testimonials.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const testimonials = await Testimonials.find({})

    // All done.
    return sails.inertia.render('testimonials/index', {
      testimonials,
    })
  },
}
