module.exports = {
  friendlyName: 'Create',

  description: 'Create addon.',

  inputs: {
    title: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {
      responseType: 'redirect',
    },
  },

  fn: async function ({ title }) {
    await AddOn.create({ title })

    // All done.
    return '/addon'
  },
}
