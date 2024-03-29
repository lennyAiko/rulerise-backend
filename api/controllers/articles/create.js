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
    const readTime = await sails.helpers.getReadTime(content)
    await Articles.create({
      title,
      summary,
      content,
      img,
      time: readTime,
      author: this.req.session.userId,
    })

    // All done.
    return '/articles'
  },
}
