// @ts-nocheck
module.exports = {
  friendlyName: 'Update',

  description: 'Update testimonials.',

  inputs: {
    name: {
      type: 'string',
      required: true,
    },

    description: {
      type: 'string',
      required: true,
    },

    img: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {},
  },

  fn: async function ({ name, img, description }, exits) {
    const testimonial = await Testimonials.updateOne({
      id: this.req.params.id,
    }).set({
      name,
      img,
      description,
    })

    return sails.inertia.location('/testimonials')
  },
}
