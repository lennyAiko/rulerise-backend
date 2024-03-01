module.exports = {
  friendlyName: 'Update',

  description: 'Update blog.',

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

  exits: {},

  fn: async function ({ title, summary, content, img }) {
    const readTime = await sails.helpers.getReadTime(content)
    await Articles.updateOne({ id: this.req.params.id }).set({
      title,
      summary,
      content,
      img,
      time: readTime,
    })
    // All done.
    return sails.inertia.location('/articles')
  },
}
