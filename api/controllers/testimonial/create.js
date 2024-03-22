// @ts-nocheck
module.exports = {
  friendlyName: 'Create',

  description: 'Create testimonials.',

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
    success: {
      responseType: 'redirect',
    },
  },

  fn: async function ({ name, img, description }) {
    await Testimonials.create({ name, img, description })

    // All done.
    return '/testimonials'
  },
}
