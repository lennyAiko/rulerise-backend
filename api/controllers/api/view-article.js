module.exports = {
  friendlyName: 'View',

  description: 'View api.',

  inputs: {
    id: {
      type: 'string',
      required: true,
    },
  },

  exits: {},

  fn: async function (inputs) {
    const article = await Articles.findOne({ id: inputs.id }).populate('author')

    if (!article) {
      return this.res.status(404).json({
        status: 404,
        message: 'Could not find article',
      })
    }

    // All done.
    return article
  },
}
