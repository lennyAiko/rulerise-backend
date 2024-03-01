// @ts-nocheck
module.exports = {
  friendlyName: 'Create',

  description: 'Create blog.',

  inputs: {
    title: {
      type: 'string',
      required: true,
    },

    summary: {
      type: 'string',
      required: true,
    },

    content: {
      type: 'string',
      required: true,
    },

    img: {
      type: 'string',
    },
  },

  exits: {
    success: {
      responseType: 'redirect',
    },
  },

  fn: async function ({ title, summary, content, img }) {
    await Articles.create({ title, summary, content, img })

    // All done.
    return '/articles'
  },
}
