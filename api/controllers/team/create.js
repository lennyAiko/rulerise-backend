// @ts-nocheck
module.exports = {
  friendlyName: 'Create',

  description: 'Create teams.',

  inputs: {
    name: {
      type: 'string',
      required: true,
    },

    title: {
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

  fn: async function ({ name, img, title }) {
    await Teams.create({ name, img, title })

    // All done.
    return '/teams'
  },
}
