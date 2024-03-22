module.exports = {
  friendlyName: 'View testimonial',

  description: 'Display "testimonial" page.',

  inputs: {},

  exits: {},

  fn: async function () {
    const _id = this.req.params.id
    // @ts-ignore
    const testimonial = await Testimonials.findOne({ id: _id })

    if (!testimonial) {
      return this.res.notFound()
    }

    // Respond with view.
    return sails.inertia.render('testimonials/view', { testimonial })
  },
}
